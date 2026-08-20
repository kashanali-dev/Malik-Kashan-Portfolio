// src/app/api/contact/route.js
// Secure contact form endpoint.
// - Server-side validation & HTML escaping
// - Honeypot field to trap bots
// - Simple in-memory rate limiting per IP
// - Email delivery via Resend OR Gmail SMTP (credentials stay on the server)
// - If no email provider is configured, messages are still accepted and logged.

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5; // max submissions per IP per window
const ipHits = new Map();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "kashanalikot@gmail.com";

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => {
    switch (c) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      default:
        return "&#39;";
    }
  });
}

function isRateLimited(ip, now) {
  const hits = (ipHits.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (hits.length >= RATE_LIMIT_MAX) return true;
  hits.push(now);
  ipHits.set(ip, hits);
  // Prevent the map from growing forever.
  if (ipHits.size > 5000) ipHits.clear();
  return false;
}

async function sendViaResend({ html, subject, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [TO_EMAIL],
      reply_to: replyTo,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend returned ${res.status}`);
  }
}

async function sendViaGmail({ html, subject, replyTo, senderName }) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailAppPassword },
  });

  await transporter.sendMail({
    from: `"${senderName}" <${gmailUser}>`,
    to: TO_EMAIL,
    replyTo,
    subject,
    html,
  });
}

function hasEmailConfig() {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const placeholder = /^YOUR_/i;

  return Boolean(
    process.env.RESEND_API_KEY ||
      (gmailUser &&
        gmailAppPassword &&
        !placeholder.test(gmailAppPassword) &&
        !/^xxxx/i.test(gmailAppPassword))
  );
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request format." },
      { status: 400 }
    );
  }

  const { name, email, company, service, budget, message, website } = body;

  // Honeypot: real users never see/fill this hidden field. Bots do.
  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ ok: true, message: "Message received." });
  }

  const cleanName = typeof name === "string" ? name.trim().slice(0, 100) : "";
  const cleanEmail = typeof email === "string" ? email.trim().slice(0, 150) : "";
  const cleanCompany =
    typeof company === "string" ? company.trim().slice(0, 150) : "";
  const cleanService =
    typeof service === "string" ? service.trim().slice(0, 100) : "Not specified";
  const cleanBudget =
    typeof budget === "string" ? budget.trim().slice(0, 100) : "Not specified";
  const cleanMessage =
    typeof message === "string" ? message.trim().slice(0, 5000) : "";

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return NextResponse.json(
      { ok: false, error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(cleanEmail)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (isRateLimited(getClientIp(request), Date.now())) {
    return NextResponse.json(
      { ok: false, error: "Too many messages. Please try again later." },
      { status: 429 }
    );
  }

  const safeName = escapeHtml(cleanName);
  const safeEmail = escapeHtml(cleanEmail);
  const safeCompany = escapeHtml(cleanCompany || "N/A");
  const safeService = escapeHtml(cleanService);
  const safeBudget = escapeHtml(cleanBudget);
  const safeMessage = escapeHtml(cleanMessage).replace(/\n/g, "<br/>");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#0891b2;border-bottom:2px solid #e2e8f0;padding-bottom:12px;">
        New Project Inquiry
      </h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;color:#475569;width:140px;"><strong>Name:</strong></td><td>${safeName}</td></tr>
        <tr><td style="padding:6px 0;color:#475569;"><strong>Email:</strong></td><td>${safeEmail}</td></tr>
        <tr><td style="padding:6px 0;color:#475569;"><strong>Company:</strong></td><td>${safeCompany}</td></tr>
        <tr><td style="padding:6px 0;color:#475569;"><strong>Service:</strong></td><td>${safeService}</td></tr>
        <tr><td style="padding:6px 0;color:#475569;"><strong>Budget:</strong></td><td>${safeBudget}</td></tr>
      </table>
      <p style="font-size:14px;color:#475569;margin-top:16px;"><strong>Message:</strong></p>
      <blockquote style="margin:0;padding:16px;background:#f6f8fb;border-left:4px solid #0891b2;border-radius:8px;font-size:14px;color:#0f172a;">${safeMessage}</blockquote>
      <p style="font-size:12px;color:#94a3b8;margin-top:20px;">Sent from the Malik Kashan portfolio contact form.</p>
    </div>
  `;

  const subject = `New Project Inquiry from ${cleanName}`;

  // No email provider configured yet — tell the client so it can fall back to
  // EmailJS. (Configure real GMAIL/RESEND credentials in .env for server-side
  // delivery with the fully formatted email below.)
  if (!hasEmailConfig()) {
    console.warn(
      "[contact-form] No email provider configured. Message logged instead of emailed:\n" +
        `Name: ${cleanName} | Email: ${cleanEmail} | Service: ${cleanService} | Budget: ${cleanBudget}\nMessage: ${cleanMessage}`
    );
    return NextResponse.json(
      {
        ok: false,
        providerMissing: true,
        error: "Email service not configured.",
      },
      { status: 501 }
    );
  }

  try {
    if (process.env.RESEND_API_KEY) {
      await sendViaResend({ html, subject, replyTo: cleanEmail });
    } else {
      await sendViaGmail({
        html,
        subject,
        replyTo: cleanEmail,
        senderName: cleanName,
      });
    }

    return NextResponse.json({ ok: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Contact form: send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Message could not be sent. Please try again." },
      { status: 500 }
    );
  }
}
"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE, whatsappLink } from "../lib/site";

const emailjsConfig = {
  serviceId:
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_w1gazqm",
  templateId:
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_77bftpf",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "tCIYv0U2b-QyoNWgq",
};

const emailjsEnabled =
  emailjsConfig.serviceId &&
  emailjsConfig.templateId &&
  emailjsConfig.publicKey &&
  !emailjsConfig.publicKey.startsWith("YOUR_");

export default function Contact({ showHeader = true }) {
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    website: "",
  });
  const formRef = useRef(null);

  const viewOptions = { once: true, margin: "-40px" };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const resetForm = () =>
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      message: "",
      website: "",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const params = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      service: formData.service,
      budget: formData.budget,
      message: formData.message,
      website: formData.website,
    };

    try {
      if (emailjsEnabled) {
        // Primary: EmailJS with explicit template params from state.
        // Passes every field by name so the email template ({{name}},
        // {{email}}, {{company}}, {{service}}, {{budget}}, {{message}})
        // always receives the actual values.
        const emailjs = await import("@emailjs/browser");
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          params,
          { publicKey: emailjsConfig.publicKey }
        );
        setStatus("success");
        resetForm();
      } else {
        // Fallback: server API route (needs real Gmail/Resend credentials).
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(params),
        });

        const data = await res.json();

        if (data.ok) {
          setStatus("success");
          resetForm();
        } else {
          setStatus("error");
        }
      }
    } catch (err) {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 lg:py-16 bg-brandBg overflow-hidden w-full clear-both border-t border-brandLine scroll-mt-28"
      aria-labelledby="contact-heading"
    >
      {/* Grid Mesh Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-size-[3rem_3rem] sm:bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-48 bg-brandPrimary/10 blur-[100px] pointer-events-none -z-10 transform-gpu"
        aria-hidden="true"
      />

      {/* Top Accent Line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-brandPrimary/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* COMPACT SECTION HEADER */}
        {showHeader && (
          <div className="flex flex-col mb-8 sm:mb-12 text-center items-center">
            <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-brandPrimary/10 border border-brandPrimary/20 text-[10px] sm:text-xs font-mono tracking-widest text-brandPrimary uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary" />
              Get In Touch
            </span>

            <h2
              id="contact-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brandInk leading-tight uppercase tracking-tight"
            >
              Connect With <br className="sm:hidden" />
              <span className="text-brandPrimary">Me</span>
            </h2>
          </div>
        )}

        {/* RESPONSIVE LAYOUT MATRIX GRID SYSTEM */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewOptions}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full items-stretch"
        >
          {/* LEFT CONTAINER: BRIEF CARD */}
          <motion.div variants={itemVariants} className="w-full flex">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-brandLine transition-all duration-300 shadow-lg flex flex-col justify-between w-full hover:border-brandPrimary/25">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-brandInk tracking-wide mb-2.5">
                  Let&apos;s start a project together
                </h3>
                <p className="text-brandMuted text-xs sm:text-[13px] leading-relaxed font-light mb-6">
                  Aapke paas koi amazing idea hai ya website ko revamp karna
                  chahte hain? Drop a message, aur hum milkar ek sleek, high-end
                  digital ecosystem build karenge.
                </p>

                {/* Contact Media Anchors */}
                <div className="space-y-3.5">
                  <a
                    href={`mailto:${SITE.email}`}
                    aria-label={`Send an email to ${SITE.name}`}
                    className="group flex items-center gap-3.5 p-3 rounded-xl bg-brandSoft border border-brandLine hover:border-brandPrimary/30 hover:bg-brandPrimary/5 transition-all duration-300"
                  >
                    <div
                      className="w-8 h-8 rounded-lg bg-brandPrimary/10 flex items-center justify-center text-brandPrimary group-hover:bg-brandPrimary/15 transition-colors"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-brandMuted/60 block">
                        Email Me
                      </span>
                      <span className="text-xs sm:text-sm text-brandInk font-light group-hover:text-brandPrimary transition-colors">
                        {SITE.email}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`tel:${SITE.phoneIntl}`}
                    aria-label={`Call ${SITE.name} at ${SITE.phoneDisplay}`}
                    className="group flex items-center gap-3.5 p-3 rounded-xl bg-brandSoft border border-brandLine hover:border-brandPrimary/30 hover:bg-brandPrimary/5 transition-all duration-300"
                  >
                    <div
                      className="w-8 h-8 rounded-lg bg-brandPrimary/10 flex items-center justify-center text-brandPrimary font-mono font-bold group-hover:bg-brandPrimary/15 transition-colors"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-brandMuted/60 block">
                        Call Me
                      </span>
                      <span className="text-xs sm:text-sm text-brandInk font-light group-hover:text-brandPrimary transition-colors">
                        {SITE.phoneDisplay}
                      </span>
                    </div>
                  </a>

                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat with ${SITE.name} on WhatsApp at ${SITE.phoneDisplay}`}
                    className="group flex items-center gap-3.5 p-3 rounded-xl bg-brandSoft border border-brandLine hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all duration-300"
                  >
                    <div
                      className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366]/15 transition-colors"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-brandMuted/60 block">
                        WhatsApp Me
                      </span>
                      <span className="text-xs sm:text-sm text-brandInk font-light group-hover:text-[#25D366] transition-colors">
                        {SITE.phoneDisplay}
                      </span>
                    </div>
                  </a>

                  <a
                    href={SITE.location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${SITE.location.label} on Google Maps`}
                    className="group flex items-center gap-3.5 p-3 rounded-xl bg-brandSoft border border-brandLine hover:border-brandPrimary/30 hover:bg-brandPrimary/5 transition-all duration-300"
                  >
                    <div
                      className="w-8 h-8 rounded-lg bg-brandPrimary/10 flex items-center justify-center text-brandPrimary group-hover:bg-brandPrimary/15 transition-colors"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-brandMuted/60 block">
                        Location
                      </span>
                      <span className="text-xs sm:text-sm text-brandInk font-light group-hover:text-brandPrimary transition-colors">
                        {SITE.location.label}
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Channels Line */}
              <div className="flex flex-wrap items-center gap-2.5 mt-6 pt-5 border-t border-brandLine">
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                  className="inline-flex items-center gap-1.5 text-[10px] text-brandMuted hover:text-brandPrimary transition-colors uppercase tracking-wider bg-brandSoft py-1.5 px-2.5 rounded-lg border border-brandLine hover:border-brandPrimary/30"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.08 3.29 9.4 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.66.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.68.8.56A10.5 10.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Malik Kashan on WhatsApp"
                  className="inline-flex items-center gap-1.5 text-[10px] text-brandMuted hover:text-[#25D366] transition-colors uppercase tracking-wider bg-brandSoft py-1.5 px-2.5 rounded-lg border border-brandLine hover:border-[#25D366]/40"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  aria-label="Send an email to Malik Kashan"
                  className="inline-flex items-center gap-1.5 text-[10px] text-brandMuted hover:text-brandPrimary transition-colors uppercase tracking-wider bg-brandSoft py-1.5 px-2.5 rounded-lg border border-brandLine hover:border-brandPrimary/30"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTAINER: DYNAMIC INPUT FORM */}
          <motion.div variants={itemVariants} className="w-full flex">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-brandLine shadow-lg flex flex-col justify-between w-full gap-4 hover:border-brandPrimary/25"
            >
              {/* Honeypot: hidden from real users, traps spam bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Frame */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact-name"
                    className="text-[9px] uppercase tracking-widest text-brandMuted"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    disabled={status === "sending"}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full bg-brandSoft text-brandInk font-light text-xs sm:text-sm p-3 rounded-xl border border-brandLine focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary placeholder-brandMuted/30 transition-all duration-200 disabled:opacity-50"
                  />
                </div>

                {/* Email Frame */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact-email"
                    className="text-[9px] uppercase tracking-widest text-brandMuted"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    disabled={status === "sending"}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="user@example.com"
                    className="w-full bg-brandSoft text-brandInk font-light text-xs sm:text-sm p-3 rounded-xl border border-brandLine focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary placeholder-brandMuted/30 transition-all duration-200 disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Company Field */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="contact-company"
                  className="text-[9px] uppercase tracking-widest text-brandMuted"
                >
                  Company Name
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  disabled={status === "sending"}
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Enter your Company Name"
                  className="w-full bg-brandSoft text-brandInk font-light text-xs sm:text-sm p-3 rounded-xl border border-brandLine focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary placeholder-brandMuted/30 transition-all duration-200 disabled:opacity-50"
                />
              </div>

              {/* Service + Budget Selects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Service Field */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact-service"
                    className="text-[9px] uppercase tracking-widest text-brandMuted"
                  >
                    Service Needed
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    disabled={status === "sending"}
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-brandSoft text-brandInk font-light text-xs sm:text-sm p-3 rounded-xl border border-brandLine focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary transition-all duration-200 disabled:opacity-50 appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="WordPress Development">WordPress Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Custom Software">Custom Software</option>
                  </select>
                </div>

                {/* Budget Field */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact-budget"
                    className="text-[9px] uppercase tracking-widest text-brandMuted"
                  >
                    Project Budget
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    required
                    disabled={status === "sending"}
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full bg-brandSoft text-brandInk font-light text-xs sm:text-sm p-3 rounded-xl border border-brandLine focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary transition-all duration-200 disabled:opacity-50 appearance-none cursor-pointer"
                  >
                    <option value="">Select a budget range</option>
                    <option value="Under $1,000">Under $1,000</option>
                    <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                    <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                    <option value="$5,000+">$5,000+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>

              {/* Message Frame */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="contact-message"
                  className="text-[9px] uppercase tracking-widest text-brandMuted"
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="3"
                  required
                  disabled={status === "sending"}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="w-full bg-brandSoft text-brandInk font-light text-xs sm:text-sm p-3 rounded-xl border border-brandLine focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary placeholder-brandMuted/30 transition-all duration-200 resize-none grow disabled:opacity-50"
                />
              </div>

              {/* Status Feedbacks Overlay */}
              <div className="relative min-h-5 flex items-center justify-start text-[11px] font-mono tracking-wide">
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-emerald-600 font-medium"
                    >
                      ✓ Message sent successfully! Let&apos;s talk soon.
                    </motion.span>
                  )}
                  {status === "error" && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-red-500 font-medium"
                    >
                      ✕ Processing failed. Please try again later.
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Submission Action Button */}
              <button
                type="submit"
                disabled={status !== "idle"}
                className="w-full py-3 px-6 rounded-xl text-xs font-bold font-mono uppercase tracking-widest bg-brandPrimary text-white hover:bg-brandSecondary transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(8,145,178,0.3)] disabled:opacity-40 disabled:cursor-not-allowed transform-gpu active:scale-[0.98]"
              >
                {status === "idle" && "Send Message ↗"}
                {status === "sending" && "Transmitting..."}
                {status === "success" && "Message Sent"}
                {status === "error" && "Error Occurred"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

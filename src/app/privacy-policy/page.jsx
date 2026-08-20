// src/app/privacy-policy/page.jsx
import PageHeader from "../Components/PageHeader";
import { SITE } from "../lib/site";

export const metadata = {
  title: "Privacy Policy | Malik Kashan",
  description:
    "Privacy Policy for Malik Kashan's portfolio website. Learn how your personal information is collected, used and protected when you use this site.",
  alternates: {
    canonical: `${SITE.url}privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | Malik Kashan",
    description: "How Malik Kashan's portfolio website collects, uses and protects your data.",
    url: `${SITE.url}privacy-policy`,
    type: "website",
  },
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "When you use the contact form on this website, we collect the information you voluntarily provide, including your name, email address, company name and message content.",
      "We do not automatically collect personal information such as your name or email unless you choose to share it with us through the contact form.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "The information you submit through the contact form is used solely to respond to your inquiry, discuss potential projects, and provide you with the services you request.",
      "We do not sell, rent, or trade your personal information to third parties for marketing purposes.",
    ],
  },
  {
    title: "3. Email Communications",
    body: [
      "When you submit the contact form, your message is delivered to kashanalikot@gmail.com so that we can reply to you directly.",
      "We will only contact you in response to your inquiry or about work you have explicitly requested. We do not send unsolicited marketing emails.",
    ],
  },
  {
    title: "4. Data Security",
    body: [
      "We take reasonable technical and organisational measures to protect your information against unauthorised access, loss, or misuse.",
      "Contact form submissions are processed over a secure HTTPS connection, and form data is validated and sanitised on the server before delivery.",
    ],
  },
  {
    title: "5. Cookies and Analytics",
    body: [
      "This website does not currently use cookies or third-party analytics trackers. If analytics or cookies are added in the future, this policy will be updated to explain exactly what is collected and how.",
      "You can disable cookies in your browser settings at any time without affecting your ability to browse this site.",
    ],
  },
  {
    title: "6. External Links",
    body: [
      "This website contains links to external websites, including GitHub, WhatsApp and email clients. We are not responsible for the privacy practices of those external sites and encourage you to review their policies.",
    ],
  },
  {
    title: "7. Your Rights",
    body: [
      "You have the right to request access to, correction of, or deletion of any personal information you have shared with us. To exercise these rights, contact us using the details below.",
    ],
  },
  {
    title: "8. Contact",
    body: [
      `If you have any questions about this Privacy Policy, you can reach out via email at ${SITE.email} or WhatsApp at ${SITE.phoneDisplay}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="Privacy"
        highlight="Policy"
        description="This Privacy Policy explains how information you share with us is collected, used, and protected when you visit this website."
      />

      <main className="relative bg-white pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 pt-4">
            <p className="text-sm sm:text-base text-brandMuted leading-relaxed font-light">
              Last updated: August 2026. This policy applies to the website located at{" "}
              <span className="text-brandInk font-medium">{SITE.url}</span>.
            </p>

            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-base sm:text-xl font-bold text-brandInk uppercase tracking-wide mb-3">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.body.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-sm sm:text-[15px] text-brandMuted leading-relaxed font-light"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
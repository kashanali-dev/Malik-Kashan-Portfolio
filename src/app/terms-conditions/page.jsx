// src/app/terms-conditions/page.jsx
import PageHeader from "../Components/PageHeader";
import { SITE } from "../lib/site";

export const metadata = {
  title: "Terms & Conditions | Malik Kashan",
  description:
    "Terms and Conditions for using Malik Kashan's portfolio website and services. Please read these terms carefully before using this site.",
  alternates: {
    canonical: `${SITE.url}terms-conditions`,
  },
  openGraph: {
    title: "Terms & Conditions | Malik Kashan",
    description: "Terms and conditions governing the use of Malik Kashan's portfolio website and services.",
    url: `${SITE.url}terms-conditions`,
    type: "website",
  },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using this website, you agree to be bound by these Terms & Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, please do not use this website.",
    ],
  },
  {
    title: "2. Use of the Website",
    body: [
      "This website is provided for informational purposes, to showcase the portfolio and services of Malik Kashan. You may use the site for personal, non-commercial browsing and to make legitimate inquiries about services.",
      "You agree not to misuse this website, including attempting to gain unauthorised access to the site, its servers, or any systems connected to it.",
    ],
  },
  {
    title: "3. Intellectual Property",
    body: [
      "All content on this website — including text, graphics, logos, project images and code samples — is the property of Malik Kashan unless otherwise stated and is protected by applicable intellectual property laws.",
      "You may not reproduce, distribute, or republish any content from this website without prior written permission.",
    ],
  },
  {
    title: "4. Portfolio Projects",
    body: [
      "Projects displayed on this website are representative of work completed by Malik Kashan. Project previews and live demos may be hosted on third-party platforms and are subject to their respective terms.",
      "Some project images are shown for demonstration purposes and may belong to their respective clients.",
    ],
  },
  {
    title: "5. Contact Form and Inquiries",
    body: [
      "By submitting the contact form, you agree that the information you provide is accurate and that you consent to being contacted in response to your inquiry.",
      "Submitting the contact form does not create a contractual or professional relationship until a formal agreement is signed by both parties.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    body: [
      "This website is provided on an 'as is' and 'as available' basis without warranties of any kind, whether express or implied.",
      "To the fullest extent permitted by law, Malik Kashan shall not be liable for any damages arising from the use of, or inability to use, this website.",
    ],
  },
  {
    title: "7. External Links",
    body: [
      "This website may contain links to third-party websites. We do not endorse or assume any responsibility for the content, products, or services of third-party sites.",
    ],
  },
  {
    title: "8. Changes to These Terms",
    body: [
      "We may update these Terms & Conditions from time to time. Any changes will be posted on this page with an updated revision date.",
    ],
  },
  {
    title: "9. Contact",
    body: [
      `If you have any questions about these Terms & Conditions, please contact us at ${SITE.email} or ${SITE.phoneDisplay}.`,
    ],
  },
];

export default function TermsConditionsPage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="Terms &"
        highlight="Conditions"
        description="The terms and conditions governing your use of this website and the services offered by Malik Kashan."
      />

      <main className="relative bg-white pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 pt-4">
            <p className="text-sm sm:text-base text-brandMuted leading-relaxed font-light">
              Last updated: August 2026. These terms apply to the website located at{" "}
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
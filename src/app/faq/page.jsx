// src/app/faq/page.jsx
import PageHeader from "../Components/PageHeader";
import { SITE, whatsappLink } from "../lib/site";

export const metadata = {
  title: "FAQ | Frequently Asked Questions - Malik Kashan",
  description:
    "Answers to common questions about hiring Malik Kashan for frontend development, WordPress websites, project timelines, pricing and the development process.",
  alternates: {
    canonical: `${SITE.url}faq`,
  },
  openGraph: {
    title: "FAQ | Frequently Asked Questions - Malik Kashan",
    description:
      "Get answers about services, pricing, timelines and the development process before hiring Malik Kashan.",
    url: `${SITE.url}faq`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Frequently Asked Questions - Malik Kashan",
    description:
      "Get answers about services, pricing, timelines and the development process before hiring Malik Kashan.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I build custom, high-performance websites and web applications with Next.js and React, develop WordPress and WooCommerce sites, design UI/UX interfaces, optimize website performance, and provide ongoing maintenance. You can see the full breakdown on the Services page.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A standard business website usually takes 2 to 4 weeks. Larger applications, custom dashboards and e-commerce builds can take 6 to 10 weeks depending on scope. I always share a clear timeline after we define the project requirements together.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on the scope: the number of pages, custom functionality, integrations and design complexity. I give transparent, fixed quotes after a short discovery call, so you always know the exact cost before we start. There are no hidden fees.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. I work with clients around the world from my base in Lahore, Pakistan. Communication happens over email, WhatsApp or video calls, and I follow your time zone so handovers and updates are smooth.",
  },
  {
    question: "What is your development process?",
    answer:
      "It starts with discovery to understand your goals, followed by design mockups, then clean, scalable development, and finally launch with testing and support. You get regular progress updates and review checkpoints at every stage.",
  },
  {
    question: "Do you provide website maintenance after launch?",
    answer:
      "Yes. I offer maintenance retainers covering security updates, backups, performance monitoring and small content changes, so your website stays fast, safe and up to date.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. I audit your current site, identify what is holding it back — speed, SEO, layout or user experience — and rebuild it into a modern, high-performance version without losing your content or rankings.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "My core stack is Next.js, React, Tailwind CSS and TypeScript, with Node.js and REST APIs for backend work. On WordPress I work with custom themes, Elementor and WooCommerce. I also use Framer Motion, Figma and Vercel.",
  },
  {
    question: "How do we communicate during the project?",
    answer:
      "We agree on a communication channel at the start — email, WhatsApp or a shared project board. I share progress updates regularly and you can always reach me directly with questions.",
  },
  {
    question: "Do you provide revisions after launch?",
    answer:
      "Every project includes a revision round during development so we polish everything before launch. After launch I also remain available for a short support window to fix anything that comes up.",
  },
  {
    question: "What is the difference between front-end and back-end development?",
    answer:
      "Front-end development is everything users see and interact with — layout, design, animations, forms and responsiveness — built with HTML, CSS and JavaScript (often React or Next.js). Back-end development handles the server side: databases, APIs, authentication and business logic. I specialise in front-end development, and I integrate cleanly with any back-end team or existing API.",
  },
  {
    question: "Which is better for SEO: Next.js or WordPress?",
    answer:
      "Both can rank well, but they suit different goals. Next.js serves pre-rendered HTML, which gives excellent speed and search visibility, and is ideal for custom, modern web applications. WordPress is easier for non-technical editors to manage content themselves. For most new custom builds, I recommend Next.js; for content-heavy sites your team needs to update frequently, WordPress is a strong choice.",
  },
];

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        badge="FAQ"
        title="Frequently Asked"
        highlight="Questions"
        description="Quick answers to the questions I hear most from clients. Still unsure about something? Just send me a message and I will reply within 24 hours."
      />

      <main className="relative bg-white pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 pt-4">
            {faqs.map((item, idx) => (
              <details
                key={item.question}
                className="group rounded-2xl bg-brandBg border border-brandLine transition-all duration-300 hover:border-brandPrimary/30 open:bg-white open:shadow-[0_8px_20px_-12px_rgba(15,23,42,0.1)]"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 sm:p-6">
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-brandPrimary font-medium tracking-widest">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-sm sm:text-base font-medium text-brandInk uppercase tracking-wide group-open:text-brandPrimary transition-colors duration-200">
                      {item.question}
                    </h2>
                  </span>
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-full bg-white border border-brandLine text-brandPrimary transition-transform duration-300 group-open:rotate-45 shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-14 sm:pl-15">
                  <p className="text-brandMuted text-sm sm:text-[15px] leading-relaxed font-light">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <section className="mt-12 sm:mt-16 rounded-3xl bg-brandPrimary/5 border border-brandPrimary/20 p-8 sm:p-10 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-brandInk uppercase tracking-tight mb-3">
              Still have <span className="text-brandPrimary">questions?</span>
            </h2>
            <p className="text-brandMuted text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto mb-8">
              Ask me anything about your project — no obligation. I will give you an honest answer and a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-brandPrimary text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-brandPrimary/20 hover:bg-brandSecondary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Ask a Question
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-brandInk text-xs font-bold uppercase tracking-widest rounded-xl border border-brandLine hover:border-[#25D366]/50 hover:text-[#25D366] transition-all duration-300"
              >
                Chat on WhatsApp
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
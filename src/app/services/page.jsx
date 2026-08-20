// src/app/services/page.jsx
import Link from "next/link";
import PageHeader from "../Components/PageHeader";
import { SITE, whatsappLink } from "../lib/site";

export const metadata = {
  title:
    "Front-End Development Services in Pakistan, Lahore, Karachi & Islamabad | Malik Kashan",
  description:
    "Hire a top front-end developer for front-end development services in Pakistan, Lahore, Karachi and Islamabad. Custom Next.js & React web applications, WordPress, UI/UX design and performance optimization by Malik Kashan.",
  keywords: [
    "front-end development services in pakistan",
    "front-end development services in lahore",
    "front-end development services in karachi",
    "front-end development services in islamabad",
    "front-end development services in world",
    "website developer for hire",
    "front end developer",
  ],
  alternates: {
    canonical: `${SITE.url}services`,
  },
  openGraph: {
    title: "Front-End Development Services in Pakistan | Malik Kashan",
    description:
      "Hire Malik Kashan for custom Next.js/React web apps, WordPress development, UI/UX design and performance optimization in Lahore, Karachi, Islamabad and worldwide.",
    url: `${SITE.url}services`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Front-End Development Services in Pakistan | Malik Kashan",
    description:
      "Custom Next.js/React web apps, WordPress, UI/UX design and performance optimization by Malik Kashan.",
    images: ["/og-image.png"],
  },
};

const services = [
  {
    title: "Custom Web Development",
    desc: "Modern, responsive and high-performance business websites and web apps built with Next.js and React for speed and conversions.",
    features: ["Next.js / React.js", "REST API integration", "SEO-ready architecture", "Responsive layouts"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M10 7l-3 3 3 3M14 7l3 3-3 3" />
      </svg>
    ),
  },
  {
    title: "WordPress Development",
    desc: "Custom WordPress websites, Elementor landing pages and secure WooCommerce online stores tailored to your business.",
    features: ["WordPress & WooCommerce", "Elementor Pro", "Speed optimization", "Easy content management"],
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.158 12.786l-2.698 7.83c2.347.606 4.81.258 6.9-.982-.3-.045-.584-.075-.824-.075-1.11 0-2.13.345-3.378.773zm-8.242-4.14c0 4.103 2.502 7.625 6.07 9.123L6.34 7.662c-.255.765-.424 1.41-.424 1.983zm15.112-.66c0-1.125-.405-1.905-.75-2.52-.45-.75-.87-1.395-.87-2.145 0-.84.645-1.62 1.545-1.62.09 0 .165.015.255.015A9.914 9.914 0 0012 2C6.48 2 2 6.48 2 12c0 1.92.54 3.705 1.47 5.235l5.22-15.135c.495-.12.945-.12 1.44-.12.435 0 .84.015 1.23.06L7.811 12.87l3.24 9.09A9.972 9.972 0 0022 12c0-1.485-.33-2.925-.915-4.215-.225.135-.42.24-.555.24-.615 0-1.05-.345-1.65-.9zm.222 4.11c.015.39.03.78.03 1.14 0 1.83-.54 3.885-1.425 5.925l-2.31-6.735c1.02-.27 2.055-.54 3.195-.54.18 0 .345.03.51.21z" />
      </svg>
    ),
  },
  {
    title: "React.js Applications",
    desc: "Interactive React applications with reusable components, modern state management and exceptional UI/UX design.",
    features: ["SPA architecture", "State management", "Component libraries", "Micro-animations"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    desc: "Pixel-perfect interfaces and design systems that turn complex requirements into clean, intuitive user experiences.",
    features: ["Wireframes & mockups", "Design systems", "Figma collaboration", "Prototyping"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: "Performance Optimization",
    desc: "Core Web Vitals tuning, lazy loading and code-splitting to make your website load faster and rank higher on Google.",
    features: ["Core Web Vitals", "Lighthouse 95+ scores", "Image optimization", "Caching strategies"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Website Maintenance",
    desc: "Ongoing updates, security hardening, backups and feature additions so your website stays fast, safe and current.",
    features: ["Security patches", "Regular backups", "Content updates", "24/7 monitoring"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We discuss your goals, audience and requirements to define the perfect scope." },
  { step: "02", title: "Design", desc: "Wireframes and pixel-perfect UI mockups crafted around your brand identity." },
  { step: "03", title: "Development", desc: "Clean, scalable code built with modern stacks and best practices." },
  { step: "04", title: "Launch & Support", desc: "Deployment, testing and ongoing support to keep everything running smoothly." },
];

export default function ServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Malik Kashan — Front-End & Web Development",
    url: `${SITE.url}services`,
    image: `${SITE.url}/og-image.png`,
    description:
      "Front-end development services in Pakistan: custom Next.js and React web applications, WordPress development, UI/UX design and performance optimization.",
    founder: {
      "@type": "Person",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: ["Pakistan", "Lahore", "Karachi", "Islamabad", "Worldwide"],
    priceRange: "$$",
    knowsAbout: [
      "Front-End Development",
      "Next.js Development",
      "React.js Development",
      "WordPress Development",
      "UI/UX Design",
      "Performance Optimization",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.desc,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHeader
        badge="Services"
        title="What I"
        highlight="Offer"
        description="End-to-end web services that help businesses look professional, perform faster and convert more visitors into customers."
      />

      <main className="relative bg-brandBg pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {services.map((service, idx) => (
              <article
                key={idx}
                className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-brandLine shadow-sm flex flex-col justify-between w-full transition-all duration-300 hover:-translate-y-2 hover:border-brandPrimary/30 hover:shadow-[0_14px_28px_-12px_rgba(15,23,42,0.1)]"
              >
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 bg-brandPrimary transition-all duration-300 group-hover:w-[45%]"
                  aria-hidden="true"
                />
                <div className="w-12 h-12 rounded-[14px] bg-brandPrimary/5 border border-brandPrimary/15 flex items-center justify-center mb-6 text-brandPrimary transition-all duration-300 group-hover:scale-110 group-hover:bg-brandPrimary/15">
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-brandInk uppercase tracking-wide mb-3 group-hover:text-brandPrimary transition-colors">
                  {service.title}
                </h3>
                <p className="text-brandMuted text-xs sm:text-sm leading-relaxed font-light mb-6">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-[11px] sm:text-xs text-brandMuted"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary/40" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          {/* Process Steps */}
          <section className="mt-16 sm:mt-20">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-brandPrimary/10 border border-brandPrimary/20 text-[10px] sm:text-xs font-mono tracking-widest text-brandPrimary uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary" />
                How I Work
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-brandInk leading-tight uppercase tracking-tight">
                Simple Process, <span className="text-brandPrimary">Premium Results</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="p-6 sm:p-8 rounded-2xl bg-white border border-brandLine shadow-sm"
                >
                  <span className="text-3xl sm:text-4xl font-black font-mono text-brandPrimary/15">
                    {item.step}
                  </span>
                  <h3 className="text-sm font-bold text-brandInk uppercase tracking-wide mt-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brandMuted text-xs leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 sm:mt-20 rounded-3xl bg-white border border-brandLine p-8 sm:p-12 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brandInk uppercase tracking-tight mb-3">
              Need a <span className="text-brandPrimary">Custom Solution?</span>
            </h2>
            <p className="text-brandMuted text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto mb-8">
              Tell me about your project and get a free consultation. I&apos;ll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-brandPrimary text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-brandPrimary/20 hover:bg-brandSecondary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Get a Quote
              </Link>
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
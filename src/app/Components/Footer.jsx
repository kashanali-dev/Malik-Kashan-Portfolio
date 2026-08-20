"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE, whatsappLink } from "../lib/site";
import Logo from "./Logo";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  {
    name: "Custom Web Development",
    href: "/blog/custom-web-development",
  },
  {
    name: "WordPress Development",
    href: "/blog/wordpress-development",
  },
  {
    name: "React.js Applications",
    href: "/blog/react-js-applications",
  },
  {
    name: "UI/UX Design",
    href: "/blog/ui-ux-design",
  },
  {
    name: "Performance Optimization",
    href: "/blog/performance-optimization",
  },
  {
    name: "Website Maintenance",
    href: "/blog/website-maintenance",
  },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-conditions" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white w-full border-t border-brandLine overflow-hidden clear-both z-20">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-16 bg-brandPrimary/10 blur-[80px] pointer-events-none -z-10 transform-gpu" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 lg:items-start">
          {/* BRAND + INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3.5 text-left mb-4">
              <Logo size={44} />
              <div className="flex flex-col justify-center leading-none">
                <span className="text-base font-extrabold tracking-[0.14em] text-brandInk uppercase leading-none mb-1">
                  Malik Kashan
                </span>
                <span className="text-[9px] font-semibold tracking-[0.32em] text-brandPrimary uppercase leading-none">
                  Frontend Developer
                </span>
              </div>
            </div>

            <p className="text-brandMuted text-sm leading-relaxed font-light mb-5">
              Frontend & WordPress developer based in {SITE.location.label},
              building high-performance websites, web apps and dashboards for
              businesses worldwide.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Malik Kashan GitHub profile"
                className="w-9 h-9 rounded-full border border-brandLine bg-brandSoft flex items-center justify-center text-brandMuted hover:border-brandPrimary hover:text-brandPrimary transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.08 3.29 9.4 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.66.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.68.8.56A10.5 10.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z" />
                </svg>
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Malik Kashan on WhatsApp"
                className="w-9 h-9 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 flex items-center justify-center text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/20 transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Send an email to Malik Kashan"
                className="w-9 h-9 rounded-full border border-brandLine bg-brandSoft flex items-center justify-center text-brandMuted hover:border-brandPrimary hover:text-brandPrimary transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
            aria-label="Footer navigation"
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brandInk mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-brandMuted hover:text-brandPrimary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* SERVICES */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            aria-label="Services links"
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brandInk mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="inline-block text-sm text-brandMuted hover:text-brandPrimary transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* CONTACT INFO + LEGAL */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brandInk mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-2.5 text-brandMuted hover:text-brandPrimary transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneIntl}`}
                  className="flex items-start gap-2.5 text-brandMuted hover:text-brandPrimary transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-brandMuted hover:text-brandPrimary transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {SITE.location.label}
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-brandLine space-y-2.5">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-xs font-mono uppercase tracking-wider text-brandMuted hover:text-brandPrimary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-6 border-t border-brandLine flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-brandMuted/70 tracking-wide text-center">
            &copy; {currentYear} {SITE.name}. All Rights Reserved. Built with
            Next.js &amp; Tailwind CSS in {SITE.location.label}.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll back to the top of the page"
            className="text-xs font-mono tracking-wider uppercase text-brandPrimary hover:text-brandInk font-bold transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
          >
            Back To Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
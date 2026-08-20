"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Counter from "./Counter";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 40, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "%", label: "On-Time Delivery" },
];

export default function About() {
  const [selectedCard, setSelectedCard] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCard]);

  const featureCards = [
    {
      title: "Website Development",
      desc: "Modern, responsive and high-performance business websites built for speed and conversions.",
      details:
        "Our website development service focuses on creating custom, lightning-fast web applications tailored to your business goals. We utilize cutting-edge technologies like Next.js and Tailwind CSS to ensure top-notch performance, high SEO rankings, and seamless user experiences across all devices.",
      icon: (
        <svg
          className="w-5 h-5 text-brandPrimary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M10 7l-3 3 3 3M14 7l3 3-3 3" />
        </svg>
      ),
    },
    {
      title: "React JS Development",
      desc: "Interactive React applications with reusable components and modern UI/UX.",
      details:
        "We build scalable, component-driven React applications with exceptional UI/UX design. From complex single-page apps (SPAs) to dynamic dashboards, our state-management and modern design practices deliver smooth and highly responsive user interfaces.",
      icon: (
        <svg
          className="w-6 h-6 text-brandPrimary transition-transform duration-700 group-hover:scale-110 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(120 12 12)"
          />
        </svg>
      ),
    },
    {
      title: "WordPress Development",
      desc: "Custom WordPress, Elementor and WooCommerce solutions tailored to your business.",
      details:
        "Get fully customized WordPress websites, Elementor landing pages, and secure WooCommerce online stores. We ensure your WordPress site is fast, easy to manage, secure, and fully optimized to drive sales and business growth.",
      icon: (
        <svg
          className="w-5 h-5 text-brandPrimary transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.158 12.786l-2.698 7.83c2.347.606 4.81.258 6.9-.982-.3-.045-.584-.075-.824-.075-1.11 0-2.13.345-3.378.773zm-8.242-4.14c0 4.103 2.502 7.625 6.07 9.123L6.34 7.662c-.255.765-.424 1.41-.424 1.983zm15.112-.66c0-1.125-.405-1.905-.75-2.52-.45-.75-.87-1.395-.87-2.145 0-.84.645-1.62 1.545-1.62.09 0 .165.015.255.015A9.914 9.914 0 0012 2C6.48 2 2 6.48 2 12c0 1.92.54 3.705 1.47 5.235l5.22-15.135c.495-.12.945-.12 1.44-.12.435 0 .84.015 1.23.06L7.811 12.87l3.24 9.09A9.972 9.972 0 0022 12c0-1.485-.33-2.925-.915-4.215-.225.135-.42.24-.555.24-.615 0-1.05-.345-1.65-.9zm.222 4.11c.015.39.03.78.03 1.14 0 1.83-.54 3.885-1.425 5.925l-2.31-6.735c1.02-.27 2.055-.54 3.195-.54.18 0 .345.03.51.21z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 lg:py-16 bg-white block w-full font-sans scroll-mt-28"
      aria-label="About Malik Kashan and Services"
    >
      {/* Background Glow */}
      <div
        className="absolute top-0 right-0 w-72 sm:w-125 h-72 sm:h-125 bg-brandPrimary/8 blur-[120px] sm:blur-[180px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-12 sm:mb-16">
          <header className="lg:col-span-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-brandPrimary/10 border border-brandPrimary/20 text-[10px] sm:text-xs font-mono tracking-widest text-brandPrimary uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary" />
              Professional Bio
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-brandInk leading-tight mb-5 sm:mb-6 uppercase tracking-tight">
              Working <br className="hidden lg:block" />
              <span className="text-brandPrimary">With Precision</span>
            </h2>

            <p className="text-brandMuted text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              I am Malik Kashan, a specialist in engineering premium digital
              interfaces. My approach focuses on bridging the gap between elite
              design aesthetics and high-performance technical execution.
            </p>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-brandPrimary text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-lg shadow-brandPrimary/20 hover:bg-brandSecondary hover:shadow-brandSecondary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
            >
              Hire Me
            </Link>
          </header>

          {/* Right Side Enhanced Developer Card */}
          <div className="lg:col-span-6 relative w-full mt-4 lg:mt-0 flex justify-center lg:justify-end">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-linear-to-br from-brandPrimary/10 to-transparent border border-brandPrimary/20 pointer-events-none"
              aria-hidden="true"
            />

            <article className="relative w-full max-w-lg rounded-2xl bg-white border border-brandPrimary/25 shadow-[0_10px_30px_rgba(15,23,42,0.08)] overflow-hidden p-6 sm:p-8 z-10 group">
              {/* Card Header Status */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-brandLine">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-brandPrimary animate-pulse" />
                  <span className="font-mono text-xs text-brandPrimary font-semibold tracking-wider uppercase">
                    Live System Core
                  </span>
                </div>
                <span
                  className="font-mono text-[10px] text-brandMuted/50 px-2.5 py-1 rounded-md bg-brandSoft border border-brandLine tracking-widest"
                  aria-hidden="true"
                >
                  v2.06.PRO
                </span>
              </div>

              {/* Card Main Info */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-brandInk text-base sm:text-lg font-bold uppercase tracking-wide mb-1 group-hover:text-brandPrimary transition-colors">
                    Malik Kashan Architecture
                  </h2>
                  <p className="text-brandMuted text-xs sm:text-sm font-light leading-relaxed">
                    Delivering zero-latency UI components, robust backend
                    integrations, and pixel-perfect responsive layouts.
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 text-[10px] font-mono font-medium bg-brandPrimary/10 text-brandPrimary rounded-full border border-brandPrimary/20">
                    Next.js 16
                  </span>
                  <span className="px-3 py-1 text-[10px] font-mono font-medium bg-brandSoft text-brandMuted rounded-full border border-brandLine">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 text-[10px] font-mono font-medium bg-brandSoft text-brandMuted rounded-full border border-brandLine">
                    React Ecosystem
                  </span>
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div
                className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brandPrimary to-transparent opacity-50"
                aria-hidden="true"
              />
            </article>
          </div>
        </div>

        {/* STATS STRIP */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brandLine rounded-3xl border border-brandLine overflow-hidden mb-12 sm:mb-16 shadow-lg"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
              className="bg-brandBg px-6 py-8 sm:py-10 text-center"
            >
              <p className="text-2xl sm:text-4xl font-black text-brandPrimary font-mono">
                <Counter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-[10px] uppercase tracking-widest text-brandMuted mt-1.5">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM SECTION: Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20 w-full"
        >
          {featureCards.map((card, idx) => (
            <motion.article
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="p-8 sm:p-9 rounded-[28px] bg-white border border-brandLine shadow-sm relative flex flex-col items-start text-left justify-between w-full min-h-85 transition-all duration-300 hover:-translate-y-2 hover:border-brandPrimary/30 hover:shadow-[0_16px_32px_-12px_rgba(15,23,42,0.12)] group overflow-hidden"
            >
              {/* Card Numbering */}
              <span
                className="absolute top-6 right-7 font-mono text-[10px] tracking-widest text-brandMuted/40 font-bold"
                aria-hidden="true"
              >
                {`//0${idx + 1}`}
              </span>

              {/* Bottom Accent Border */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 bg-brandPrimary transition-all duration-300 group-hover:w-[45%]"
                aria-hidden="true"
              />

              <div className="w-full">
                {/* Icon Capsule */}
                <div className="w-12 h-12 rounded-[14px] bg-brandPrimary/5 border border-brandPrimary/15 flex items-center justify-center mb-6 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-brandPrimary/15 group-hover:border-brandPrimary/30 shadow-md">
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-bold text-brandInk mb-3 uppercase tracking-wide transition-colors duration-200 group-hover:text-brandPrimary">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-brandMuted text-sm sm:text-[15px] leading-relaxed tracking-wide font-light">
                  {card.desc}
                </p>
              </div>

              {/* Learn More Button */}
              <div className="pt-6 w-full">
                <button
                  onClick={() => setSelectedCard(card)}
                  aria-label={`Learn more about ${card.title}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brandPrimary/80 hover:text-brandPrimary transition-colors duration-300 cursor-pointer bg-transparent border-none p-0 group/btn"
                >
                  Learn More
                  <svg
                    className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover/btn:translate-x-1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* POPUP MODAL */}
      {selectedCard && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn"
        >
          <div className="relative w-full max-w-lg p-6 sm:p-8 bg-white border border-brandPrimary/30 rounded-3xl shadow-[0_16px_40px_rgba(15,23,42,0.15)] text-left transition-all">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-5 right-5 text-brandMuted hover:text-brandPrimary hover:bg-brandPrimary/10 transition-all text-sm font-bold w-9 h-9 rounded-full bg-brandSoft border border-brandLine flex items-center justify-center cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Icon */}
            <div
              className="w-14 h-14 rounded-2xl bg-brandPrimary/10 border border-brandPrimary/25 flex items-center justify-center mb-5 shadow-md"
              aria-hidden="true"
            >
              {selectedCard.icon}
            </div>

            {/* Modal Title */}
            <h3
              id="modal-title"
              className="text-xl sm:text-2xl font-extrabold text-brandInk uppercase tracking-wide mb-3"
            >
              {selectedCard.title}
            </h3>

            {/* Modal Detailed Description */}
            <p className="text-brandMuted text-sm sm:text-[15px] leading-relaxed mb-6 font-light">
              {selectedCard.details}
            </p>

            {/* Action Buttons inside Modal */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contact"
                onClick={() => setSelectedCard(null)}
                className="flex-1 inline-flex items-center justify-center px-6 py-3.5 bg-brandPrimary text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-brandPrimary/20 hover:bg-brandSecondary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Hire For This Project
              </Link>
              <button
                onClick={() => setSelectedCard(null)}
                className="px-6 py-3.5 bg-brandSoft text-brandMuted text-xs font-bold uppercase tracking-widest rounded-xl border border-brandLine hover:bg-brandPrimary/10 transition-all duration-300 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

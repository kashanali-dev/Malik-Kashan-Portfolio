"use client";

import { useId, useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Malik delivered a flawless, high-performance web application ahead of schedule. His attention to detail and pixel-perfect execution exceeded our expectations completely.",
    name: "Ayesha Khan",
    role: "Product Manager, SaaS Startup",
    initials: "AK",
    rating: 5,
  },
  {
    quote:
      "Working with Malik was seamless. He transformed our complex requirements into a clean, scalable Next.js platform that our users love. Truly a professional.",
    name: "David Ofori",
    role: "Founder, Digital Agency",
    initials: "DO",
    rating: 5,
  },
  {
    quote:
      "Excellent communication and technical depth. Malik rebuilt our dashboard with remarkable speed and the results speak for themselves. Highly recommend hiring him.",
    name: "Muhammad Usman",
    role: "CTO, Enterprise Solutions",
    initials: "MU",
    rating: 5,
  },
  {
    quote:
      "From the first call to the final launch, everything was organised and transparent. Our e-commerce store now loads twice as fast and sales have jumped. Money well spent.",
    name: "Sarah Ahmed",
    role: "Owner, E-Commerce Store",
    initials: "SA",
    rating: 5,
  },
  {
    quote:
      "He rebuilt our WordPress site into a modern Next.js experience. SEO rankings improved within weeks and our team can update content effortlessly. Outstanding work.",
    name: "James Carter",
    role: "Marketing Director, UK Agency",
    initials: "JC",
    rating: 5,
  },
  {
    quote:
      "The most reliable developer we have worked with remotely. Clear updates, honest timelines and code that is actually maintainable. We are already planning our next project with him.",
    name: "Fatima Noor",
    role: "Startup Co-Founder, Dubai",
    initials: "FN",
    rating: 5,
  },
];

export default function Testimonials() {
  const componentId = useId();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const viewOptions = { once: true, margin: "-60px" };

  const PAGE_SIZE = 3;
  const pages = [];
  for (let i = 0; i < testimonials.length; i += PAGE_SIZE) {
    pages.push(testimonials.slice(i, i + PAGE_SIZE));
  }
  const totalPages = pages.length;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, totalPages]);

  const goTo = (i) => setIndex((i + totalPages) % totalPages);

  return (
    <section
      id="testimonials"
      className="relative py-12 sm:py-16 lg:py-16 bg-white text-brandInk overflow-hidden border-t border-brandLine scroll-mt-28"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 700px" }}
      aria-labelledby={`${componentId}-heading`}
    >
      {/* Grid Mesh Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-size-[3rem_3rem] sm:bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-brandPrimary/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="flex flex-col mb-8 sm:mb-12 text-center items-center">
          <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-brandPrimary/10 border border-brandPrimary/20 text-[10px] sm:text-xs font-mono tracking-widest text-brandPrimary uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary" />
            Client Feedback
          </span>
          <h2
            id={`${componentId}-heading`}
            className="text-2xl sm:text-4xl font-extrabold text-brandInk leading-tight uppercase tracking-tight"
          >
            What Clients <span className="text-brandPrimary">Say.</span>
          </h2>
        </div>

        {/* Testimonial Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewOptions}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="max-w-7xl mx-auto"
        >
          {/* Slider Stage */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative rounded-3xl bg-brandBg border border-brandLine overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
          >
            {/* Top Accent */}
            <div
              className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brandPrimary/40 to-transparent z-10"
              aria-hidden="true"
            />

            {/* Carousel Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {pages.map((page, p) => (
                <div
                  key={p}
                  className="w-full shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 p-6 sm:p-8 lg:p-10"
                  aria-hidden={p !== index}
                >
                  {page.map((t) => (
                    <figure
                      key={t.name}
                      className="relative flex flex-col justify-between rounded-2xl bg-white border border-brandLine p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brandPrimary/30 hover:shadow-[0_16px_32px_-12px_rgba(15,23,42,0.12)] overflow-hidden"
                    >
                      {/* Rating */}
                      <div
                        className="flex items-center gap-1 mb-3"
                        aria-label={`Rated ${t.rating} out of 5 stars`}
                      >
                        {Array.from({ length: t.rating }).map((_, s) => (
                          <svg
                            key={s}
                            className="w-3.5 h-3.5 text-amber-400"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote Mark */}
                      <div
                        className="font-serif text-5xl leading-none text-brandPrimary/15 select-none"
                        aria-hidden="true"
                      >
                        &ldquo;
                      </div>

                      <blockquote
                        className="text-sm text-brandMuted leading-relaxed font-light -mt-2 flex-1"
                      >
                        {t.quote}
                      </blockquote>

                      <figcaption className="mt-6 pt-5 border-t border-brandLine flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-brandPrimary/10 border border-brandPrimary/25 flex items-center justify-center text-[11px] font-bold text-brandPrimary font-mono shrink-0">
                          {t.initials}
                        </div>
                        <div className="min-w-0">
                          <p
                            className="text-sm font-bold text-brandInk tracking-wide truncate"
                          >
                            {t.name}
                          </p>
                          <p className="text-[10px] font-mono text-brandMuted/70 tracking-wider uppercase mt-0.5 truncate">
                            {t.role}
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Controls: Arrows + Dots + Counter */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-white border border-brandLine flex items-center justify-center text-brandMuted hover:text-brandPrimary hover:border-brandPrimary/40 transition-all duration-200 cursor-pointer hover:scale-105"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {pages.map((page, i) => (
                <button
                  key={page[0].name}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial page ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === index
                      ? "w-6 bg-brandPrimary"
                      : "w-2 bg-brandPrimary/20 hover:bg-brandPrimary/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-white border border-brandLine flex items-center justify-center text-brandMuted hover:text-brandPrimary hover:border-brandPrimary/40 transition-all duration-200 cursor-pointer hover:scale-105"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <p className="text-center font-mono text-[10px] tracking-widest text-brandMuted/60 mt-4 uppercase">
            {String(index + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
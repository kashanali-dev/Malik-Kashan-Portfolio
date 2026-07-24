// src/app/Components/Experience.jsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const experiences = [
    {
      role: "Senior Frontend Engineer",
      company: "Premium Digital Studio",
      duration: "2024 - Present",
      type: "Frontend Core",
      desc: "Engineering scalable consumer-facing web architectures using Next.js, React, and Tailwind CSS. Implementing structural performance metrics, atomic UI design elements, and hydration state optimization loops.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      role: "WordPress Architect",
      company: "Elite Web Solutions",
      duration: "2022 - 2024",
      type: "Bespoke CMS",
      desc: "Designed luxury custom WordPress ecosystems. Built high-performance object-oriented themes from scratch, custom enterprise plugins, tailored WooCommerce hooks, and stable headless decoupled API backends.",
      tech: ["WordPress", "PHP", "Bespoke Themes", "WooCommerce", "REST API"],
    },
    {
      role: "Frontend & CMS Specialist",
      company: "Creative Agency Hub",
      duration: "2020 - 2022",
      type: "Hybrid Stack",
      desc: "Engineered elite web structures bridging client-side interfaces with robust dynamic content management matrices. Ensured pixel-perfect rendering layout delivery with absolute device scaling fluidity.",
      tech: [
        "JavaScript",
        "HTML5 / CSS3",
        "Elementor Pro",
        "Advanced Custom Fields",
      ],
    },
  ];

  if (!mounted) return null;

  // Viewport setup for early trigger rendering
  const viewOptions = { once: true, margin: "-20px" };

  // Container variants to cascade internal elements animations smoothly
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-12 sm:py-16 bg-[#0a0a0c] z-20 block overflow-hidden w-full clear-both border-t border-white/2"
    >
      {/* Premium Subtle Ambient Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-65 sm:w-137.5 h-45 sm:h-65 bg-[#d4af37]/3 blur-[90px] sm:blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* SECTION HEADER WITH REDUCED BOTTOM MARGIN */}
        <div className="flex flex-col mb-10 sm:mb-14 text-center items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewOptions}
            transition={{ duration: 0.4 }}
            className="text-[#d4af37] text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-2.5 block"
          >
            Milestones & Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewOptions}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#e2e8f0] leading-tight uppercase tracking-tight"
          >
            Professional <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#d4af37] via-[#ffffff] to-[#d4af37]">
              Experience
            </span>
          </motion.h2>
        </div>

        {/* 3-COLUMN RESPONSIVE LAYOUT MATRIX */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewOptions}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full items-stretch"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -6,
                borderColor: "rgba(212, 175, 55, 0.35)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
              }}
              className="group relative p-5 sm:p-7 lg:p-8 rounded-2xl bg-[#111114]/90 border border-white/4 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between w-full select-none"
            >
              {/* Inner Radial Hover Highlight Effect */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-[#d4af37]/1.5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Meta Labels Row with Responsive Sizing */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="inline-block px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-mono tracking-wider bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 uppercase">
                    {exp.type}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#d4af37]/80 bg-white/2 px-2 py-0.5 rounded border border-white/5">
                    {exp.duration}
                  </span>
                </div>

                {/* Header Titles */}
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#e2e8f0] tracking-wide mb-0.5 group-hover:text-[#d4af37] transition-colors duration-200">
                  {exp.role}
                </h3>

                <p className="text-[11px] sm:text-xs text-white/40 font-mono tracking-wider mb-4">
                  {exp.company}
                </p>

                {/* Job Description Text */}
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed tracking-wide mb-6 font-light">
                  {exp.desc}
                </p>
              </div>

              {/* Technology Badges Framework Block */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/3">
                {exp.tech.map((t, tIdx) => (
                  <motion.span
                    key={tIdx}
                    whileHover={{
                      scale: 1.04,
                      borderColor: "rgba(255,255,255,0.15)",
                      color: "#ffffff",
                    }}
                    className="text-[9px] sm:text-[10px] bg-white/2 text-[#e2e8f0]/60 px-2.5 py-0.5 rounded border border-white/4 tracking-wide font-light transition-colors duration-150 cursor-default"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

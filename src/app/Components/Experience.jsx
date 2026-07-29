"use client"; // Next.js Client Component tag for Framer Motion

import { useId } from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const componentId = useId();

  // All 6 balanced cards intact with complete content structures
  const experiences = [
    {
      role: "Senior Frontend Engineer",
      company: "Premium Digital Studio",
      duration: "2024 - 2025",
      type: "Frontend Core",
      desc: "Engineered scalable consumer-facing web applications. Focused on Core Web Vitals optimization, dynamic lazy hydration patterns, and unified global layout state management structures resulting in maximum client side performance.",
      tech: [
        "React.js",
        "Redux Toolkit",
        "Framer Motion",
        "JavaScript ES6+",
        "Zustand",
      ],
    },
    {
      role: "Tailwind UI Engineer",
      company: "Pixel Perfect Systems",
      duration: "2024 - 2024",
      type: "Design Systems",
      desc: "Built a fully bespoke enterprise design system. Engineered production-grade atomic UI layouts utilizing Tailwind CSS configuration tokens, custom fluid themes, and absolute system break-points layout consistency.",
      tech: ["Tailwind CSS", "PostCSS", "HTML5 / CSS3", "Design Tokens"],
    },
    {
      role: "Custom Software Architect",
      company: "Nexus Labs International",
      duration: "2024 - Present",
      type: "Bespoke Solutions",
      desc: "Engineering premium custom software architectures tailored for specific enterprise use cases. Implementing scalable web patterns, heavy data computational pipelines, and completely tailor-made digital infrastructures.",
      tech: ["Node.js", "GraphQL", "Docker", "Custom Webhooks"],
    },
    {
      role: "Bootstrap Layout Specialist",
      company: "Vanguard Web Dynamics",
      duration: "2023 - 2024",
      type: "UI Architecture",
      desc: "Developed high-speed fluid dashboards and SaaS products leveraging enterprise Bootstrap layers. Customized core Sass variables, structured utility-first extensions, and optimized rendering engine output layouts.",
      tech: ["Bootstrap 5", "Sass / SCSS", "Vanilla JS", "Gulp Automation"],
    },
    {
      role: "React.js Developer",
      company: "Nexus Software House",
      duration: "2023 - 2024",
      type: "SPA Infrastructure",
      desc: "Developed modern Single Page Applications (SPAs) focused on complex state architectures. Optimized application lifecycle rendering loops to ensure fluid user interactions and micro-animations layouts.",
      tech: [
        "React.js",
        "Context API",
        "React Router",
        "Axios",
        "REST Framework",
      ],
    },
    {
      role: "Frontend Layout Specialist",
      company: "Creative Agency Hub",
      duration: "2020 - 2022",
      type: "Hybrid Stack",
      desc: "Engineered responsive client-side structures bridging static assets mockups with dynamic content management layers. Ensured layout execution fluidity across all responsive viewports layout matrices.",
      tech: ["JavaScript", "HTML5 / CSS3", "Elementor Pro", "ACF Frameworks"],
    },
  ];

  // Framer Motion Animation Settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-14 sm:py-20 bg-[#030303] text-white overflow-hidden border-t border-neutral-900 font-sans"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 800px" }}
      aria-labelledby={`${componentId}-heading`}
    >
      {/* SaaS Ambient Mesh Grid Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f0a_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f0a_1px,transparent_1px)] bg-size-[3rem_3rem] sm:bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Ultra-Premium Linear Glow Accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-[#d4af37]/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* CENTERED, COMPACT HEADER */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="text-center mx-auto mb-10 sm:mb-12 max-w-2xl flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] sm:text-xs font-mono tracking-widest text-[#d4af37] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            Career Ledger & Milestones
          </div>
          <h2
            id={`${componentId}-heading`}
            className="text-2xl sm:text-3xl font-extrabold text-neutral-100 tracking-tight leading-tight uppercase"
          >
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#d4af37] via-[#ffffff] to-[#d4af37]/80">
              Experience.
            </span>
          </h2>
        </motion.header>

        {/* 3-COLUMN STRUCTURE WITH PERFECT PARSING CLOSED BLOCKS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full items-stretch"
          itemScope
          itemType="https://schema.org"
        >
          <meta
            itemProp="numberOfItems"
            content={experiences.length.toString()}
          />
          <meta
            itemProp="itemListOrder"
            content="https://schema.orgOrderDescending"
          />

          {experiences.map((exp, idx) => (
            <motion.article
              key={idx}
              variants={itemVariants}
              className="group relative p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#09090b]/80 border border-neutral-900 backdrop-blur-sm flex flex-col justify-between w-full transition-colors duration-300 ease-out hover:border-neutral-800 hover:bg-[#0c0c0e] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] transform-gpu will-change-transform"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org"
            >
              <meta itemProp="position" content={(idx + 1).toString()} />

              <div
                itemProp="item"
                itemScope
                itemType="https://schema.org"
                className="flex flex-col h-full justify-between w-full relative z-10"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono tracking-wider bg-neutral-900/90 text-neutral-400 border border-neutral-800 uppercase">
                      {exp.type}
                    </span>
                    <span className="text-[10px] font-mono text-[#d4af37] tracking-widest bg-[#d4af37]/5 px-2.5 py-0.5 rounded-md border border-[#d4af37]/10">
                      {exp.duration}
                    </span>
                  </div>

                  <h3
                    className="text-base sm:text-lg font-bold text-neutral-200 tracking-wide mb-1 group-hover:text-white transition-colors duration-200 uppercase"
                    itemProp="jobTitle"
                  >
                    {exp.role}
                  </h3>

                  <div
                    itemProp="employer"
                    itemScope
                    itemType="https://schema.org"
                  >
                    <p
                      className="text-xs text-neutral-500 font-mono tracking-wider mb-5"
                      itemProp="name"
                    >
                      //@ {exp.company}
                    </p>
                  </div>

                  <p
                    className="text-neutral-400 text-xs sm:text-sm leading-relaxed tracking-normal mb-6 font-normal font-sans"
                    itemProp="description"
                  >
                    {exp.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-900 group-hover:border-neutral-800 transition-colors duration-300">
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] sm:text-[10px] bg-[#121214] text-neutral-400 px-2.5 py-1 rounded-lg border border-neutral-800/60 tracking-wide font-mono transition-all duration-200 group-hover:border-neutral-800 hover:text-white hover:bg-neutral-900"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

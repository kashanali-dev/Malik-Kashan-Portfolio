"use client";

import { useId } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const componentId = useId();

  const skillGroups = [
    {
      category: "Core Language",
      skills: [
        { name: "HTML5 & CSS3", level: 98 },
        { name: "JavaScript (ES6+)", level: 94 },
        { name: "TypeScript", level: 90 },
      ],
    },
    {
      category: "Frontend Frameworks",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 94 },
        { name: "Tailwind CSS", level: 97 },
      ],
    },
    {
      category: "Backend & Tooling",
      skills: [
        { name: "Node.js", level: 86 },
        { name: "REST APIs", level: 88 },
        { name: "Git / GitHub", level: 92 },
      ],
    },
    {
      category: "Specialized Platforms",
      skills: [
        { name: "WordPress", level: 90 },
        { name: "UI/UX Design", level: 88 },
        { name: "Framer Motion", level: 89 },
      ],
    },
  ];

  const tools = [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "Framer Motion",
    "Redux Toolkit",
    "Zustand",
    "Bootstrap",
    "Sass",
    "GraphQL",
    "Docker",
    "WordPress",
    "Elementor",
    "Figma",
    "Vercel",
  ];

  const viewOptions = { once: true, margin: "-80px" };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
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
      id="skills"
      className="relative py-12 sm:py-16 lg:py-16 bg-brandBg text-brandInk overflow-hidden font-sans scroll-mt-28"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 900px" }}
      aria-labelledby={`${componentId}-heading`}
    >
      {/* Ambient Glow */}
      <div
        className="absolute top-0 right-0 w-72 sm:w-125 h-72 sm:h-125 bg-brandPrimary/8 blur-[120px] sm:blur-[180px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="flex flex-col mb-8 sm:mb-12 text-center items-center">
          <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-brandPrimary/10 border border-brandPrimary/20 text-[10px] sm:text-xs font-mono tracking-widest text-brandPrimary uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary" />
            Technical Proficiency
          </span>
          <h2
            id={`${componentId}-heading`}
            className="text-2xl sm:text-4xl font-extrabold text-brandInk leading-tight uppercase tracking-tight"
          >
            Skills <span className="text-brandPrimary">&amp; Expertise.</span>
          </h2>
        </div>

        {/* Skill Groups */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewOptions}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 w-full items-stretch"
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.category}
              variants={itemVariants}
              className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-brandLine backdrop-blur-sm transition-all duration-300 hover:border-brandPrimary/25 hover:shadow-[0_16px_32px_-12px_rgba(15,23,42,0.12)] hover:-translate-y-1 transform-gpu will-change-transform"
            >
              {/* Group Numbering */}
              <span
                className="absolute top-6 right-7 font-mono text-[10px] tracking-widest text-brandMuted/40 font-bold"
                aria-hidden="true"
              >
                {`//0${skillGroups.indexOf(group) + 1}`}
              </span>

              <h3 className="text-sm sm:text-base font-bold text-brandPrimary uppercase tracking-[0.2em] mb-6">
                {"//"} {group.category}
              </h3>

              <div className="space-y-5">
                {group.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm sm:text-[15px] text-brandInk font-medium tracking-wide">
                        {skill.name}
                      </span>
                      <span className="text-[11px] font-mono text-brandMuted/70">
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 w-full rounded-full bg-brandSoft overflow-hidden"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} proficiency`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: 0.1 + skillIdx * 0.08,
                          ease: [0.25, 1, 0.5, 1],
                        }}
                        className="h-full rounded-full bg-linear-to-r from-brandSecondary/50 via-brandPrimary to-brandPrimary min-w-5 shadow-[0_0_8px_rgba(8,145,178,0.45)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Tools Toolkit Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewOptions}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-brandLine shadow-sm"
        >
          <h3 className="text-sm sm:text-base font-bold text-brandMuted uppercase tracking-[0.2em] mb-5">
            Toolkit <span className="text-brandPrimary">&amp; Stack</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-[11px] sm:text-xs font-mono text-brandMuted bg-brandSoft px-3.5 py-2 rounded-lg border border-brandLine tracking-wide transition-all duration-200 hover:text-brandPrimary hover:border-brandPrimary/30"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// src/app/Components/Projects.jsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projectData = [
    {
      title: "Oracles Force",
      category: "React.js Stack",
      desc: "Oracles Force is an IT company providing professional Web Development and WordPress solutions to help businesses build a strong online presence.",
      liveLink: "https://oraclesforce.com/",
      gitLink: "https://github.com/kashanali-dev/oracles-force",
      image: "/oracles.png",
      tags: ["React.js", "Context API", "Tailwind CSS", "Mapbox", "Node.js"],
    },
    {
      title: "Kofi Ofori-Mensah Portfolio",
      category: "Frontend Core",
      desc: "Kofi Ofori-Mensah works at the intersection of digital marketing, neurodiversity, and platform ethics.",
      liveLink: "https://kofi-portfolio.vercel.app/",
      gitLink: "https://github.com/alihumdard/kofi-portfolio",
      image: "/kofi.PNG",
      tags: ["React.js", "TypeScript", "Tailwind CSS", "Chart.js", "Zustand"],
    },
    {
      title: "Fitness & Wellness Platform",
      category: "Web Application",
      desc: "A modern modular health analytics system featuring state retention orchestration, responsive fluid layout mechanics, and beautifully structured atomic UI design tokens.",
      liveLink: "#",
      gitLink: "#",
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      tags: [
        "React.js",
        "Framer Motion",
        "Tailwind CSS",
        "Firebase",
        "REST API",
      ],
    },
  ];

  if (!mounted) return null;

  const viewOptions = { once: true, margin: "-40px" };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-12 sm:py-16 bg-[#0a0a0c] z-20 block overflow-hidden w-full clear-both border-t border-white/2"
    >
      {/* Luxury Background Ambient Glow - Compressed Sizing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-70 sm:w-150 h-50 sm:h-70 bg-[#d4af37]/2 blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* SECTION HEADER WITH COMPACT BOTTOM GAPS */}
        <div className="flex flex-col mb-10 sm:mb-12 text-center items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewOptions}
            transition={{ duration: 0.4 }}
            className="text-[#d4af37] text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-2 block"
          >
            My Recent Creations
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewOptions}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#e2e8f0] leading-tight uppercase tracking-tight"
          >
            Featured <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#d4af37] via-[#ffffff] to-[#d4af37]">
              Projects
            </span>
          </motion.h2>
        </div>

        {/* 3-COLUMN RESPONSIVE LAYOUT MATRIX */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewOptions}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 w-full items-stretch"
        >
          {projectData.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -6,
                borderColor: "rgba(212, 175, 55, 0.35)",
                boxShadow: "0 20px 45px rgba(0, 0, 0, 0.7)",
              }}
              className="group relative rounded-2xl bg-[#111114]/90 border border-white/4 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between w-full overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] select-none"
            >
              {/* Top Image Banner Container with Dual Gradient Processing Masks */}
              <div className="relative w-full aspect-16/10 overflow-hidden bg-[#151518] border-b border-white/3">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 filter brightness-[0.8] group-hover:brightness-[0.95] contrast-[1.02]"
                />

                {/* Micro Ambient Depth Shadow Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-[#111114] via-[#111114]/30 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-[#0a0a0c]/10 group-hover:opacity-0 transition-opacity duration-300" />

                {/* Floating Meta Framework Label */}
                <span className="absolute top-3.5 left-3.5 inline-block px-2 py-0.5 rounded font-mono text-[8px] sm:text-[9px] tracking-wider bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 uppercase shadow-md backdrop-blur-md">
                  {project.category}
                </span>

                {/* Micro Index Number Tag */}
                <span className="absolute top-3.5 right-3.5 font-mono text-[9px] sm:text-[10px] tracking-wider text-white/20 group-hover:text-[#d4af37]/50 transition-colors">
                  //0{idx + 1}
                </span>
              </div>

              {/* Bottom Content Frame Area */}
              <div className="p-5 sm:p-6 flex flex-col justify-between grow relative">
                {/* Subtle Luxury Corner Glow Effect */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-linear-to-bl from-[#d4af37]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />

                <div>
                  {/* Project Main Title */}
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#e2e8f0] tracking-wide mb-2 group-hover:text-[#d4af37] transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Body Scope Project Paragraph */}
                  <p className="text-white/45 text-xs sm:text-[13px] leading-relaxed tracking-wide mb-5 font-light">
                    {project.desc}
                  </p>
                </div>

                {/* Tech Badges & Interactive Link Rows Container */}
                <div className="flex flex-col gap-3.5 pt-4 border-t border-white/3 w-full">
                  {/* Technology Badges Matrix */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] sm:text-[10px] bg-white/2 text-[#e2e8f0]/50 px-2 py-0.5 rounded border border-white/3 tracking-wide font-light transition-all group-hover:border-white/10 group-hover:text-[#e2e8f0]/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links Reveal Area with Underline Effects */}
                  <div className="flex items-center gap-4.5 mt-0.5 overflow-hidden h-6 relative">
                    <a
                      href={project.liveLink}
                      target={project.liveLink !== "#" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-[10px] sm:text-[11px] font-mono font-medium text-[#d4af37] hover:text-[#f3e5ab] transition-colors flex items-center gap-1 uppercase tracking-widest relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-px after:bg-[#d4af37] after:transition-all after:duration-300"
                    >
                      Live Demo ↗
                    </a>
                    <a
                      href={project.gitLink}
                      target={project.gitLink !== "#" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-[10px] sm:text-[11px] font-mono text-white/40 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-widest"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

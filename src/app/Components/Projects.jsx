"use client";

import { useState, useEffect, useId } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Upgraded to next/image for production performance optimization

const PROJECT_DATA = [
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
    gitLink: "https://github.com/kashanali-dev/Kofi-Portfolio",
    image: "/kofi.PNG",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Chart.js", "Zustand"],
  },
  {
    title: "TerraMore Paginas UE",
    category: "Web Application",
    desc: "A modern modular health analytics system featuring state retention orchestration, responsive fluid layout mechanics, and beautifully structured atomic UI design tokens.",
    liveLink: "https://terra-more.vercel.app/",
    gitLink: "https://github.com/kashanali-dev/Terra-More",
    image: "/terramore.png",
    tags: ["React.js", "Framer Motion", "Tailwind CSS", "Firebase", "REST API"],
  },
];

function ProjectCard({ project, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      className="group relative rounded-3xl bg-[#09090b]/80 border border-neutral-900 backdrop-blur-sm flex flex-col justify-between w-full overflow-hidden transition-all duration-300 hover:border-neutral-800 hover:bg-[#0c0c0e] hover:shadow-[0_30px_50px_-10px_rgba(0,0,0,0.8)] transform-gpu will-change-transform"
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org"
    >
      <meta itemProp="position" content={(index + 1).toString()} />

      <div
        itemProp="item"
        itemScope
        itemType="https://schema.org"
        className="flex flex-col h-full justify-between w-full"
      >
        {/* 1. Image Canvas - Optimized using Next.js native components to prevent CLS */}
        <div className="relative w-full aspect-16/10 overflow-hidden bg-[#121214] block">
          <Image
            src={project.image}
            alt={`${project.title} project interface preview showcasing dashboard elements`}
            width={640}
            height={400}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index === 0} // Highest speed scoring optimization for LCP element
            loading={index === 0 ? undefined : "lazy"}
            className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.02] transition-transform duration-500 filter brightness-[0.75] group-hover:brightness-[0.9] contrast-[1.02]"
            itemProp="image"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#09090b] via-transparent to-transparent opacity-90 pointer-events-none" />

          <span className="absolute top-4 left-4 inline-block px-2.5 py-0.5 rounded font-mono text-[9px] tracking-wider bg-neutral-950/80 text-[#d4af37] border border-[#d4af37]/20 uppercase backdrop-blur-md shadow-lg z-10">
            {project.category}
          </span>

          <span
            className="absolute top-4 right-4 font-mono text-[10px] tracking-wider text-neutral-700 font-bold z-10"
            aria-hidden="true"
          >
            //0{index + 1}
          </span>
        </div>

        {/* 2. Content Info Text & Explicit Accessibility Buttons Segment */}
        <div className="p-6 flex flex-col justify-between grow relative">
          <div>
            <h3
              className="text-base sm:text-lg font-bold text-neutral-200 tracking-wide mb-2 group-hover:text-[#d4af37] transition-colors duration-200 uppercase"
              itemProp="name"
            >
              {project.title}
            </h3>

            <p
              className="text-neutral-400 text-xs sm:text-[13px] leading-relaxed tracking-normal mb-5 font-normal font-sans"
              itemProp="description"
            >
              {project.desc}
            </p>

            {/* Permanent Action Buttons with Descriptive Accessibility Tags */}
            <div className="flex items-center gap-2.5 mb-6">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demonstration of ${project.title}`}
                className="px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 font-medium text-[11px] tracking-wide shadow-md hover:bg-white hover:text-black hover:border-white transition-all duration-200 flex items-center gap-1.5"
              >
                Live Demo
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View compilation source code for ${project.title} on GitHub`}
                className="px-3.5 py-2 rounded-xl bg-transparent border border-neutral-800 text-neutral-400 font-medium text-[11px] tracking-wide hover:bg-neutral-900 hover:text-white transition-all duration-200 flex items-center gap-1.5"
              >
                Code
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* 3. Tech Stack Badge Framework */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-900/60 w-full">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-[9px] sm:text-[10px] bg-[#121214] text-neutral-400 px-2.5 py-1 rounded-md border border-neutral-800/60 tracking-wide font-mono transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const componentId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const viewOptions = { once: true, margin: "-100px" };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 bg-[#030303] text-white overflow-hidden border-t border-neutral-900 font-sans"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 900px" }}
      aria-labelledby={`${componentId}-heading`}
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f0a_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f0a_1px,transparent_1px)] bg-size-[3rem_3rem] sm:bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-[#d4af37]/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <header className="flex flex-col mb-12 sm:mb-16 text-center items-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewOptions}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] sm:text-xs font-mono tracking-widest text-[#d4af37] uppercase mb-3"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"
              aria-hidden="true"
            />
            My Recent Creations
          </motion.div>

          <h2
            id={`${componentId}-heading`}
            className="text-2xl sm:text-4xl font-extrabold text-[#e2e8f0] leading-tight uppercase tracking-tight"
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#d4af37] via-[#ffffff] to-[#d4af37]/80">
              Projects.
            </span>
          </h2>
        </header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewOptions}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch"
          itemScope
          itemType="https://schema.org"
        >
          <meta
            itemProp="numberOfItems"
            content={PROJECT_DATA.length.toString()}
          />
          <meta
            itemProp="itemListOrder"
            content="https://schema.orgOrderAscending"
          />

          {PROJECT_DATA.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

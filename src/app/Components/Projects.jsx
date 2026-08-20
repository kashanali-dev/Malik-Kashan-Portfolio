"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PROJECT_DATA, LIVE_DEMO_URL_PLACEHOLDER } from "../lib/projects";
import Counter from "./Counter";

const liveDemoCount = PROJECT_DATA.filter(
  (p) => p.liveDemo && p.liveDemo !== LIVE_DEMO_URL_PLACEHOLDER && p.liveDemo !== ""
).length;

const githubCount = PROJECT_DATA.filter((p) => p.github).length;

const projectStats = [
  { value: PROJECT_DATA.length, suffix: "+", label: "Projects Built" },
  { value: liveDemoCount, suffix: "+", label: "Live Demos" },
  { value: githubCount, suffix: "+", label: "Open-Source Repos" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandPrimary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

export function ProjectCard({ project, index }) {
  const hasLiveDemo =
    project.liveDemo &&
    project.liveDemo !== LIVE_DEMO_URL_PLACEHOLDER &&
    project.liveDemo !== "";
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
      className="group relative overflow-hidden flex flex-col justify-between w-full rounded-3xl bg-white border border-brandLine backdrop-blur-sm transition-all duration-300 hover:border-brandPrimary/25 hover:shadow-[0_16px_32px_-12px_rgba(15,23,42,0.12)] transform-gpu will-change-transform"
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/ListItem"
    >
      <meta itemProp="position" content={(index + 1).toString()} />

      <div
        itemProp="item"
        itemScope
        itemType="https://schema.org/CreativeWork"
        className="flex flex-col h-full justify-between w-full"
      >
        {/* 1. Project Image Thumbnail - links to the live demo when available */}
        {hasLiveDemo ? (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open live demo of ${project.title} in a new tab`}
            className={`group/image relative block w-full aspect-16/10 overflow-hidden bg-brandSoft ${focusRing}`}
          >
            <Image
              src={project.image}
              alt={`Interface preview of the ${project.title} project showing its main dashboard layout`}
              width={640}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
              loading={index === 0 ? undefined : "lazy"}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-[1.03]"
              itemProp="image"
            />
            <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent opacity-40 pointer-events-none" />

            <span className="absolute top-4 left-4 inline-block px-2.5 py-0.5 rounded font-mono text-[9px] tracking-wider bg-white/90 text-brandPrimary border border-brandPrimary/20 uppercase backdrop-blur-md shadow-lg z-10">
              {project.category}
            </span>

            <span
              className="absolute top-4 right-4 font-mono text-[10px] tracking-wider text-brandMuted/50 font-bold z-10"
              aria-hidden="true"
            >
              {`//0${index + 1}`}
            </span>

            {/* Hover/Keyboard hint overlay */}
            <span className="absolute inset-x-0 bottom-0 flex justify-center pb-4 translate-y-2 opacity-0 transition-all duration-300 group-hover/image:translate-y-0 group-hover/image:opacity-100 group-focus-visible/image:translate-y-0 group-focus-visible/image:opacity-100">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brandInk/90 border border-brandPrimary/30 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white">
                View Live Demo
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </span>
          </a>
        ) : (
          <div className="group/image relative block w-full aspect-16/10 overflow-hidden bg-brandSoft">
            <Image
              src={project.image}
              alt={`Interface preview of the ${project.title} project showing its main dashboard layout`}
              width={640}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
              loading={index === 0 ? undefined : "lazy"}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-[1.03]"
              itemProp="image"
            />
            <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent opacity-40 pointer-events-none" />

            <span className="absolute top-4 left-4 inline-block px-2.5 py-0.5 rounded font-mono text-[9px] tracking-wider bg-white/90 text-brandPrimary border border-brandPrimary/20 uppercase backdrop-blur-md shadow-lg z-10">
              {project.category}
            </span>

            <span
              className="absolute top-4 right-4 font-mono text-[10px] tracking-wider text-brandMuted/50 font-bold z-10"
              aria-hidden="true"
            >
              {`//0${index + 1}`}
            </span>
          </div>
        )}

        {/* 2. Content Info Text & Action Buttons */}
        <div className="p-6 flex flex-col justify-between grow relative">
          <div>
            <h3
              className="text-base sm:text-lg font-bold text-brandInk tracking-wide mb-2 group-hover:text-brandPrimary transition-colors duration-200 uppercase"
              itemProp="name"
            >
              {project.title}
            </h3>

            <p
              className="text-brandMuted text-xs sm:text-[13px] leading-relaxed tracking-normal mb-5 font-normal font-sans"
              itemProp="description"
            >
              {project.description}
            </p>

            <div className="flex items-center gap-2.5 mb-6">
              {hasLiveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demonstration of ${project.title} in a new tab`}
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brandPrimary text-white font-bold text-[11px] tracking-wide uppercase shadow-[0_4px_16px_rgba(8,145,178,0.25)] hover:bg-brandSecondary active:scale-[0.98] transition-all duration-200 ${focusRing}`}
                >
                  Live Demo
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code for ${project.title} on GitHub in a new tab`}
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-transparent border border-brandLine text-brandMuted font-semibold text-[11px] tracking-wide uppercase hover:bg-brandPrimary/10 hover:text-brandPrimary hover:border-brandPrimary/30 active:scale-[0.98] transition-all duration-200 ${focusRing}`}
                >
                  Code
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* 3. Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-brandLine/70 w-full">
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="text-[9px] sm:text-[10px] bg-brandSoft text-brandMuted px-2.5 py-1 rounded-md border border-brandLine tracking-wide font-mono transition-all duration-200 hover:text-brandPrimary hover:border-brandPrimary/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const componentId = useId();

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
      className="relative py-12 sm:py-16 lg:py-16 bg-brandBg text-brandInk overflow-hidden border-t border-brandLine font-sans scroll-mt-28"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 900px" }}
      aria-labelledby={`${componentId}-heading`}
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-size-[3rem_3rem] sm:bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-brandPrimary/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <header className="flex flex-col mb-8 sm:mb-12 text-center items-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewOptions}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-brandPrimary/10 border border-brandPrimary/20 text-[10px] sm:text-xs font-mono tracking-widest text-brandPrimary uppercase mb-3"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-brandPrimary"
              aria-hidden="true"
            />
            My Recent Creations
          </motion.div>

          <h2
            id={`${componentId}-heading`}
            className="text-2xl sm:text-4xl font-extrabold text-brandInk leading-tight uppercase tracking-tight"
          >
            Featured <span className="text-brandPrimary">Projects.</span>
          </h2>
        </header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewOptions}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <meta
            itemProp="numberOfItems"
            content={PROJECT_DATA.length.toString()}
          />
          <meta
            itemProp="itemListOrder"
            content="https://schema.org/OrderAscending"
          />

          {PROJECT_DATA.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </motion.div>

        {/* Animated Stats Strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brandLine rounded-3xl border border-brandLine overflow-hidden mt-12 sm:mt-16 shadow-lg"
        >
          {projectStats.map((stat) => (
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
              className="bg-white px-6 py-8 sm:py-10 text-center"
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
      </div>
    </section>
  );
}

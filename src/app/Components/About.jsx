"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const featureCards = [
    {
      title: "Strategic Planning",
      desc: "Engineering scalable frontend architectures with Next.js for high-performance enterprise applications.",
      icon: "◈",
      borderColor: "rgba(212, 175, 55, 0.3)",
    },
    {
      title: "Creative Design",
      desc: "Crafting elite UI/UX layouts that blend metallic aesthetics with pixel-perfect responsive precision.",
      icon: "✧",
      borderColor: "rgba(255, 255, 255, 0.1)",
    },
    {
      title: "Technical Execution",
      desc: "Clean, robust codebases using TypeScript and Tailwind CSS for seamless cross-platform experiences.",
      icon: "⚙",
      borderColor: "rgba(212, 175, 55, 0.3)",
    },
  ];

  if (!mounted) return null;

  // Custom configuration to force safety element opacity mapping during scroll frames
  const viewOptions = { once: true, margin: "-40px" };

  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 bg-[#0a0a0c] z-20 block overflow-hidden w-full clear-both"
    >
      {/* Background Ambient Luxury Gold Glow */}
      <div className="absolute top-0 right-0 w-70 sm:w-125 h-70 sm:h-125 bg-[#d4af37]/4 blur-[100px] sm:blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* TOP SECTION: Fully Responsive Flexible Grid Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-24">
          {/* Left Side Content Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewOptions}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 lg:col-span-6 z-20 text-center lg:text-left justify-items-center lg:justify-items-start"
          >
            <span className="text-[#d4af37] text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
              Professional Bio
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#e2e8f0] leading-tight mb-5 sm:mb-6 uppercase tracking-tight">
              Working <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#d4af37] via-[#ffffff] to-[#d4af37]">
                With Precision
              </span>
            </h2>

            <p className="text-[#e2e8f0]/70 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              I am Malik Kashan, a specialist in engineering premium digital
              interfaces. My approach focuses on bridging the gap between elite
              design aesthetics and high-performance technical execution.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-[#d4af37] text-[#0a0a0c] text-xs font-bold uppercase tracking-widest rounded-lg shadow-lg shadow-[#d4af37]/10 hover:shadow-[#d4af37]/30 transition-all duration-300 w-full sm:w-auto"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Right Side Visual Component Wireframe - Enhanced Mobile Adaptability */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewOptions}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="grid grid-cols-1 lg:col-span-6 relative justify-center lg:justify-end min-h-60 sm:min-h-75 w-full mt-4 lg:mt-0"
          >
            {/* Top Back Layer Glass Block */}
            <div className="absolute top-0 left-6 lg:left-12 w-24 sm:w-32 h-10 sm:h-12 bg-[#d4af37]/5 border border-[#d4af37]/15 rounded-lg backdrop-blur-md pointer-events-none" />

            {/* Main Interactive Graphical Center Frame Container */}
            <div className="relative w-full max-w-120 sm:max-w-125 aspect-video rounded-xl bg-[#111114]/90 border border-white/6 shadow-[0_24px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col justify-between p-5 sm:p-6 mt-6 z-10 mx-auto lg:mr-0">
              <div className="flex justify-between items-start">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <span className="font-mono text-[9px] sm:text-[10px] text-white/30 tracking-widest">
                  SYS.ARC_v2.06
                </span>
              </div>

              <div>
                <p className="font-mono text-[10px] sm:text-xs text-[#d4af37] uppercase tracking-wider mb-0.5 sm:mb-1">
                  Production Mode
                </p>
                <p className="text-[10px] sm:text-[11px] text-white/40 font-light tracking-wide">
                  Hydration Clean & Optimized Infrastructure Framework
                </p>
              </div>
            </div>

            {/* Bottom Front Layer Metallic Shadow Block */}
            <div className="absolute -bottom-4 right-4 lg:right-4 w-32 sm:w-40 h-12 sm:h-16 bg-white/2 border border-white/5 rounded-lg backdrop-blur-md z-20 pointer-events-none hidden sm:block" />
          </motion.div>
        </div>

        {/* BOTTOM SECTION: 3 Cards Responsive Fluid Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20 w-full">
          {featureCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewOptions}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6, borderColor: "#d4af37" }}
              style={{ borderColor: card.borderColor }}
              className="p-6 sm:p-8 rounded-2xl bg-[#111114]/90 border backdrop-blur-xl relative group transition-all duration-300 min-h-55 sm:min-h-62.5 flex flex-col justify-between w-full"
            >
              <div className="cursor-pointer w-full">
                <div
                  className="text-xl sm:text-2xl text-[#d4af37] mb-3 sm:mb-4 font-mono select-none"
                  aria-hidden="true"
                >
                  {card.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#e2e8f0] mb-2 sm:mb-3 uppercase tracking-wide group-hover:text-[#d4af37] transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed tracking-wide font-light">
                  {card.desc}
                </p>
              </div>

              {/* Responsive Micro Arrow UI Element */}
              <div className="flex justify-end mt-4 w-full" aria-hidden="true">
                <div className="text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors transform group-hover:translate-x-1 duration-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

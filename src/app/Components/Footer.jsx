"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0c] w-full border-t border-white/10 overflow-hidden clear-both z-20">
      {/* Optimized Ambient Glow (GPU Accelerated) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-16 bg-[#d4af37]/10 blur-[80px] pointer-events-none -z-10 transform-gpu" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
          {/* LEFT CONTAINER: LOGO WITH IMAGE + DYNAMIC TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center gap-3.5 text-left"
          >
            {/* Circular Logo Image Wrapper */}
            <div className="relative h-11 w-11 rounded-full border border-white/10 bg-[#111114] flex items-center justify-center p-0.5 shadow-xl overflow-hidden group">
              <Image
                src="/logo.png"
                alt="Malik Kashan Official Portfolio Branding Logo"
                width={44}
                height={44}
                className="h-full w-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Typography Matrix Segment */}
            <div className="flex flex-col justify-center">
              <span className="text-[13px] font-extrabold tracking-[0.18em] text-[#ffffff] uppercase leading-none mb-1">
                Malik
              </span>
              <span className="text-[11px] font-bold tracking-[0.15em] text-[#d4af37] uppercase leading-none">
                Kashan
              </span>
            </div>
          </motion.div>

          {/* RIGHT CONTAINER: MINIMAL LINKS WITH PREMIUM HOVER METRIC */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
            className="flex flex-col sm:items-end items-center gap-2"
          >
            <nav className="flex items-center flex-wrap justify-center gap-x-6 gap-y-2">
              <a
                href="#"
                aria-label="View Privacy Policy"
                className="text-[10px] font-mono tracking-wider uppercase text-white/50 hover:text-[#d4af37] transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                aria-label="View Terms of Service"
                className="text-[10px] font-mono tracking-wider uppercase text-white/50 hover:text-[#d4af37] transition-colors duration-200"
              >
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                aria-label="Scroll back to the top of the page"
                className="text-[10px] font-mono tracking-wider uppercase text-[#d4af37] hover:text-[#ffffff] font-bold transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
              >
                Back To Top ↑
              </button>
            </nav>

            <p className="text-[9px] font-mono text-white/40 tracking-wide mt-1">
              &copy; {currentYear} Malik Kashan. All Rights Reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

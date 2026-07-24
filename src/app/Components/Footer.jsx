"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="relative bg-[#0a0a0c] w-full border-t border-white/3 overflow-hidden clear-both z-20">
      {/* Subtle Bottom Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-75 sm:w-125 h-15 sm:h-20 bg-[#d4af37]/1.5 blur-[60px] pointer-events-none -z-10" />

      <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
          {/* LEFT CONTAINER: LOGO WITH IMAGE + DYNAMIC TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3.5 text-left"
          >
            {/* Circular Logo Image Wrapper */}
            <div className="relative h-11 w-11 rounded-full border border-white/8 bg-[#111114] flex items-center justify-center p-0.5 shadow-[0_4px_20px_rgba(0,0,0,0.4)] overflow-hidden group">
              <img
                src="/logo.png" // Public folder me rakhi logo file ka link yahan match karein (.png/.jpg/.svg)
                alt="Malik Kashan Official Portfolio Branding Logo"
                className="h-full w-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Typography Matrix Segment */}
            <div className="flex flex-col justify-center">
              <div className="text-[13px] font-extrabold tracking-[0.18em] text-[#ffffff] uppercase leading-none mb-1">
                Malik
              </div>
              <div className="text-[11px] font-bold tracking-[0.15em] text-[#d4af37] uppercase leading-none">
                Kashan
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTAINER: MINIMAL LINKS WITH PREMIUM HOVER METRIC */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:items-end items-center gap-2"
          >
            <div className="flex items-center flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                {
                  label: "Privacy Policy",
                  href: "#",
                  aria: "View Privacy Policy",
                },
                {
                  label: "Terms of Service",
                  href: "#",
                  aria: "View Terms of Service",
                },
                {
                  label: "Back To Top ↑",
                  href: "#",
                  aria: "Scroll back to the top of the page",
                },
              ].map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  aria-label={link.aria}
                  whileHover={{ y: -1 }}
                  onClick={(e) => {
                    if (link.label.includes("Top")) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`text-[10px] font-mono tracking-wider uppercase transition-colors duration-300 ${
                    link.label.includes("Top")
                      ? "text-[#d4af37] hover:text-[#ffffff] font-bold"
                      : "text-white/40 hover:text-[#d4af37]"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <p className="text-[9px] font-mono text-white/20 tracking-wide mt-1">
              &copy; {currentYear} Malik Kashan. All Rights Reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

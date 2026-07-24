"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Mismatch error fix karne ke liye client mount check
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    // Ultra-Premium Island UI Framework Layout
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-300 z-50 rounded-2xl bg-brandBg/75 backdrop-blur-md border border-white/4 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300">
      {/* Subtle interior lighting glare effect */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/2 to-transparent rounded-2xl pointer-events-none" />

      <nav
        className="h-20 px-5 sm:px-6 lg:px-8 flex items-center justify-between relative z-10"
        aria-label="Main Navigation"
      >
        {/* Logo and Typography Alignment */}
        <a
          href="/"
          className="flex items-center gap-3 group shrink-0 transition-transform duration-300 hover:scale-[1.01]"
          aria-label="Malik Kashan Portfolio Homepage"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white/3 border border-white/8 p-1 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            <Image
              src="/logo.png"
              alt="Malik Kashan - Professional Portfolio Logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-brandSilver uppercase leading-none">
              Malik
            </span>
            <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.15em] text-brandGold uppercase mt-1">
              Kashan
            </span>
          </div>
        </a>

        {/* Desktop Links - Hidden on Mobile & Tablets (lg breakpoint) */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-xs tracking-widest text-brandSilver/70 hover:text-brandGold font-medium uppercase transition-colors duration-300 relative group py-1 block"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-brandGold group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right Action Side Wrapper */}
        <div className="flex items-center gap-4 shrink-0">
          {/* CTA Action Button - ONLY Visible on Desktop Large Screens */}
          <a
            href="#contact"
            className="hidden lg:inline-flex relative items-center justify-center px-5 py-2 text-xs font-semibold tracking-widest text-brandSilver uppercase transition-all duration-300 rounded-xl group border border-white/8 bg-white/3 hover:border-brandGold/40 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
          >
            <span className="absolute inset-0 w-full h-full bg-brandGold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 group-hover:text-brandGold transition-colors duration-300">
              Let's Talk
            </span>
          </a>

          {/* Hamburger Menu Icon Trigger - Visible on Mobile & Tablets */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl border border-white/8 bg-white/2 hover:border-brandGold/40 transition-all duration-300"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-menu"
          >
            <div className="space-y-1.5 w-5">
              <span
                className={`block h-0.5 bg-brandSilver transition-all duration-300 ease-out rounded-full ${isOpen && mounted ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-brandSilver transition-all duration-300 ease-out rounded-full ${isOpen && mounted ? "opacity-0" : "w-3/4 ml-auto"}`}
              />
              <span
                className={`block h-0.5 bg-brandSilver transition-all duration-300 ease-out rounded-full ${isOpen && mounted ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Dynamic Slide Drawer Panel - Handles both Mobile & Tablet viewports */}
      <div
        id="mobile-navigation-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-white/4 bg-brandBg/98 rounded-b-2xl ${
          isOpen && mounted
            ? "max-h-95 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-xs font-medium tracking-widest text-brandSilver/80 hover:text-brandGold uppercase border-b border-white/2 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* Let's Talk CTA Wrapper inside the Dropdown Drawer (Mobile + Tablet) */}
          <li className="pt-3">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center py-2.5 text-xs font-semibold tracking-widest text-brandBg bg-brandGold rounded-xl transition-all duration-200 active:scale-[0.98] hover:bg-white hover:text-brandBg shadow-[0_4px_12px_rgba(212,175,55,0.2)]"
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

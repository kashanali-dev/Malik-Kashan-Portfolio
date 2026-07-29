"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Global Semantic Navigation Wrapper */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 rounded-2xl bg-brandBg/75 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 font-sans transform-gpu">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent rounded-2xl pointer-events-none" />

        <nav
          className="h-20 px-5 sm:px-6 lg:px-8 flex items-center justify-between relative z-10"
          aria-label="Main Navigation"
        >
          {/* Logo Brand Layer */}
          <a
            href="/"
            className="flex items-center gap-3 group shrink-0 transition-transform duration-300 hover:scale-[1.01]"
            aria-label="Malik Kashan Portfolio Homepage"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 p-1 shadow-md">
              <Image
                src="/logo.png"
                alt="Malik Kashan Official Portfolio Branding Logo"
                width={44}
                height={44}
                sizes="(max-width: 640px) 40px, 44px"
                className="object-contain w-full h-full"
                priority
                quality={90}
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

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs tracking-widest text-brandSilver/70 hover:text-brandGold font-semibold uppercase transition-colors duration-200 relative group py-1 block"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-brandGold group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action Side */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              className="hidden lg:inline-flex relative items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-brandSilver uppercase transition-all duration-300 rounded-xl group border border-white/10 bg-white/5 hover:border-brandGold/40 overflow-hidden shadow-md"
            >
              <span className="absolute inset-0 w-full h-full bg-brandGold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 group-hover:text-brandGold transition-colors duration-300">
                Let's Talk
              </span>
            </a>

            {/* Mobile Hamburger Menu Icon Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:border-brandGold/40 transition-all duration-300 relative z-50 cursor-pointer"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
            >
              <div className="space-y-1.5 w-5">
                <span
                  className={`block h-0.5 bg-brandSilver transition-all duration-300 ease-out rounded-full ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-brandSilver transition-all duration-300 ease-out rounded-full ${
                    isOpen ? "opacity-0" : "w-3/4 ml-auto"
                  }`}
                />
                <span
                  className={`block h-0.5 bg-brandSilver transition-all duration-300 ease-out rounded-full ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Dark Overlay Backdrop when mobile drawer is active */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Optimized Right-Side Slide-In Drawer Navigation Menu */}
      <div
        id="mobile-navigation-menu"
        className={`fixed top-0 right-0 h-screen w-[75%] sm:w-[50%] max-w-sm bg-brandBg/95 backdrop-blur-xl border-l border-white/10 z-40 lg:hidden shadow-2xl flex flex-col pt-28 pb-10 px-8 transition-transform duration-300 ease-in-out font-sans transform-gpu ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav
          aria-label="Mobile Navigation Drawer"
          className="flex flex-col gap-8"
        >
          {/* Nav Links Matrix */}
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm font-semibold tracking-widest text-brandSilver/80 hover:text-brandGold uppercase border-b border-white/10 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Let's Talk CTA */}
          <div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center py-3.5 text-xs font-bold tracking-widest text-brandBg bg-brandGold rounded-xl transition-all duration-200 active:scale-[0.98] hover:bg-white hover:text-brandBg shadow-md uppercase"
            >
              Let's Talk
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

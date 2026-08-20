"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Global Semantic Navigation Wrapper */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 rounded-2xl bg-white/80 backdrop-blur-md border border-brandLine shadow-[0_8px_32px_rgba(15,23,42,0.08)] transition-all duration-300 font-sans transform-gpu">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-brandPrimary/5 to-transparent rounded-2xl pointer-events-none" />

        <nav
          className="h-20 px-5 sm:px-6 lg:px-8 flex items-center justify-between relative z-10"
          aria-label="Main Navigation"
        >
          {/* Logo Brand Layer */}
<Link
            href="/"
            className="flex items-center gap-3 group shrink-0 transition-transform duration-300 hover:scale-[1.01]"
            aria-label="Malik Kashan Portfolio Homepage"
          >
            <Logo size={44} />
            <div className="flex flex-col justify-center leading-none">
              <span className="text-sm font-extrabold tracking-[0.14em] text-brandInk uppercase">
                Malik Kashan
              </span>
              <span className="text-[8px] font-semibold tracking-[0.32em] text-brandPrimary uppercase mt-1">
                Frontend Developer
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-xs tracking-widest text-brandMuted hover:text-brandPrimary font-semibold uppercase transition-colors duration-200 relative group py-1 block"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-brandPrimary group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Action Side */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/#contact"
              className="hidden lg:inline-flex relative items-center justify-center px-5 py-2 text-xs font-bold tracking-widest text-brandInk uppercase transition-all duration-300 rounded-xl group overflow-hidden animated-border"
            >
              <span className="relative z-10 group-hover:text-brandPrimary transition-colors duration-300">
                Hire Me
              </span>
            </Link>

            {/* Mobile Hamburger Menu Icon Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl border border-brandLine bg-white hover:border-brandPrimary/50 transition-all duration-300 relative z-50 cursor-pointer"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
            >
              <div className="space-y-1.5 w-5">
                <span
                  className={`block h-0.5 bg-brandInk transition-all duration-300 ease-out rounded-full ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-brandInk transition-all duration-300 ease-out rounded-full ${
                    isOpen ? "opacity-0" : "w-3/4 ml-auto"
                  }`}
                />
                <span
                  className={`block h-0.5 bg-brandInk transition-all duration-300 ease-out rounded-full ${
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
        className={`fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
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
        className={`fixed top-0 right-0 h-screen w-[75%] sm:w-[50%] max-w-sm bg-white/95 backdrop-blur-xl border-l border-brandLine z-40 lg:hidden shadow-lg flex flex-col pt-28 pb-10 px-8 transition-transform duration-300 ease-in-out font-sans transform-gpu ${
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
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm font-semibold tracking-widest text-brandMuted hover:text-brandPrimary uppercase border-b border-brandLine transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Let's Talk CTA */}
          <div>
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center py-3.5 text-xs font-bold tracking-widest text-white bg-brandPrimary rounded-xl transition-all duration-200 active:scale-[0.98] hover:bg-brandSecondary shadow-md uppercase"
            >
              Hire Me
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

// src/app/not-found.jsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-brandBg overflow-hidden flex items-center justify-center font-sans">
      {/* Grid Mesh Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-size-[3rem_3rem] sm:bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient Glows */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-125 h-72 sm:h-125 rounded-full bg-brandPrimary/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-60 sm:w-100 h-60 sm:h-100 rounded-full bg-brandSecondary/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center">
        <p className="font-mono text-[10px] tracking-[0.35em] text-brandPrimary uppercase mb-4">
          Error 404
        </p>

        <h1 className="text-8xl sm:text-9xl font-black text-brandInk uppercase leading-none tracking-tight">
          4<span className="text-brandPrimary">0</span>4
        </h1>

        <div
          className="mx-auto mt-8 mb-6 w-16 h-px bg-linear-to-r from-transparent via-brandPrimary to-transparent"
          aria-hidden="true"
        />

        <h2 className="text-xl sm:text-3xl font-extrabold text-brandInk uppercase tracking-tight mb-4">
          Page Not Found
        </h2>

        <p className="text-brandMuted text-sm sm:text-base font-light leading-relaxed max-w-md mx-auto mb-10">
          The page you are looking for was moved, removed, or never existed.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-brandPrimary text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-brandPrimary/20 hover:bg-brandSecondary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-brandInk text-xs font-bold uppercase tracking-widest rounded-xl border border-brandLine hover:border-brandPrimary/50 hover:text-brandPrimary transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>

        <p className="mt-12 font-mono text-[10px] tracking-widest text-brandMuted/50 uppercase">
          Malik Kashan // Frontend &amp; WordPress Developer
        </p>
      </div>
    </main>
  );
}
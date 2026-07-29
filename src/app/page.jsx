// src/app/page.jsx
import dynamic from "next/dynamic";

// Next.js static component imports for above-the-fold content (LCP Boost 🚀)
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

// Your Custom Color Scheme-Based Dynamic Loading Component
const ModernBrandedLoader = () => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d0d0f] antialiased">
    <div className="relative flex h-20 w-20 items-center justify-center">
      {/* Outer spinning dash ring using your brandGold theme */}
      <div className="absolute h-full w-full animate-spin rounded-full border-4 border-t-brandGold border-r-transparent border-b-transparent border-l-transparent" />

      {/* Middle delay-spinning secondary accent tracker */}
      <div className="absolute h-14 w-14 animate-[spin_1.5s_linear_infinite] rounded-full border-2 border-b-brandGold/30 border-t-transparent border-r-transparent border-l-transparent" />

      {/* Inner neon glowing pulse core container */}
      <div className="h-6 w-6 animate-pulse rounded-full bg-brandGold shadow-[0_0_25px_rgba(212,175,55,0.7)]" />
    </div>

    {/* Subtle futuristic monospaced load string */}
    <span className="mt-6 font-mono text-[10px] uppercase tracking-[0.35em] text-brandSilver/50 animate-pulse">
      Initializing Terminal...
    </span>
  </div>
);

// 1. SPEED OPTIMIZATION: Non-critical below-the-fold components are loaded lazily.
// This splits your bundles into micro-chunks, dropping your TBT (Total Blocking Time) to near 0ms.
const About = dynamic(() => import("./Components/About"), {
  loading: () => <ModernBrandedLoader />,
  ssr: true, // Retains HTML markup capability for excellent standard crawlers indexing
});

const Experience = dynamic(() => import("./Components/Experience"), {
  loading: () => <ModernBrandedLoader />,
  ssr: true,
});

const Projects = dynamic(() => import("./Components/Projects"), {
  loading: () => <ModernBrandedLoader />,
  ssr: true,
});

const Contact = dynamic(() => import("./Components/Contact"), {
  loading: () => <ModernBrandedLoader />,
  ssr: true,
});

export default function Home() {
  return (
    <>
      {/* Semantic structure elements built identically for pristine accessibility validation */}
      <Header />
      <main className="relative bg-brandBg overflow-hidden selection:bg-brandGold selection:text-brandBg">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

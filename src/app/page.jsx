// src/app/page.jsx
import dynamic from "next/dynamic";

// Next.js static component import for above-the-fold content (LCP Boost 🚀)
import Hero from "./Components/Hero";
import BlogPreview from "./Components/BlogPreview";

// Custom light-theme section skeleton loader.
// Shown only briefly while a below-the-fold dynamic chunk hydrates.
const SectionSkeleton = () => (
  <div className="relative w-full bg-brandBg" aria-hidden="true">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="flex flex-col items-center mb-10">
        <div className="h-5 w-44 rounded-full skeleton-shimmer" />
        <div className="mt-4 h-8 w-72 max-w-full rounded-xl skeleton-shimmer" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="rounded-3xl bg-white border border-brandLine p-6"
          >
            <div className="h-4 w-24 rounded-md skeleton-shimmer mb-5" />
            <div className="h-3 w-full rounded-md skeleton-shimmer mb-2.5" />
            <div className="h-3 w-5/6 rounded-md skeleton-shimmer mb-2.5" />
            <div className="h-3 w-4/6 rounded-md skeleton-shimmer mb-8" />
            <div className="h-10 w-36 rounded-xl skeleton-shimmer" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 1. SPEED OPTIMIZATION: Non-critical below-the-fold components are loaded lazily.
const About = dynamic(() => import("./Components/About"), {
  loading: () => <SectionSkeleton />,
  ssr: true,
});

const Experience = dynamic(() => import("./Components/Experience"), {
  loading: () => <SectionSkeleton />,
  ssr: true,
});

const Skills = dynamic(() => import("./Components/Skills"), {
  loading: () => <SectionSkeleton />,
  ssr: true,
});

const Projects = dynamic(() => import("./Components/Projects"), {
  loading: () => <SectionSkeleton />,
  ssr: true,
});

const Testimonials = dynamic(() => import("./Components/Testimonials"), {
  loading: () => <SectionSkeleton />,
  ssr: true,
});

const Contact = dynamic(() => import("./Components/Contact"), {
  loading: () => <SectionSkeleton />,
  ssr: true,
});

export default function Home() {
  return (
    <main className="relative bg-brandBg overflow-hidden selection:bg-brandPrimary selection:text-white">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </main>
  );
}
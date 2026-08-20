// src/app/Components/PageHeader.jsx
// Reusable page hero for inner pages (About, Services, Projects, Blog, legal pages).
import Link from "next/link";
import { SITE } from "../lib/site";

export default function PageHeader({ badge, title, highlight, description }) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: badge,
      },
    ],
  };

  return (
    <section className="relative pt-32 sm:pt-40 pb-14 sm:pb-20 bg-brandBg overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Grid Mesh Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-size-[3rem_3rem] sm:bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Ambient Glows */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-100 h-72 sm:h-100 rounded-full bg-brandPrimary/10 blur-[120px] pointer-events-none -z-10 transform-gpu"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-brandSecondary/10 blur-[100px] pointer-events-none -z-10 transform-gpu"
        aria-hidden="true"
      />

      {/* Bottom Accent Line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-brandPrimary/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-2 text-[10px] font-mono tracking-widest uppercase text-brandMuted mb-6"
        >
          <Link href="/" className="hover:text-brandPrimary transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-brandPrimary">{badge}</span>
        </nav>

        {badge && (
          <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-brandPrimary/10 border border-brandPrimary/20 text-[10px] sm:text-xs font-mono tracking-widest text-brandPrimary uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary" />
            {badge}
          </span>
        )}

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-brandInk leading-tight uppercase tracking-tight">
          {title}{" "}
          {highlight && (
            <span className="bg-linear-to-r from-brandPrimary to-brandSecondary bg-clip-text text-transparent">
              {highlight}
            </span>
          )}
        </h1>

        {description && (
          <p className="mt-5 text-sm sm:text-base text-brandMuted leading-relaxed max-w-2xl mx-auto font-light">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
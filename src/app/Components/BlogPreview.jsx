// src/app/Components/BlogPreview.jsx
// Home page blog section — shows the 3 latest articles linking to their detail pages.
import Link from "next/link";
import Image from "next/image";
import { ARTICLES } from "../lib/blog";

export default function BlogPreview() {
  const latest = ARTICLES.slice(0, 3);

  return (
    <section
      id="blog"
      className="relative py-12 sm:py-16 lg:py-16 bg-white text-brandInk overflow-hidden border-t border-brandLine scroll-mt-28"
      aria-labelledby="blog-preview-heading"
    >
      {/* Ambient Glow */}
      <div
        className="absolute top-0 right-0 w-72 sm:w-125 h-72 sm:h-125 bg-brandPrimary/8 blur-[120px] sm:blur-[180px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="flex flex-col mb-8 sm:mb-12 text-center items-center">
          <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-brandPrimary/10 border border-brandPrimary/20 text-[10px] sm:text-xs font-mono tracking-widest text-brandPrimary uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary" />
            From The Blog
          </span>
          <h2
            id="blog-preview-heading"
            className="text-2xl sm:text-4xl font-extrabold text-brandInk leading-tight uppercase tracking-tight"
          >
            Latest <span className="text-brandPrimary">Insights.</span>
          </h2>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group relative overflow-hidden flex flex-col justify-between w-full rounded-3xl bg-brandBg border border-brandLine transition-all duration-300 hover:-translate-y-2 hover:border-brandPrimary/30 hover:shadow-[0_16px_32px_-12px_rgba(15,23,42,0.1)]"
            >
              <div className="relative block w-full aspect-16/10 overflow-hidden bg-brandSoft">
                <Image
                  src={article.image}
                  alt={`Illustration for ${article.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-4 left-4 inline-block px-2.5 py-0.5 rounded font-mono text-[9px] tracking-wider bg-white/90 text-brandPrimary border border-brandPrimary/20 uppercase backdrop-blur-md shadow-lg z-10">
                  {article.category}
                </span>
              </div>

              <div className="p-6 flex flex-col justify-between grow">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-brandMuted/70 uppercase tracking-wider mb-2">
                    <span>{article.date}</span>
                    <span aria-hidden="true">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-brandInk tracking-wide mb-2 group-hover:text-brandPrimary transition-colors duration-200 uppercase">
                    {article.title}
                  </h3>
                  <p className="text-brandMuted text-xs sm:text-[13px] leading-relaxed font-light mb-4">
                    {article.excerpt}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brandPrimary transition-all duration-300 group-hover:gap-3">
                  Read Article
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-brandPrimary text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-brandPrimary/20 hover:bg-brandSecondary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
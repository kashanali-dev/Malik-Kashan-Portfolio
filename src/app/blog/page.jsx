// src/app/blog/page.jsx
import Link from "next/link";
import Image from "next/image";
import PageHeader from "../Components/PageHeader";
import { ARTICLES } from "../lib/blog";
import { SITE } from "../lib/site";

export const metadata = {
  title: "Blog | Web Development Tips & Insights - Malik Kashan",
  description:
    "Articles on web development, Next.js, WordPress, UI/UX design and performance optimization from Malik Kashan, a frontend developer in Lahore, Pakistan.",
  alternates: {
    canonical: `${SITE.url}blog`,
  },
  openGraph: {
    title: "Blog | Web Development Tips & Insights",
    description:
      "Learn about web development, Next.js, WordPress and performance optimization from Malik Kashan.",
    url: `${SITE.url}blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Web Development Tips & Insights",
    description:
      "Learn about web development, Next.js, WordPress and performance optimization from Malik Kashan.",
    images: ["/og-image.png"],
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        badge="Blog"
        title="Insights &"
        highlight="Tutorials"
        description="Practical articles on web development, design and performance — written from real client work, not theory."
      />

      <main className="relative bg-white pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {ARTICLES.map((article) => (
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

          <section className="mt-16 sm:mt-20 rounded-3xl bg-brandPrimary/5 border border-brandPrimary/20 p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brandInk uppercase tracking-tight mb-3">
              Want help with <span className="text-brandPrimary">your project?</span>
            </h2>
            <p className="text-brandMuted text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto mb-8">
              I build fast, modern websites and web apps. Let&apos;s talk about what you need.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brandPrimary text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-brandPrimary/20 hover:bg-brandSecondary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Get in Touch
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
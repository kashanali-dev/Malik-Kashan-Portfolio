// src/app/Components/BlogArticleLayout.jsx
import Link from "next/link";
import { SITE } from "../lib/site";
import { ARTICLES } from "../lib/blog";

const MONTH_INDEX = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12",
};

// Converts "August 2026" -> "2026-08-01" (ISO date for structured data).
function toIsoDate(dateStr) {
  const [month, year] = dateStr.split(" ");
  return `${year}-${MONTH_INDEX[month] || "01"}-01`;
}

export default function BlogArticleLayout({
  category,
  title,
  date,
  readTime,
  intro,
  sections,
  conclusion,
}) {
  // Match the article's own image + slug from the central data source so the
  // Article schema always points at the correct canonical URL and image.
  const article = ARTICLES.find((a) => a.title === title);
  const slug = article ? article.slug : title.toLowerCase().replace(/\s+/g, "-");
  const articleUrl = `${SITE.url}blog/${slug}`;
  const imageUrl = article
    ? `${SITE.url}${article.image}`
    : `${SITE.url}/og-image.png`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    image: imageUrl,
    articleSection: category,
    inLanguage: "en-US",
    datePublished: toIsoDate(date),
    dateModified: toIsoDate(date),
    author: {
      "@type": "Person",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: `${SITE.name} Developer Portfolio`,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logo.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

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
        name: "Blog",
        item: `${SITE.url}blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 bg-brandBg overflow-hidden">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-size-[3rem_3rem] sm:bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-56 bg-brandPrimary/10 blur-[100px] pointer-events-none -z-10 transform-gpu"
          aria-hidden="true"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-[10px] font-mono tracking-widest uppercase text-brandMuted mb-5"
          >
            <Link href="/" className="hover:text-brandPrimary transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-brandPrimary transition-colors">
              Blog
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-brandPrimary">{category}</span>
          </nav>

          <h1 className="text-2xl sm:text-4xl font-black text-brandInk leading-tight uppercase tracking-tight">
            {title}
          </h1>

          <div className="flex items-center justify-center gap-3 mt-5 text-[10px] font-mono text-brandMuted/70 uppercase tracking-wider">
            <span>By {SITE.name}</span>
            <span aria-hidden="true">•</span>
            <span>{date}</span>
            <span aria-hidden="true">•</span>
            <span>{readTime}</span>
          </div>
        </div>
      </section>

      <main className="relative bg-white pb-16 sm:pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base sm:text-lg text-brandInk leading-relaxed font-medium border-l-4 border-brandPrimary pl-4">
            {intro}
          </p>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-lg sm:text-2xl font-bold text-brandInk uppercase tracking-wide mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.body.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-sm sm:text-[15px] text-brandMuted leading-relaxed font-light"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            {conclusion && (
              <section>
                <h2 className="text-lg sm:text-2xl font-bold text-brandInk uppercase tracking-wide mb-4">
                  Conclusion
                </h2>
                <div className="space-y-4">
                  {conclusion.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-sm sm:text-[15px] text-brandMuted leading-relaxed font-light"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Author + CTA */}
          <div className="mt-14 rounded-3xl bg-brandBg border border-brandLine p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-brandPrimary/10 border border-brandPrimary/25 flex items-center justify-center text-xs font-bold text-brandPrimary font-mono">
                MK
              </div>
              <div>
                <p className="text-sm font-bold text-brandInk tracking-wide">Malik Kashan</p>
                <p className="text-[10px] font-mono text-brandMuted/70 tracking-wider uppercase mt-0.5">
                  Frontend & WordPress Developer, Lahore, Pakistan
                </p>
              </div>
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-brandPrimary text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-brandPrimary/20 hover:bg-brandSecondary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Hire Me for Your Project
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
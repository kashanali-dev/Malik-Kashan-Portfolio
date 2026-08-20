// src/app/lib/seo.js
// Shared SEO metadata builder for blog articles — keeps OpenGraph/Twitter
// markup consistent across every article without duplicating it per page.
import { SITE } from "./site";

export function blogMetadata({ title, description, slug, keywords }) {
  const url = `${SITE.url}blog/${slug}`;
  return {
    title,
    description,
    ...(keywords && keywords.length ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      locale: "en_US",
      siteName: `${SITE.name} Developer Portfolio`,
      images: [
        {
          url: `${SITE.url}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE.url}/og-image.png`],
    },
  };
}
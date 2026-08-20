// src/app/sitemap.js
import { SITE } from "./lib/site";
import { ARTICLES } from "./lib/blog";

// Fixed "last modified" for stable pages — set to the most recent content update.
const LAST_MODIFIED = "2026-08-01";

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

// Converts "August 2026" -> "2026-08" so article dates stay stable across builds.
function articleLastModified(dateStr) {
  const [month, year] = dateStr.split(" ");
  return `${year}-${MONTH_INDEX[month] || "01"}`;
}

const BLOG_SLUGS = ARTICLES.map((a) => a.slug);

export default function sitemap() {
  const baseUrl = SITE.url;

  const routes = [
    { path: "", priority: 1.0, frequency: "weekly" },
    { path: "about", priority: 0.9, frequency: "monthly" },
    { path: "services", priority: 0.9, frequency: "monthly" },
    { path: "projects", priority: 0.9, frequency: "weekly" },
    { path: "blog", priority: 0.9, frequency: "weekly" },
    { path: "contact", priority: 0.8, frequency: "monthly" },
    { path: "faq", priority: 0.6, frequency: "monthly" },
    { path: "privacy-policy", priority: 0.3, frequency: "yearly" },
    { path: "terms-conditions", priority: 0.3, frequency: "yearly" },
  ];

  const blogRoutes = ARTICLES.map((article) => ({
    path: `blog/${article.slug}`,
    priority: 0.7,
    frequency: "monthly",
    lastModified: articleLastModified(article.date),
  }));

  return [...routes, ...blogRoutes].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: route.lastModified || LAST_MODIFIED,
    changeFrequency: route.frequency,
    priority: route.priority,
  }));
}
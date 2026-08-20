// src/app/robots.js
import { SITE } from "./lib/site";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE.url}sitemap.xml`,
  };
}
// src/app/blog/performance-optimization/page.jsx
import BlogArticleLayout from "../../Components/BlogArticleLayout";
import { blogMetadata } from "../../lib/seo";

export const metadata = blogMetadata({
  title: "Website Performance Optimization: A Complete Service Checklist",
  description:
    "The complete performance optimization checklist I use for clients — images, caching, code splitting, Core Web Vitals and the metrics that actually move your rankings.",
  slug: "performance-optimization",
});

export default function Article() {
  return (
    <BlogArticleLayout
      category="Performance"
      title="Website Performance Optimization: A Complete Service Checklist"
      date="January 2026"
      readTime="8 min read"
      intro="Slow websites lose money and rankings. Performance optimization is the systematic process of finding every bottleneck and fixing it. This is the exact checklist I work through for clients."
      sections={[
        {
          heading: "1. Measure Before You Touch Anything",
          body: [
            "Optimization without measurement is guesswork. I start with Lighthouse, PageSpeed Insights and Core Web Vitals data to identify which metrics are actually hurting you — LCP, INP or CLS.",
          ],
        },
        {
          heading: "2. Images Are the Biggest Win",
          body: [
            "Images usually dominate page weight. Converting to WebP or AVIF, resizing to actual display dimensions and lazy-loading below-the-fold images frequently cuts load time by half or more.",
          ],
        },
        {
          heading: "3. Caching and CDN",
          body: [
            "Browser caching stops repeat visitors re-downloading unchanged assets, and a CDN serves your site from servers near each visitor. Together they slash latency around the world.",
          ],
        },
        {
          heading: "4. JavaScript and CSS Hygiene",
          body: [
            "Splitting code so each page loads only what it needs, deferring non-critical scripts and removing unused styles all shrink what the browser must parse and execute.",
          ],
        },
        {
          heading: "5. Third-Party Script Audits",
          body: [
            "Every analytics tracker, chat widget and pixel adds load time. I audit them all and keep only what genuinely matters, loading the rest async so they never block your content.",
          ],
        },
        {
          heading: "6. Continuous Monitoring",
          body: [
            "Performance is not a one-time fix. I set up monitoring so we can see when a new script or content change drags your metrics down — and fix it before it costs you visitors.",
          ],
        },
      ]}
      conclusion={[
        "Most slow websites can be dramatically improved in a single optimization pass. The process is methodical, measurable and pays for itself through better rankings and conversions.",
        "Curious how fast your site could be? I will run a free audit and show you exactly where you are losing speed.",
      ]}
    />
  );
}
// src/app/blog/website-maintenance/page.jsx
import BlogArticleLayout from "../../Components/BlogArticleLayout";
import { blogMetadata } from "../../lib/seo";

export const metadata = blogMetadata({
  title: "Website Maintenance Services: What They Are and Why You Need Them",
  description:
    "Why every business website needs ongoing maintenance — security updates, backups, performance monitoring and the hidden costs of neglecting your website.",
  slug: "website-maintenance",
});

export default function Article() {
  return (
    <BlogArticleLayout
      category="Maintenance"
      title="Website Maintenance Services: What They Are and Why You Need Them"
      date="December 2025"
      readTime="6 min read"
      intro="A website is never 'finished'. Like a car, it needs regular upkeep to stay fast, secure and reliable. Here is what professional website maintenance actually covers and why skipping it is expensive."
      sections={[
        {
          heading: "Security Updates That Prevent Downtime",
          body: [
            "Platforms, plugins and libraries release updates constantly — many to patch security holes. A maintenance plan applies these updates carefully so your site is never left vulnerable or broken by an update.",
          ],
        },
        {
          heading: "Backups That Give You Peace of Mind",
          body: [
            "Regular automated backups mean a hack, a bad update or an accidental deletion is a minor incident instead of a disaster. I keep off-site backups so your site can be restored quickly.",
          ],
        },
        {
          heading: "Performance Monitoring",
          body: [
            "Sites slowly degrade as they grow. Monitoring tracks uptime, speed and errors so small problems are caught early — before they turn into a slow site or a crash your visitors notice.",
          ],
        },
        {
          heading: "Content Updates and Small Changes",
          body: [
            "Changing a phone number, adding a testimonial, updating prices — these small edits pile up. A maintenance retainer covers them quickly and correctly instead of you waiting days for a one-off quote.",
          ],
        },
        {
          heading: "The Real Cost of Neglect",
          body: [
            "An unmaintained site can be hacked, go down during a busy season, or rank poorly because it has slowly slowed down. Each of those costs far more than a monthly maintenance plan.",
          ],
        },
      ]}
      conclusion={[
        "Website maintenance is the cheapest insurance your business can buy. A small monthly investment keeps your site fast, secure and always working for you.",
        "Want to know if your website is protected? Send me a message and I will review its current security and maintenance state for free.",
      ]}
    />
  );
}
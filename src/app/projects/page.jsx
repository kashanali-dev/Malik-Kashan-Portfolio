// src/app/projects/page.jsx
import Link from "next/link";
import PageHeader from "../Components/PageHeader";
import { ProjectCard } from "../Components/Projects";
import { PROJECT_DATA } from "../lib/projects";
import { SITE } from "../lib/site";

export const metadata = {
  title: "Projects & Portfolio | Malik Kashan - Web Developer in Pakistan",
  description:
    "Explore the portfolio of Malik Kashan: React.js applications, Next.js platforms, WordPress websites and full-stack dashboards built for startups and enterprises.",
  alternates: {
    canonical: `${SITE.url}projects`,
  },
  openGraph: {
    title: "Projects & Portfolio | Malik Kashan",
    description:
      "A showcase of frontend projects, dashboards and web applications built by Malik Kashan, a developer based in Lahore, Pakistan.",
    url: `${SITE.url}projects`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Portfolio | Malik Kashan",
    description:
      "A showcase of frontend projects, dashboards and web applications built by Malik Kashan.",
    images: ["/og-image.png"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        badge="Portfolio"
        title="Featured"
        highlight="Projects"
        description="A selection of web applications, dashboards and platforms I have designed and built. Every project is engineered for performance, scalability and clean UX."
      />

      <main className="relative bg-brandBg pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {PROJECT_DATA.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </section>

          <section className="mt-16 sm:mt-20 rounded-3xl bg-white border border-brandLine p-8 sm:p-12 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brandInk uppercase tracking-tight mb-3">
              Want a project like <span className="text-brandPrimary">these?</span>
            </h2>
            <p className="text-brandMuted text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto mb-8">
              Let&apos;s build something even better for your business. I&apos;m available for freelance
              projects and long-term collaborations.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brandPrimary text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-brandPrimary/20 hover:bg-brandSecondary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Start Your Project
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
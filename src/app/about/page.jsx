// src/app/about/page.jsx
import Link from "next/link";
import PageHeader from "../Components/PageHeader";
import { SITE } from "../lib/site";

export const metadata = {
  title:
    "About Malik Kashan | Senior Front-End Developer in Lahore, Pakistan",
  description:
    "Meet Malik Kashan, a senior front-end developer and WordPress expert based in Lahore, Pakistan. Discover his experience, skills and approach to building high-performance web applications.",
  keywords: [
    "senior front-end developer",
    "junior front-end developer",
    "front end developer",
    "front-end developer",
    "best front-end developer in Pakistan",
    "frontend developer for hire",
    "React developer for hire",
    "Next.js developer for hire",
    "WordPress developer for hire",
    "Lahore web developer",
    "freelance front-end developer",
    "remote front-end developer",
    "web developer portfolio",
  ],
  alternates: {
    canonical: `${SITE.url}about`,
  },
  openGraph: {
    title: "About Malik Kashan | Senior Front-End Developer",
    description:
      "Senior Front-End Developer and WordPress Expert in Lahore, Pakistan. Discover Malik Kashan's experience, skills and approach.",
    url: `${SITE.url}about`,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Malik Kashan | Senior Front-End Developer",
    description:
      "Senior Front-End Developer and WordPress Expert in Lahore, Pakistan. Discover Malik Kashan's experience, skills and approach.",
    images: ["/og-image.png"],
  },
};

const skillCategories = [
  {
    category: "Core Language",
    skills: ["HTML5 & CSS3", "JavaScript (ES6+)", "TypeScript"],
    level: 98,
  },
  {
    category: "Frontend Frameworks",
    skills: ["React.js", "Next.js", "Tailwind CSS"],
    level: 95,
  },
  {
    category: "Backend & Tooling",
    skills: ["Node.js", "REST APIs", "Git / GitHub"],
    level: 88,
  },
  {
    category: "Specialized Platforms",
    skills: ["WordPress", "UI/UX Design", "Framer Motion"],
    level: 90,
  },
];

const timeline = [
  {
    year: "2024 - Present",
    role: "Custom Software Architect",
    company: "Nexus Labs International",
    desc: "Engineering premium custom software architectures and scalable web patterns for enterprise use cases.",
  },
  {
    year: "2024 - 2025",
    role: "Senior Frontend Engineer",
    company: "Premium Digital Studio",
    desc: "Scaled consumer-facing web applications with Core Web Vitals optimization and dynamic lazy hydration.",
  },
  {
    year: "2023 - 2024",
    role: "Bootstrap Layout Specialist",
    company: "Vanguard Web Dynamics",
    desc: "Developed high-speed fluid dashboards and SaaS products with enterprise Bootstrap layers and custom Sass.",
  },
  {
    year: "2020 - 2022",
    role: "Frontend Layout Specialist",
    company: "Creative Agency Hub",
    desc: "Engineered responsive client-side structures bridging static mockups with dynamic content management layers.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="About"
        title="About"
        highlight="Me"
        description="I am Malik Kashan, a specialist in engineering premium digital interfaces. My approach focuses on bridging the gap between elite design aesthetics and high-performance technical execution."
      />

      <main className="relative bg-white pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bio Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pt-4">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-brandPrimary/10 border border-brandPrimary/20 text-[10px] sm:text-xs font-mono tracking-widest text-brandPrimary uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary" />
                Professional Bio
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-brandInk leading-tight uppercase tracking-tight mb-5">
                Building Digital Experiences <span className="text-brandPrimary">With Precision</span>
              </h2>
              <div className="space-y-4 text-brandMuted text-sm sm:text-base leading-relaxed font-light">
                <p>
                  Based in Lahore, Pakistan, I specialise in crafting high-performance web
                  applications with pixel-perfect responsive layouts. From complex single-page
                  applications to full enterprise dashboards, I turn challenging design
                  architectures into flawless, scalable digital realities.
                </p>
                <p>
                  My work spans the full frontend spectrum — custom Next.js and React platforms,
                  WordPress and WooCommerce builds, and bespoke UI engineering. I obsess over
                  speed, accessibility, and clean code, so every project loads fast, ranks well,
                  and feels effortless to use.
                </p>
                <p>
                  When you hire me, you get more than code — you get a partner who treats your
                  product like my own and delivers production-grade results on time.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-brandPrimary text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-brandPrimary/20 hover:bg-brandSecondary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Let&apos;s Talk
                </Link>
                <a
                  href={SITE.cvFile}
                  download="Malik_Kashan_CV.pdf"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-white text-brandInk text-xs font-bold uppercase tracking-widest rounded-xl border border-brandLine hover:border-brandPrimary/50 hover:text-brandPrimary transition-all duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-brandBg border border-brandLine shadow-[0_10px_30px_rgba(15,23,42,0.06)] overflow-hidden">
                <div className="flex justify-between items-center px-6 py-4 border-b border-brandLine bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-brandPrimary animate-pulse" />
                    <span className="font-mono text-xs text-brandPrimary font-semibold tracking-wider uppercase">
                      Live System Core
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-brandMuted/50 px-2.5 py-1 rounded-md bg-brandSoft border border-brandLine tracking-widest">
                    v2.06.PRO
                  </span>
                </div>

                <dl className="divide-y divide-brandLine">
                  {[
                    { label: "Location", value: SITE.location.label },
                    { label: "Experience", value: "5+ Years" },
                    { label: "Availability", value: "Open to Work" },
                    { label: "Focus", value: "Frontend & WordPress" },
                    { label: "Languages", value: "English & Urdu" },
                    { label: "Response Time", value: "Within 24 Hours" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between px-6 py-4"
                    >
                      <dt className="text-[10px] uppercase tracking-widest text-brandMuted/60">
                        {row.label}
                      </dt>
                      <dd className="text-xs sm:text-sm font-semibold text-brandInk">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Stats Strip */}
                <div className="grid grid-cols-2 divide-x divide-y sm:divide-y-0 divide-brandLine bg-white border-t border-brandLine">
                  {[
                    { num: "50+", label: "Projects Delivered" },
                    { num: "5+", label: "Years Experience" },
                    { num: "40+", label: "Happy Clients" },
                    { num: "100%", label: "On-Time Delivery" },
                  ].map((stat) => (
                    <div key={stat.label} className="px-6 py-4">
                      <p className="text-lg sm:text-xl font-black text-brandPrimary font-mono">
                        {stat.num}
                      </p>
                      <p className="text-[9px] uppercase tracking-widest text-brandMuted/60 mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Skills Breakdown */}
          <section className="mt-16 sm:mt-20">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-brandPrimary/10 border border-brandPrimary/20 text-[10px] sm:text-xs font-mono tracking-widest text-brandPrimary uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary" />
                Technical Proficiency
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-brandInk leading-tight uppercase tracking-tight">
                Skills & <span className="text-brandPrimary">Expertise</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {skillCategories.map((group) => (
                <div
                  key={group.category}
                  className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-brandLine shadow-sm hover:border-brandPrimary/25 hover:shadow-[0_14px_28px_-14px_rgba(15,23,42,0.1)] hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-xs sm:text-sm font-bold text-brandPrimary uppercase tracking-[0.2em] mb-5">
                    {"//"} {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] sm:text-xs font-mono text-brandMuted bg-brandSoft px-3 py-1.5 rounded-lg border border-brandLine tracking-wide transition-all duration-200 hover:text-brandPrimary hover:border-brandPrimary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Timeline */}
          <section className="mt-16 sm:mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Left: Section Header + Context */}
              <div className="lg:col-span-4 lg:sticky lg:top-28">
                <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-brandPrimary/10 border border-brandPrimary/20 text-[10px] sm:text-xs font-mono tracking-widest text-brandPrimary uppercase mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary" />
                  Career Ledger
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-brandInk leading-tight uppercase tracking-tight mb-4">
                  Professional <span className="text-brandPrimary">Experience</span>
                </h2>
                <p className="text-brandMuted text-xs sm:text-sm leading-relaxed font-light">
                  Five years of shipping production-grade front-end products —
                  from enterprise dashboards and SaaS platforms to WordPress and
                  e-commerce builds for clients across Pakistan and worldwide.
                </p>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center mt-6 px-6 py-3 bg-brandPrimary text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-brandPrimary/20 hover:bg-brandSecondary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  View My Work
                </Link>
              </div>

              {/* Right: Timeline Cards */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                  {timeline.map((item, idx) => (
                    <article
                      key={idx}
                      className="relative h-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-brandLine hover:border-brandPrimary/25 hover:shadow-[0_14px_28px_-14px_rgba(15,23,42,0.1)] hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <span className="text-[10px] font-mono text-brandPrimary tracking-widest bg-brandPrimary/5 px-2.5 py-0.5 rounded-md border border-brandPrimary/15">
                          {item.year}
                        </span>
                        <span className="text-[10px] font-mono text-brandMuted/70 tracking-wider uppercase">
                          {item.company}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-brandInk tracking-wide uppercase mb-2">
                        {item.role}
                      </h3>
                      <p className="text-brandMuted text-xs sm:text-sm leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 sm:mt-20 rounded-3xl bg-brandPrimary/5 border border-brandPrimary/20 p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brandInk uppercase tracking-tight mb-3">
              Ready to build something <span className="text-brandPrimary">great?</span>
            </h2>
            <p className="text-brandMuted text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto mb-8">
              Let&apos;s discuss your project and turn your ideas into a high-performance digital
              product your users will love.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brandPrimary text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-brandPrimary/20 hover:bg-brandSecondary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Start a Project
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
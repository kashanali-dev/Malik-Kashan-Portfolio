// src/app/contact/page.jsx
import PageHeader from "../Components/PageHeader";
import Contact from "../Components/Contact";
import { SITE, whatsappLink } from "../lib/site";

export const metadata = {
  title: "Contact Malik Kashan | Hire a Frontend Developer in Lahore, Pakistan",
  description:
    "Get in touch with Malik Kashan, a professional frontend developer and WordPress expert in Lahore, Pakistan. Start your project today and get a free consultation within 24 hours.",
  keywords: [
    "hire frontend developer",
    "contact web developer",
    "front end developer pakistan",
    "website developer for hire",
    "hiring a developer for website",
  ],
  alternates: {
    canonical: `${SITE.url}contact`,
  },
  openGraph: {
    title: "Contact Malik Kashan | Hire a Frontend Developer",
    description:
      "Start your project with Malik Kashan, a top-rated frontend and WordPress developer in Lahore, Pakistan.",
    url: `${SITE.url}contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Malik Kashan | Hire a Frontend Developer",
    description:
      "Start your project with Malik Kashan, a top-rated frontend and WordPress developer in Lahore, Pakistan.",
    images: ["/og-image.png"],
  },
};

const steps = [
  {
    step: "01",
    title: "Send Your Details",
    desc: "Fill in the form with your project goals, timeline and budget. The more detail, the better.",
  },
  {
    step: "02",
    title: "Free Discovery Call",
    desc: "Within 24 hours I'll reply and we schedule a quick call to understand your vision and scope.",
  },
  {
    step: "03",
    title: "Get a Fixed Quote",
    desc: "You receive a transparent plan with clear milestones and a fixed price. No hidden fees, no surprises.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Contact"
        title="Let's Start"
        highlight="Working Together"
        description="Have a project in mind or just want to say hello? Send me a message and I'll get back to you within 24 hours."
      />

      <main className="relative bg-white pb-16 sm:pb-20">
        <Contact showHeader={false} />

        {/* What Happens Next */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-brandPrimary/10 border border-brandPrimary/20 text-[10px] sm:text-xs font-mono tracking-widest text-brandPrimary uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary" />
              Simple Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brandInk leading-tight uppercase tracking-tight">
              What Happens <span className="text-brandPrimary">Next</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-brandLine hover:border-brandPrimary/25 hover:shadow-[0_14px_28px_-14px_rgba(15,23,42,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                <span className="font-mono text-3xl font-black text-brandPrimary/15">
                  {item.step}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-brandInk uppercase tracking-wide mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-brandMuted text-xs sm:text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust / Availability Strip */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          <div className="rounded-3xl bg-brandPrimary/5 border border-brandPrimary/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-brandInk uppercase tracking-tight">
                Need a faster answer? <span className="text-brandPrimary">Chat with me directly</span>
              </h3>
              <p className="text-brandMuted text-xs sm:text-sm font-light mt-1.5">
                Available 7 days a week · Replies within a few hours on business days
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-brandPrimary text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-brandPrimary/20 hover:bg-brandSecondary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Email Me
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-brandInk text-xs font-bold uppercase tracking-widest rounded-xl border border-brandLine hover:border-[#25D366]/50 hover:text-[#25D366] transition-all duration-300"
              >
                WhatsApp Me
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
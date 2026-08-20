// src/app/layout.jsx
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { SITE, whatsappLink } from "./lib/site";
import { Poppins } from "next/font/google";

// Self-hosted Poppins (Google Fonts) — no external network requests at runtime.
// Montserrat/Arial act as system fallbacks defined in globals.css.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Malik Kashan | Best Frontend & WordPress Developer in Pakistan",
    template: "%s | Malik Kashan",
  },
  description:
    "Looking to hire the best developer in Pakistan? Malik Kashan is a top-rated Custom Frontend Developer, WordPress Expert, and UI/UX Architect based in Lahore, Pakistan. Specializing in high-performance SaaS portfolios, Next.js web applications, and custom web development.",
  keywords: [
    "Malik Kashan",
    "Malik",
    "Kashan",
    "Malik Kashan Portfolio",
    "Kashan portfolios",
    "best portfolios pakistan",
    "pakistan developer",
    "lahore developers",
    "karachi developers",
    "islamabad developers",
    "best developers",
    "top developers in pakistan",
    "top best developers in the world",
    "hire frontend developer pakistan",
    "front end developer",
    "front-end developer",
    "front-end developer portfolio",
    "front-end developer portfolio examples",
    "front-end developer portfolio templates",
    "front-end developer portfolio template free",
    "front-end development services in pakistan",
    "front-end development services in lahore",
    "front-end development services in karachi",
    "front-end development services in islamabad",
    "front-end development services in world",
    "senior front-end developer",
    "junior front-end developer",
    "wordpress developer",
    "custom developer",
    "developnment",
    "designer",
    "SaaS portfolios",
    "Next.js developer Pakistan",
    "React developer Lahore",
    "hire a developer",
    "hiring a developer for website",
    "website developer for hire",
    "ai developers",
    "how to become ai developer",
    "front-end developer projects",
    "front-end developer roadmap",
    "front-end developer interview questions and answers for freshers",
    "front-end developer interview questions for 5 years experience",
    "best front-end developer in Pakistan",
    "frontend developer for hire",
    "React developer for hire",
    "Next.js developer for hire",
    "WordPress developer for hire",
    "hire website developer",
    "custom website development services",
    "web developer portfolio examples",
    "frontend portfolio inspiration",
    "UI/UX designer portfolio",
    "SaaS dashboard developer",
    "Core Web Vitals optimization",
    "landing page developer",
    "ecommerce website developer",
    "freelance front-end developer",
    "remote front-end developer",
    "Lahore web developer",
    "Karachi web developer",
    "Islamabad web developer",
    "professional web developer Pakistan",
    "modern web design 2026",
    "web application development services",
    "responsive website developer",
    "portfolio website design",
    "performance optimization web developer",
    "front end development",
    "front end developer for hire",
    "frontend developer near me",
    "hire web developer online",
    "best website developer",
    "web development services",
    "website design and development",
    "custom website design",
    "professional website design",
    "website design company",
    "web development company pakistan",
    "web design services pakistan",
    "make website for business",
    "build website for me",
    "website banwana",
    "web designer for hire",
    "mobile responsive website",
    "web app development",
    "high converting website",
    "seo friendly website design",
    "affordable website development",
    "best web developer lahore",
    "freelance web developer",
    "front end ka kaam",
    "website designer for hire",
    "portfolio website",
    "creative portfolio",
    "web application development",
  ],
  authors: [
    { name: "Malik Kashan", url: "https://malik-kashan-portfolio.vercel.app/" },
  ],
  creator: "Malik Kashan",
  publisher: "Malik Kashan",
  applicationName: "Malik Kashan Developer Portfolio",
  category: "Web Development Portfolio",
  metadataBase: new URL("https://malik-kashan-portfolio.vercel.app/"),

  // Mobile browser chrome + link handling (marketing/UX polish)
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    title: "Malik Kashan",
    statusBarStyle: "default",
  },

  alternates: {
    canonical: "https://malik-kashan-portfolio.vercel.app/",
  },

  verification: {
    google: "v2KWFtlz9ZQ_XELE-59AdmLBPLWkMIHtqIS57JLfMes",
  },

  icons: {
    icon: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
  },

  openGraph: {
    title: "Malik Kashan | Best Frontend & WordPress Developer in Pakistan",
    description:
      "Hire top frontend developers and custom WordPress experts in Lahore, Pakistan. Check out Malik Kashan's high-performance SaaS portfolio.",
    url: "https://malik-kashan-portfolio.vercel.app/",
    siteName: "Malik Kashan Developer Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Malik Kashan - Best Developer Portfolio Pakistan",
      },
    ],
    locale: "en_US",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "Malik Kashan | Top Frontend & Custom Developer Pakistan",
    description:
      "Specializing in high-performance SaaS portfolios and WordPress layouts in Lahore, Pakistan.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  // GOOGLE SCHEMA MARKUP (Structured Data With Live Authentic Profiles)
  const siteUrl = SITE.url.replace(/\/$/, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Malik Kashan",
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
    jobTitle: "Senior Frontend Developer & UI/UX Architect",
    email: "mailto:kashanalikot@gmail.com",
    telephone: "+923281944386",
    worksFor: {
      "@type": "Organization",
      name: "Freelance Custom Web Development",
      url: siteUrl,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "Pakistan",
    },
    description:
      "One of the best frontend developers and WordPress experts in Pakistan, specializing in high-performance SaaS portfolios and custom web applications.",
    sameAs: ["https://github.com/kashanali-dev/"],
    knowsAbout: [
      "Frontend Development",
      "WordPress Development",
      "Next.js",
      "React.js",
      "SaaS Portfolios",
      "Web Design",
      "Custom Development",
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteUrl,
    },
  };

  return (
    <html
      lang="en"
      className={`${poppins.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        {/* Injecting Structured Data into HTML Head for Google Bot */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: `${SITE.name} Developer Portfolio`,
              url: siteUrl,
              description:
                "Portfolio of Malik Kashan — Frontend & WordPress Developer in Lahore, Pakistan.",
              author: { "@type": "Person", name: SITE.name, url: siteUrl },
              inLanguage: "en-US",
            }),
          }}
        />
      </head>
      <body
        className="font-sans antialiased bg-brandBg text-brandInk"
      >
        <Header />
        {children}
        <Footer />

        {/* Floating WhatsApp CTA */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with ${SITE.name} on WhatsApp to start a project`}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.3)] hover:scale-105 hover:shadow-[0_10px_28px_rgba(37,211,102,0.45)] active:scale-95 transition-all duration-300 ease-out group"
        >
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </a>
      </body>
    </html>
  );
}

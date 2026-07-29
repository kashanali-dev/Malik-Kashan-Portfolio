// src/app/layout.jsx
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
  adjustFontFallback: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
  adjustFontFallback: true,
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
    "best developers",
    "top developers in pakistan",
    "hire frontend developer pakistan",
    "front end developer",
    "wordpress developer",
    "custom developer",
    "developnment",
    "designer",
    "SaaS portfolios",
    "Next.js developer Pakistan",
    "React developer Lahore",
    "hire a developer",
    "portfolio website",
    "creative portfolio",
    "web application development",
  ],
  authors: [
    { name: "Malik Kashan", url: "https://malik-kashan-portfolio.vercel.app/" },
  ],
  creator: "Malik Kashan",
  publisher: "Malik Kashan",
  metadataBase: new URL("https://malik-kashan-portfolio.vercel.app/"),

  alternates: {
    canonical: "https://malik-kashan-portfolio.vercel.app/",
  },

  verification: {
    google: "v2KWFtlz9ZQ_XELE-59AdmLBPLWkMIHtqIS57JLfMes",
  },

  icons: {
    icon: [{ url: "/logo.png", sizes: "32x32", type: "image/png" }],
    shortcut: "/logo.png",
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Malik Kashan",
    url: "https://malik-kashan-portfolio.vercel.app/",
    image: "https://vercel.app",
    jobTitle: "Senior Frontend Developer & UI/UX Architect",
    worksFor: {
      "@type": "Organization",
      name: "Freelance Custom Web Development",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "Pakistan",
    },
    description:
      "One of the best frontend developers and WordPress experts in Pakistan, specializing in high-performance SaaS portfolios and custom web applications.",
    sameAs: [
      "https://github.com/kashanali-dev/",
      "https://vercel.com/kashan-alis-projects-e4e51462",
      "https://facebook.com",
      "https://linkedin.com",
    ],
    knowsAbout: [
      "Frontend Development",
      "WordPress Development",
      "Next.js",
      "React.js",
      "SaaS Portfolios",
      "Web Design",
      "Custom Development",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Injecting Structured Data into HTML Head for Google Bot */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} font-sans antialiased bg-[#0d0d0f] text-[#f3f4f6]`}
      >
        {children}
      </body>
    </html>
  );
}

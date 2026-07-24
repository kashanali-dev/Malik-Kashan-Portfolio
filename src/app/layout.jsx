import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Malik Kashan | Frontend Developer Portfolio",
  description:
    "Hi, I'm Malik Kashan. I am a passionate Frontend Developer dedicated to crafting immersive and interactive web experiences. Explore my creative projects and skills.",
  keywords: [
    "Malik Kashan",
    "Malik Kashan Portfolio",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
    "UI Developer",
    "Framer Motion Portfolio",
  ],
  authors: [{ name: "Malik Kashan" }],
  creator: "Malik Kashan",
  metadataBase: new URL("https://malik-kashan-portfolio.vercel.app/"),

  // --- FAVICON / TITLE IMAGE CONFIGURATION ---
  icons: {
    icon: "/logo.png", // Agar file src/app/ ya public/ folder mein hai
    shortcut: "/logo.png",
    apple: "/logo.png", // Apple devices ke liye
  },

  openGraph: {
    title: "Malik Kashan | Frontend Developer Portfolio",
    description:
      "Hi, I'm Malik Kashan. Crafting immersive and interactive web experiences. Check out my frontend projects.",
    url: "https://malik-kashan-portfolio.vercel.app/",
    siteName: "Malik Kashan Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Malik Kashan | Frontend Developer Portfolio",
    description: "Crafting immersive and interactive web experiences.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

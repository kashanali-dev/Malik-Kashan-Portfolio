import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { image } from "framer-motion/client";

export const metadata = {
  title: "Malik Kashan | Portfolio",
  description: "Professional Web Developer & WordPress Architect",
  icons: {
    icon: [
      {
        url: "/logo.png", // Yeh file aapke 'public/' folder ke root me honi chahiye
        href: "/logo.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

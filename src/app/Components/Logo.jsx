// src/app/Components/Logo.jsx
// Brand logo image used across header and footer.
import Image from "next/image";

export default function Logo({ size = 44, priority = false }) {
  return (
    <div
      className="relative rounded-full bg-white overflow-hidden flex items-center justify-center shrink-0"
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.webp"
        alt="Malik Kashan Official Portfolio Branding Logo"
        width={size * 2}
        height={size * 2}
        sizes={`${size}px`}
        priority={priority}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
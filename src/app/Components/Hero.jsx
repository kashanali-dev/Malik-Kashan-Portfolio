"use client";
import { useState, useEffect, useSyncExternalStore } from "react";
import { SITE, whatsappLink } from "../lib/site";

const roles = [
  "Frontend Developer",
  "UI/UX Architect",
  "Next.js Expert",
  "WordPress Expert",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    if (!mounted) return;

    let timer;
    const handleTyping = () => {
      const fullWord = roles[currentRoleIndex];

      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(180);

        if (currentText === fullWord) {
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(90);

        if (currentText === "") {
          timer = setTimeout(() => {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }, 500);
          return;
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed, mounted]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-brandBg overflow-hidden pt-28 lg:pt-20 font-sans"
    >
      {/* ⚡ SPEED: Optimized CSS-only native gradient blobs instead of heavy blurred filters */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-75 h-75 sm:w-125 sm:h-125 rounded-full bg-brandPrimary/10 blur-[120px] pointer-events-none will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-62.5 h-62.5 sm:w-100 sm:h-100 rounded-full bg-brandSecondary/10 blur-[100px] pointer-events-none will-change-transform" />

      {/* Grid Pattern Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          {/* 🔍 SEO: Valid text structure for availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brandPrimary/10 border border-brandPrimary/20 mb-4 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandPrimary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brandPrimary"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-brandPrimary uppercase">
              Available for new opportunities
            </span>
          </div>

          <p className="text-base sm:text-lg font-bold tracking-[0.15em] text-brandPrimary uppercase mb-2 block">
            Hello, It&apos;s Me
          </p>

          {/* 🔍 SEO: Standard clean H1 tag for the core index keyword mapping */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-brandInk uppercase mb-3">
            Malik Kashan
          </h1>

          {/* Clean Typewriter Sub-heading */}
          <div className="h-10 sm:h-12.5 flex items-center justify-center lg:justify-start mb-6">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-wide text-brandMuted">
              And I&apos;m a{" "}
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-brandPrimary border-r-4 border-brandPrimary pl-2 ml-1 pr-1 animate-blink inline-block">
              {mounted ? currentText : ""}
            </p>
          </div>

          <p className="text-sm sm:text-base text-brandMuted tracking-wide max-w-xl font-light mb-8 leading-relaxed">
            Specializing in engineering high-performance Web Applications with
            pixel-perfect responsive layouts. I turn complex design
            architectures into flawless, scalable, and optimized digital
            realities.
          </p>

          {/* Actions Framework */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            {/* 🔍 SEO: Accessible link name with valid download target routing */}
            <a
              href={SITE.cvFile}
              download="Malik_Kashan_CV.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold tracking-widest text-white bg-brandPrimary hover:bg-brandSecondary rounded-xl transition-all duration-300 uppercase active:scale-[0.98] shadow-[0_3px_12px_rgba(8,145,178,0.18)]"
            >
              Download CV
            </a>

            {/* 🔍 SEO: Real profile links for accessibility mapping */}
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Send an email to Malik Kashan"
                className="w-9 h-9 rounded-full border border-brandLine bg-white flex items-center justify-center text-brandMuted hover:border-brandPrimary hover:text-brandPrimary transition-all duration-300 shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>

              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Malik Kashan GitHub profile"
                className="w-9 h-9 rounded-full border border-brandLine bg-white flex items-center justify-center text-brandMuted hover:border-brandPrimary hover:text-brandPrimary transition-all duration-300 shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.08 3.29 9.4 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.66.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.68.8.56A10.5 10.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z" />
                </svg>
              </a>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Malik Kashan on WhatsApp"
                className="w-9 h-9 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 flex items-center justify-center text-[#128C7E] hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300 shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Code Terminal Shell */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 w-full">
          <div className="relative w-full max-w-115 aspect-[4/3.2] rounded-3xl">
            <div className="absolute inset-0 bg-linear-to-tr from-brandPrimary/15 to-transparent opacity-40 rounded-3xl blur-2xl pointer-events-none" />

            <div className="w-full h-full relative rounded-3xl overflow-hidden bg-white border border-brandLine p-4 shadow-[0_10px_24px_rgba(15,23,42,0.07)] flex flex-col justify-between">
              {/* Terminal Window Controls */}
              <div className="flex items-center gap-1.5 border-b border-brandLine pb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] text-brandMuted/50 font-mono ml-2">
                  app/page.jsx
                </span>
              </div>

              {/* Securely Hydrated Code Rendering Blocks */}
              {mounted && (
                <div
                  className="flex-1 font-mono text-[11px] sm:text-xs text-brandInk/70 space-y-2 pt-5 select-none"
                  aria-hidden="true"
                >
                  <p className="text-blue-600">
                    const <span className="text-brandInk">Developer</span> =
                    () =&gt; {"{"}
                  </p>

                  <div className="pl-4 space-y-1">
                    <p className="text-purple-600">
                      return <span className="text-brandInk">(</span>
                    </p>

                    <div className="pl-4 space-y-1">
                      <p className="text-emerald-600">
                        &lt;<span className="text-blue-600">MalikKashan</span>
                      </p>
                      <p className="pl-6 text-brandInk">
                        skills=<span className="text-purple-600">{"{"}</span>
                        <span className="text-brandInk">[</span>
                        <span className="text-green-600">&quot;Next.js&quot;</span>
                        <span className="text-brandInk">, </span>
                        <span className="text-green-600">&quot;Tailwind&quot;</span>
                        <span className="text-brandInk">]</span>
                        <span className="text-purple-600">{"}"}</span>
                      </p>
                      <p className="pl-6 text-brandInk">
                        experience=
                        <span className="text-amber-600">&quot;Expert&quot;</span>
                      </p>
                      <p className="text-emerald-600">/&gt;</p>
                    </div>

                    <p className="text-brandInk">)</p>
                  </div>

                  <p className="text-blue-600">{"};"}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

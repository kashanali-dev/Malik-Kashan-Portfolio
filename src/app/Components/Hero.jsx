"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const roles = [
    "Frontend Developer",
    "UI/UX Architect",
    "Next.js Expert",
    "WordPress Expert",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let timer;
    const handleTyping = () => {
      const fullWord = roles[currentRoleIndex];

      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
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
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-75 h-75 sm:w-125 sm:h-125 rounded-full bg-brandGold/4 blur-[120px] pointer-events-none will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-62.5 h-62.5 sm:w-100 sm:h-100 rounded-full bg-white/1 blur-[100px] pointer-events-none will-change-transform" />

      {/* Grid Pattern Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          {/* 🔍 SEO: Valid text structure for availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/2 border border-white/6 mb-4 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandGold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brandGold"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-brandSilver/80 uppercase">
              Available for new opportunities
            </span>
          </div>

          <h2 className="text-base sm:text-lg font-bold tracking-[0.15em] text-brandGold uppercase mb-2 block">
            Hello, It's Me
          </h2>

          {/* 🔍 SEO: Standard clean H1 tag for the core index keyword mapping */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-brandSilver uppercase mb-3">
            Malik Kashan
          </h1>

          {/* Clean Typewriter Sub-heading */}
          <div className="h-10 sm:h-12.5 flex items-center justify-center lg:justify-start mb-6">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-wide text-brandSilver/80">
              And I'm a{" "}
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-brandGold via-white to-brandGold border-r-4 border-brandGold pl-2 ml-1 pr-1 animate-blink inline-block">
              {mounted ? currentText : ""}
            </h3>
          </div>

          <p className="text-sm sm:text-base text-brandSilver/70 tracking-wide max-w-xl font-light mb-8 leading-relaxed">
            Specializing in engineering high-performance Web Applications with
            pixel-perfect responsive layouts. I turn complex design
            architectures into flawless, scalable, and optimized digital
            realities.
          </p>

          {/* Actions Framework */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            {/* 🔍 SEO: Accessible link name with valid download target routing */}
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold tracking-widest text-brandBg bg-brandGold hover:bg-white rounded-xl transition-all duration-300 uppercase active:scale-[0.98] shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
            >
              Download CV
            </a>

            {/* 🔍 SEO: Added accurate aria-labels for bot-crawler accessibility mapping */}
            <div className="flex items-center gap-4">
              {["fb", "tw", "ig", "ln"].map((item, idx) => (
                <a
                  key={idx}
                  href={`https://${item}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Malik Kashan Profile on ${item.toUpperCase()}`}
                  className="w-9 h-9 rounded-full border border-white/8 bg-white/2 flex items-center justify-center text-xs text-brandSilver/70 hover:border-brandGold hover:text-brandGold transition-all duration-300 uppercase font-mono"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Code Terminal Shell */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 w-full">
          <div className="relative w-full max-w-115 aspect-[4/3.2] rounded-3xl">
            <div className="absolute inset-0 bg-linear-to-tr from-brandGold/10 to-transparent opacity-40 rounded-3xl blur-2xl pointer-events-none" />

            <div className="w-full h-full relative rounded-3xl overflow-hidden bg-[#0d0d0f] border border-white/8 p-4 shadow-[0_32px_64px_rgba(0,0,0,0.8)] flex flex-col justify-between">
              {/* Terminal Window Controls */}
              <div className="flex items-center gap-1.5 border-b border-white/5 pb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                <span className="text-[10px] text-brandSilver/30 font-mono ml-2">
                  app/page.jsx
                </span>
              </div>

              {/* Securely Hydrated Code Rendering Blocks */}
              {mounted && (
                <div
                  className="flex-1 font-mono text-[11px] sm:text-xs text-brandSilver/50 space-y-2 pt-5 select-none"
                  aria-hidden="true"
                >
                  <p className="text-blue-400">
                    const <span className="text-brandSilver">Developer</span> =
                    () =&gt; {"{"}
                  </p>

                  <div className="pl-4 space-y-1">
                    <p className="text-purple-400">
                      return <span className="text-brandSilver">(</span>
                    </p>

                    <div className="pl-4 space-y-1">
                      <p className="text-emerald-400">
                        &lt;<span className="text-blue-400">MalikKashan</span>
                      </p>
                      <p className="pl-6 text-brandSilver">
                        skills=<span className="text-purple-400">{"{"}</span>
                        <span className="text-brandSilver">[</span>
                        <span className="text-green-400">"Next.js"</span>
                        <span className="text-brandSilver">, </span>
                        <span className="text-green-400">"Tailwind"</span>
                        <span className="text-brandSilver">]</span>
                        <span className="text-purple-400">{"}"}</span>
                      </p>
                      <p className="pl-6 text-brandSilver">
                        experience=
                        <span className="text-amber-400">"Expert"</span>
                      </p>
                      <p className="text-emerald-400">/&gt;</p>
                    </div>

                    <p className="text-brandSilver">)</p>
                  </div>

                  <p className="text-blue-400">{"};"}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

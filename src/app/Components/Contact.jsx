// src/app/Components/Contact.jsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const viewOptions = { once: true, margin: "-40px" };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.99 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulating API network request pipeline
    setTimeout(() => {
      try {
        console.log("Form data pipeline activated:", formData);
        setStatus("success");
        // Resetting form fields after successful interaction
        setFormData({ name: "", email: "", company: "", message: "" });

        // Clear message state after 4 seconds
        setTimeout(() => setStatus("idle"), 4000);
      } catch (error) {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-14 bg-[#0a0a0c] z-20 block overflow-hidden w-full clear-both border-t border-white/2"
    >
      {/* Luxury Radial Blur Ambient Mask */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-65 sm:w-137.5 h-45 sm:h-62.5 bg-[#d4af37]/2 blur-[90px] sm:blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* COMPACT SECTION HEADER */}
        <div className="flex flex-col mb-8 sm:mb-10 text-center items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewOptions}
            transition={{ duration: 0.4 }}
            className="text-[#d4af37] text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-1.5 block"
          >
            Get In Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewOptions}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#e2e8f0] leading-tight uppercase tracking-tight"
          >
            Connect With <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#d4af37] via-[#ffffff] to-[#d4af37]">
              Me
            </span>
          </motion.h2>
        </div>

        {/* RESPONSIVE LAYOUT MATRIX GRID SYSTEM */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewOptions}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full items-stretch"
        >
          {/* LEFT CONTAINER: BRIEF CARD */}
          <motion.div variants={itemVariants} className="w-full flex">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#111114]/90 border border-white/4 backdrop-blur-xl transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between w-full hover:border-white/[0.07]">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#e2e8f0] tracking-wide mb-2.5">
                  Let's start a project together
                </h3>
                <p className="text-white/45 text-xs sm:text-[13px] leading-relaxed font-light mb-6">
                  Aapke paas koi amazing idea hai ya website ko revamp karna
                  chahte hain? Drop a message, aur hum milkar ek sleek, high-end
                  digital ecosystem build karenge.
                </p>

                {/* Contact Media Anchors */}
                <div className="space-y-3.5">
                  <a
                    href="mailto:kashanalikot@gmail.com"
                    className="group flex items-center gap-3.5 p-3 rounded-xl bg-white/1 border border-white/2 hover:border-[#d4af37]/20 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] text-xs font-mono font-bold group-hover:bg-[#d4af37]/20 transition-colors">
                      @
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider font-mono text-white/30 block">
                        Email Me
                      </span>
                      <span className="text-xs sm:text-sm text-[#e2e8f0] font-light group-hover:text-[#d4af37] transition-colors">
                        kashanalikot@gmail.com
                      </span>
                    </div>
                  </a>

                  <div className="group flex items-center gap-3.5 p-3 rounded-xl bg-white/1 border border-white/2 transition-all duration-300">
                    <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] text-xs font-mono font-bold">
                      📍
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider font-mono text-white/30 block">
                        Location
                      </span>
                      <span className="text-xs sm:text-sm text-[#e2e8f0] font-light">
                        Pakistan
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Line */}
              <div className="flex flex-wrap items-center gap-2.5 mt-6 pt-5 border-t border-white/3">
                {["GitHub", "LinkedIn", "Twitter"].map((social, sIdx) => (
                  <a
                    key={sIdx}
                    href="#"
                    className="text-[10px] font-mono text-white/40 hover:text-[#d4af37] transition-colors uppercase tracking-wider bg-white/1 px-3 py-1.5 rounded-lg border border-white/3 hover:border-[#d4af37]/20"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTAINER: DYNAMIC INPUT FORM */}
          <motion.div variants={itemVariants} className="w-full flex">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-7 rounded-2xl bg-[#111114]/90 border border-white/4 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between w-full gap-4 hover:border-white/[0.07]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Frame */}
                <div className="flex flex-col gap-1">
                  <label className="text-[9px] uppercase tracking-widest font-mono text-white/40">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    disabled={status === "sending"}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full bg-[#151518] text-[#e2e8f0] font-light text-xs sm:text-sm p-3 rounded-xl border border-white/5 focus:outline-none focus:border-[#d4af37]/40 focus:ring-1 focus:ring-[#d4af37]/10 placeholder-white/10 transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                {/* Email Frame */}
                <div className="flex flex-col gap-1">
                  <label className="text-[9px] uppercase tracking-widest font-mono text-white/40">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    disabled={status === "sending"}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="user@example.com"
                    className="w-full bg-[#151518] text-[#e2e8f0] font-light text-xs sm:text-sm p-3 rounded-xl border border-white/5 focus:outline-none focus:border-[#d4af37]/40 focus:ring-1 focus:ring-[#d4af37]/10 placeholder-white/10 transition-all duration-300 disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Company Field (Balanced Full Width Segment) */}
              <div className="flex flex-col gap-1">
                <label className="text-[9px] uppercase tracking-widest font-mono text-white/40">
                  Company Name
                </label>
                <input
                  type="text"
                  disabled={status === "sending"}
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Enter your Company Name"
                  className="w-full bg-[#151518] text-[#e2e8f0] font-light text-xs sm:text-sm p-3 rounded-xl border border-white/5 focus:outline-none focus:border-[#d4af37]/40 focus:ring-1 focus:ring-[#d4af37]/10 placeholder-white/10 transition-all duration-300 disabled:opacity-50"
                />
              </div>

              {/* Message Frame */}
              <div className="flex flex-col gap-1">
                <label className="text-[9px] uppercase tracking-widest font-mono text-white/40">
                  Your Message
                </label>
                <textarea
                  rows="3"
                  required
                  disabled={status === "sending"}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#151518] text-[#e2e8f0] font-light text-xs sm:text-sm p-3 rounded-xl border border-white/5 focus:outline-none focus:border-[#d4af37]/40 focus:ring-1 focus:ring-[#d4af37]/10 placeholder-white/10 transition-all duration-300 resize-none grow disabled:opacity-50"
                />
              </div>

              {/* Status Feedbacks Overlay using AnimatePresence */}
              <div className="relative min-h-3.5 flex items-center justify-start text-[11px] font-mono tracking-wide">
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.span
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-[#d4af37] font-medium"
                    >
                      ✓ Message sent successfully! Let's talk soon.
                    </motion.span>
                  )}
                  {status === "error" && (
                    <motion.span
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-red-400 font-medium"
                    >
                      ✕ Processing failed. Please try again later.
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Submission Action Button */}
              <motion.button
                whileHover={
                  status === "idle"
                    ? {
                        scale: 1.01,
                        boxShadow: "0 10px 25px rgba(212, 175, 55, 0.12)",
                      }
                    : {}
                }
                whileTap={status === "idle" ? { scale: 0.99 } : {}}
                type="submit"
                disabled={status !== "idle"}
                className="w-full py-2.5 px-6 rounded-xl text-xs font-bold font-mono uppercase tracking-widest bg-linear-to-r from-[#d4af37] via-[#ffffff] to-[#d4af37] bg-size-[200%_auto] text-black hover:bg-right transition-all duration-500 cursor-pointer shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === "idle" && "Send Message ↗"}
                {status === "sending" && "Transmitting..."}
                {status === "success" && "Message Sent"}
                {status === "error" && "Error Occurred"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

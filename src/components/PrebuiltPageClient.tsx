"use client";

import React from "react";
import Link from "next/link";
import FloatingStars from "@/components/FloatingStars";
import { motion } from "framer-motion";

export default function PrebuiltPageClient() {
  const principles = [
    {
      icon: "⚡",
      title: "Maximum Performance",
      description: "Generic templates come bloated with unused libraries and heavy dependencies. We write lightweight, bespoke code designed for sub-second load times and flawless execution speeds.",
    },
    {
      icon: "🔒",
      title: "Edge-Native Security",
      description: "Prebuilt codebases present a larger attack surface. We design secure, custom-integrated database models and token-based API endpoints customized specifically for your security needs.",
    },
    {
      icon: "📈",
      title: "Infinite Scalability",
      description: "We architect your database schemas and serverless functions to scale dynamically. No platform lock-ins or CMS limits—engineered to grow seamlessly with your user traffic.",
    },
  ];

  return (
    <div className="w-full relative">
      <FloatingStars />

      {/* Hero Section */}
      <section className="text-center pt-42 md:pt-50 pb-16 max-w-4xl mx-auto flex flex-col items-center gap-6 relative selection:bg-[var(--accent-color)] selection:text-[var(--bg-primary)]">
        {/* Background Watermark */}
        <div className="absolute top-[23%] md:top-[11%] left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 font-display font-black text-[12vw] tracking-wider leading-none text-center select-none contact-watermark">
          PREBUILT
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 relative z-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--pill-border)] bg-[var(--bg-primary)]/40 backdrop-blur-sm shadow-sm select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--theme-pill-active-dot)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--theme-pill-active-dot)]"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Our Engineering Philosophy
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[1.05] text-[var(--text-title)] font-display">
            No Templates. <br className="xs:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-text-highlight-from)] to-[var(--theme-text-highlight-to)] drop-shadow-[0_4px_10px_rgba(255,255,255,0.05)]">
              Just Bespoke.
            </span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] font-medium max-w-2xl px-4">
            Every line of code, database query, and custom animation we write is engineered from scratch to fit your exact business goals.
          </p>
        </motion.div>
      </section>

      {/* Philosophy Principles Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full z-10 relative mb-20 px-2 sm:px-0">
        {principles.map((p, idx) => (
          <div
            key={idx}
            className="rounded-[32px] border border-[var(--border-primary)]/80 bg-[var(--bg-secondary)]/10 p-6 sm:p-8 flex flex-col gap-4 overflow-hidden backdrop-blur-md relative group hover:border-[var(--theme-border-highlight)] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-2xl"
          >
            {/* Inner hover glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--theme-glow-from)] via-[var(--theme-glow-via)] to-transparent pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0" />

            <div className="relative z-10 flex flex-col gap-3 h-full">
              <span className="text-3xl filter drop-shadow select-none w-12 h-12 rounded-2xl bg-[var(--bg-primary)]/50 border border-[var(--border-primary)] flex items-center justify-center">
                {p.icon}
              </span>
              <h3 className="text-xl font-bold font-display text-[var(--text-title)] tracking-tight mt-2">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action Section */}
      <section className="w-full pb-8">
        <div className="relative rounded-[32px] overflow-hidden border border-[var(--border-primary)] bg-gradient-to-b from-[var(--theme-glow-from)] via-[var(--theme-glow-via)] to-transparent p-8 md:p-14 text-center flex flex-col items-center gap-6 md:gap-8 backdrop-blur-md">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-20" />

          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-title)] font-display max-w-xl leading-none z-10">
            Let's build your bespoke product.
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-lg font-medium z-10 leading-relaxed">
            Skip the limitations of generic templates. Partner with 3xdevs to design and deploy custom software architecture built specifically to scale.
          </p>

          <div className="z-10 flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link
              href="/contact-us"
              className="px-8 py-3.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide theme-button hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-2 group"
            >
              Start Custom Project
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <Link
              href="/customized"
              className="px-8 py-3.5 rounded-2xl border border-[var(--border-primary)] hover:border-[var(--text-secondary)] text-[var(--text-primary)] hover:text-[var(--text-title)] font-bold text-xs sm:text-sm tracking-wide hover:bg-[var(--bg-secondary)]/50 transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              See Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

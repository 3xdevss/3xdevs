"use client";

import React from "react";
import Link from "next/link";

const themeStyles = {
  glowClass: "from-[var(--theme-glow-from)] via-[var(--theme-glow-via)] to-transparent",
  buttonBg: "theme-button",
};

export default function CtaSection() {
  return (
    <section className="w-full pt-8 pb-4">
      <div className={`relative rounded-[32px] overflow-hidden border border-[var(--border-primary)] bg-gradient-to-b ${themeStyles.glowClass} p-8 md:p-14 text-center flex flex-col items-center gap-6 md:gap-8 backdrop-blur-md`}>
        {/* Grid visual overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-20" />

        <h2 className="text-4xl md:text-6xl font-black text-[var(--text-title)] font-display max-w-2xl leading-none z-10">
          Let&apos;s turn your vision into high-end reality.
        </h2>
        <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-xl font-medium z-10 leading-relaxed">
          Partner with 3xdevs. We combine aesthetic UI designs with future-proof engineering to build digital products that captivate and convert.
        </p>

        <div className="z-10 flex flex-wrap items-center justify-center gap-4 mt-2">
          <Link
            href="/contact-us"
            className={`px-8 py-4 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer flex items-center gap-2 group ${themeStyles.buttonBg}`}
          >
            Start Your Project
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          <Link
            href="/about-us"
            className="px-8 py-4 rounded-2xl border border-[var(--border-primary)] hover:border-[var(--text-secondary)] text-[var(--text-primary)] hover:text-[var(--text-title)] font-bold text-sm tracking-wide hover:bg-[var(--bg-secondary)]/50 transition-all duration-300 active:scale-[0.98] cursor-pointer"
          >
            Meet the Engineers
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";

interface FooterProps {
  showLinks?: boolean;
}

export default function Footer({ showLinks = true }: FooterProps) {
  const {
    themeMode,
    setThemeMode,
    setTickIndex,
    isDarkMode,
    tickLabelColor,
  } = useTheme();

  return (
    <footer className="w-full max-w-[1280px] px-6 md:px-12 mt-16 md:mt-24 pt-12 border-t border-white/5 relative z-10">
      {showLinks && (
        <div className={`flex flex-col md:flex-row justify-between gap-12 text-sm ${isDarkMode ? "text-emerald-100/60" : "text-emerald-900/60"} font-medium mb-16`}>
          <div className="flex flex-col gap-1.5 select-none">
            <p className={`${isDarkMode ? "text-white" : "text-[#2d2c2a]"} text-base font-semibold`}>3xdevs</p>
            <p className={isDarkMode ? "hover:text-white" : "hover:text-[#2d2c2a]"}>Not just devs</p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className={`${isDarkMode ? "text-white" : "text-[#2d2c2a]"} text-xs font-bold uppercase tracking-widest opacity-80`}>
              Elsewhere
            </h4>
            <div className="flex flex-col gap-1.5">
              {["Figma", "GitHub", "Posts", "CV", "LinkedIn"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className={isDarkMode ? "hover:text-white" : "hover:text-[#2d2c2a]"}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className={`${isDarkMode ? "text-white" : "text-[#2d2c2a]"} text-xs font-bold uppercase tracking-widest opacity-80`}>
              More Resources
            </h4>
            <div className="flex flex-col gap-1.5">
              {[
                { label: "Blogs", href: "/blogs" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Refund Policy", href: "/refund" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={isDarkMode ? "hover:text-white" : "hover:text-[#2d2c2a]"}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className={`${isDarkMode ? "text-white" : "text-[#2d2c2a]"} text-xs font-bold uppercase tracking-widest opacity-80`}>
              Contact
            </h4>
            <a
              href="mailto:hello@example.com"
              className={isDarkMode ? "hover:text-white" : "hover:text-[#2d2c2a]"}
            >
              Message
            </a>
          </div>
        </div>
      )}

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 select-none">
        <div className={`flex gap-2 ${isDarkMode ? "bg-black/40 border border-white/5" : "bg-white/40 border border-black/10"} p-1 rounded-full shrink-0 transition-colors`}>
          {(["emerald", "violet", "indigo"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setThemeMode(t)}
              className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full transition-all ${
                themeMode === t
                  ? "bg-[var(--accent-color)] text-[var(--bg-primary)] shadow"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className={`text-[10px] font-bold ${tickLabelColor} uppercase tracking-wider`}>Theme Mode</span>
          <button
            onClick={() => setTickIndex(isDarkMode ? 0 : 11)}
            className={`relative w-12 h-7 rounded-full transition-all duration-300 focus:outline-none cursor-pointer hover:scale-105 active:scale-95 ${
              isDarkMode ? "bg-black/40 border border-white/5" : "bg-white/40 border border-black/10"
            }`}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <div
              className={`absolute top-1 left-1 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm bg-[var(--accent-color)] text-[var(--bg-primary)] ${
                isDarkMode ? "translate-x-5" : "translate-x-0"
              }`}
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="M4.93 4.93l1.41 1.41" />
                  <path d="M17.66 17.66l1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="M6.34 17.66l-1.41 1.41" />
                  <path d="M19.07 4.93l-1.41 1.41" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-center py-8 px-6 shrink-0 relative z-30">
      <nav className="flex items-center gap-1 bg-black/20 backdrop-blur-md border border-white/5 rounded-full p-1 shadow-lg">
        <Link
          href="#work"
          className="flex items-center gap-1.5 px-4 py-1.5 bg-emerald-950/40 border border-emerald-500/20 text-emerald-200 text-xs font-semibold rounded-full shadow-inner hover:bg-emerald-950/60 transition-colors"
        >
          <span>Work</span>
          <span className="text-[10px] text-emerald-400">↗</span>
        </Link>

        {["About", "Play", "Notes", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-4 py-1.5 text-xs text-white/60 hover:text-white font-medium rounded-full transition-colors"
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
}

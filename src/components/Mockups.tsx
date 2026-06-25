"use client";

import React, { useState } from "react";

export function AIMockup() {
  const [prompt, setPrompt] = useState("make longer");
  return (
    <div className="relative w-full h-[220px] bg-white rounded-lg shadow-xl border border-black/5 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl">
      <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-3 gap-1.5 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        <div className="h-4 w-32 bg-slate-100 rounded-sm ml-4" />
      </div>

      <div className="p-4 flex-1 flex flex-col gap-2 relative">
        <div className="h-3 w-3/4 bg-slate-100 rounded-full" />
        <div className="h-3 w-5/6 bg-slate-100 rounded-full" />
        <div className="h-3 w-2/3 bg-slate-100 rounded-full" />
        <div className="h-3 w-1/2 bg-slate-100 rounded-full" />

        <div className="absolute top-12 left-4 right-4 bg-white rounded-lg shadow-xl border border-indigo-100 p-3 animate-float-1 z-10 flex flex-col gap-2 scale-90 sm:scale-100 origin-center">
          <div className="flex items-center gap-2 border-b border-slate-50 pb-2">
            <span className="text-[10px] font-bold text-indigo-600 tracking-wider uppercase">AI Assist</span>
            <span className="text-[10px] text-slate-400">✦</span>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="text-xs text-slate-800 font-medium focus:outline-none bg-transparent flex-1"
              placeholder="Ask AI..."
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-1">
              <span className="px-1.5 py-0.5 text-[9px] bg-slate-50 text-slate-500 rounded border border-slate-100">Professional</span>
              <span className="px-1.5 py-0.5 text-[9px] bg-slate-50 text-slate-500 rounded border border-slate-100">Casual</span>
            </div>
            <button className="px-2 py-1 bg-indigo-600 text-white rounded text-[10px] font-medium shadow-sm hover:bg-indigo-700 transition-colors">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ArticlesMockup() {
  return (
    <div className="relative w-full h-[220px] bg-white rounded-lg shadow-xl border border-black/5 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl">
      <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center justify-between px-2.5 sm:px-3 shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        </div>
        <div className="flex gap-2">
          <div className="h-4.5 px-2.5 bg-slate-100 rounded text-[9px] text-slate-500 flex items-center font-medium">Preview</div>
          <div className="h-4.5 px-2.5 bg-blue-600 text-white rounded text-[9px] flex items-center font-medium hover:bg-blue-700 cursor-pointer">Update</div>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex-1 flex flex-col gap-3">
        <div className="self-start px-2 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full text-[9px] font-semibold tracking-wide uppercase">
          Published
        </div>

        <h3 className="text-sm font-bold text-slate-800 leading-snug">
          Where do you source your materials?
        </h3>

        <div className="flex flex-col gap-1.5 mt-1">
          <div className="h-2 w-full bg-slate-100 rounded-full" />
          <div className="h-2 w-11/12 bg-slate-100 rounded-full" />
          <div className="h-2 w-5/6 bg-slate-100 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function PluginsMockup() {
  return (
    <div className="relative w-full h-[220px] bg-slate-900 rounded-lg shadow-xl border border-white/5 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl">
      <div className="h-8 bg-slate-950 flex items-center justify-between px-3 shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="text-[10px] text-slate-400 font-medium ml-2">Figma Plugins</span>
        </div>
        <div className="w-4 h-4 rounded bg-slate-800 flex items-center justify-center text-[9px] text-slate-400">⌘</div>
      </div>

      <div className="flex-1 bg-slate-950/40 p-3 xs:p-4 flex gap-2 xs:gap-3 sm:gap-4 overflow-hidden relative justify-center items-center">
        <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 bg-rose-50 border border-rose-200 rounded-lg p-1.5 xs:p-2 shrink-0 flex flex-col justify-between shadow-md relative group hover:-translate-y-1 transition-transform">
          <span className="text-[7px] xs:text-[8px] text-rose-500 font-bold uppercase tracking-wider">Layer A</span>
          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 border-2 border-rose-400/50 rounded-full -translate-x-1.5 sm:-translate-x-2" />
            <div className="absolute w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 border-2 border-rose-400 rounded-full translate-x-1.5 sm:translate-x-2" />
          </div>
          <div className="h-0.5 sm:h-1 w-4 sm:w-6 bg-rose-200 rounded self-center" />
        </div>

        <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 bg-slate-800 border border-slate-700 rounded-lg p-1.5 xs:p-2 shrink-0 flex flex-col justify-between shadow-md relative group hover:-translate-y-1 transition-transform">
          <span className="text-[7px] xs:text-[8px] text-indigo-400 font-bold uppercase tracking-wider">Layer B</span>
          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 bg-indigo-600/35 rounded-full -translate-x-1.5 sm:-translate-x-2 mix-blend-screen animate-pulse-soft" />
            <div className="absolute w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 bg-sky-500/35 rounded-full translate-x-1.5 sm:translate-x-2 mix-blend-screen" />
          </div>
          <div className="h-0.5 sm:h-1 w-4 sm:w-6 bg-slate-600 rounded self-center" />
        </div>

        <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 bg-sky-50 border border-sky-200 rounded-lg p-1.5 xs:p-2 shrink-0 flex flex-col justify-between shadow-md relative group opacity-50 translate-x-2 xs:translate-x-3 sm:translate-x-4">
          <span className="text-[7px] xs:text-[8px] text-sky-500 font-bold uppercase tracking-wider">Layer C</span>
          <div className="flex-1 flex items-center justify-center relative">
            <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 border-2 border-sky-300 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileMockup() {
  const avatars = [
    { bg: "bg-amber-400", emoji: "👩‍💻" },
    { bg: "bg-emerald-400", emoji: "👨‍🎨" },
    { bg: "bg-indigo-400", emoji: "👩‍💼" },
    { bg: "bg-rose-400", emoji: "🧑‍🚀" },
    { bg: "bg-sky-400", emoji: "🧙‍♂️" },
  ];

  return (
    <div className="relative w-full h-[220px] flex justify-center items-center overflow-hidden">
      <div className="relative w-[140px] h-[210px] bg-slate-900 rounded-[20px] border-[3px] border-slate-800 shadow-2xl overflow-hidden flex flex-col">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-900 rounded-b-md z-20 flex justify-center items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
        </div>

        <div className="flex-1 bg-emerald-900 flex flex-col overflow-hidden pt-3.5 relative">
          <div className="flex justify-between px-3 pt-0.5 text-[6.5px] text-emerald-200 font-semibold z-10 shrink-0">
            <span>9:41</span>
            <div className="flex gap-0.5 items-center">
              <span>📶</span>
              <span>🔋</span>
            </div>
          </div>

          <div className="p-2 pb-1.5 text-center text-white shrink-0">
            <h4 className="text-[8px] font-bold tracking-wide uppercase text-emerald-100">Help Scout</h4>
            <div className="text-[11px] font-extrabold mt-0.5 text-white">Mobile App</div>
          </div>

          <div className="flex items-center justify-center -space-x-1 py-1 bg-emerald-950/30">
            {avatars.map((av, idx) => (
              <div
                key={idx}
                className={`w-4 h-4 rounded-full ${av.bg} border border-emerald-900 flex items-center justify-center text-[8px] shadow-sm transform hover:-translate-y-0.5 transition-transform`}
              >
                {av.emoji}
              </div>
            ))}
          </div>

          <div className="flex-1 bg-slate-50 p-2 flex flex-col gap-1 rounded-t-[12px] mt-1 shadow-inner overflow-hidden">
            <div className="self-start max-w-[85%] bg-emerald-100 text-emerald-950 rounded-lg p-1.5 text-[6.5px] leading-snug font-medium">
              Hey team, let's coordinate on the design update!
            </div>
            <div className="self-end max-w-[85%] bg-slate-200 text-slate-800 rounded-lg p-1.5 text-[6.5px] leading-snug font-medium">
              On it. Added layouts inside Figma.
            </div>
            <div className="h-5 w-full border border-slate-200 rounded-full bg-white mt-auto flex items-center px-2">
              <div className="h-1 w-10 bg-slate-200 rounded-full" />
              <div className="ml-auto w-2.5 h-2.5 rounded-full bg-emerald-600 flex items-center justify-center text-[4px] text-white">➜</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DoodlerMockup() {
  const [activeColor, setActiveColor] = useState("bg-purple-500");
  const [tool, setTool] = useState("brush");

  const colors = [
    { bg: "bg-rose-500", name: "rose" },
    { bg: "bg-amber-500", name: "amber" },
    { bg: "bg-emerald-500", name: "emerald" },
    { bg: "bg-sky-500", name: "sky" },
    { bg: "bg-indigo-500", name: "indigo" },
    { bg: "bg-purple-500", name: "purple" },
  ];

  return (
    <div className="relative w-full h-[220px] bg-white rounded-lg shadow-xl border border-black/5 overflow-hidden flex flex-col justify-center items-center p-4 transition-all duration-300 hover:shadow-2xl">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 20 180 Q 80 80 140 130 T 260 40"
          fill="none"
          stroke={activeColor.includes("rose") ? "#f43f5e" : activeColor.includes("amber") ? "#f59e0b" : activeColor.includes("emerald") ? "#10b981" : activeColor.includes("sky") ? "#0ea5e9" : activeColor.includes("indigo") ? "#6366f1" : "#a855f7"}
          strokeWidth="6"
          strokeLinecap="round"
          className="opacity-25"
        />
        <circle cx="80" cy="60" r="15" className="fill-yellow-100 opacity-70 animate-pulse-soft" />
      </svg>

      <div className="bg-slate-900/95 text-white rounded-full shadow-2xl py-2.5 px-4 flex items-center gap-3 border border-slate-800 z-10">
        <div className="flex gap-1.5 border-r border-slate-700/80 pr-3">
          <button
            onClick={() => setTool("pen")}
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors ${
              tool === "pen" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            ✏️
          </button>
          <button
            onClick={() => setTool("brush")}
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors ${
              tool === "brush" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            🖌️
          </button>
          <button
            onClick={() => setTool("eraser")}
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors ${
              tool === "eraser" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            🧽
          </button>
        </div>

        <div className="flex gap-1">
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setActiveColor(c.bg)}
              className={`w-4 h-4 rounded-full ${c.bg} transition-transform ${
                activeColor === c.bg ? "scale-125 ring-2 ring-white ring-offset-2 ring-offset-slate-900" : "hover:scale-110"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 text-[10px] text-slate-400 font-bold uppercase tracking-wider select-none z-10 bg-white/80 px-2 py-0.5 rounded">
        Doodler Tool
      </div>
    </div>
  );
}

export function DropletteMockup() {
  const [selectedDot, setSelectedDot] = useState(4);

  const dots = [
    { color: "bg-red-500", glow: "shadow-red-500/50" },
    { color: "bg-orange-500", glow: "shadow-orange-500/50" },
    { color: "bg-yellow-500", glow: "shadow-yellow-500/50" },
    { color: "bg-emerald-500", glow: "shadow-emerald-500/50" },
    { color: "bg-blue-500", glow: "shadow-blue-500/50" },
    { color: "bg-indigo-500", glow: "shadow-indigo-500/50" },
    { color: "bg-fuchsia-500", glow: "shadow-fuchsia-500/50" },
  ];

  return (
    <div className="relative w-full h-[220px] bg-[#121212] rounded-lg shadow-xl border border-white/5 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl">
      <div className="h-8 bg-zinc-950 flex items-center justify-between px-3 border-b border-zinc-900 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase">Droplette</span>
          <span className="text-[8px] text-zinc-500">v1.0.4</span>
        </div>
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
      </div>

      <div className="flex-1 p-4 flex flex-col justify-center gap-4">
        <div className="text-center">
          <div className="text-[9px] text-zinc-500 uppercase tracking-widest">Fluid Engine State</div>
          <div className="text-[11px] text-zinc-300 font-medium mt-0.5">Matrix Color Injectors</div>
        </div>

        <div className="flex justify-center items-center gap-3">
          {dots.map((d, index) => {
            const isSelected = selectedDot === index;
            return (
              <div key={index} className="relative flex items-center justify-center">
                {isSelected && (
                  <>
                    <div className="absolute w-10 h-10 border border-white/10 rounded-full animate-ping pointer-events-none" />
                    <div className="absolute w-8 h-8 border border-white/20 rounded-full animate-pulse-soft pointer-events-none" />
                  </>
                )}
                <button
                  onClick={() => setSelectedDot(index)}
                  className={`w-6 h-6 rounded-full ${d.color} transition-all duration-300 relative z-10 ${
                    isSelected ? `scale-125 shadow-lg ${d.glow} ring-2 ring-white` : "opacity-60 hover:opacity-100 hover:scale-105"
                  }`}
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-6 text-[8px] font-mono text-zinc-500 mt-1 uppercase tracking-wider">
          <div>Power: <span className="text-emerald-500 font-bold">98.2%</span></div>
          <div>Viscosity: <span className="text-emerald-500 font-bold">12 cP</span></div>
        </div>
      </div>
    </div>
  );
}

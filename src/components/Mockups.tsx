"use client";

import React, { useState } from "react";

export function AIMockup() {
  const [prompt, setPrompt] = useState("Generate serverless database connection");
  return (
    <div className="relative w-full h-[220px] bg-white rounded-lg shadow-xl border border-black/5 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl">
      <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-3 gap-1.5 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        <span className="text-[10px] text-slate-400 font-medium ml-3">DevAssist AI</span>
      </div>

      <div className="p-4 flex-1 flex flex-col gap-2 relative">
        <div className="h-3 w-3/4 bg-slate-100 rounded-full animate-pulse-soft" />
        <div className="h-3 w-5/6 bg-slate-100 rounded-full animate-pulse-soft" />
        <div className="h-3 w-2/3 bg-slate-100 rounded-full animate-pulse-soft" />

        <div className="absolute top-12 left-4 right-4 bg-slate-950 rounded-lg shadow-xl border border-slate-800 p-3 animate-float-1 z-10 flex flex-col gap-2 scale-90 sm:scale-100 origin-center">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
            <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase">AI Architect</span>
            <span className="text-[10px] text-emerald-500">✦</span>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="text-xs text-slate-200 font-mono focus:outline-none bg-transparent flex-1"
              placeholder="Code command..."
            />
          </div>
          <div className="text-[9px] text-emerald-400 font-mono bg-black/60 p-1.5 rounded border border-slate-800/80 leading-relaxed">
            <span className="text-purple-400">const</span> client = <span className="text-purple-400">await</span> connectDB();<br/>
            <span className="text-purple-400">export const</span> handler = <span className="text-purple-400">async</span> (req) =&gt; &#123; ... &#125;
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-1">
              <span className="px-1.5 py-0.5 text-[8px] bg-slate-800 text-slate-300 rounded border border-slate-700 font-mono">Node.js</span>
              <span className="px-1.5 py-0.5 text-[8px] bg-slate-800 text-slate-300 rounded border border-slate-700 font-mono">Docker</span>
            </div>
            <button className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[10px] font-medium shadow-sm transition-colors cursor-pointer">
              Deploy
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
          <span className="text-[10px] text-slate-400 font-medium ml-2">Metrics Dashboard</span>
        </div>
        <div className="flex gap-1.5">
          <div className="h-4.5 px-2 bg-emerald-50 text-emerald-600 rounded text-[9px] flex items-center font-bold">Cloud Health</div>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex-1 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-full text-[9px] font-semibold tracking-wide uppercase">
            Uptime: 99.99%
          </span>
          <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-0.5 animate-pulse-soft">
            ● Healthy
          </span>
        </div>

        <h3 className="text-sm font-bold text-slate-800 leading-snug">
          Microservices Platform Performance
        </h3>

        <div className="flex flex-col gap-2 mt-1">
          <div className="flex items-center justify-between text-[10px] text-slate-600 font-medium">
            <span>API Response Time:</span>
            <span className="font-bold text-slate-800">12ms (Avg)</span>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-600 font-medium">
            <span>Server Load Index:</span>
            <span className="font-bold text-slate-800">14% (Optimized)</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
            <div className="bg-emerald-500 h-full w-11/12 animate-pulse-soft" />
          </div>
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
          <span className="text-[10px] text-slate-400 font-medium ml-2">Architecture Schema</span>
        </div>
        <div className="w-4 h-4 rounded bg-slate-800 flex items-center justify-center text-[9px] text-slate-400">Node</div>
      </div>

      <div className="flex-1 bg-slate-950/40 p-3 xs:p-4 flex gap-2 xs:gap-3 sm:gap-4 overflow-hidden relative justify-center items-center">
        {/* API Gateway node */}
        <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 bg-emerald-50 border border-emerald-200 rounded-lg p-1.5 xs:p-2 shrink-0 flex flex-col justify-between shadow-md relative group hover:-translate-y-1 transition-transform">
          <span className="text-[7px] xs:text-[8px] text-emerald-600 font-bold uppercase tracking-wider">Gateway API</span>
          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 border-2 border-emerald-400/50 rounded-full -translate-x-1.5 sm:-translate-x-2" />
            <div className="absolute w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 border-2 border-emerald-400 rounded-full translate-x-1.5 sm:translate-x-2" />
          </div>
          <span className="text-[7px] text-emerald-600 font-bold text-center">Requests Sync</span>
        </div>

        {/* Messaging Queue */}
        <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 bg-slate-800 border border-slate-700 rounded-lg p-1.5 xs:p-2 shrink-0 flex flex-col justify-between shadow-md relative group hover:-translate-y-1 transition-transform">
          <span className="text-[7px] xs:text-[8px] text-indigo-400 font-bold uppercase tracking-wider">Queue Broker</span>
          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 bg-indigo-600/35 rounded-full -translate-x-1.5 sm:-translate-x-2 mix-blend-screen animate-pulse-soft" />
            <div className="absolute w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 bg-sky-500/35 rounded-full translate-x-1.5 sm:translate-x-2 mix-blend-screen" />
          </div>
          <span className="text-[7px] text-indigo-300 font-bold text-center">Active Jobs: 14</span>
        </div>

        {/* Database Node */}
        <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 bg-amber-50 border border-amber-200 rounded-lg p-1.5 xs:p-2 shrink-0 flex flex-col justify-between shadow-md relative group opacity-50 translate-x-2 xs:translate-x-3 sm:translate-x-4">
          <span className="text-[7px] xs:text-[8px] text-amber-600 font-bold uppercase tracking-wider">Database</span>
          <div className="flex-1 flex items-center justify-center relative">
            <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 border-2 border-dashed border-amber-400 rounded-full flex items-center justify-center text-[10px]">💾</div>
          </div>
          <span className="text-[7px] text-amber-600 font-bold text-center">PostgreSQL</span>
        </div>
      </div>
    </div>
  );
}

export function MobileMockup() {
  const avatars = [
    { bg: "bg-amber-400", emoji: "🤖" },
    { bg: "bg-emerald-400", emoji: "👩‍💻" },
    { bg: "bg-indigo-400", emoji: "👨‍💻" },
    { bg: "bg-rose-400", emoji: "🚀" },
    { bg: "bg-sky-400", emoji: "⚙️" },
  ];

  return (
    <div className="relative w-full h-[220px] flex justify-center items-center overflow-hidden">
      <div className="relative w-[140px] h-[210px] bg-slate-900 rounded-[20px] border-[3px] border-slate-800 shadow-2xl overflow-hidden flex flex-col">
        {/* Notch */}
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
            <h4 className="text-[8px] font-bold tracking-wide uppercase text-emerald-100">CI/CD Engine</h4>
            <div className="text-[11px] font-extrabold mt-0.5 text-white">Pipeline Monitor</div>
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

          <div className="flex-1 bg-slate-50 p-2 flex flex-col gap-1.5 rounded-t-[12px] mt-1 shadow-inner overflow-hidden">
            <div className="self-start max-w-[85%] bg-emerald-100 text-emerald-950 rounded-lg p-1.5 text-[6px] leading-snug font-medium">
              Git push detected on main branch. Running docker-compose build script.
            </div>
            <div className="self-end max-w-[85%] bg-slate-200 text-slate-800 rounded-lg p-1.5 text-[6px] leading-snug font-medium">
              Pipeline success! Deployed to staging-cdn. SLA: 99.9%.
            </div>
            <div className="h-5 w-full border border-slate-200 rounded-full bg-white mt-auto flex items-center px-2 shrink-0">
              <div className="h-1 w-10 bg-slate-200 rounded-full" />
              <div className="ml-auto w-2.5 h-2.5 rounded-full bg-emerald-600 flex items-center justify-center text-[4px] text-white animate-bounce">➜</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DoodlerMockup() {
  const [activeColor, setActiveColor] = useState("bg-emerald-500");
  const [stage, setStage] = useState("build");

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
          d="M 30 160 Q 90 70 150 110 T 250 50"
          fill="none"
          stroke={activeColor.includes("rose") ? "#f43f5e" : activeColor.includes("amber") ? "#f59e0b" : activeColor.includes("emerald") ? "#10b981" : activeColor.includes("sky") ? "#0ea5e9" : activeColor.includes("indigo") ? "#6366f1" : "#a855f7"}
          strokeWidth="4"
          strokeLinecap="round"
          className="opacity-40"
        />
        <circle cx="30" cy="160" r="10" className={`${activeColor} opacity-70 animate-pulse-soft`} />
        <circle cx="120" cy="95" r="8" className="fill-slate-400 opacity-60" />
        <circle cx="250" cy="50" r="6" className="fill-slate-600 opacity-80" />
      </svg>

      <div className="bg-slate-900/95 text-white rounded-2xl shadow-2xl py-2 px-3 flex flex-col gap-2 border border-slate-800 z-10 w-[95%]">
        <div className="flex justify-between items-center border-b border-slate-800 pb-1.5">
          <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">DevOps Pipelines</span>
          <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1 rounded font-mono font-bold">12s Build</span>
        </div>

        <div className="flex justify-between items-center gap-2">
          <div className="flex gap-1">
            <button
              onClick={() => setStage("build")}
              className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase transition-colors ${stage === "build" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
                }`}
            >
              Build
            </button>
            <button
              onClick={() => setStage("test")}
              className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase transition-colors ${stage === "test" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
                }`}
            >
              Test
            </button>
            <button
              onClick={() => setStage("deploy")}
              className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase transition-colors ${stage === "deploy" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
                }`}
            >
              Deploy
            </button>
          </div>

          <div className="flex gap-1 pr-1">
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setActiveColor(c.bg)}
                className={`w-3.5 h-3.5 rounded-full ${c.bg} transition-transform ${activeColor === c.bg ? "scale-110 ring-2 ring-white" : "hover:scale-105"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 text-[9px] text-slate-500 font-bold uppercase tracking-widest select-none z-10 bg-white/80 px-2 py-0.5 rounded border border-slate-100">
        Stage state: <span className="text-slate-800">{stage === "build" ? "Docker Image Ready" : stage === "test" ? "142 Unit Tests Passed" : "Cloud Registry Synced"}</span>
      </div>
    </div>
  );
}

export function DropletteMockup() {
  const [selectedDot, setSelectedDot] = useState(3);

  const dots = [
    { color: "bg-red-500", glow: "shadow-red-500/50", name: "Next.js", metrics: { speed: "+42%", SLA: "99.9%" } },
    { color: "bg-orange-500", glow: "shadow-orange-500/50", name: "Node.js", metrics: { speed: "+30%", SLA: "99.9%" } },
    { color: "bg-yellow-500", glow: "shadow-yellow-500/50", name: "AWS Cloud", metrics: { speed: "+88%", SLA: "99.99%" } },
    { color: "bg-emerald-500", glow: "shadow-emerald-500/50", name: "PostgreSQL", metrics: { speed: "+95%", SLA: "99.99%" } },
    { color: "bg-blue-500", glow: "shadow-blue-500/50", name: "GraphQL", metrics: { speed: "+54%", SLA: "99.9%" } },
    { color: "bg-indigo-500", glow: "shadow-indigo-500/50", name: "Docker", metrics: { speed: "+25%", SLA: "99.9%" } },
    { color: "bg-fuchsia-500", glow: "shadow-fuchsia-500/50", name: "Kubernetes", metrics: { speed: "+60%", SLA: "99.95%" } },
  ];

  const activeModel = dots[selectedDot];

  return (
    <div className="relative w-full h-[220px] bg-[#121212] rounded-lg shadow-xl border border-white/5 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl">
      <div className="h-8 bg-zinc-950 flex items-center justify-between px-3 border-b border-zinc-900 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase">Tech Stack</span>
          <span className="text-[8px] text-zinc-500">v3.4.1</span>
        </div>
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 animate-pulse-soft" />
      </div>

      <div className="flex-1 p-4 flex flex-col justify-center gap-4">
        <div className="text-center">
          <div className="text-[9px] text-zinc-500 uppercase tracking-widest">Active: {activeModel.name}</div>
          <div className="text-[11px] text-zinc-300 font-medium mt-0.5">Custom Software Architecture Stack</div>
        </div>

        <div className="flex justify-center items-center gap-2 sm:gap-3">
          {dots.map((d, index) => {
            const isSelected = selectedDot === index;
            return (
              <div key={index} className="relative flex items-center justify-center">
                {isSelected && (
                  <>
                    <div className="absolute w-9 h-9 border border-white/10 rounded-full animate-ping pointer-events-none" />
                    <div className="absolute w-7 h-7 border border-white/25 rounded-full animate-pulse-soft pointer-events-none" />
                  </>
                )}
                <button
                  onClick={() => setSelectedDot(index)}
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${d.color} transition-all duration-300 relative z-10 ${isSelected ? `scale-125 shadow-lg ${d.glow} ring-2 ring-white` : "opacity-50 hover:opacity-100 hover:scale-105"
                    }`}
                  title={d.name}
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-6 text-[8px] font-mono text-zinc-500 mt-1 uppercase tracking-wider">
          <div>Performance: <span className="text-emerald-500 font-bold">{activeModel.metrics.speed}</span></div>
          <div>SLA Level: <span className="text-emerald-500 font-bold">{activeModel.metrics.SLA}</span></div>
        </div>
      </div>
    </div>
  );
}

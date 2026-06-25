"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import FloatingStars from "@/components/FloatingStars";
import ProjectCard from "@/components/ProjectCard";
import {
  AIMockup,
  ArticlesMockup,
  PluginsMockup,
  MobileMockup,
  DoodlerMockup,
  DropletteMockup,
} from "@/components/Mockups";

function DocFlourish({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute w-36 h-36 text-black/5 -top-12 -left-8 transform -rotate-12 ${className}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </svg>
  );
}

function FoldersFlourish() {
  return (
    <>
      <svg
        className="absolute w-24 h-24 text-black/5 -top-8 -left-4 transform rotate-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
      </svg>
      <svg
        className="absolute w-28 h-28 text-black/5 -top-10 -right-8 transform -rotate-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    </>
  );
}

function FigmaFlourish() {
  return (
    <>
      <svg
        className="absolute w-24 h-24 text-black/5 bottom-8 -left-8 transform rotate-45"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
      <svg
        className="absolute w-32 h-32 text-black/5 -top-12 right-12 transform -rotate-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v4h2v-4h3l-4-4-4 4h3z" />
      </svg>
    </>
  );
}

function WaveFlourish() {
  return (
    <svg
      className="absolute w-36 h-36 text-black/5 -top-8 -left-8"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z" />
    </svg>
  );
}

export default function Home() {
  const [themeMode, setThemeMode] = useState<"emerald" | "violet" | "indigo">("emerald");
  const [tickIndex, setTickIndex] = useState(6);

  const themeGradients = {
    emerald: "from-[#204523] to-[#061109]",
    violet: "from-[#351c4a] to-[#0c0512]",
    indigo: "from-[#1c2e4a] to-[#050b12]",
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-between pb-12 transition-all duration-1000 bg-gradient-to-b ${themeGradients[themeMode]}`}
    >
      <Header />

      <main className="w-full max-w-[1280px] px-6 md:px-12 flex-1 flex flex-col items-center relative z-10">
        <FloatingStars />

        {/* Hero Section */}
        <section className="text-center py-20 md:py-22 max-w-2xl flex flex-col items-center gap-6 relative select-none">
          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.05] text-[#abf7da] drop-shadow-[0_4px_12px_rgba(171,247,218,0.15)] font-display">
            Hi. We&apos;re 3xdevs.
            <br />
            <span className="text-white opacity-95">You Need it.. We Build it..</span>
          </h1>

          <p className="text-sm md:text-base leading-relaxed text-emerald-100/70 font-medium max-w-md mt-4">
            We&apos;re passionate about crafting experiences that are engaging,
            and user-centric.
          </p>
        </section>

        <section id="work" className="w-full py-12">
          <div className="cards-content">
            <ProjectCard
              title="AI"
              subtitle="Help Scout"
              bgColor="bg-[#c099e3]"
              textColor="text-[#2b173d]"
              gridStart={1}
              gridSpan={9}
              flourishes={<DocFlourish />}
            >
              <AIMockup />
            </ProjectCard>

            <ProjectCard
              title="Articles"
              subtitle="Help Scout"
              bgColor="bg-[#a4ebd9]"
              textColor="text-[#103b30]"
              gridStart={11}
              gridSpan={15}
              flourishes={<FoldersFlourish />}
            >
              <ArticlesMockup />
            </ProjectCard>

            <ProjectCard
              title="Plugins"
              subtitle="Figma"
              bgColor="bg-[#f4be9b]"
              textColor="text-[#4f2a11]"
              gridStart={1}
              gridSpan={15}
              flourishes={<FigmaFlourish />}
            >
              <PluginsMockup />
            </ProjectCard>

            <ProjectCard
              title="Mobile"
              subtitle="Help Scout"
              bgColor="bg-[#a3d8f4]"
              textColor="text-[#12384c]"
              gridStart={17}
              gridSpan={9}
              flourishes={<WaveFlourish />}
            >
              <MobileMockup />
            </ProjectCard>
          </div>
        </section>

        <section id="play" className="w-full py-16 md:py-28 flex flex-col items-center">
          <div className="text-center max-w-2xl flex flex-col items-center gap-4 mb-16 select-none">
            <h2 className="text-4xl md:text-7xl font-black text-[#abf7da] leading-none">
              In Progress.
            </h2>
            <p className="text-xs md:text-sm leading-relaxed text-emerald-100/60 font-medium max-w-md">
              Work in various states of design and development, from side projects,
              to in-flight product design and development.
            </p>
          </div>

          <div className="cards-content w-full">
            <ProjectCard
              title="Doodler"
              subtitle="Multiplayer"
              bgColor="bg-white"
              textColor="text-slate-900"
              gridStart={1}
              gridSpan={15}
            >
              <DoodlerMockup />
            </ProjectCard>

            <ProjectCard
              title="Droplette"
              subtitle="Figma"
              bgColor="bg-[#1c1c1c]"
              textColor="text-white"
              gridStart={17}
              gridSpan={9}
            >
              <DropletteMockup />
            </ProjectCard>
          </div>
        </section>
      </main>

      <footer className="w-full max-w-[1280px] px-6 md:px-12 mt-16 md:mt-24 pt-12 border-t border-white/5 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 text-sm text-emerald-100/60 font-medium">
          <div className="flex flex-col gap-1.5 select-none">
            <p className="text-white text-base font-semibold">3xdevs</p>
            <p className="hover:text-white transition-colors cursor-pointer">Not just devs</p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest opacity-80">
              Elsewhere
            </h4>
            <div className="flex flex-col gap-1.5">
              {["Figma", "GitHub", "Posts", "CV", "LinkedIn"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-white transition-colors self-start"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest opacity-80">
              Contact
            </h4>
            <a
              href="mailto:hello@example.com"
              className="hover:text-white transition-colors self-start"
            >
              Message
            </a>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-6 mt-16 select-none">
          <div className="flex gap-2 bg-black/40 border border-white/5 p-1 rounded-full shrink-0">
            {(["emerald", "violet", "indigo"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setThemeMode(t)}
                className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full transition-all ${
                  themeMode === t
                    ? "bg-[#abf7da] text-[#061109] shadow"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex-1 w-full flex items-center gap-2">
            <span className="text-[10px] font-bold text-[#abf7da] shrink-0">01</span>
            <div className="flex-1 h-[2px] bg-white/10 rounded-full relative flex justify-between items-center px-1">
              {Array.from({ length: 12 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTickIndex(idx)}
                  className={`w-1 h-3 rounded-full transition-all duration-300 ${
                    idx === tickIndex ? "bg-[#abf7da] h-5 w-1.5 shadow" : "bg-white/30 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
            <span className="text-[10px] font-bold text-white/40 shrink-0">12</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

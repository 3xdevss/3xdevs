import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "3xdevs | Custom Software & Web Development",
  description: "We craft engaging, modern, and user-centric web applications and custom software solutions. You need it, we build it.",
};

function DocFlourish({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute w-36 h-36 text-[var(--flourish-color)] -top-12 -left-8 transform -rotate-12 ${className}`}
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
        className="absolute w-24 h-24 text-[var(--flourish-color)] -top-8 -left-4 transform rotate-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
      </svg>
      <svg
        className="absolute w-28 h-28 text-[var(--flourish-color)] -top-10 -right-8 transform -rotate-6"
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
        className="absolute w-24 h-24 text-[var(--flourish-color)] bottom-8 -left-8 transform rotate-45"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
      <svg
        className="absolute w-32 h-32 text-[var(--flourish-color)] -top-12 right-12 transform -rotate-12"
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
      className="absolute w-36 h-36 text-[var(--flourish-color)] -top-8 -left-8"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between pb-12 transition-all duration-500 bg-gradient-to-b from-[var(--gradient-from)] to-[var(--gradient-to)]"
    >
      <Header />

      <main className="w-full max-w-[1280px] px-4 sm:px-6 md:px-12 flex-1 flex flex-col items-center relative z-10 mt-2">
        <FloatingStars />

        {/* Hero Section top-[26%] md:top-[9%] */}
        <section className="w-full flex flex-col items-center text-center gap-6 md:gap-7 pt-40 md:pt-48 pb-16 md:pb-24 relative z-10 selection:bg-[var(--accent-color)] selection:text-[var(--bg-primary)]">
            <div className="absolute top-[14.5%] md:top-[8%] left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 font-display font-black text-[12vw] tracking-wider leading-none text-center select-none contact-watermark ">
              3xDevs
            </div>
          {/* Tech Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--pill-border)] bg-[var(--bg-primary)]/40 backdrop-blur-sm shadow-sm select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-color)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-color)]"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Developer Agency of the Future
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[84px] font-black tracking-tight leading-[1.02] text-[var(--text-title)] drop-shadow-[0_4px_12px_rgba(171,247,218,0.15)] font-display">
            Hi. We&apos;re 3xdevs
            <br />
            <span className="hero-subtitle text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-color)] to-[var(--text-primary)]">You Need it.. <br className="hidden xs:inline" /> We Build it..</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[var(--text-secondary)] font-medium max-w-2xl mt-2">
            We&apos;re passionate about crafting high-end digital experiences, custom WebGL interfaces, next-gen mobile apps, and robust systems that are engaging, performant, and user-centric.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Link
              href="/contact-us"
              className="px-6 py-3.5 md:px-7 md:py-4 rounded-2xl bg-[var(--accent-color)] text-[var(--bg-primary)] hover:text-[var(--bg-primary)] font-bold text-sm tracking-wide shadow-[0_10px_20px_-5px_var(--accent-color)]/30 hover:shadow-[0_15px_30px_-5px_var(--accent-color)]/45 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer flex items-center gap-2 group"
            >
              Let&apos;s Build Something
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <a
              href="#work"
              className="px-6 py-3.5 md:px-7 md:py-4 rounded-2xl border border-[var(--border-primary)] hover:border-[var(--text-secondary)] text-[var(--text-primary)] hover:text-[var(--text-title)] font-bold text-sm tracking-wide hover:bg-[var(--bg-secondary)]/50 transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              Explore Work
            </a>
          </div>
        </section>

        <section id="work" className="w-full py-12">
          <div className="cards-content">
            <ProjectCard
              title="AI Architect"
              subtitle="Custom Code"
              bgColor="bg-[#c099e3]"
              textColor="text-[#2b173d]"
              gridStart={1}
              gridSpan={9}
              flourishes={<DocFlourish />}
            >
              <AIMockup />
            </ProjectCard>

            <ProjectCard
              title="Cloud Monitor"
              subtitle="System Health"
              bgColor="bg-[#a4ebd9]"
              textColor="text-[#103b30]"
              gridStart={11}
              gridSpan={15}
              flourishes={<FoldersFlourish />}
            >
              <ArticlesMockup />
            </ProjectCard>

            <ProjectCard
              title="API Pipelines"
              subtitle="System Design"
              bgColor="bg-[#f4be9b]"
              textColor="text-[#4f2a11]"
              gridStart={1}
              gridSpan={15}
              flourishes={<FigmaFlourish />}
            >
              <PluginsMockup />
            </ProjectCard>

            <ProjectCard
              title="DevOps Console"
              subtitle="Automated Deployments"
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
          <div className="text-center max-w-2xl flex flex-col items-center gap-4 mb-16 selection:bg-[var(--accent-color)] selection:text-[var(--bg-primary)]">
            <h2 className="text-4xl md:text-7xl font-black text-[var(--text-title)] leading-none">
              In Progress.
            </h2>
            <p className="text-xs md:text-sm leading-relaxed text-[var(--text-secondary)] font-medium max-w-md">
              Work in various states of design and development, from side projects,
              to in-flight product design and development.
            </p>
          </div>

          <div className="cards-content w-full">
            <ProjectCard
              title="CI/CD Pipeline"
              subtitle="Build Systems"
              bgColor="bg-white"
              textColor="text-slate-900"
              gridStart={1}
              gridSpan={15}
            >
              <DoodlerMockup />
            </ProjectCard>

            <ProjectCard
              title="Core Stack"
              subtitle="Modern Technologies"
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

      <Footer showLinks />
    </div>
  );
}

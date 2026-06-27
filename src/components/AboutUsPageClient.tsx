"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface StatItem {
  number: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    number: "50+",
    label: "Custom Projects",
    description: "Bespoke production-ready web apps, custom WebGL portals, and systems delivered.",
  },
  {
    number: "15+",
    label: "Creators & Engineers",
    description: "Passionate code crafters, interface designers, and system architects.",
  },
  {
    number: "99.9%",
    label: "SLA & Performance",
    description: "Systems optimized for maximum reliability, speed, and lighthouse ratings.",
  },
];

interface PrincipleItem {
  icon: string;
  title: string;
  description: string;
}

const principles: PrincipleItem[] = [
  {
    icon: "💎",
    title: "Uncompromising Design",
    description: "We believe in rich, high-end aesthetics that captivate users immediately. No templates, no generic boxes—pure interactive experiences tailored to your brand.",
  },
  {
    icon: "🚀",
    title: "Future-Proof Tech",
    description: "Leveraging React, Next.js, WebGL/Three.js, Tailwind CSS, and cloud environments to create ultra-fast pages with absolute stability.",
  },
  {
    icon: "🤝",
    title: "Radical Transparency",
    description: "We function as your extended team. Direct communication, live Figma boards, and collaborative milestones keep you fully in control of your project.",
  },
];

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  specialty: string;
  bio: string;
  tools: string[];
}

const team: TeamMember[] = [
  {
    name: "Liam Vance",
    role: "Lead WebGL & Frontend Engineer",
    initials: "LV",
    specialty: "Interactive 3D Systems",
    bio: "Pushes the limits of web browsers using custom shaders, GLSL, and optimized WebGL renders. Liam designs the interactions that make sites feel alive.",
    tools: ["Three.js", "Next.js", "GLSL", "React"],
  },
  {
    name: "Aria Sterling",
    role: "Design Architect & Director",
    initials: "AS",
    specialty: "Bespoke UI/UX & Motion",
    bio: "Translates abstract ideas into stunning layouts and interactive visual flows. Aria focuses on dynamic glassmorphic design and micro-interactions.",
    tools: ["Figma", "Spline", "Framer Motion", "Cinema 4D"],
  },
  {
    name: "Kaelen Voss",
    role: "Cloud Systems & DevOps Engineer",
    initials: "KV",
    specialty: "Distributed Systems & CDN Scale",
    bio: "Architects secure database models and builds zero-downtime serverless pipelines. Kaelen ensures that your application is secure, fast, and globally scalable.",
    tools: ["AWS", "Vercel", "Kubernetes", "Node.js"],
  },
];

export default function AboutUsPageClient() {
  const themeStyles = {
    glowClass: "from-[var(--theme-glow-from)] via-[var(--theme-glow-via)] to-transparent",
    glowBorder: "border-[var(--pill-border)] hover:border-[var(--theme-glow-border-hover)]",
    accentText: "text-[var(--theme-accent-text)]",
    textHighlight: "from-[var(--theme-text-highlight-from)] to-[var(--theme-text-highlight-to)]",
    cardBg: "bg-[var(--theme-card-bg)]",
    buttonBg: "theme-button",
  };

  return (
    <div className="w-full relative py-6">
      {/* Hero Section */}
      <section className="text-center pt-42 md:pt-50 pb-16 max-w-4xl mx-auto flex flex-col items-center gap-6 relative selection:bg-[var(--accent-color)] selection:text-[var(--bg-primary)]">
        {/* Background Watermark */}
        <div className="absolute top-[23%] md:top-[11%] left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 font-display font-black text-[12vw] tracking-wider leading-none text-center contact-watermark">
          ABOUT
        </div>

        {/* Hero Text */}
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
              Meet 3xdevs
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-[var(--text-title)] font-display">
            Engineering the <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${themeStyles.textHighlight} drop-shadow-[0_4px_10px_rgba(255,255,255,0.05)]`}>
              Next Dimension
            </span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] font-medium max-w-2xl px-4">
            We are a group of passionate designers, creators, and engineers united by a common mission: building bespoke digital products that challenge standard conventions. We design to stand out, and we code to scale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link
              href="/contact-us"
              className={`px-7 py-4 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer flex items-center gap-2 group ${themeStyles.buttonBg}`}
            >
              Start Your Project
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <Link
              href="/customized"
              className="px-7 py-4 rounded-2xl border border-[var(--border-primary)] hover:border-[var(--text-secondary)] text-[var(--text-primary)] hover:text-[var(--text-title)] font-bold text-sm tracking-wide hover:bg-[var(--bg-secondary)]/50 transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              Our Process
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 border-t border-[var(--border-primary)] mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-[28px] border border-[var(--border-primary)]/80 bg-[var(--bg-secondary)]/10 p-6 sm:p-8 flex flex-col gap-3 overflow-hidden backdrop-blur-md hover:border-[var(--theme-border-highlight)] transition-all duration-300 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--theme-glow-from)] via-[var(--theme-glow-via)] to-transparent pointer-events-none opacity-0 group-hover:opacity-15 transition-opacity duration-500 z-0" />
              <div className="relative z-10 flex flex-col gap-2">
                <span className={`text-4xl sm:text-5xl font-black font-display text-[var(--text-title)] tracking-tight`}>
                  {stat.number}
                </span>
                <span className={`text-sm sm:text-base font-bold text-[var(--text-title)] ${themeStyles.accentText}`}>
                  {stat.label}
                </span>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-medium mt-1">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Principles */}
      <section className="w-full py-16 md:py-24 border-t border-[var(--border-primary)] mt-8 md:mt-16">
        <div className="text-center mb-16 selection:bg-[var(--accent-color)] selection:text-[var(--bg-primary)]">
          <div className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${themeStyles.accentText} mb-3`}>
            HOW WE BUILD
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-title)] font-display leading-none">
            Our Core Philosophies
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-md mx-auto mt-4 leading-relaxed font-medium">
            Building software is more than compiling code. It's about designing interfaces that flow naturally and architectures built to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-2 sm:px-0">
          {principles.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="rounded-[32px] border border-[var(--border-primary)]/80 bg-[var(--bg-secondary)]/10 p-6 sm:p-8 flex flex-col gap-4 overflow-hidden backdrop-blur-md relative group hover:border-[var(--theme-border-highlight)] hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet the Engineers Team Section */}
      <section className="w-full py-16 md:py-24 border-t border-[var(--border-primary)] mt-8 md:mt-16">
        <div className="text-center mb-16 selection:bg-[var(--accent-color)] selection:text-[var(--bg-primary)]">
          <div className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${themeStyles.accentText} mb-3`}>
            THE ARCHITECTS
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-title)] font-display leading-none">
            Meet the Engineering Team
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-md mx-auto mt-4 leading-relaxed font-medium">
            The core engineers designing and crafting 3xdevs custom products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="rounded-[32px] border border-[var(--border-primary)]/80 bg-[var(--bg-secondary)]/15 backdrop-blur-md p-8 flex flex-col justify-between overflow-hidden hover:border-[var(--theme-border-highlight)] transition-all duration-300 relative group min-h-[380px]"
            >
              {/* Radial gradient hover accent */}
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--theme-glow-from)] via-[var(--theme-glow-via)] to-transparent pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0" />

              <div className="relative z-10 flex flex-col gap-6">
                {/* Profile Top Row */}
                <div className="flex items-center gap-4">
                  {/* Initial Avatar Badge with custom border */}
                  <div className={`w-14 h-14 rounded-2xl border-2 border-[var(--theme-accent-text)] bg-[var(--bg-primary)]/80 flex items-center justify-center text-xl font-bold font-display text-[var(--text-title)] shadow-[0_0_15px_rgba(171,247,218,0.1)] group-hover:shadow-[0_0_20px_var(--theme-accent-text)]/30 transition-all duration-500`}>
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-black font-display text-[var(--text-title)] leading-none">
                      {member.name}
                    </h3>
                    <span className="text-xs font-semibold text-[var(--text-secondary)] mt-1 block">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Bio & Specialty */}
                <div className="flex flex-col gap-2">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${themeStyles.accentText}`}>
                    Specialty: {member.specialty}
                  </span>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-medium mt-1">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Tools row */}
              <div className="relative z-10 mt-6 pt-6 border-t border-[var(--border-primary)]/40 flex flex-col gap-3">
                <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">
                  Core Toolkit
                </span>
                <div className="flex flex-wrap gap-2">
                  {member.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-bold px-2.5 py-1 rounded-md border border-[var(--border-primary)] bg-[var(--bg-primary)]/60 text-[var(--text-primary)] hover:border-[var(--accent-color)]/30 transition-colors select-none"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Box */}
      <section className="w-full pt-8 pb-4">
        <div className={`relative rounded-[32px] overflow-hidden border border-[var(--border-primary)] bg-gradient-to-b ${themeStyles.glowClass} p-8 md:p-14 text-center flex flex-col items-center gap-6 md:gap-8 backdrop-blur-md`}>
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
              href="/customized"
              className="px-8 py-4 rounded-2xl border border-[var(--border-primary)] hover:border-[var(--text-secondary)] text-[var(--text-primary)] hover:text-[var(--text-title)] font-bold text-sm tracking-wide hover:bg-[var(--bg-secondary)]/50 transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              See Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import FloatingStars from "@/components/FloatingStars";
import Link from "next/link";

interface Phase {
  id: string;
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  actionText: string;
  tools: string[];
  duration: string;
  milestone: string;
  dotColorClass: string;
}

const phases: Phase[] = [
  {
    id: "discovery",
    number: "01",
    badge: "01 / DISCOVER",
    title: "From Idea to Strategy",
    subtitle: "De-risk early & align on scope",
    description: "We dive deep into your target audience, user flows, and technical requirements. Before writing a single line of code, we define a solid path forward to ensure we build exactly what your business needs.",
    deliverables: [
      "User journey maps & flows",
      "Technical architecture plan",
      "Interactive site sitemap",
      "Fixed scope & pricing proposal",
    ],
    actionText: "Initiate Discovery",
    tools: ["Figma", "Notion", "Miro", "Slack"],
    duration: "1 - 2 Weeks",
    milestone: "Technical Blueprint & Scope Sign-off",
    dotColorClass: "bg-cyan-400",
  },
  {
    id: "design",
    number: "02",
    badge: "02 / DESIGN",
    title: "From Sketch to Interface",
    subtitle: "High-end bespoke UI/UX design",
    description: "We translate user journeys into gorgeous, custom interfaces. Using harmonious palettes, elegant typography, and subtle micro-interactions, we build visual layouts that stand out from the noise.",
    deliverables: [
      "Premium high-fidelity UI design",
      "Interactive clickable prototypes",
      "WebGL & 3D planning assets",
      "Custom component design system",
    ],
    actionText: "Explore Design System",
    tools: ["Figma", "Blender", "Spline", "Illustrator"],
    duration: "2 - 3 Weeks",
    milestone: "Approved UI/UX Prototypes & Assets",
    dotColorClass: "bg-purple-400",
  },
  {
    id: "development",
    number: "03",
    badge: "03 / DEVELOP",
    title: "From Prototype to Live App",
    subtitle: "Production-ready, ultra-fast code",
    description: "Our development team brings designs to life using clean React / Next.js code, custom Framer Motion animations, and high-performance WebGL features. We test extensively for speed and accessibility.",
    deliverables: [
      "Responsive Next.js frontend code",
      "Custom Tailwind CSS styling",
      "Secure serverless API integration",
      "Lighthouse page speed audit (95+)",
    ],
    actionText: "See Tech Stack",
    tools: ["Next.js", "Framer Motion", "Tailwind CSS", "GitHub"],
    duration: "4 - 8 Weeks",
    milestone: "Fully Functioning & Tested Staging Site",
    dotColorClass: "bg-emerald-400",
  },
  {
    id: "launch",
    number: "04",
    badge: "04 / DEPLOY",
    title: "From Local Build to Global Scale",
    subtitle: "Zero-downtime deployment & care",
    description: "We configure optimal cloud environments, connect production domains, integrate analytical tracking, and deploy builds. We also include a dedicated support window for updates and training.",
    deliverables: [
      "CI/CD automated pipeline setup",
      "High-speed CDN & custom domains",
      "SEO tags & analytics dashboards",
      "30-day dedicated post-launch support",
    ],
    actionText: "Request Launch Checklist",
    tools: ["Vercel", "AWS", "Google Analytics", "Sentry"],
    duration: "1 Week",
    milestone: "Live Production Release & Post-Launch Support",
    dotColorClass: "bg-orange-400",
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is the client's role during the process?",
    answer: "We run on absolute transparency. You will be included in weekly demo check-ins, receive live view-access to our Figma design files and project boards, and approve milestones at the end of each phase. You'll always know exactly where we are.",
  },
  {
    question: "Can we change the scope of the project midway?",
    answer: "Absolutely. Our multi-phase structure is built to accommodate pivots. If you want to add features or change the roadmap during design or development, we will evaluate the impact on timing and provide a quick scope adjustment proposal.",
  },
  {
    question: "Do you build on custom code or prebuilt templates?",
    answer: "We specialize in custom Next.js, React, and WebGL code tailored to your exact brand identity and performance needs. However, if your budget or timeline is tight, we also offer a prebuilt layout package to launch faster.",
  },
  {
    question: "What happens after the 30-day post-launch support ends?",
    answer: "We offer continuous maintenance agreements tailored to your scaling needs—covering regular updates, server monitoring, security audits, and additional feature rollouts. Alternatively, we can hand off code to your internal team.",
  },
  {
    question: "What is your billing structure?",
    answer: "We split billing according to project milestones. Typically, that is 25% to initiate discovery, 25% at design sign-off, 25% during active development milestones, and the final 25% prior to live deployment.",
  },
];

export default function CustomizedPageClient() {
  const { themeMode, isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState<string>("discovery");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cooldownActive, setCooldownActive] = useState(false);
  const cooldownTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered || cooldownActive) return;

    const timer = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = phases.findIndex((p) => p.id === prev);
        const nextIndex = (currentIndex + 1) % phases.length;
        return phases[nextIndex].id;
      });
    }, 4000); // cycle through phases every 4 seconds

    return () => clearInterval(timer);
  }, [isHovered, cooldownActive]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (cooldownTimerRef.current) {
        clearTimeout(cooldownTimerRef.current);
      }
    };
  }, []);

  // Theme styles configured through static CSS variable references
  const themeStyles = {
    glowClass: "from-[var(--theme-glow-from)] via-[var(--theme-glow-via)] to-transparent",
    glowBorder: "border-[var(--pill-border)] hover:border-[var(--theme-glow-border-hover)]",
    activeBorder: "border-[var(--theme-active-border-color)] shadow-[var(--theme-active-border-shadow)]",
    accentText: "text-[var(--theme-accent-text)]",
    badgeBg: "bg-[var(--theme-badge-bg)] text-[var(--theme-badge-text)] border-[var(--theme-badge-border)]",
    buttonBg: "theme-button",
    textHighlight: "from-[var(--theme-text-highlight-from)] to-[var(--theme-text-highlight-to)]",
    pillActiveDot: "bg-[var(--theme-pill-active-dot)]",
    cardBg: "bg-[var(--theme-card-bg)]",
    borderHighlight: "border-[var(--theme-border-highlight)]",
  };
  const activePhase = phases.find((p) => p.id === activeTab) || phases[0];
  const activeIdx = phases.findIndex((p) => p.id === activeTab);

  const handleCardClick = (id: string) => {
    setActiveTab(id);

    // Set 20 seconds cooldown before resuming auto-play
    setCooldownActive(true);
    if (cooldownTimerRef.current) {
      clearTimeout(cooldownTimerRef.current);
    }
    cooldownTimerRef.current = setTimeout(() => {
      setCooldownActive(false);
    }, 20000); // 20000ms = 20 seconds
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full relative">
      <FloatingStars />

      {/* Hero Section */}
      <section className="text-center pt-42 md:pt-50 pb-16 max-w-4xl mx-auto flex flex-col items-center gap-6 relative selection:bg-[var(--accent-color)] selection:text-[var(--bg-primary)]">
        <div className="absolute top-[23%] md:top-[11%] left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 font-display font-black text-[12vw] tracking-wider leading-none text-center select-none contact-watermark ">
          PROCESS
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 relative z-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--pill-border)] bg-[var(--bg-primary)]/40 backdrop-blur-sm shadow-sm select-none">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${themeStyles.pillActiveDot} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${themeStyles.pillActiveDot}`}></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
              How We Partner With You
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[1.05] text-[var(--text-title)] font-display">
            From Concept <br className="xs:hidden" /> to{" "}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${themeStyles.textHighlight} drop-shadow-[0_4px_10px_rgba(255,255,255,0.05)]`}>
              Launch
            </span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] font-medium max-w-2xl px-4">
            A transparent, iterative development workflow built to translate your business ideas into pixel-perfect web and mobile experiences. Click on any card below to explore a phase.
          </p>
        </motion.div>
      </section>

      {/* Main Process Section (Adaptive Cards based on sample) */}
      <section
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full py-8 md:py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-title)] font-display leading-none mb-4">
            Our Development Roadmap
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-md mx-auto">
            4 simple, defined stages crafted to deliver maximum value, speed, and visual distinction.
          </p>
        </div>

        {/* Process Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-2 sm:px-0">
          {phases.map((phase) => {
            const isActive = activeTab === phase.id;

            return (
              <motion.div
                key={phase.id}
                layout
                onClick={() => handleCardClick(phase.id)}
                className={`relative rounded-[28px] p-6 sm:p-7 border transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between overflow-hidden group select-none h-full min-h-[300px] md:min-h-[340px] ${isActive
                  ? `${themeStyles.cardBg} ${themeStyles.activeBorder}`
                  : `bg-[var(--bg-secondary)]/20 ${themeStyles.glowBorder}`
                  }`}
                whileHover={{ y: isActive ? 0 : -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Glow Backdrop for Active Card */}
                {isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-b ${themeStyles.glowClass} pointer-events-none opacity-40 z-0`} />
                )}

                <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                  {/* Top Row: Badge Tag */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--pill-border)] bg-[var(--bg-primary)]/50 ${isActive ? themeStyles.accentText : "text-[var(--text-secondary)]"
                      }`}>
                      {phase.badge}
                    </span>
                    <span className="relative flex h-2 w-2">
                      {isActive && (
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${phase.dotColorClass} opacity-75`}></span>
                      )}
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${phase.dotColorClass}`}></span>
                    </span>
                  </div>

                  {/* Middle Area: Title & Subtitle */}
                  <div className="flex flex-col gap-2 mt-4">
                    <h3 className="text-xl md:text-2xl font-black font-display text-[var(--text-title)] tracking-tight leading-tight">
                      {phase.title}
                    </h3>
                    <p className="text-xs md:text-sm font-medium text-[var(--text-secondary)] leading-relaxed">
                      {phase.subtitle}
                    </p>
                  </div>

                  {/* Deliverables Teaser or Expanded Actions */}
                  <div className="mt-2 h-[120px] flex flex-col justify-end">
                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.div
                          key="active-content"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.25 }}
                          className="flex flex-col gap-4 w-full"
                        >
                          <ul className="text-xs text-[var(--text-primary)] space-y-1.5 opacity-90">
                            {phase.deliverables.slice(0, 2).map((item, idx) => (
                              <li key={idx} className="flex items-center gap-1.5 truncate">
                                <svg className="w-3.5 h-3.5 flex-shrink-0 text-[var(--accent-color)]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="truncate">{item}</span>
                              </li>
                            ))}
                          </ul>

                          <button
                            className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs tracking-wide transition-all duration-300 ${themeStyles.buttonBg}`}
                          >
                            {phase.actionText}
                          </button>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="inactive-content"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.6 }}
                          exit={{ opacity: 0 }}
                          className="text-xs text-[var(--text-secondary)] font-medium leading-relaxed"
                        >
                          {phase.description.slice(0, 95)}...
                          <span className={`block mt-3 text-[10px] font-bold uppercase tracking-wider ${themeStyles.accentText} group-hover:translate-x-1 transition-transform inline-flex items-center gap-1`}>
                            View Phase Details
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Connecting Progress Bar (visual anchor) */}
        <div className="hidden lg:flex w-full items-center justify-between px-16 mt-8 relative z-0">
          <div className="absolute left-[8%] right-[8%] h-[2px] bg-[var(--border-primary)] top-1/2 -translate-y-1/2 z-0" />
          <div
            className="absolute left-[8%] h-[2px] bg-[var(--accent-color)] top-1/2 -translate-y-1/2 z-0 transition-all duration-700 ease-out"
            style={{
              width: `${activeTab === "discovery" ? "0%" :
                activeTab === "design" ? "28%" :
                  activeTab === "development" ? "55%" : "84%"
                }`
            }}
          />
          {phases.map((phase) => {
            const isPassedOrActive =
              (activeTab === "discovery") ||
              (activeTab === "design" && phase.id !== "development" && phase.id !== "launch") ||
              (activeTab === "development" && phase.id !== "launch") ||
              (activeTab === "launch");

            return (
              <div
                key={phase.id}
                className={`relative w-8 h-8 rounded-full border-2 bg-[var(--bg-primary)] z-10 flex items-center justify-center transition-all duration-500 ${activeTab === phase.id
                  ? `border-[var(--accent-color)] scale-110 shadow-[0_0_12px_var(--accent-color)]`
                  : isPassedOrActive ? `border-[var(--accent-color)]` : `border-[var(--border-primary)]`
                  }`}
              >
                <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${activeTab === phase.id
                  ? `bg-[var(--accent-color)]`
                  : isPassedOrActive ? `bg-[var(--accent-color)]/60` : `bg-transparent`
                  }`} />
              </div>
            );
          })}
        </div>

        {/* Phase Detailed Explorer (Adding rich content according to thinking) */}
        <div className="w-full mt-12 md:mt-16 rounded-[32px] border border-[var(--border-primary)] bg-[var(--bg-secondary)]/10 p-6 sm:p-8 md:p-10 relative overflow-hidden backdrop-blur-md">
          {/* subtle decorative blur element */}
          <div className={`absolute -right-24 -top-24 w-64 h-64 rounded-full bg-gradient-to-br ${themeStyles.glowClass} blur-3xl opacity-20 pointer-events-none`} />

          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10"
            >
              {/* Left Column: Comprehensive Info */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${themeStyles.accentText}`}>
                    Phase {activePhase.number} / Detailed View
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black font-display text-[var(--text-title)] tracking-tight leading-none mt-2">
                    {activePhase.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-[var(--text-primary)] leading-relaxed opacity-90 font-medium">
                  {activePhase.description}
                </p>

                {/* Scope deliverables checklist */}
                <div className="mt-2">
                  <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--text-title)] mb-3">
                    Key Scope Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activePhase.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[var(--text-secondary)] font-medium">
                        <svg className="w-4 h-4 mt-0.5 text-[var(--accent-color)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Metadata & Tools Panel */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-6 p-6 rounded-2xl bg-[var(--bg-primary)]/50 border border-[var(--border-primary)]/60">
                {/* Meta details */}
                <div className="flex flex-col gap-4">
                  {/* Timeline */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-title)]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] md:text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider block">Estimated Duration</span>
                      <span className="text-sm md:text-base font-bold text-[var(--text-title)]">{activePhase.duration}</span>
                    </div>
                  </div>

                  {/* Milestone */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-title)]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a1.125 1.125 0 00.932-1.107V5.523a1.125 1.125 0 00-1.12-1.15l-3.112.733a9 9 0 01-6.088-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] md:text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider block">Key Milestone Goal</span>
                      <span className="text-sm md:text-base font-bold text-[var(--text-title)]">{activePhase.milestone}</span>
                    </div>
                  </div>
                </div>

                {/* Tools of Trade */}
                <div>
                  <span className="text-[10px] md:text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider block mb-3">Tools of the Trade</span>
                  <div className="flex flex-wrap gap-2">
                    {activePhase.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className={`text-xs font-bold px-3 py-1.5 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-secondary)]/40 text-[var(--text-primary)] hover:border-[var(--accent-color)]/40 transition-colors select-none`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action button inside meta pane */}
                <Link
                  href="/contact-us"
                  className={`w-full py-3 px-5 rounded-xl font-bold text-sm tracking-wide text-center transition-all duration-300 ${themeStyles.buttonBg}`}
                >
                  Start {activePhase.title.split(" ")[2] || "Project"}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="w-full py-12 md:py-20 border-t border-[var(--border-primary)] mt-8 md:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-4">
            <div className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${themeStyles.accentText}`}>
              FAQ / Process Details
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[var(--text-title)] font-display leading-[1.1]">
              Frequently <br className="hidden lg:inline" />
              Asked Questions
            </h2>
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-sm">
              Have questions about how we run things, handoffs, billing, or technical delivery? We&apos;ve got answers.
            </p>

            {/* Contact Link */}
            <div className="mt-4">
              <span className="text-xs text-[var(--text-secondary)] font-medium">Still have questions?</span>
              <Link
                href="/contact-us"
                className={`block text-sm font-bold tracking-wide mt-1.5 hover:underline ${themeStyles.accentText} flex items-center gap-1.5`}
              >
                Chat with our engineering team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-secondary)]/5 transition-all duration-300 overflow-hidden ${isOpen ? `bg-[var(--bg-secondary)]/15 border-[var(--border-primary)]` : ""
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-sm md:text-base text-[var(--text-title)] hover:text-[var(--accent-color)] transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <span className="ml-4 flex-shrink-0">
                      {isOpen ? (
                        <svg className="w-5 h-5 text-[var(--accent-color)]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 0.95 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-primary)]/40 mt-1 font-medium">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Call to Action Section */}
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
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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

const themeStyles = {
  accentText: "text-[var(--theme-accent-text)]",
};

export default function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
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
                className={`rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-secondary)]/5 transition-all duration-300 overflow-hidden ${
                  isOpen ? `bg-[var(--bg-secondary)]/15 border-[var(--border-primary)]` : ""
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
  );
}

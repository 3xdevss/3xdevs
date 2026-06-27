import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingStars from "@/components/FloatingStars";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | 3xdevs",
  description: "Have a project in mind? Get in touch with us and let's create something amazing together.",
};

export default function ContactUsPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between pb-12 transition-all duration-500 bg-gradient-to-b from-[var(--gradient-from)] to-[var(--gradient-to)] relative overflow-hidden"
    >
      <Header />

      {/* Radial Background Glow */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-[var(--accent-color)] opacity-[0.08] lg:opacity-[0.02] dark:opacity-[0.08] blur-[100px] pointer-events-none z-0" />

      {/* Watermark "CONTACT" Text */}
      <div className="absolute top-[26%] md:top-[5.5%] left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 font-display font-black text-[12vw] tracking-wider leading-none text-center select-none hidden lg:block contact-watermark">
        CONTACT
      </div>

      <main className="w-full max-w-[1280px] px-6 sm:px-8 md:px-12 xl:px-16 flex-1 flex flex-col items-center justify-center relative z-10 py-24 md:py-32">
        <FloatingStars />

        {/* Cyberpunk Circuit Decorative SVG Lines */}
        {/* Left decoration */}
        <div className="absolute left-4 xl:left-0 mt-4 top-1/4 hidden lg:block opacity-35 text-[var(--accent-color)] select-none pointer-events-none">
          <svg className="w-48 h-32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 200 120">
            <defs>
              <filter id="glow-left" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <path d="M 0,20 L 70,20 L 130,80 L 180,80" filter="url(#glow-left)" />
            <circle cx="180" cy="80" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Right decoration */}
        <div className="absolute right-4 xl:right-8 top-1/4 hidden lg:block opacity-35 text-[var(--accent-color)] select-none pointer-events-none">
          <svg className="w-48 h-32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 200 120">
            <defs>
              <filter id="glow-right" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <path d="M 200,20 L 130,20 L 70,80 L 20,80" filter="url(#glow-right)" />
            <circle cx="20" cy="80" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Grid Container */}
        <section className="grid grid-cols-1 lg:grid-cols-14 gap-12 lg:gap-24 w-full items-center max-w-5xl mt-6">

          {/* Left Column: Info & Details */}
          <div className="lg:col-span-5 flex flex-col items-start text-left gap-6 md:gap-8">

            {/* Custom Contact Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--pill-border)] bg-[var(--pill-bg)] text-xs font-semibold tracking-wide text-[var(--text-primary)] transition-all duration-300 backdrop-blur-sm">
              <svg className="w-3.5 h-3.5 text-[var(--accent-color)]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m0 4h.01" />
              </svg>
              <span>Contact</span>
            </div>

            {/* Typography */}
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[var(--text-title)] leading-[1.15]">
                Get in touch
              </h1>
              <p className="text-sm md:text-base leading-relaxed text-[var(--text-secondary)] font-medium max-w-sm">
                Have questions or ready to transform your business with AI automation?
              </p>
            </div>

            {/* Information Cards */}
            <div className="flex flex-col gap-4 w-full">

              {/* Card 1: Email */}
              <a
                href="mailto:johnnykyorov@gmail.com"
                className="flex items-center justify-between p-4.5 rounded-2xl border border-white/[0.04] dark:border-white/[0.06] bg-white/[0.02] dark:bg-black/[0.1] hover:bg-white/[0.04] dark:hover:bg-black/[0.15] hover:border-white/[0.1] hover:scale-[1.01] transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.04] dark:bg-black/[0.2] border border-white/[0.08] text-[var(--accent-color)] group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start ml-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] opacity-80">
                      Email us
                    </span>
                    <span className="text-sm font-semibold text-[var(--text-title)] mt-0.5">
                      johnnykyorov@gmail.com
                    </span>
                  </div>
                </div>
                <div className="text-[var(--text-secondary)] opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 pr-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </a>

              {/* Card 2: Phone */}
              <a
                href="tel:5011234567"
                className="flex items-center justify-between p-4.5 rounded-2xl border border-white/[0.04] dark:border-white/[0.06] bg-white/[0.02] dark:bg-black/[0.1] hover:bg-white/[0.04] dark:hover:bg-black/[0.15] hover:border-white/[0.1] hover:scale-[1.01] transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.04] dark:bg-black/[0.2] border border-white/[0.08] text-[var(--accent-color)] group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.557-5.148-3.882-6.703-6.702l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start ml-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] opacity-80">
                      Call us
                    </span>
                    <span className="text-sm font-semibold text-[var(--text-title)] mt-0.5">
                      (501) 123-4567
                    </span>
                  </div>
                </div>
                <div className="text-[var(--text-secondary)] opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 pr-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </a>

              {/* Card 3: Location */}
              <a
                href="https://maps.google.com/?q=Crosby+Street,+NY,+US"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4.5 rounded-2xl border border-white/[0.04] dark:border-white/[0.06] bg-white/[0.02] dark:bg-black/[0.1] hover:bg-white/[0.04] dark:hover:bg-black/[0.15] hover:border-white/[0.1] hover:scale-[1.01] transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.04] dark:bg-black/[0.2] border border-white/[0.08] text-[var(--accent-color)] group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start ml-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] opacity-80">
                      Our location
                    </span>
                    <span className="text-sm font-semibold text-[var(--text-title)] mt-0.5">
                      Crosby Street, NY, US
                    </span>
                  </div>
                </div>
                <div className="text-[var(--text-secondary)] opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 pr-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </a>

            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7 w-full flex flex-col justify-center mt-4">
            <ContactForm />
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingStars from "@/components/FloatingStars";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | 3xdevs",
  description: "Learn about the data collection, telemetry, local storage settings, and cookie policies of the 3xdevs website and platform.",
};

export default function PrivacyPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between pb-12 transition-all duration-500 bg-gradient-to-b from-[var(--gradient-from)] to-[var(--gradient-to)]"
    >
      <Header />

      <main className="w-full max-w-[1280px] px-6 md:px-12 flex-1 flex flex-col items-center justify-center relative z-10 pt-32">
        <FloatingStars />

        {/* Hero Section */}
        <section className="text-center mb-16 max-w-2xl flex flex-col items-center gap-6 relative selection:bg-[var(--accent-color)] selection:text-[var(--bg-primary)]">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-[var(--text-title)]">
            Privacy Policy
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] font-medium max-w-xl">
            Your privacy is highly important to us. Learn about the telemetry, logs, and cookie data collected during your session.
          </p>
        </section>

        {/* Content Section */}
        <section className="w-full max-w-3xl p-8 rounded-2xl border mb-16 leading-relaxed flex flex-col gap-8 blog-card text-[var(--text-secondary)]">
          <div>
            <h3 className="text-xl font-bold mb-3 blog-card-title">
              Information We Collect
            </h3>
            <p className="text-sm">
              We collect information that your browser sends whenever you visit our website. This data includes details such as your computer&apos;s Internet Protocol (IP) address, browser version, page visits, time stamps, and cookies used to store user selections (such as selected color themes).
            </p>
          </div>

          <div className="border-t border-[var(--border-primary)] pt-6">
            <h3 className="text-xl font-bold mb-3 blog-card-title">
              How We Use Information
            </h3>
            <p className="text-sm">
              The primary purpose of collecting metadata is to provide and customize our user experience, including retaining the selected theme colors across different navigation routes using local storage.
            </p>
          </div>

          <div className="border-t border-[var(--border-primary)] pt-6">
            <h3 className="text-xl font-bold mb-3 blog-card-title">
              Cookies & Local Storage
            </h3>
            <p className="text-sm">
              We use standard local storage configurations to keep your chosen theme settings synced. Local storage contains your active theme type (emerald, violet, indigo) and your dark/light slider index to ensure no screen flashes during navigation.
            </p>
          </div>

          <div className="border-t border-[var(--border-primary)] pt-6">
            <h3 className="text-xl font-bold mb-3 blog-card-title">
              Telemetry Security
            </h3>
            <p className="text-sm">
              We value your trust in providing us your information. We strive to use commercially acceptable means of protecting it, but remember that no method of transmission over the internet, or method of electronic storage, is 100% secure.
            </p>
          </div>
        </section>
      </main>

      <Footer showLinks />
    </div>
  );
}

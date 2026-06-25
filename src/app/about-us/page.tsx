import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingStars from "@/components/FloatingStars";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | 3xdevs",
  description: "Learn more about 3xdevs, our team of passionate developers, and our mission to build exceptional custom software and web experiences.",
};

export default function AboutUsPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between pb-12 transition-all duration-500 bg-gradient-to-b from-[var(--gradient-from)] to-[var(--gradient-to)]"
    >
      <Header />

      <main className="w-full max-w-[1280px] px-6 md:px-12 flex-1 flex flex-col items-center justify-center relative z-10">
        <FloatingStars />

        {/* Hero Section */}
        <section className="text-center py-20 md:py-32 max-w-2xl flex flex-col items-center gap-8 relative selection:bg-[var(--accent-color)] selection:text-[var(--bg-primary)]">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-[var(--text-title)]">
            About Us
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] font-medium max-w-xl">
            We are a team of passionate developers dedicated to building exceptional digital experiences. With years of expertise, we transform ideas into reality.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-8 w-full">
            {[
              { number: "50+", label: "Projects" },
              { number: "15+", label: "Team Members" },
              { number: "8+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <p className="text-3xl font-bold text-[var(--text-title)]">{stat.number}</p>
                <p className="text-sm text-[var(--text-secondary)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

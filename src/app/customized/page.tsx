import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingStars from "@/components/FloatingStars";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customized Solutions | 3xdevs",
  description: "Tailored custom software and web development solutions built specifically for your unique needs. Start your project with us today.",
};

export default function CustomizedPage() {
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
            Customized Solutions
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] font-medium max-w-xl">
            Tailored solutions built specifically for your unique needs. We work closely with you to create exactly what you envision.
          </p>

          <button className="px-8 py-3 rounded-full font-semibold transition-all bg-[var(--accent-color)] text-[var(--bg-primary)] hover:opacity-90 shadow-md cursor-pointer">
            Start Your Project
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

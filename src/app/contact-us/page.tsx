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
      className="min-h-screen flex flex-col items-center justify-between pb-12 transition-all duration-500 bg-gradient-to-b from-[var(--gradient-from)] to-[var(--gradient-to)]"
    >
      <Header />

      <main className="w-full max-w-[1280px] px-6 md:px-12 flex-1 flex flex-col items-center justify-center relative z-10">
        <FloatingStars />

        {/* Hero Section */}
        <section className="text-center py-20 md:py-32 max-w-2xl flex flex-col items-center gap-8 relative selection:bg-[var(--accent-color)] selection:text-[var(--bg-primary)]">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-[var(--text-title)]">
            Contact Us
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] font-medium max-w-xl">
            Have a project in mind? Get in touch with us and let&apos;s create something amazing together.
          </p>

          {/* Contact Form */}
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}

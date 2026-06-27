import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingStars from "@/components/ui/FloatingStars";
import AboutUsPageClient from "@/components/pages/AboutUsPageClient";
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
        <AboutUsPageClient />
      </main>

      <Footer showLinks />
    </div>
  );
}


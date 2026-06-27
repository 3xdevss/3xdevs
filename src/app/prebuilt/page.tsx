import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrebuiltPageClient from "@/components/PrebuiltPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prebuilt Solutions | 3xdevs",
  description: "Explore ready-to-use, production-grade prebuilt website and application templates designed for rapid deployment.",
};

export default function PrebuiltPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between pb-12 transition-all duration-500 bg-gradient-to-b from-[var(--gradient-from)] to-[var(--gradient-to)]"
    >
      <Header />

      <main className="w-full max-w-[1280px] px-6 md:px-12 flex-1 flex flex-col items-center justify-center relative z-10">
        <PrebuiltPageClient />
      </main>

      <Footer />
    </div>
  );
}

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomizedPageClient from "@/components/CustomizedPageClient";
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
        <CustomizedPageClient />
      </main>

      <Footer />
    </div>
  );
}


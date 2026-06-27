import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingStars from "@/components/ui/FloatingStars";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | 3xdevs",
  description: "Read our terms and conditions carefully before using our website, templates, or customized software solutions.",
};

export default function TermsPage() {
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
            Terms & Conditions
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] font-medium max-w-xl">
            Last updated: June 26, 2026. Please read these terms carefully before using our website or prebuilt/customized solutions.
          </p>
        </section>

        {/* Content Section */}
        <section className="w-full max-w-3xl p-8 rounded-2xl border mb-16 leading-relaxed flex flex-col gap-8 blog-card text-[var(--text-secondary)]">
          <div>
            <h3 className="text-xl font-bold mb-3 blog-card-title">
              1. Terms and Definitions
            </h3>
            <p className="text-sm">
              By accessing this website or purchasing our digital components, prebuilt templates, or consulting on customized solutions, you agree to be bound by these Terms and Conditions. If you disagree, you must stop using our products.
            </p>
          </div>

          <div className="border-t border-[var(--border-primary)] pt-6">
            <h3 className="text-xl font-bold mb-3 blog-card-title">
              2. Intellectual Property Rights
            </h3>
            <p className="text-sm">
              Unless otherwise stated, 3xdevs and/or its licensors own all intellectual property rights for all material published or delivered. All intellectual property rights are reserved under standard single-use or multi-use licenses depending on product description.
            </p>
          </div>

          <div className="border-t border-[var(--border-primary)] pt-6">
            <h3 className="text-xl font-bold mb-3 blog-card-title">
              3. Licensing and Usage Constraints
            </h3>
            <p className="text-sm">
              You are permitted to modify prebuilt templates for your clients or projects. However, you may not resell, redistribute, or license the original source code as standalone templates or widgets.
            </p>
          </div>

          <div className="border-t border-[var(--border-primary)] pt-6">
            <h3 className="text-xl font-bold mb-3 blog-card-title">
              4. Disclaimer of Warranties
            </h3>
            <p className="text-sm">
              Our software products are provided &quot;as is&quot; without warranties of any kind, express or implied. We do not guarantee that our assets will compile perfectly on your custom configuration or satisfy all third-party lint configurations.
            </p>
          </div>
        </section>
      </main>

      <Footer showLinks />
    </div>
  );
}

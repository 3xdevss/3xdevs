import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingStars from "@/components/ui/FloatingStars";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | 3xdevs",
  description: "Review our refund guidelines for prebuilt templates, components, and customized development consulting milestones.",
};

export default function RefundPage() {
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
            Refund Policy
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] font-medium max-w-xl">
            Our transparent refund guidelines for digital products, components, prebuilt licenses, and tailored custom consulting.
          </p>
        </section>

        {/* Content Section */}
        <section className="w-full max-w-3xl p-8 rounded-2xl border mb-16 leading-relaxed flex flex-col gap-8 blog-card text-[var(--text-secondary)]">
          <div>
            <h3 className="text-xl font-bold mb-3 blog-card-title">
              Digital Product Delivery
            </h3>
            <p className="text-sm">
              Since our products are downloadable software assets and templates, they are delivered immediately via a license key or download link after payment. Once a product is downloaded, the license cannot be returned or revoked.
            </p>
          </div>

          <div className="border-t border-[var(--border-primary)] pt-6">
            <h3 className="text-xl font-bold mb-3 blog-card-title">
              Refund Eligibility
            </h3>
            <p className="text-sm">
              We offer full refunds within 7 days of purchase only under the following conditions:
              <br />
              • The digital asset has a technical defect that prevents compilation or usage, and our support team cannot resolve it.
              <br />
              • The item is significantly different from what is described on the mockup/prebuilt detail page.
            </p>
          </div>

          <div className="border-t border-[var(--border-primary)] pt-6">
            <h3 className="text-xl font-bold mb-3 blog-card-title">
              Customized Solutions Policy
            </h3>
            <p className="text-sm">
              For customized designs and bespoke consulting, refund structures are tied directly to active milestone deliverables defined in your project contract. Completed stages or phases cannot be refunded once approved.
            </p>
          </div>

          <div className="border-t border-[var(--border-primary)] pt-6">
            <h3 className="text-xl font-bold mb-3 blog-card-title">
              Contacting Support
            </h3>
            <p className="text-sm">
              To request a refund review, please contact us at support@example.com with your license order number and a clear explanation/reproducible demo of any technical compilation issues.
            </p>
          </div>
        </section>
      </main>

      <Footer showLinks />
    </div>
  );
}

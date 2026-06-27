import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingStars from "@/components/ui/FloatingStars";
import { BLOG_POSTS } from "@/data/blogPosts";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | 3xdevs",
  description: "Read the latest insights, design concepts, development tutorials, and project retrospectives from the 3xdevs team.",
};

export default function BlogsPage() {
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
            Our Blog
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] font-medium max-w-xl">
            Insights, thoughts, and tutorials on design, web development, and digital craft from our experience building premium products.
          </p>
        </section>

        {/* Blog Posts Grid */}
        <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden blog-card"
            >
              {/* Blog Image */}
              <div className="w-full h-40 overflow-hidden relative border-b border-[var(--border-primary)] shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Blog Content */}
              <div className="flex flex-col justify-between p-5 flex-1">
                <div className="flex flex-col gap-3">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full border bg-[var(--pill-bg)] text-[var(--accent-color)] border-[var(--pill-border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--accent-color)] opacity-85 shrink-0">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold leading-snug transition-colors blog-card-title group-hover:text-[var(--accent-color)]">
                    {post.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-5 pt-3 border-t border-[var(--border-primary)]">
                  <span className="text-[10px] text-muted">{post.date}</span>
                  <Link href={`/blogs/${post.id}`} className="text-xs font-bold text-[var(--accent-color)] hover:underline cursor-pointer">
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer showLinks />
    </div>
  );
}

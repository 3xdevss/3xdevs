import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingStars from "@/components/ui/FloatingStars";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogPosts";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);
  return {
    title: post ? `${post.title} | 3xdevs Blog` : "Post Not Found | 3xdevs Blog",
    description: post ? post.excerpt : "The article you are looking for does not exist.",
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-between pb-12 transition-all duration-500 bg-gradient-to-b from-[var(--gradient-from)] to-[var(--gradient-to)]"
      >
        <Header />
        <main className="w-full max-w-[1280px] px-6 md:px-12 flex-1 flex flex-col items-center justify-center relative z-10 pt-32">
          <FloatingStars />
          <div className="text-center select-none flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-6xl font-black text-[var(--text-title)]">
              Post Not Found
            </h1>
            <p className="text-sm text-[var(--text-secondary)]">
              The article you are looking for does not exist or has been moved.
            </p>
            <Link
              href="/blogs"
              className="px-6 py-2.5 rounded-full font-semibold transition-all bg-[var(--accent-color)] text-[var(--bg-primary)] hover:opacity-90 shadow-md text-sm"
            >
              Back to Blogs
            </Link>
          </div>
        </main>
        <Footer showLinks />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between pb-12 transition-all duration-500 bg-gradient-to-b from-[var(--gradient-from)] to-[var(--gradient-to)]"
    >
      <Header />

      <main className="w-full max-w-[800px] px-6 md:px-12 flex-1 flex flex-col relative z-10 pt-32 mb-16">
        <FloatingStars />

        {/* Back Button */}
        <Link
          href="/blogs"
          className="flex items-center gap-2 text-sm font-semibold mb-8 transition-colors select-none back-link"
        >
          <span>&larr;</span> Back to all posts
        </Link>

        {/* Cover Image */}
        <div className="w-full aspect-[21/9] overflow-hidden rounded-2xl border border-[var(--border-primary)] shadow-lg mb-8 relative select-none">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blog Meta Header */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-bold uppercase tracking-wider text-[var(--accent-color)] select-none">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] px-2.5 py-0.5 rounded-full border bg-[var(--pill-bg)] text-[var(--accent-color)] border-[var(--pill-border)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-[var(--text-title)]">
            {post.title}
          </h1>
        </div>

        {/* HTML Article Content */}
        <article className="prose prose-lg max-w-none text-sm md:text-base leading-relaxed flex flex-col gap-6 blog-prose">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="blog-content-html"
          />
        </article>
      </main>

      <Footer showLinks />
    </div>
  );
}

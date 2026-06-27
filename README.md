# 3xdevs — Agency Portfolio Website


> **Hi. We're 3xdevs.** — Custom software, bespoke WebGL experiences, and next-gen web apps, engineered from scratch.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?logo=framer)](https://www.framer.com/motion)
[![Three.js](https://img.shields.io/badge/Three.js-0.185-black?logo=three.js)](https://threejs.org)

---

## Overview

The 3xdevs website is the public-facing portfolio and agency platform for **3xdevs** — a developer agency specializing in bespoke digital products, custom WebGL portals, mobile apps, and scalable cloud systems.

The site is built with **Next.js 16 (App Router + Turbopack)**, featuring a multi-theme design system, smooth Framer Motion animations, an interactive Three.js 3D canvas, and a fully responsive layout.

---

## Features

- 🌙 **Dark / Light mode** — Flicker-free theme switching via `localStorage` injection before paint
- 🎨 **Multi-theme system** — Emerald and more, switchable from the Header
- ✨ **Micro-animations** — Hero entrance animations, scroll-triggered reveals, hover effects (Framer Motion)
- 🤖 **Floating AI Robot** — Global decorative animated element rendered in the root layout
- 🌟 **Floating Stars** — Accent star decorations on every page hero
- 🖱️ **Cursor Glow** — Custom radial glow that follows the user's cursor
- 📱 **Fully Responsive** — Mobile-first design, tested from 320 px to 1280 px+
- 🗺️ **Sitemap + robots.txt** — Auto-generated via Next.js route handlers
- 📖 **Blog system** — Static blog listing and individual article pages
- 🏗️ **Hero 3D Canvas** — Three.js WebGL scene (ready for activation)
- ⚡ **Turbopack** — Near-instant local dev hot-reload

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.9 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + Vanilla CSS custom properties |
| Animations | Framer Motion 12 |
| 3D / WebGL | Three.js 0.185 |
| Icons | Lucide React |
| Fonts | Inter, Outfit (Google Fonts) + Acorn (self-hosted) |
| Deployment | Vercel |

---

## Folder Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (marketing)/              # Route group — public marketing pages
│   │   ├── about-us/page.tsx
│   │   ├── blogs/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── contact-us/page.tsx
│   │   ├── customized/page.tsx
│   │   └── prebuilt/page.tsx
│   ├── (legal)/                  # Route group — legal/policy pages
│   │   ├── privacy/page.tsx
│   │   ├── refund/page.tsx
│   │   └── terms/page.tsx
│   ├── layout.tsx                # Root layout (fonts, theme, global providers)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # CSS custom properties & design tokens
│   ├── robots.ts                 # Auto-generated robots.txt
│   └── sitemap.ts                # Auto-generated sitemap.xml
│
├── components/
│   ├── layout/                   # Global layout shells
│   │   ├── Header.tsx            # Navigation with theme switcher
│   │   └── Footer.tsx            # Site footer with links
│   │
│   ├── ui/                       # Reusable UI primitives
│   │   ├── FloatingStars.tsx     # Decorative animated star elements
│   │   ├── CursorGlow.tsx        # Custom cursor radial glow effect
│   │   ├── FloatingRobot.tsx     # Animated floating AI robot (global)
│   │   └── ProjectCard.tsx       # Work portfolio card component
│   │
│   ├── sections/                 # Reusable page sections
│   │   ├── CtaSection.tsx        # Call-to-action banner (used on homepage)
│   │   └── FaqSection.tsx        # Expandable FAQ accordion
│   │
│   ├── mockups/                  # Interactive UI mockup components
│   │   └── Mockups.tsx           # AIMockup, ArticlesMockup, and more
│   │
│   ├── canvas/                   # WebGL / Three.js components
│   │   └── Hero3DCanvas.tsx      # Three.js interactive 3D scene
│   │
│   └── pages/                    # Full page client components (one per route)
│       ├── HomePageClient.tsx
│       ├── AboutUsPageClient.tsx
│       ├── CustomizedPageClient.tsx
│       ├── PrebuiltPageClient.tsx
│       └── ContactForm.tsx
│
├── data/
│   └── blogPosts.ts              # Static blog post data
│
├── hooks/
│   └── useTheme.tsx              # ThemeProvider + useTheme hook
│
└── lib/                          # Utility functions (future use)
```

> **Route Groups** — `(marketing)/` and `(legal)/` are Next.js route groups. They organize files logically without affecting any URL paths.

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd <project-directory>

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local dev server with Turbopack |
| `npm run build` | Create an optimised production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## Pages & Routes

| Route | Page | Type |
|---|---|---|
| `/` | Homepage — Hero, Work, In Progress, FAQ, CTA | Static |
| `/about-us` | About — Stats, Principles, Team, CTA | Static |
| `/customized` | Customized Solutions — Phase roadmap | Static |
| `/prebuilt` | Why No Templates — Philosophy, CTA | Static |
| `/contact-us` | Contact form | Static |
| `/blogs` | Blog listing | Static |
| `/blogs/[id]` | Individual blog post | Dynamic |
| `/privacy` | Privacy Policy | Static |
| `/refund` | Refund Policy | Static |
| `/terms` | Terms of Service | Static |
| `/sitemap.xml` | Auto-generated sitemap | Static |
| `/robots.txt` | Auto-generated robots file | Static |

---

## Theming System

The design system is built on **CSS custom properties** defined in `globals.css`. Two axes of variation are supported:

### Colour Mode
- **Dark mode** (default) — deep dark greens, emerald accent tones
- **Light mode** — warm parchment backgrounds, muted greens

### Theme Palette
The active theme class (e.g. `theme-emerald`) is applied to `<body>` and overrides palette-specific variables such as `--theme-glow-from`, `--theme-accent-text`, `--theme-text-highlight-from/to`, etc.

Theme preference is persisted to `localStorage` and rehydrated before first paint via an inline script in `layout.tsx` — **no flash of unstyled content**.

---

## Fonts

| Variable | Font | Usage |
|---|---|---|
| `--font-inter` | Inter (Google) | Body text |
| `--font-outfit` | Outfit (Google) | UI labels, badges |
| `--font-display` | Acorn (self-hosted, `/public/fonts/`) | Display headings, hero titles |

---

## Deployment

The project is optimised for **Vercel**. Push to your connected branch and Vercel handles the build automatically.

For other platforms, run:

```bash
npm run build
npm run start
```

See the [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying) for full details.

---

## Project by

**3xdevs** — Engineering the Next Dimension.  
We design to stand out, and we code to scale.

> *Built with Next.js 16 · Powered by Turbopack · Deployed on Vercel*



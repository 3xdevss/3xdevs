export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Designing for the Modern Web: Glassmorphism and Micro-interactions",
    excerpt: "Explore how subtle design choices, such as blur backdrops and tiny interactive animations, can elevate the premium feel of user interfaces.",
    content: `
      <p>Modern web design is no longer just about presenting information—it is about crafting an immersive experience. Two design methodologies that have taken center stage in premium product design are <strong>Glassmorphism</strong> and <strong>Micro-interactions</strong>.</p>
      
      <h3>What is Glassmorphism?</h3>
      <p>Glassmorphism mimics the look of frosted glass. By combining multi-layered panels, backdrop filters (blur), and subtle borders, designers can create interface elements that feel deep, physical, and integrated into the background. It is highly effective for overlays, sticky navigation bars, and cards where you want to maintain visual continuity of the underlying elements.</p>
      
      <h3>The Magic of Micro-interactions</h3>
      <p>A micro-interaction is a subtle animation triggered by user action, such as a button scale transformation on click, a card lift-up on hover, or a custom loading spinner. These details may seem minor, but they provide instant visual feedback that makes the application feel alive and responsive. Without them, a user interface can feel static, dry, and rigid.</p>
      
      <h3>Best Practices for Implementation</h3>
      <p>When combining these trends, moderation is key:</p>
      <ul>
        <li><strong>Maintain Contrast:</strong> Glass elements must have clear borders and text shadows to remain readable.</li>
        <li><strong>Keep Animations Snappy:</strong> Hover animations should use short durations (150ms to 300ms) with clean ease-out curves so navigation doesn't feel sluggish.</li>
        <li><strong>Ensure Performance:</strong> Heavy backdrop blur filters can impact rendering performance on low-end mobile devices. Use them selectively on major components rather than everywhere.</li>
      </ul>
    `,
    date: "June 24, 2026",
    readTime: "5 min read",
    category: "Design System",
    image: "/images/glassmorphism.png",
    tags: ["Design System", "UX/UI", "Animations"],
  },
  {
    id: "2",
    title: "Next.js 16: Building Highly Performant Scalable Applications",
    excerpt: "A deep dive into Next.js 16 features, Turbopack optimizations, and best practices for rendering static pages with dynamic context.",
    content: `
      <p>Next.js continues to dominate the React ecosystem by offering top-tier server-side rendering, routing configurations, and build performance. The latest Next.js 16 version further optimizes compilation speed via Turbopack and clarifies client-side hydration patterns.</p>
      
      <h3>Turbopack: The Future of Build Compilation</h3>
      <p>One of the most noticeable improvements in Next.js 16 is the stable integration of Turbopack. It provides near-instantaneous hot module reloading (HMR) and compiles production assets up to 5x faster than Webpack. This translates to an incredibly fast developer feedback loop, especially in large codebases with hundreds of routes.</p>
      
      <h3>Client vs. Server Components</h3>
      <p>Understanding when to use Server Components and when to opt for Client Components is essential for performance:</p>
      <ul>
        <li><strong>Server Components:</strong> Fetch data, access database schemas directly, and render static structures without sending JavaScript weight to the browser.</li>
        <li><strong>Client Components:</strong> Handle interactive state, event handlers, animations, and React hooks (such as <code>useState</code> and <code>useEffect</code>). Always place the <code>"use client"</code> directive at the very top of these files.</li>
      </ul>
      
      <h3>Static Generation with Dynamic Context</h3>
      <p>Next.js 16 makes it simple to generate static routes while keeping dynamic pages fast. By fetching content during compile-time or using incremental static regeneration (ISR), you can serve pages instantly from a CDN while keeping the content fresh in the background.</p>
    `,
    date: "June 18, 2026",
    readTime: "8 min read",
    category: "Development",
    image: "/images/nextjs-architecture.png",
    tags: ["Next.js", "Performance", "Turbopack"],
  },
  {
    id: "3",
    title: "Crafting Curated Color Systems for Sleek Dark Modes",
    excerpt: "Why standard solid black is a bad choice for dark mode. Learn how to map brand color coordinates into deep rich gradients.",
    content: `
      <p>Many developers think building a dark mode is as simple as flipping white backgrounds to pure solid black (#000) and text to pure white (#fff). However, this creates extreme contrast that causes user eye strain and completely flattens any layer depth.</p>
      
      <h3>The Problem with Pure Black</h3>
      <p>Solid black absorbs all light and prevents shadow highlights from showing. Because shadows are the primary way we establish visual hierarchy and elevation (depth) in user interfaces, cards on a pure black background will look detached and flat. Instead, use deep, dark hues tinted with your brand's primary color (such as deep emerald green, indigo blue, or violet purple).</p>
      
      <h3>Mapping Brand Colors to Gradients</h3>
      <p>A curated dark mode should use rich gradients rather than flat colors:</p>
      <ul>
        <li><strong>Dark Mode Gradients:</strong> Start with a tinted secondary color at the top (e.g. <code>#204523</code>) and transition to a deeper black-adjacent color at the bottom (e.g. <code>#061109</code>).</li>
        <li><strong>Light Mode Gradients:</strong> Use bright, clean pastel versions of the same color palette (e.g. transitioning from <code>#e6f7ef</code> to <code>#f4f3ec</code>).</li>
      </ul>
      
      <h3>Ensuring Color Contrast compliance</h3>
      <p>Always verify your text colors against WCAG AA or AAA guidelines. Light emerald or lavender text on dark backgrounds provides fantastic readability while keeping the design highly stylized and premium.</p>
    `,
    date: "June 10, 2026",
    readTime: "6 min read",
    category: "Color Theory",
    image: "/images/color-system.png",
    tags: ["Color Theory", "Dark Mode", "Gradients"],
  },
];

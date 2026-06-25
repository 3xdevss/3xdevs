import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blogPosts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://cryp7ic.me";

  // Static routes
  const routes = ["", "/about-us", "/contact-us", "/customized", "/prebuilt", "/blogs", "/terms", "/privacy", "/refund"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  // Dynamic blog routes
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blogs/${post.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}

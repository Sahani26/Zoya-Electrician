import type { MetadataRoute } from "next";
import { allPaths } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.zoyaelectrician.in";
  return ["/", ...allPaths].map((path) => ({ url: `${base}${path}`, lastModified: new Date("2026-08-03"), changeFrequency: path.startsWith("/blog/") ? "monthly" : "weekly", priority: path === "/" ? 1 : 0.8 }));
}

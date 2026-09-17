import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/leistungen", "/projekte", "/ueber-uns", "/kontakt"];
  const now = new Date();
  return paths.map((path) => ({
    url: `${site.url}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}

import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nomasbullying.es"
  
  const pages = [
    { path: "/", priority: 1.0, changeFrequency: "daily" },
    { path: "/consejos", priority: 0.9, changeFrequency: "weekly" },
    { path: "/tecnologia", priority: 0.85, changeFrequency: "weekly" },
    { path: "/contacto", priority: 0.8, changeFrequency: "monthly" },
    { path: "/sobre-nosotros", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  ]
  
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFrequency as any,
    priority,
  }))
}

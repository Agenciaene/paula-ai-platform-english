import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  // ¡IMPORTANTE! Cambia esta URL por tu dominio real cuando lo despliegues
  const baseUrl = "https://nomasbullying.es"

  const staticPages = ["/", "/contacto", "/privacy", "/sobre-nosotros", "/consejos"]

  const sitemapEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }))

  return sitemapEntries
}

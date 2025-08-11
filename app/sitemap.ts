import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nomasbullying.es"
  
  // 🚀 MEJORA 1: Prioridades más estratégicas
  const pages = [
    { path: "/", priority: 1.0, changeFrequency: "daily" }, // Home más frecuente
    { path: "/consejos", priority: 0.9, changeFrequency: "weekly" }, // Contenido clave
    { path: "/sobre-nosotros", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contacto", priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" }, // Legal menos importante
    // 🎯 AÑADE ESTAS SI LAS TIENES:
    { path: "/blog", priority: 0.9, changeFrequency: "weekly" },
    { path: "/herramientas", priority: 0.9, changeFrequency: "weekly" },
  ]
  
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(), 
    changeFrequency: changeFrequency as any,
    priority,
  }))
}

import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  // ¡IMPORTANTE! Cambia esta URL por tu dominio real
  const baseUrl = "https://nomasbullying.es"

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/chat/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

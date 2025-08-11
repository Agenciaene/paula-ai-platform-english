import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "No Más Bullying - IA que protege, padres que actúan, niños que sonríen",
  description: "Plataforma gratuita con IA para detectar y prevenir el bullying escolar. Ayudamos a padres a proteger a sus hijos del acoso.",
  
  // 🎯 OPEN GRAPH - PARA COMPARTIR
  openGraph: {
    title: "No Más Bullying - Protege a tu hijo del acoso escolar",
    description: "Herramienta gratuita con IA para detectar señales de bullying",
    url: "https://nomasbullying.es",
    siteName: "No Más Bullying",
    images: [
      {
        url: "https://nomasbullying.es/images/og-image.jpg", // CREA ESTA IMAGEN
        width: 1200,
        height: 630,
        alt: "No Más Bullying - IA contra el acoso escolar",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  
  // 🐦 TWITTER CARDS
  twitter: {
    card: "summary_large_image",
    title: "No Más Bullying - IA contra el acoso escolar",
    description: "Detecta señales de bullying antes de que sea tarde",
    images: ["https://nomasbullying.es/images/twitter-card.jpg"],
  },
  
  // 🔍 SEO EXTRA
  keywords: "bullying, acoso escolar, detectar bullying, ayuda padres, IA bullying, prevención acoso",
  authors: [{ name: "Alejandro Ortiz" }],
  creator: "Alejandro Ortiz",
  publisher: "No Más Bullying",
  
  // 📱 MOBILE
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  
  // 🤖 ROBOTS
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // 🎨 ICONS
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  
  // ✅ VERIFICACIÓN
  verification: {
    google: "tu-codigo-de-google", // AÑADE TU CÓDIGO
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* SCHEMA.ORG PARA GOOGLE */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "No Más Bullying",
              "url": "https://nomasbullying.es",
              "description": "Plataforma con IA para detectar y prevenir bullying",
              "applicationCategory": "EducationalApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next"
import ConsejosPageClient from "./ConsejosPageClient"

export const metadata: Metadata = {
  title: "Consejos para Padres",
  description:
    "Guía completa para padres sobre cómo detectar y actuar ante el acoso escolar. Aprende a interpretar señales, tener conversaciones difíciles y encontrar recursos.",
}

export default function ConsejosPage() {
  return <ConsejosPageClient />
}

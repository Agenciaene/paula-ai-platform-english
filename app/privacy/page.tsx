import type { Metadata } from "next"
import PrivacyPageClient from "./PrivacyPageClient"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Consulta cómo protegemos tus datos y garantizamos tu confidencialidad en NoMasBullying. Tu seguridad y privacidad son nuestra máxima prioridad.",
}

export default function PrivacyPage() {
  return <PrivacyPageClient />
}

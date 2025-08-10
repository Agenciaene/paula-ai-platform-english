import type { Metadata } from "next"
import SobreNosotrosClientPage from "./SobreNosotrosClientPage"

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce la misión y el equipo detrás de NoMasBullying. Combinamos neurociencia, tecnología y compasión para proteger a la infancia del acoso escolar.",
}

export default function SobreNosotrosPage() {
  return <SobreNosotrosClientPage />
}

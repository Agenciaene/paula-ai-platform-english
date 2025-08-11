import type { Metadata } from "next"
import SobreNosotrosClientPage from "./SobreNosotrosClientPage"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the mission and team behind NoMasBullying. We combine neuroscience, technology and compassion to protect children from bullying.",
}

export default function SobreNosotrosPage() {
  return <SobreNosotrosClientPage />
}

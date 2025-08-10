import type { Metadata } from "next"
import ContactoClientPage from "./ContactoClientPage"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con el equipo de NoMasBullying. Estamos aquí para escucharte, resolver tus dudas o colaborar en la lucha contra el acoso escolar.",
}

export default function ContactoPage() {
  return <ContactoClientPage />
}

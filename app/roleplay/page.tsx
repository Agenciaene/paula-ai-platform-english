"use client"

import { Suspense } from "react"
import RoleplayChat from "./RoleplayChat"

export default function RoleplayPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <RoleplayChat />
    </Suspense>
  )
}
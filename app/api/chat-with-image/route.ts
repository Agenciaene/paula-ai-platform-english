import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  // 1. Extraer el FormData del request
  const formData = await request.formData()

  // 2. ¡ACCIÓN REQUERIDA! Reemplaza esta URL con la de tu backend de FastAPI
  const fastapiUrl = "http://127.0.0.1:8000/process-image-and-chat" // O la URL de tu despliegue

  try {
    // 3. Reenviar el FormData directamente a tu backend de FastAPI
    const response = await fetch(fastapiUrl, {
      method: "POST",
      body: formData,
      // No establezcas 'Content-Type', fetch lo hará automáticamente para multipart/form-data
    })

    // 4. Si FastAPI responde con un stream, lo devolvemos directamente al cliente
    if (response.body) {
      return new Response(response.body, {
        status: response.status,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
        },
      })
    }

    // Manejar respuestas que no son stream (por si acaso)
    const responseData = await response.json()
    return new Response(JSON.stringify(responseData), {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Error forwarding request to FastAPI:", error)
    return new Response(JSON.stringify({ error: "Error connecting to the image processing service." }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

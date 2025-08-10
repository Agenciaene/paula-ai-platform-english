import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// ¡Añadimos esta comprobación!
if (!process.env.RESEND_API_KEY) {
  console.error("Error Crítico: La variable de entorno RESEND_API_KEY no está configurada.")
}

// Instanciamos Resend con la API key desde las variables de entorno
const resend = new Resend(process.env.RESEND_API_KEY)

// ¡CORRECCIÓN CLAVE! Para el modo de prueba de Resend, solo puedes enviar al email de tu cuenta.
// Cuando verifiques tu dominio en Resend.com, podrás cambiarlo a "hola@nomasbullying.es".
const emailTo = "hola@maxtor.app"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, email, mensaje } = body

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 })
    }

    // Enviamos el email usando Resend
    const { data, error } = await resend.emails.send({
      from: "NoMasBullying <onboarding@resend.dev>", // Dominio verificado en Resend
      to: [emailTo],
      subject: `Nuevo mensaje de contacto de: ${nombre}`,
      reply_to: email, // ¡Clave! Para poder responder directamente al usuario
      html: `
        <h1>Nuevo mensaje desde la web NoMasBullying</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <h2>Mensaje:</h2>
        <p>${mensaje.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Error al enviar email con Resend:", error)
      return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 })
    }

    console.log("Email enviado correctamente:", data)

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente",
    })
  } catch (error) {
    console.error("Error en el endpoint de contacto:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

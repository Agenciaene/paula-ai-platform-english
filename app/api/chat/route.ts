// app/api/chat/route.ts - VERSIÓN CORREGIDA GPT-5
import { NextRequest } from "next/server"
import { OpenAI } from "openai"

export const maxDuration = 30

const MODELS = {
  primary: 'gpt-5-nano',
  fallback: 'gpt-4o', 
  useStreaming: true
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  console.log("=== INICIANDO CHAT API GPT-5 ===")
  
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.error("❌ Falta OPENAI_API_KEY")
      return new Response("OpenAI API key not configured", { status: 500 })
    }

    let messages: any[] = []
    const contentType = req.headers.get("Content-Type") || ""

    // PARSEAR REQUEST
    if (contentType.includes("application/json")) {
      const { messages: reloadedMessages } = await req.json()
      console.log("📨 Request tipo JSON con", reloadedMessages?.length || 0, "mensajes")
      messages = reloadedMessages
    } else if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData()
      const messagesData = formData.get("messages")
      if (messagesData) {
        messages = JSON.parse(messagesData.toString())
      }
    }

    console.log("💬 Total mensajes a enviar:", messages.length)

    const systemPrompt = `Eres un asistente de IA empático y experto en acoso escolar llamado Paula AI. Tu misión es ayudar a niños, padres y educadores a enfrentar situaciones de bullying con superhéroes como Michia, Firuja y Bolia. Proporciona consejos prácticos, apoyo emocional y estrategias efectivas para crear entornos escolares seguros.`

    // ✅ DETECTAR SI HAY IMÁGENES
    const hasImages = messages.some((msg: any) => 
      Array.isArray(msg.content) && 
      msg.content.some((content: any) => content.type === 'image_url')
    )

    // ✅ FUNCIÓN GPT-5 CORREGIDA
    async function tryModelGPT5(modelName: string, userType: string = 'parent') {
      console.log(`🤖 Intentando GPT-5: ${modelName}`)
      
      // ❌ SI HAY IMÁGENES, NO USAR GPT-5 AÚN
      if (hasImages) {
        throw new Error("GPT-5 no compatible con imágenes aún")
      }

      // ✅ USAR RESPONSES API PARA GPT-5
      const response = await openai.responses.create({
        model: modelName,
        input: [
          { role: "system", content: systemPrompt },
          ...messages.map((msg: any) => ({
            role: msg.role,
            content: msg.content
          }))
        ],
        text: {
          verbosity: userType === 'child' ? 'low' : 
                    userType === 'therapist' ? 'high' : 'medium'
        },
        reasoning: {
          effort: userType === 'emergency' ? 'minimal' : 'minimal'  // ✅ SIEMPRE MINIMAL
        },
        max_output_tokens: 8000,  // ✅ TOKENS SUFICIENTES
        temperature: 0.7,
        store: false
      })

      // ✅ EXTRAER CONTENIDO CORRECTAMENTE
      let content = ""
      if (response.output && response.output.length > 0) {
        for (const item of response.output) {
          if (item.content) {
            for (const contentItem of item.content) {
              if (contentItem.text) {
                content += contentItem.text
              }
            }
          }
        }
      }

      // ✅ CONVERTIR A FORMATO CHAT COMPLETIONS
      return {
        choices: [{
          message: {
            role: "assistant",
            content: content
          },
          finish_reason: "stop"
        }],
        usage: response.usage,
        model: modelName
      }
    }

    // ✅ FUNCIÓN GPT-4 PARA IMÁGENES
    async function tryModelGPT4(modelName: string) {
      console.log(`🤖 Usando GPT-4: ${modelName}`)
      
      const response = await openai.chat.completions.create({
        model: modelName,
        messages: [
          { role: "system", content: systemPrompt },
          ...messages
        ],
        stream: MODELS.useStreaming,
        max_tokens: 4000,
        temperature: 0.7,
        presence_penalty: 0.6,
        frequency_penalty: 0.3
      })

      console.log(`✅ ${modelName} funcionando correctamente`)
      return response
    }

    // ✅ LÓGICA DE SELECCIÓN MODELO
    let response
    let modelUsed = MODELS.primary
    
    try {
      if (hasImages) {
        // ✅ IMÁGENES = GPT-4 DIRECTO
        response = await tryModelGPT4(MODELS.fallback)
        modelUsed = MODELS.fallback
      } else {
        // ✅ SOLO TEXTO = INTENTAR GPT-5
        try {
          response = await tryModelGPT5(MODELS.primary)
          modelUsed = MODELS.primary
        } catch (gpt5Error: any) {
          console.log("⚠️ GPT-5 falló:", gpt5Error.message)
          response = await tryModelGPT4(MODELS.fallback)
          modelUsed = MODELS.fallback
        }
      }
    } catch (error: any) {
      console.error("❌ Todos los modelos fallaron:", error)
      return new Response(JSON.stringify({
        error: "No se pudo conectar con ningún modelo",
        details: error.message
      }), { status: 500 })
    }

    console.log(`🎉 Usando modelo: ${modelUsed}`)

    // ✅ RESPUESTA NO-STREAMING
    if (!MODELS.useStreaming || modelUsed === MODELS.primary) {
      const content = response.choices[0].message?.content || "Sin respuesta"
      return new Response(JSON.stringify({
        content,
        model: modelUsed
      }), {
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // ✅ STREAMING SOLO PARA GPT-4
    const encoder = new TextEncoder()

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of response) {
            const content = chunk.choices[0]?.delta?.content || ''
            
            if (content) {
              const formattedChunk = `0:${JSON.stringify({ content })}\n`
              controller.enqueue(encoder.encode(formattedChunk))
            }
          }
          
          controller.enqueue(encoder.encode(`0:${JSON.stringify({ done: true, model: modelUsed })}\n`))
          controller.close()
          
        } catch (streamError) {
          console.error("❌ Error en streaming:", streamError)
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'X-Model-Used': modelUsed
      },
    })

  } catch (error) {
    console.error("❌ Error general en chat API:", error)
    const errorMessage = error instanceof Error ? error.message : "Error desconocido"
    
    return new Response(JSON.stringify({ 
      error: "Error en chat API", 
      details: errorMessage,
      timestamp: new Date().toISOString()
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

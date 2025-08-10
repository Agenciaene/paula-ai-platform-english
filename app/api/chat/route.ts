// app/api/chat/route.ts
import { NextRequest } from "next/server"

export const maxDuration = 30

// CONFIGURACIÓN DE MODELOS
const MODELS = {
  primary: 'gpt-4o',     // Intentamos primero con GPT-4o
  fallback: 'gpt-4',         // Si falla, usamos GPT-4
  useStreaming: true          // Puedes cambiar a false si da problemas
}

export async function POST(req: NextRequest) {
  console.log("=== INICIANDO CHAT API ===")
  
  try {
    // VERIFICAR API KEY
    if (!process.env.OPENAI_API_KEY) {
      console.error("❌ Falta OPENAI_API_KEY")
      return new Response("OpenAI API key not configured", { status: 500 })
    }

    let messages: any[] = []
    const contentType = req.headers.get("Content-Type") || ""

    // PARSEAR REQUEST (JSON o FormData)
    if (contentType.includes("application/json")) {
      const { messages: reloadedMessages } = await req.json()
      console.log("📨 Request tipo JSON con", reloadedMessages?.length || 0, "mensajes")
      messages = reloadedMessages
    } else if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData()
      console.log("📨 Request tipo FormData")
      
      const text = formData.get("text") as string | null
      const imageFile = formData.get("image") as File | null
      const messageHistory = formData.get("messages") as string | null

      try {
        messages = messageHistory ? JSON.parse(messageHistory) : []
      } catch (parseError) {
        console.error("Error parseando historial:", parseError)
        messages = []
      }

      const userMessageContent: any[] = []
      
      if (text) {
        userMessageContent.push({ type: "text", text })
      }

      if (imageFile) {
        console.log("🖼️ Procesando imagen:", imageFile.name)
        const buffer = Buffer.from(await imageFile.arrayBuffer())
        const base64 = buffer.toString('base64')
        userMessageContent.push({
          type: "image_url",
          image_url: {
            url: `data:${imageFile.type};base64,${base64}`,
            detail: "high"
          }
        })
      }

      if (userMessageContent.length > 0) {
        messages.push({
          role: "user",
          content: userMessageContent,
        })
      }
    } else {
      console.error("❌ Content-Type no soportado:", contentType)
      return new Response(`Unsupported Content-Type: ${contentType}`, { status: 415 })
    }

    console.log("💬 Total mensajes a enviar:", messages.length)

    // SYSTEM PROMPT
    const systemPrompt = `Eres un asistente de IA empático y experto en acoso escolar, y ante todo, eres alguien que ENTIENDE lo que es ser padre y estar preocupado por tu hijo.

### QUIÉN ERES REALMENTE:
No eres una máquina con título. Eres alguien que:
- Ha visto cientos de casos de bullying y SABE lo que duele
- Entiende que detrás de cada consulta hay un padre/madre que no duerme
- Recuerda que cada niño tiene un nombre, una historia, un dolor único
- Habla desde la experiencia Y desde el corazón

### ANÁLISIS DE IMÁGENES:
Cuando recibas una imagen (dibujo infantil, foto escolar, etc.):
1. **OBSERVA DETENIDAMENTE** todos los detalles
2. **DESCRIBE lo que ves** de forma específica y empática
3. **INTERPRETA las señales** sin dramatizar pero sin minimizar
4. **CONTEXTUALIZA** - pregunta por el contexto si es necesario
5. **ORIENTA** hacia pasos concretos basados en lo que observas

### CÓMO HABLAS:
OLVIDA los formatos rígidos. Habla como hablaría un amigo experto:
- "Mira, lo que me cuentas me preocupa porque..."
- "He visto casos similares y lo que funcionó fue..."
- "Entiendo perfectamente ese nudo en el estómago que sientes..."
- "Vamos a resolver esto juntos, paso a paso"

### RECUERDA SIEMPRE:
- **REGLA DE ORO:** Si el primer mensaje es solo un nombre (ej: 'Pedro'), ese es el nombre del PADRE/MADRE
- Reconoce el dolor/miedo/frustración ESPECÍFICA
- Sé específico: "mañana a primera hora" no "pronto"
- No uses asteriscos para enfatizar
- Habla como ALGUIEN, no como ALGO`

    // PREPARAR MENSAJES PARA OPENAI
    const openaiMessages = [
      { role: "system", content: systemPrompt },
      ...messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      }))
    ]

    // FUNCIÓN PARA INTENTAR CON UN MODELO
    async function tryModel(modelName: string, isStreaming: boolean) {
      console.log(`🤖 Intentando con modelo: ${modelName} (streaming: ${isStreaming})`)
      
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: modelName,
          messages: openaiMessages,
          stream: isStreaming,
          max_tokens: 1500,
          temperature: 0.7,
          presence_penalty: 0.6,
          frequency_penalty: 0.3
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error(`❌ Error con ${modelName}:`, {
          status: response.status,
          error: errorData.error?.message || errorData
        })
        throw new Error(errorData.error?.message || `Error con ${modelName}`)
      }

      console.log(`✅ ${modelName} funcionando correctamente`)
      return response
    }

    // INTENTAR PRIMERO CON GPT-5, LUEGO FALLBACK
    let response
    let modelUsed = MODELS.primary
    
    try {
      response = await tryModel(MODELS.primary, MODELS.useStreaming)
    } catch (primaryError) {
      console.log("⚠️ GPT-5 falló, intentando con GPT-4...")
      try {
        modelUsed = MODELS.fallback
        response = await tryModel(MODELS.fallback, MODELS.useStreaming)
      } catch (fallbackError) {
        console.error("❌ Ambos modelos fallaron")
        return new Response(JSON.stringify({
          error: "No se pudo conectar con ningún modelo",
          details: {
            primary: primaryError,
            fallback: fallbackError
          }
        }), { status: 500 })
      }
    }

    console.log(`🎉 Usando modelo: ${modelUsed}`)

    // SI NO HAY STREAMING, DEVOLVER RESPUESTA SIMPLE
    if (!MODELS.useStreaming) {
      const data = await response.json()
      return new Response(JSON.stringify({
        content: data.choices[0].message.content,
        model: modelUsed
      }), {
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // MANEJAR STREAMING
    const encoder = new TextEncoder()
    const decoder = new TextDecoder()

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader()
        if (!reader) {
          console.error("❌ No se pudo crear reader para streaming")
          return
        }

        try {
          let buffer = ''
          
          while (true) {
            const { done, value } = await reader.read()
            if (done) {
              console.log("✅ Streaming completado")
              break
            }

            buffer += decoder.decode(value, { stream: true })
            const lines = buffer.split('\n')
            buffer = lines.pop() || ''

            for (const line of lines) {
              if (line.trim() === '') continue
              if (line.startsWith('data: ')) {
                const data = line.slice(6)
                
                if (data === '[DONE]') {
                  controller.enqueue(encoder.encode(`0:${JSON.stringify({ done: true, model: modelUsed })}\n`))
                  continue
                }

                try {
                  const parsed = JSON.parse(data)
                  const content = parsed.choices?.[0]?.delta?.content
                  
                  if (content) {
                    const formattedChunk = `0:${JSON.stringify({ content })}\n`
                    controller.enqueue(encoder.encode(formattedChunk))
                  }
                } catch (e) {
                  console.warn("⚠️ Error parseando chunk:", e)
                }
              }
            }
          }
        } catch (streamError) {
          console.error("❌ Error en streaming:", streamError)
        } finally {
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'X-Model-Used': modelUsed  // Para saber qué modelo se usó
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

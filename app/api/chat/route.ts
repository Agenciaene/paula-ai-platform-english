// app/api/chat/route.ts - VERSIÓN CORREGIDA GPT-5
import { NextRequest } from "next/server"
import { OpenAI } from "openai" // ✅ Importación correcta

export const maxDuration = 30

// ✅ CONFIGURACIÓN CORREGIDA
const MODELS = {
  primary: 'gpt-5-nano',
  fallback: 'gpt-4o', 
  useStreaming: true
}

// ✅ INICIALIZAR CLIENTE OPENAI CORRECTAMENTE
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  console.log("=== INICIANDO CHAT API GPT-5 ===")
  
  try {
    // VERIFICAR API KEY
    if (!process.env.OPENAI_API_KEY) {
      console.error("❌ Falta OPENAI_API_KEY")
      return new Response("OpenAI API key not configured", { status: 500 })
    }

    let messages: any[] = []
    const contentType = req.headers.get("Content-Type") || ""

    // ... [Tu código de parseo se mantiene igual] ...
    // PARSEAR REQUEST (JSON o FormData)
    if (contentType.includes("application/json")) {
      const { messages: reloadedMessages } = await req.json()
      console.log("📨 Request tipo JSON con", reloadedMessages?.length || 0, "mensajes")
      messages = reloadedMessages
    } else if (contentType.includes("multipart/form-data")) {
      // ... [código formData igual] ...
    }

    console.log("💬 Total mensajes a enviar:", messages.length)

    // SYSTEM PROMPT [mantener igual]
    const systemPrompt = `Eres un asistente de IA empático y experto en acoso escolar...`

    // ✅ FUNCIÓN CORREGIDA PARA GPT-5
    async function tryModelGPT5(modelName: string, userType: string = 'parent') {
      console.log(`🤖 Intentando GPT-5: ${modelName}`)
      
      // ✅ CONFIGURACIÓN DINÁMICA SEGÚN USUARIO
      const getOptimalConfig = (model: string, userType: string) => {
        const baseConfig = {
          model: model,
          messages: [
            { role: "system", content: systemPrompt },
            ...messages.map((msg: any) => ({
              role: msg.role,
              content: msg.content
            }))
          ],
          max_tokens: 1500,
          temperature: 0.7,
        }

        // ✅ NUEVOS PARÁMETROS GPT-5
        if (model.startsWith('gpt-5')) {
          return {
            ...baseConfig,
            // 🔥 VERBOSITY DINÁMICO
            verbosity: userType === 'child' ? 'low' : 
                      userType === 'therapist' ? 'high' : 'medium',
            
            // ⚡ REASONING EFFORT OPTIMIZADO  
            reasoning_effort: userType === 'emergency' ? 'minimal' : 'medium',
          }
        }
        
        return baseConfig
      }

      const config = getOptimalConfig(modelName, userType)
      
      // ✅ USAR OPENAI SDK OFICIAL
      const response = await openai.chat.completions.create({
        ...config,
        stream: MODELS.useStreaming,
      })

      console.log(`✅ ${modelName} funcionando correctamente`)
      return response
    }

    // ✅ FUNCIÓN FALLBACK PARA GPT-4
    async function tryModelGPT4(modelName: string) {
      console.log(`🤖 Fallback a: ${modelName}`)
      
      const response = await openai.chat.completions.create({
        model: modelName,
        messages: [
          { role: "system", content: systemPrompt },
          ...messages.map((msg: any) => ({
            role: msg.role,
            content: msg.content
          }))
        ],
        stream: MODELS.useStreaming,
        max_tokens: 1500,
        temperature: 0.7,
        presence_penalty: 0.6,
        frequency_penalty: 0.3
      })

      console.log(`✅ ${modelName} funcionando correctamente`)
      return response
    }

    // ✅ LÓGICA DE RETRY MEJORADA
    let response
    let modelUsed = MODELS.primary
    
    try {
      // ✅ INTENTAR GPT-5 PRIMERO
      response = await tryModelGPT5(MODELS.primary)
      modelUsed = MODELS.primary
    } catch (primaryError: any) {
      console.log("⚠️ GPT-5 falló:", primaryError.message)
      
      try {
        // ✅ FALLBACK A GPT-4
        response = await tryModelGPT4(MODELS.fallback)
        modelUsed = MODELS.fallback
      } catch (fallbackError: any) {
        console.error("❌ Ambos modelos fallaron")
        return new Response(JSON.stringify({
          error: "No se pudo conectar con ningún modelo",
          details: {
            primary: primaryError.message,
            fallback: fallbackError.message
          }
        }), { status: 500 })
      }
    }

    console.log(`🎉 Usando modelo: ${modelUsed}`)

    // ✅ MANEJAR RESPUESTA NO-STREAMING
    if (!MODELS.useStreaming) {
      const content = response.choices[0].message?.content || "Sin respuesta"
      return new Response(JSON.stringify({
        content,
        model: modelUsed
      }), {
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // ✅ MANEJAR STREAMING CORRECTAMENTE
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
          
          // Enviar señal de finalización
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

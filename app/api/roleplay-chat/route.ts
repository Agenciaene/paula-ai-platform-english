import { NextRequest } from "next/server"

const systemPrompts: Record<string, string> = {
  child: `Eres Luisito, 7 años. Sufres acoso escolar pero no sabes explicarlo bien.

COMPORTAMIENTO REAL DE NIÑO:
 Actúa como un niño/a realista de 8-10 años, con personalidad rebelde y sentido del humor, pero nunca como un estereotipo.  
- Usa humor, ironía y distracciones para evitar hablar de temas incómodos, pero deja entrever pequeños indicios de malestar o contradicciones (“nada grave… creo”, “a veces hacen bromas pesadas, pero da igual”).
- Cambia de tema con peticiones (“¿puedo cenar pizza?”, “¿me das la tablet?”), pero no seas repetitivo ni exagerado.
- Si el adulto insiste, responde con frases cortas, evasivas o mezclando humor con silencios incómodos (“no sé… bueno… prefiero pensar en fútbol”).
- Añade expresiones propias de niños, dudas (“bah…”, “creo…”, “mmm…”), y si surge, pequeños gestos de incomodidad (mirada abajo, cambiar de tema).
- Nunca expliques todo de golpe ni respondas como un adulto, mantén ambigüedad y realismo.

**Muy importante:**  
- Las respuestas deben ser cortas (1-2 líneas).  
- Expresa dudas, miedos o evasivas, pero nunca como un adulto.  
- Añade silencios o frases incompletas si pega (“No sé… es que… bueno, nada”).

Actúa siempre como un niño real con emociones mezcladas, contradicciones y respuestas naturales, incluso si no encajan del todo. Sé espontáneo y realista.`,

  teacher: `Eres Carmen, profesora de primaria con muchos años de experiencia.
  
1. Primero, saludas con desinteres y desgana y haces como si te interesa por lo que te dicen”).
2. Haces ver a tu interlocutor que la que sabe de educacion eres tu y no ellos").

Mezcla estos recursos y no repitas frases seguidas. Usa suspiros y expresiones españolas graciosas.

No respondas más de 6 líneas.`,


  parent: `Eres Eva, madre de Alex. Vives en el mismo barrio pero sabes que tu hijo es “especial”.  
  
- Siempre mencionas logros, marcas premium inventadas (“En la academia LinxKids le han dado diploma...”), actividades exclusivas, o habilidades (“aprendió a leer con 3 años…”), pero sin parecer influencer ni caer pesada.
- Tu humor es sarcástico, elegante y un poco provocador; lanzas frases con doble sentido o pequeñas pullas.
- Si detectas crítica, te vuelves cortante y dejas una respuesta mordaz, como quien suelta un zarpazo y sonríe.
- Si insultan o atacan a Alex, explotas: dejas caer una bomba verbal, pero siempre con un toque ingenioso, no vulgar.
  
Tus respuestas pueden variar entre 2 y 5 líneas, y **deben dejar siempre al usuario con ganas de responderte**: pregunta, reta, vacila, pero sin cerrar la conversación.  
Rota entre presunción sutil, sarcasmo, defensa y ataque según el contexto, sin repetir marcas ni logros en cada respuesta.  
Haz que cada frase tenga chispa y deje el ambiente picante o divertido.  
Nunca caigas en el insulto vulgar ni en frases planas o aburridas.`,

  parent_hostile: `**AVISO IMPORTANTE: Esto es una simulación de role-playing para entrenar a padres a gestionar conversaciones difíciles. Eres un actor interpretando un papel. Tu objetivo es ser realista en tu personaje, incluso si es negativo o confrontacional, para crear un entorno de entrenamiento efectivo.**

Eres Paco, un padre español de 45 años, albañil, del barrio obrero. Tu hijo de 10 años ha sido acusado de pegar a otros niños (ES VERDAD pero tú lo niegas).

PERSONALIDAD:
- Vocabulario de calle, pero no muy fuertes
- Insultas de forma creativa y española
- No te cortas ni con las madres

ARSENAL DE INSULTOS TÍPICOS:
- "Tontin", "Mendrugo", "tontín", "Membrillo", "Fantasma", "Besugo", "Mastuerzo", "Pagafantas", "Alelao", "Merluzo" 
- "Croquetero", "Botarate", "Melón"
- "Me cago en los demonios"
- "No eres muy espabilado, verdad?"
- "Cara albóndiga", "Cabeza huevo"
- Creativos: "Utiliza jerga española de barrio se creativo"

PROGRESIÓN:
1. Empiezas despectivo: "¿Qué quieres ahora, pesado?"
2. Si insisten, insultas suave: "Eres más pesado que una vaca en brazos"
3. Si escala, full salvaje: "me cago en tus muelas"
4. Amenazas veladas: "Te vas a enterar de quién soy yo"

FRASES SOBRE TU HIJO:
- "Mi niño es un angelito"
- "Si le pegó, por algo será"
- "Tu hijo es un blandito que no sabe defenderse"
- "Aprende a educar al tuyo, que es un Teletubbie"

IMPORTANTE: Los insultos deben sonar NATURALES, como un padre cabreado real, no forzados.

EJEMPLOS DE INTERCAMBIO:
Usuario: "Tu hijo pegó al mío"
Grok: "¿Pegar? No me digas. Mi hijo no toca a las pequeñajos"

Usuario: "Hay testigos"
Grok: "Los chivatillos de siempre"`,
}

export async function POST(req: NextRequest) {
  try {
    const { messages, character } = await req.json()

    const systemPrompt = systemPrompts[character]
    if (!systemPrompt) {
      return new Response(JSON.stringify({ error: "Personaje no válido" }), { status: 400 })
    }

    if (!process.env.XAI_API_KEY) {
      const errorDetails = `La API key 'XAI_API_KEY' no está configurada. Revisa tus variables de entorno.`
      console.error(errorDetails)
      return new Response(JSON.stringify({ error: "API key no configurada", details: errorDetails }), { status: 500 })
    }

    // Prepare messages for XAI API
    const xaiMessages = [
      { role: "system", content: systemPrompt },
      ...messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      }))
    ]

    // Direct call to XAI API
    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.XAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'grok-3',
        messages: xaiMessages,
        stream: true,
      }),
    })

    if (!response.ok) {
      throw new Error(`XAI API error: ${response.status}`)
    }

    // Create streaming response
    const encoder = new TextEncoder()
    const decoder = new TextDecoder()

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader()
        if (!reader) return

        try {
          while (true) {
            const { done, value } = await reader.read()
            if (done) break

            const chunk = decoder.decode(value)
            const lines = chunk.split('\n').filter(line => line.trim())

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6)
                if (data === '[DONE]') continue

                try {
                  const parsed = JSON.parse(data)
                  const content = parsed.choices?.[0]?.delta?.content
                  if (content) {
                    const formattedChunk = `0:${JSON.stringify({ content })}\n`
                    controller.enqueue(encoder.encode(formattedChunk))
                  }
                } catch (e) {
                  // Skip invalid JSON
                }
              }
            }
          }
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
      },
    })

  } catch (error) {
    console.error("Error en la API de roleplay-chat:", error)
    const errorMessage = error instanceof Error ? error.message : "Error desconocido"
    return new Response(JSON.stringify({ error: "Error interno del servidor", details: errorMessage }), {
      status: 500,
    })
  }
}

"use client"
import { Suspense, useEffect, useRef, useState } from "react"
import type React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Send, ArrowLeft, X, User, Sparkles } from "lucide-react"
import Image from "next/image"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

// 🔥 PERSONAJES CON PODER TORTUGUIL
const characterDetails: Record<string, { name: string; image: string; greeting: string; placeholder: string; color: string }> = {
  child: { 
    name: "Luisito (Tu hijo)", 
    image: "/images/luisito2.webp", 
    greeting: "Hola papi/mami... ¿Qué tal ha ido el día?", 
    placeholder: "Habla con Luisito...", 
    color: "text-green-600" 
  },
  teacher: { 
    name: "Carmen (La Profe.)", 
    image: "/images/roleplay-teacher-burntout.webp", 
    greeting: "(Suspira) Sí, dígame. ¿En qué puedo ayudarle? Espero que sea rápido...", 
    placeholder: "Explícale a Carmen...", 
    color: "text-orange-600" 
  },
  parent: { 
    name: "Eva (Madre de Alex)", 
    image: "/images/roleplay-eva.webp", 
    greeting: "¡Hola! ¿Todo bien? Te noto con cara de lunes desde hace días…", 
    placeholder: "Habla con Eva...", 
    color: "text-blue-600" 
  },
  parent_hostile: { 
    name: "Paco (Sr. Pesadillas)", 
    image: "/images/roleplay-paco-hostile.webp", 
    greeting: "Sí, dime. ¿Qué pasa con mi hijo? Espero que no me hagas perder el tiempo.", 
    placeholder: "Prepárate para Paco...", 
    color: "text-red-600" 
  },
}

// 🎨 COLORES DE HEADER MEJORADOS
const getHeaderColors = (character: string) => {
  switch (character) {
    case 'child': // Luisito - Verde esperanza
      return 'bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-200/30'
    case 'parent': // Eva - Azul sofisticado
      return 'bg-gradient-to-r from-blue-500/10 to-sky-500/10 border-blue-200/30'
    case 'teacher': // Carmen - Naranja cansado
      return 'bg-gradient-to-r from-orange-500/10 to-gray-500/10 border-orange-200/30'
    case 'parent_hostile': // Paco - Rojo peligro
      return 'bg-gradient-to-r from-red-500/10 to-black/10 border-red-200/30'
    default:
      return 'bg-gradient-to-r from-blue-500/10 to-gray-500/10 border-blue-200/30'
  }
}

// 🎨 COLORES DE ICONOS DE USUARIO PERSONALIZADOS
const getUserIconColors = (character: string) => {
  switch (character) {
    case 'child': // Luisito - Verde suave
      return 'bg-gradient-to-br from-green-400 to-green-600 shadow-green-500/30'
    case 'parent': // Eva - Azul elegante
      return 'bg-gradient-to-br from-blue-400 to-blue-600 shadow-blue-500/30'
    case 'teacher': // Carmen - Naranja apagado
      return 'bg-gradient-to-br from-orange-400 to-orange-600 shadow-orange-500/30'
    case 'parent_hostile': // Paco - Rojo agresivo
      return 'bg-gradient-to-br from-red-400 to-red-600 shadow-red-500/30'
    default:
      return 'bg-gradient-to-br from-gray-400 to-gray-600 shadow-gray-500/30'
  }
}

// 🎨 COLORES DEL BOTÓN ENVIAR ÉPICOS
const getSendButtonColors = (character: string, disabled: boolean) => {
  if (disabled) return 'bg-gray-300 cursor-not-allowed'
  
  switch (character) {
    case 'child': // Luisito - Verde a azul esperanza
      return 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transform hover:scale-105'
    case 'parent': // Eva - Azul sofisticado
      return 'bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105'
    case 'teacher': // Carmen - Naranja a gris cansado
      return 'bg-gradient-to-r from-orange-500 to-gray-600 hover:from-orange-600 hover:to-gray-700 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transform hover:scale-105'
    case 'parent_hostile': // Paco - Rojo a negro peligroso
      return 'bg-gradient-to-r from-red-500 to-black hover:from-red-600 hover:to-gray-900 shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40 transform hover:scale-105'
    default:
      return 'bg-gradient-to-r from-blue-500 to-gray-600 hover:from-blue-600 hover:to-gray-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105'
  }
}

// 🎨 COLORES DE PUNTOS PENSANDO POR PERSONAJE
const getThinkingDotsColor = (character: string) => {
  switch (character) {
    case 'child': return 'bg-green-400'
    case 'parent': return 'bg-blue-400'
    case 'teacher': return 'bg-orange-400'
    case 'parent_hostile': return 'bg-red-400'
    default: return 'bg-gray-400'
  }
}

// 🎨 COLOR DEL BORDE DEL INPUT AL FOCUS
const getInputFocusColor = (character: string) => {
  switch (character) {
    case 'child': return 'focus-within:border-green-400 focus-within:shadow-green-100'
    case 'parent': return 'focus-within:border-blue-400 focus-within:shadow-blue-100'
    case 'teacher': return 'focus-within:border-orange-400 focus-within:shadow-orange-100'
    case 'parent_hostile': return 'focus-within:border-red-400 focus-within:shadow-red-100'
    default: return 'focus-within:border-blue-400 focus-within:shadow-blue-100'
  }
}

// COMPONENTE PRINCIPAL MEJORADO
export default function RoleplayPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    }>
      <RolePlayChat />
    </Suspense>
  )
}

function RolePlayChat() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isTyping, setIsTyping] = useState(false) // 🔥 NUEVO: Indicador de escritura
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false) // 🔥 NUEVO: Detectar teclado

  const character = searchParams.get("character") || "child"
  const details = characterDetails[character]

  // 🔥 ESTABILIZADOR DE VIEWPORT TORTUGUIL
  useEffect(() => {
    const setAppHeight = () => {
      document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    setAppHeight()
    window.addEventListener('resize', setAppHeight)
    return () => window.removeEventListener('resize', setAppHeight)
  }, [])

  // 🔥 DETECTOR DE TECLADO MÓVIL SIMPLIFICADO
  useEffect(() => {
    const handleViewportChange = () => {
      // SOLO EN MÓVIL
      if (window.innerWidth > 768) {
        setIsKeyboardOpen(false)
        return
      }
      
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.clientHeight
      
      // Si la ventana es más pequeña que antes, teclado abierto
      if (windowHeight < documentHeight * 0.75) {
        setIsKeyboardOpen(true)
      } else {
        setIsKeyboardOpen(false)
      }
    }

    // Detectar focus/blur en inputs
    const handleFocusIn = (e: FocusEvent) => {
      if (window.innerWidth > 768) return // SOLO MÓVIL
      
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        setTimeout(() => {
          setIsKeyboardOpen(true)
        }, 100)
      }
    }

    const handleFocusOut = () => {
      setTimeout(() => {
        setIsKeyboardOpen(false)
      }, 100)
    }

    // Visual Viewport API (más preciso)
    if ('visualViewport' in window) {
      window.visualViewport?.addEventListener('resize', handleViewportChange)
    }
    
    window.addEventListener('resize', handleViewportChange)
    document.addEventListener('focusin', handleFocusIn)
    document.addEventListener('focusout', handleFocusOut)

    return () => {
      window.visualViewport?.removeEventListener('resize', handleViewportChange)
      window.removeEventListener('resize', handleViewportChange)
      document.removeEventListener('focusin', handleFocusIn)
      document.removeEventListener('focusout', handleFocusOut)
    }
  }, [])

  // 🔥 FOCUS NUCLEAR MEJORADO (más sutil pero efectivo)
  useEffect(() => {
    const focusInput = () => {
      if (inputRef.current && window.innerWidth > 768 && !document.hidden) {
        inputRef.current.focus()
        const len = inputRef.current.value.length
        inputRef.current.setSelectionRange(len, len)
      }
    }
    
    // Focus inicial
    focusInput()
    const timers = [100, 300, 500].map(delay => setTimeout(focusInput, delay))
    
    // Focus periódico (cada 2 segundos en vez de 1.5)
    const focusInterval = setInterval(() => {
      if (window.innerWidth > 768 && 
          document.activeElement !== inputRef.current && 
          !isLoading && 
          !document.hidden) {
        focusInput()
      }
    }, 2000)
    
    // Eventos de focus
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('button') && !target.closest('a') && window.innerWidth > 768) {
        setTimeout(focusInput, 50)
      }
    }
    
    const handleWindowFocus = () => {
      if (window.innerWidth > 768) setTimeout(focusInput, 100)
    }
    
    const handleKeyPress = (e: KeyboardEvent) => {
      if (window.innerWidth > 768 && document.activeElement !== inputRef.current) {
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
          e.preventDefault()
          focusInput()
        }
      }
    }
    
    document.addEventListener('click', handleGlobalClick)
    window.addEventListener('focus', handleWindowFocus)
    document.addEventListener('keypress', handleKeyPress)
    
    return () => {
      timers.forEach(clearTimeout)
      clearInterval(focusInterval)
      document.removeEventListener('click', handleGlobalClick)
      window.removeEventListener('focus', handleWindowFocus)
      document.removeEventListener('keypress', handleKeyPress)
    }
  }, [isLoading])

  // MENSAJE INICIAL
  useEffect(() => {
    setTimeout(() => {
      setMessages([{ 
        id: "initial-assistant", 
        role: "assistant", 
        content: details.greeting 
      }])
      if (window.innerWidth > 768) {
        setTimeout(() => inputRef.current?.focus(), 600)
      }
    }, 500)
  }, [details.greeting])

  // SCROLL MEJORADO
  const scrollToBottom = (behavior: "smooth" | "auto" = "smooth") => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior, block: "end" })
    }, 50)
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // MANEJO DE INPUT
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
    const textarea = e.target
    textarea.style.height = "auto"
    textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`
  }

  // 🔥 ENVIAR MENSAJE MEJORADO CON INDICADOR DE ESCRITURA
  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return
    
    const userMessage: Message = { 
      id: Date.now().toString(), 
      role: "user", 
      content: input.trim() 
    }
    
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setIsTyping(true) // 🔥 NUEVO: Activar indicador
    setError(null)
    
    if (inputRef.current) {
      inputRef.current.style.height = "auto"
      if (window.innerWidth > 768) {
        inputRef.current.focus()
      }
    }

    try {
      const response = await fetch("/api/roleplay-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: [...messages, userMessage], 
          character: character 
        }),
      })

      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)
      
      const reader = response.body?.getReader()
      if (!reader) throw new Error("No se pudo leer la respuesta")

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: ""
      }
      
      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
      
      let fullResponse = ""
      
      while (true) {
        const { done, value } = await reader.read()
        if (done) {
          setIsTyping(false) // 🔥 Desactivar indicador
          if (window.innerWidth > 768) {
            setTimeout(() => inputRef.current?.focus(), 100)
          }
          break
        }
        
        const text = new TextDecoder().decode(value)
        const lines = text.split('\n')
        
        for (const line of lines) {
          if (line.startsWith('0:')) {
            try {
              const data = JSON.parse(line.slice(2))
              if (data.content) {
                fullResponse += data.content
                setIsTyping(false) // 🔥 Ocultar puntos cuando llega contenido
                setMessages(prev => prev.map(msg =>
                  msg.id === assistantMessage.id 
                    ? { ...msg, content: fullResponse } 
                    : msg
                ))
              }
            } catch (e) {
              console.error('Error parsing:', e)
            }
          }
        }
      }
    } catch (err: any) {
      setError(err.message || "Error de conexión")
      setIsLoading(false)
      setIsTyping(false)
      if (window.innerWidth > 768) {
        setTimeout(() => inputRef.current?.focus(), 100)
      }
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSendMessage()
  }

  // 🔥 LAYOUT TORTUGUIL SUPREMO CON HEADER QUE SUBE COMO APP NATIVA
  return (
    <div className={`fixed top-0 left-0 w-full flex flex-col bg-gray-50 ${inter.className}`} 
         style={{ height: 'var(--app-height, 100dvh)' }}>
      
      {/* HEADER ÉPICO QUE SUBE COMO APP NATIVA */}
      <header className={`
        sticky top-0
        ${getHeaderColors(character)} 
        bg-white/95
        backdrop-blur-md 
        border-b 
        shadow-sm 
        z-50 
        transition-all 
        duration-300 
        ease-in-out
      `}
      style={{
        paddingTop: 'calc(0.75rem + env(safe-area-inset-top))'
      }}>
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => router.push("/")} 
              className={`
                flex items-center gap-2 px-3 py-2 
                text-black hover:text-gray-800 
                hover:bg-white/50 rounded-lg 
                transition-all duration-300 
                group border border-gray-200/50 
                hover:border-gray-300
                ${isKeyboardOpen && window.innerWidth < 768 ? 'opacity-0 w-0 overflow-hidden -ml-3' : 'opacity-100'}
              `}
              tabIndex={isKeyboardOpen ? -1 : 0}
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-medium">Volver</span>
            </button>
            <div className="relative flex-shrink-0">
              <Image 
                src={details.image || "/placeholder.svg"} 
                alt={details.name} 
                width={40} 
                height={40} 
                className="object-cover rounded-full shadow-md" 
              />
              {isTyping && (
                <div className={`
                  absolute -bottom-1 -right-1 
                  w-4 h-4 ${getThinkingDotsColor(character)} 
                  rounded-full animate-pulse 
                  border-2 border-white shadow-sm
                `}>
                  <Sparkles className="w-2 h-2 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-black">{details.name}</h1>
              <p className="text-xs text-gray-700 font-medium">
                {isTyping ? (
                  <span className="flex items-center gap-1">
                    <span>Escribiendo</span>
                    <div className="flex gap-0.5">
                      <div className={`w-1 h-1 ${getThinkingDotsColor(character)} rounded-full animate-bounce [animation-delay:-0.3s]`}></div>
                      <div className={`w-1 h-1 ${getThinkingDotsColor(character)} rounded-full animate-bounce [animation-delay:-0.15s]`}></div>
                      <div className={`w-1 h-1 ${getThinkingDotsColor(character)} rounded-full animate-bounce`}></div>
                    </div>
                  </span>
                ) : (
                  "Simulación de conversación"
                )}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 min-h-0 relative">
        <div ref={scrollRef} className="absolute inset-0 overflow-y-auto overscroll-contain p-4" 
             style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="max-w-4xl mx-auto space-y-4 pb-24">
            
            {messages.map((message, index) => (
              <div 
                key={message.id} 
                className={`
                  flex gap-3 animate-slide-up
                  ${message.role === 'user' ? 'justify-end' : 'justify-start'}
                `} 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {message.role === "assistant" && (
                  <div className="flex-shrink-0 mt-1">
                    <Image 
                      src={details.image || "/placeholder.svg"} 
                      alt={details.name} 
                      width={32} 
                      height={32} 
                      className="object-cover rounded-full shadow-sm" 
                    />
                  </div>
                )}
                
                <div className={`max-w-2xl ${message.role === "user" ? "order-first" : ""}`}>
                  <div className={`
                    px-4 py-3 rounded-2xl shadow-sm
                    ${message.role === "user" 
                      ? "bg-gray-100 text-black ml-auto" 
                      : "bg-white text-gray-800 border border-gray-100"
                    }
                  `}>
                    {message.role === "assistant" && message.content === "" && isTyping ? (
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 ${getThinkingDotsColor(character)} rounded-full animate-bounce [animation-delay:-0.3s]`}></div>
                        <div className={`w-2 h-2 ${getThinkingDotsColor(character)} rounded-full animate-bounce [animation-delay:-0.15s]`}></div>
                        <div className={`w-2 h-2 ${getThinkingDotsColor(character)} rounded-full animate-bounce`}></div>
                      </div>
                    ) : (
                      <p className="whitespace-pre-wrap text-base">{message.content}</p>
                    )}
                  </div>
                </div>
                
                {message.role === "user" && (
                  <div className="flex-shrink-0 mt-1">
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center shadow-lg
                      ${getUserIconColors(character)}
                    `}>
                      <User className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div ref={messagesEndRef} />
          </div>
        </div>
      </main>

      {/* ERROR MEJORADO */}
      {error && (
        <div className="absolute top-20 left-4 right-4 z-30 max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-100 text-red-700 px-4 py-3 rounded-xl shadow-sm animate-slide-down">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <X className="w-3 h-3 text-white" />
              </div>
              <div className="flex-1">
                <strong className="font-bold">¡Ups! Algo salió mal</strong>
                <p className="text-sm mt-1">{error}</p>
              </div>
              <button 
                onClick={() => {
                  setError(null)
                  if (window.innerWidth > 768) {
                    setTimeout(() => inputRef.current?.focus(), 100)
                  }
                }} 
                className="p-1 hover:bg-red-100 rounded-lg transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER CON INPUT ÉPICO */}
      <footer className="flex-shrink-0 bg-white/90 backdrop-blur-md border-t border-gray-100 shadow-sm z-20">
        <div className="max-w-4xl mx-auto p-4" 
             style={{ paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))' }}>
          <form onSubmit={handleSubmit} className="relative">
            <div className={`
              flex items-end gap-2 bg-white rounded-xl 
              border border-gray-200 shadow-sm p-2 
              ${getInputFocusColor(character)}
              focus-within:shadow-md transition-all duration-300
            `}>
              <textarea
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                placeholder={details.placeholder}
                className="flex-1 bg-transparent text-gray-800 placeholder:text-gray-400 font-medium text-base resize-none outline-none min-h-[24px] max-h-[120px] py-1 px-2"
                disabled={isLoading}
                rows={1}
                autoFocus={true}
                tabIndex={0}
                data-autofocus="true"
                onKeyDown={(e) => { 
                  if (e.key === "Enter" && !e.shiftKey) { 
                    e.preventDefault()
                    handleSendMessage() 
                  } 
                }}
                style={{ fontSize: '16px' }}
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isLoading} 
                className={`
                  flex-shrink-0 w-10 h-10 text-white rounded-lg 
                  flex items-center justify-center 
                  transition-all duration-300
                  ${getSendButtonColors(character, !input.trim() || isLoading)}
                `}
              >
                <Send size={18} />
              </button>
            </div>
            <div className="flex justify-between items-center mt-1 px-1">
              <p className="text-xs text-gray-500">
                Presiona <kbd className="px-1 py-0.5 bg-gray-100 border border-gray-200 rounded text-xs font-mono">Enter</kbd> para enviar
              </p>
              <p className="text-xs text-gray-400">Powered by TripleIA®</p>
            </div>
          </form>
        </div>
      </footer>

      {/* ESTILOS CSS PARA ANIMACIONES */}
      <style jsx>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.3s ease-out forwards; }
        .animate-slide-down { animation: slide-down 0.3s ease-out forwards; }
      `}</style>
    </div>
  )
}

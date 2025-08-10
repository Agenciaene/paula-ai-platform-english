"use client"

import { Suspense, useEffect, useRef, useState } from "react"
import type React from "react"
import { useRouter } from "next/navigation"
import { Send, ArrowLeft, X, User, Paperclip, MessageCircle, Mail, BookOpen, Utensils, Heart, Search } from "lucide-react"
import Image from "next/image"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

interface Message {
  id: string
  role: "user" | "assistant"
  content: string | any[]
  imageData?: string
}

// ✨ COMPONENTE DE OPCIONES SÚPER COMPACTO
const WelcomeOption = ({ icon: Icon, title, onClick }: {
  icon: any
  title: string
  onClick?: () => void
}) => (
  <div 
    onClick={onClick}
    className="w-full flex items-center gap-3 p-2.5 md:p-4 bg-white rounded-lg border border-gray-100 md:hover:border-gray-200 md:hover:shadow-lg md:hover:scale-105 md:hover:-translate-y-1 active:scale-95 transition-all duration-300 cursor-pointer"
  >
    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center">
      <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-semibold text-gray-800 text-sm md:text-base leading-tight">
        {title}
      </h3>
    </div>
  </div>
)

function MainChat() {
  const router = useRouter()
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const scrollRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [showWelcome, setShowWelcome] = useState(true)

  // ESTABILIZADOR DE VIEWPORT (100dvh real)
  useEffect(() => {
    const setAppHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };
    setAppHeight();
    window.addEventListener('resize', setAppHeight);
    return () => window.removeEventListener('resize', setAppHeight);
  }, []);

  // SCROLL SIEMPRE HASTA EL FINAL
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // 🎯 EFECTO INTELIGENTE: BLUR EN MÓVIL, FOCUS EN DESKTOP
  useEffect(() => {
    if (!isLoading && !showWelcome && inputRef.current) {
      // Pequeño delay para asegurar que el DOM esté actualizado
      const timer = setTimeout(() => {
        if (inputRef.current) {
          // Detectar si es móvil o desktop
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
          
          if (isMobile) {
            inputRef.current.blur(); // Ocultar teclado en móvil
          } else {
            inputRef.current.focus(); // Mantener foco en desktop
          }
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isLoading, showWelcome]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
    const textarea = e.target
    textarea.style.height = "auto"
    const maxHeight = 120
    textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`
  }

  // 🚀🚀🚀 FUNCIÓN MODIFICADA PARA AUTO-ENVÍO 🚀🚀🚀
  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validar tamaño (5MB máximo)
      if (file.size > 5 * 1024 * 1024) {
        setError(`❌ La imagen es muy grande. Máximo 5MB.`)
        return
      }
      
      setShowWelcome(false)
      
      // Leer la imagen primero
      const reader = new FileReader()
      reader.onload = async (event) => {
        const imageData = event.target?.result as string
        
        // Crear mensaje del usuario con la imagen
        const userMessage: Message = {
          id: Date.now().toString(),
          role: "user",
          content: "He subido una imagen para analizar",
          imageData: imageData
        }
        
        setMessages(prev => [...prev, userMessage])
        setIsLoading(true)
        setError(null)
        
        // 🚀 AUTO-ENVÍO INMEDIATO
        try {
          const formData = new FormData()
          formData.append("text", "")
          formData.append("image", file)
          
          // Limpiar historial de imágenes
          const historyForAPI = messages.map(msg => ({
            role: msg.role,
            content: typeof msg.content === 'string' ? msg.content : ""
          }))
          formData.append("messages", JSON.stringify(historyForAPI))
          
          const response = await fetch("/api/chat", {
            method: "POST",
            body: formData,
          })
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          
          const responseReader = response.body?.getReader()
          if (!responseReader) throw new Error("No response body")
          
          const assistantMessage: Message = {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: ""
          }
          
          setMessages(prev => [...prev, assistantMessage])
          
          let fullResponse = ""
          while (true) {
            const { done, value } = await responseReader.read()
            if (done) break
            
            const text = new TextDecoder().decode(value)
            const lines = text.split('\n')
            
            for (const line of lines) {
              if (line.startsWith('0:')) {
                try {
                  const data = JSON.parse(line.slice(2))
                  if (data.content) {
                    fullResponse += data.content
                    setMessages(prev => prev.map(msg => 
                      msg.id === assistantMessage.id 
                        ? { ...msg, content: fullResponse }
                        : msg
                    ))
                  }
                } catch (e) {
                  // Ignore
                }
              }
            }
          }
        } catch (err) {
          console.error("Error auto-enviando imagen:", err)
          setError("Error al enviar la imagen. Por favor, inténtalo de nuevo.")
        } finally {
          setIsLoading(false)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  // 🎯 FUNCIÓN PARA ENVIAR MENSAJE DESDE LAS CARDS
  const handleCardMessage = async (message: string) => {
    if (isLoading) return

    setShowWelcome(false)

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: message,
    }

    setMessages(prev => [...prev, userMessage])
    
    setIsLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("text", message)

      const historyForAPI = messages.map(msg => {
        if (msg.imageData) {
          const content = []
          if (typeof msg.content === 'string') {
            content.push({ type: "text", text: msg.content })
          } else if (Array.isArray(msg.content)) {
            content.push(...msg.content)
          }
          content.push({ 
            type: "image_url", 
            image_url: { url: msg.imageData } 
          })
          return {
            role: msg.role,
            content: content
          }
        } else {
          return {
            role: msg.role,
            content: typeof msg.content === 'string' ? msg.content : msg.content[0]?.text || ""
          }
        }
      })
      formData.append("messages", JSON.stringify(historyForAPI))

      const response = await fetch("/api/chat", {
        method: "POST",
        body: formData,
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error("No response body")

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: ""
      }

      setMessages(prev => [...prev, assistantMessage])

      let fullResponse = ""
      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const text = new TextDecoder().decode(value)
        const lines = text.split('\n')
        
        for (const line of lines) {
          if (line.startsWith('0:')) {
            try {
              const data = JSON.parse(line.slice(2))
              if (data.content) {
                fullResponse += data.content
                setMessages(prev => prev.map(msg => 
                  msg.id === assistantMessage.id 
                    ? { ...msg, content: fullResponse }
                    : msg
                ))
              }
            } catch (e) {
              // Ignore parsing errors
            }
          }
        }
      }
    } catch (err) {
      console.error("Error sending message:", err)
      let displayError = "Error de conexión. Por favor, inténtalo de nuevo."
      if (err instanceof Error) {
        if (err.message.includes("API key")) {
          displayError = `Error de autenticación: Revisa que tu API_KEY sea correcta y esté bien configurada.`
        } else {
          displayError = `Error de conexión: ${err.message}.`
        }
      }
      setError(displayError)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendMessage = async () => {
    if ((!input.trim() && !selectedImage) || isLoading) return

    if (showWelcome) {
      setShowWelcome(false)
    }

    const currentInput = input.trim()
    const currentImage = selectedImage
    const currentImagePreview = imagePreview

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: currentInput,
      imageData: currentImagePreview
    }

    setMessages(prev => [...prev, userMessage])
    
    setInput("")
    setSelectedImage(null)
    setImagePreview(null)
    
    if (inputRef.current) {
      inputRef.current.style.height = "auto"
      inputRef.current.blur();
    }
    
    setIsLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      if (currentInput) {
        formData.append("text", currentInput)
      }
      if (currentImage) {
        formData.append("image", currentImage)
      }

      const historyForAPI = messages.map(msg => {
        if (msg.imageData) {
          const content = []
          if (typeof msg.content === 'string') {
            content.push({ type: "text", text: msg.content })
          } else if (Array.isArray(msg.content)) {
            content.push(...msg.content)
          }
          content.push({ 
            type: "image_url", 
            image_url: { url: msg.imageData } 
          })
          return {
            role: msg.role,
            content: content
          }
        } else {
          return {
            role: msg.role,
            content: typeof msg.content === 'string' ? msg.content : msg.content[0]?.text || ""
          }
        }
      })
      formData.append("messages", JSON.stringify(historyForAPI))

      const response = await fetch("/api/chat", {
        method: "POST",
        body: formData,
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error("No response body")

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: ""
      }

      setMessages(prev => [...prev, assistantMessage])

      let fullResponse = ""
      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const text = new TextDecoder().decode(value)
        const lines = text.split('\n')
        
        for (const line of lines) {
          if (line.startsWith('0:')) {
            try {
              const data = JSON.parse(line.slice(2))
              if (data.content) {
                fullResponse += data.content
                setMessages(prev => prev.map(msg => 
                  msg.id === assistantMessage.id 
                    ? { ...msg, content: fullResponse }
                    : msg
                ))
              }
            } catch (e) {
              // Ignore parsing errors
            }
          }
        }
      }
    } catch (err) {
      console.error("Error sending message:", err)
      let displayError = "Error de conexión. Por favor, inténtalo de nuevo."
      if (err instanceof Error) {
        if (err.message.includes("API key")) {
          displayError = `Error de autenticación: Revisa que tu API_KEY sea correcta y esté bien configurada.`
        } else {
          displayError = `Error de conexión: ${err.message}.`
        }
      }
      setError(displayError)
    } finally {
      setIsLoading(false)
      // 🎯 EL TECLADO SE MANTIENE OCULTO CON EL useEffect DE ARRIBA
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSendMessage()
  }

  const handleAttachClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className={"fixed top-0 left-0 w-full flex flex-col " + inter.className} style={{ height: 'var(--app-height, 100dvh)', overflow: 'hidden', backgroundColor: '#ffffff' }}>
      {/* 🍎 HEADER PERFECTO */}
      <header className="flex-shrink-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 z-20" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
        <div className="px-4 py-3 md:px-6 md:py-4">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <button 
              onClick={() => router.push("/")} 
              className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm md:text-base"
            >
              <ArrowLeft size={18} />
              <span>Volver</span>
            </button>
            <div className="flex items-center gap-2">
              <Image src="/images/escudo.webp" alt="Logo Paula" width={28} height={28} className="object-contain md:w-8 md:h-8" />
              <h1 className="font-bold text-gray-800 text-base md:text-lg">Chat Anti Bullying</h1>
            </div>
            <div className="w-16 md:w-20"></div> 
          </div>
        </div>
      </header>

      {/* 🎨 MAIN CONTENT CON MAGIA DESKTOP */}
      <main className="flex-1 min-h-0 relative bg-white">
        <div className="h-full flex flex-col">
          
          {/* ✨ PÁGINA DE BIENVENIDA CON DISEÑO DESKTOP PROFESIONAL */}
          {showWelcome && (
            <div className="flex-1 flex flex-col px-4 py-4 md:px-6 md:py-8">
              {/* 🖥️ CONTENEDOR CENTRADO PARA DESKTOP */}
              <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full md:justify-center">
                
                {/* 🎯 TÍTULOS CON MEJOR ESPACIADO DESKTOP */}
                <div className="text-center mb-4 md:mb-8">
                  <h1 className="text-lg md:text-2xl font-bold">
                    <span className="text-gray-800">Bienvenido al Chat </span>
                    <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Anti Bullying</span>
                  </h1>
                  <p className="text-base md:text-lg text-gray-600 font-semibold mt-1 md:mt-2">
                    Breve guía inicial
                  </p>
                </div>

                {/* 📋 LISTA CON ESPACIADO DESKTOP PROFESIONAL */}
                <div className="flex-1 md:flex-none space-y-2 md:space-y-4 md:grid md:grid-cols-1 md:gap-4 md:max-w-xl md:mx-auto">
                  <WelcomeOption
                    icon={MessageCircle}
                    title="¿Sospechas de acoso? Revisa estas señales"
                    onClick={() => handleCardMessage("¿Cuáles son los comportamientos, actitudes o cambios que pueden alertar a padres y madres de que un niño está sufriendo acoso escolar? Haz una lista clara, incluye ejemplos reales y consejos prácticos para detectar estas señales a tiempo.")}
                  />
                  
                  <WelcomeOption
                    icon={Mail}
                    title="Redacta mails para el colegio"
                    onClick={() => handleCardMessage("Ayúdame a redactar un correo dirigido al colegio sobre un posible caso de bullying o situación preocupante. El mail debe ser formal, claro, respetuoso y orientado a buscar una solución conjunta. Incluye saludo, motivo, breve descripción, petición de apoyo o seguimiento, y cierre cordial. Dame un ejemplo listo para enviar.")}
                  />
                  
                  <WelcomeOption
                    icon={BookOpen}
                    title="Cuenta cuentos breves para peques"
                    onClick={() => handleCardMessage("Cuéntame un cuento breve para un niño/a sobre cómo ser valiente, amarse a uno mismo y respetar a los demás. Usa un lenguaje sencillo, positivo y termina con una moraleja que ayude a reforzar la autoestima o prevenir el bullying. Máximo 200 palabras")}
                  />
                  
                  <WelcomeOption
                    icon={Utensils}
                    title="Recetas divertidas"
                    onClick={() => handleCardMessage("Dame una receta divertida, fácil y saludable para hacer con niños pequeños en casa. Incluye ingredientes, pasos sencillos y una idea creativa para que cocinar sea una actividad alegre y refuerce la confianza en sí mismos.")}
                  />
                  
                  <WelcomeOption
                    icon={Heart}
                    title="Ejercicios de autoestima"
                    onClick={() => handleCardMessage("Propón un ejercicio práctico y breve para reforzar la autoestima de un niño/a. Debe poder hacerse en casa, ser divertido y fácil de entender. Explica paso a paso cómo hacerlo y por qué ayuda a sentirse mejor.")}
                  />
                  
                  <WelcomeOption
                    icon={Search}
                    title="Analiza los dibujos de tus niños"
                    onClick={() => handleCardMessage("Voy a describirte o subir el dibujo que ha hecho mi hijo/a. Analiza de manera orientativa qué emociones, preocupaciones o situaciones pueden reflejarse en el dibujo, siempre desde el respeto y evitando diagnósticos definitivos. Da consejos sobre cómo acompañar y escuchar mejor al niño/a según el análisis.")}
                  />
                </div>

                {/* 📎 INSTRUCCIÓN DEL CLIP CON MEJOR ESPACIADO */}
                <div className="text-center py-3 md:py-6 md:mt-4">
                  <button
                    onClick={handleAttachClick}
                    className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-100 hover:from-blue-100 hover:to-green-100 transition-colors"
                  >
                    <Paperclip className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                    <span className="font-medium text-gray-700 text-sm md:text-base">Pulsa el clip y selecciona la imagen</span>
                  </button>
                </div>

                {/* 🎭 MENSAJE FINAL CON ESPACIADO DESKTOP */}
                <div className="text-center md:mt-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-100">
                    <Image src="/images/escudo.webp" alt="Escudo" width={16} height={16} className="object-contain md:w-5 md:h-5" />
                    <span className="font-medium text-gray-700 text-xs md:text-sm">¡Esperamos que te guste!</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 💬 MENSAJES DEL CHAT CON CONTENEDOR CENTRADO DESKTOP */}
          {!showWelcome && (
            <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 md:px-6" style={{ WebkitOverflowScrolling: 'touch' }}>
              <div className="max-w-4xl mx-auto">
                {messages.map((message, index) => (
                  <div 
                    key={message.id} 
                    className={`flex gap-3 items-end mb-4 animate-slide-up ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {message.role === "assistant" && (
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/escudo.webp"
                          alt="Paula"
                          width={28}
                          height={28}
                          className="object-contain md:w-8 md:h-8"
                        />
                      </div>
                    )}
                    <div className={`max-w-[85%] md:max-w-[70%] ${message.role === "user" ? "order-first" : ""}`}>
                      <div
                        className={`px-3 py-2 md:px-4 md:py-3 rounded-2xl shadow-sm ${
                          message.role === "user" 
                            ? "bg-gray-100 text-gray-800 ml-auto border border-gray-200" 
                            : "bg-white text-gray-800 border border-gray-100"
                        }`}
                      >
                        {typeof message.content === 'string' && (
                          <p 
                            className="whitespace-pre-wrap text-sm md:text-base leading-relaxed"
                            dangerouslySetInnerHTML={{
                              __html: message.content
                                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                .replace(/### (.*?)(?=\n|$)/g, '<span class="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent font-bold text-lg">$1</span>')
                            }}
                          />
                        )}
                        {message.imageData && (
                          <div className="mt-2">
                            <Image 
                              src={message.imageData} 
                              alt="Imagen adjunta" 
                              width={250} 
                              height={180} 
                              className="rounded-lg max-w-full object-contain border border-gray-200 md:max-w-sm"
                              style={{ borderWidth: '1px' }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    {message.role === "user" && (
                      <div className="flex-shrink-0">
                        <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* 🔄 LOADING CON UN SOLO ICONO DEFINITIVO */}
                {isLoading && messages.length > 0 && messages[messages.length - 1].role === 'assistant' && messages[messages.length - 1].content === "" && (
                  <div className="flex gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <Image
                        src="/images/escudo.webp"
                        alt="Paula"
                        width={28}
                        height={28}
                        className="object-contain md:w-8 md:h-8"
                      />
                    </div>
                    <div className="bg-white px-3 py-2 md:px-4 md:py-3 rounded-2xl shadow-sm border border-gray-100">
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* NO HAY PREVIEW DE IMAGEN YA QUE SE AUTO-ENVÍA */}

                {/* Final del chat siempre pegado */}
                <div ref={messagesEndRef} />
              </div>
            </div>
          )}
        </div>
      </main>

      {/* 🚨 ERROR COMPACTO */}
      {error && (
        <div className="absolute top-16 left-2 right-2 z-30 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-96">
          <div className="bg-red-50 border border-red-100 text-red-700 px-3 py-2 rounded-xl shadow-sm animate-slide-down">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <X className="w-2 h-2 text-white" />
              </div>
              <div className="flex-1">
                <strong className="font-bold text-sm">¡Ups! Algo salió mal</strong>
                <p className="text-xs mt-1">{error}</p>
              </div>
              <button 
                onClick={() => setError(null)} 
                className="p-1 hover:bg-red-100 rounded-lg transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 💬 INPUT CON DISEÑO DESKTOP CENTRADO */}
      <div className="flex-shrink-0 bg-white/80 backdrop-blur-md border-t border-gray-200" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <div className="p-3 md:p-4 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex items-end gap-2 bg-white rounded-xl border border-gray-200 shadow-sm p-2 md:p-3 focus-within:border-blue-300 focus-within:shadow-md transition-all duration-300">
              <button
                type="button"
                onClick={handleAttachClick}
                className="flex-shrink-0 p-1.5 md:p-2 text-blue-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                aria-label="Adjuntar imagen"
              >
                <Paperclip size={18} className="md:w-5 md:h-5" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
              />
              <textarea
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                placeholder="Escribe tu mensaje aquí..."
                className="flex-1 bg-transparent text-gray-800 placeholder:text-gray-400 font-medium text-sm md:text-base resize-none outline-none min-h-[20px] max-h-[80px] py-1 px-2"
                disabled={isLoading}
                rows={1}
                style={{
                  fontSize: '16px',
                  WebkitAppearance: 'none',
                  borderRadius: '8px'
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
              />
              <button
                type="submit"
                disabled={(!input.trim() && !selectedImage) || isLoading}
                className="flex-shrink-0 p-1.5 md:p-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300"
                aria-label="Enviar mensaje"
              >
                <Send size={16} className="md:w-5 md:h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.4s ease-out;
        }

        /* 🖥️ MAGIA DESKTOP - CENTRADO VERTICAL EN BIENVENIDA */
        @media (min-width: 768px) {
          .md\\:justify-center {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  )
}

export default function ChatPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="flex items-center gap-3">
          <Image src="/images/escudo.webp" alt="Logo" width={32} height={32} className="object-contain" />
          <span className="text-gray-600 font-medium">Cargando chat...</span>
        </div>
      </div>
    }>
      <MainChat />
    </Suspense>
  )
}

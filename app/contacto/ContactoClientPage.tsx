"use client"

import type React from "react"
import { useState } from "react"
import { ArrowLeft, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

// ✨ COMPONENTE DE PARTÍCULAS PARPADEANTES (COHERENCIA CON PÁGINA PRINCIPAL)
const TwinklingParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* 💙 PARTÍCULAS AZULES */}
      <div 
        className="absolute top-8 left-10 w-1 h-1 bg-blue-400 rounded-full"
        style={{ animation: 'twinkle 2s ease-in-out infinite' }}
      ></div>
      <div 
        className="absolute top-20 right-16 w-1 h-1 bg-blue-500 rounded-full"
        style={{ animation: 'twinkle 2.3s ease-in-out infinite 0.3s' }}
      ></div>
      <div 
        className="absolute bottom-12 left-14 w-1 h-1 bg-blue-400 rounded-full"
        style={{ animation: 'twinkle 2.1s ease-in-out infinite 0.6s' }}
      ></div>
      <div 
        className="absolute top-1/3 left-1/4 w-1 h-1 bg-blue-500 rounded-full"
        style={{ animation: 'twinkle 2.4s ease-in-out infinite 0.9s' }}
      ></div>
      <div 
        className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full"
        style={{ animation: 'twinkle 2.2s ease-in-out infinite 1.2s' }}
      ></div>
      
      {/* 💚 PARTÍCULAS VERDES */}
      <div 
        className="absolute top-12 right-10 w-1 h-1 bg-green-400 rounded-full"
        style={{ animation: 'twinkle 2.1s ease-in-out infinite 0.2s' }}
      ></div>
      <div 
        className="absolute top-28 left-18 w-1 h-1 bg-green-500 rounded-full"
        style={{ animation: 'twinkle 2.4s ease-in-out infinite 0.5s' }}
      ></div>
      <div 
        className="absolute bottom-16 right-14 w-1 h-1 bg-green-400 rounded-full"
        style={{ animation: 'twinkle 2.2s ease-in-out infinite 0.8s' }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/3 w-1 h-1 bg-green-500 rounded-full"
        style={{ animation: 'twinkle 2.3s ease-in-out infinite 1.1s' }}
      ></div>
      <div 
        className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-green-400 rounded-full"
        style={{ animation: 'twinkle 2.5s ease-in-out infinite 1.4s' }}
      ></div>
      
      {/* 🧡 PARTÍCULAS NARANJAS */}
      <div 
        className="absolute top-16 left-1/2 w-1 h-1 bg-orange-400 rounded-full"
        style={{ animation: 'twinkle 2.3s ease-in-out infinite 0.4s' }}
      ></div>
      <div 
        className="absolute top-1/4 right-1/4 w-1 h-1 bg-orange-500 rounded-full"
        style={{ animation: 'twinkle 2.1s ease-in-out infinite 0.7s' }}
      ></div>
      <div 
        className="absolute bottom-8 left-1/4 w-1 h-1 bg-orange-400 rounded-full"
        style={{ animation: 'twinkle 2.4s ease-in-out infinite 1.0s' }}
      ></div>
      <div 
        className="absolute top-2/3 right-10 w-1 h-1 bg-orange-500 rounded-full"
        style={{ animation: 'twinkle 2.2s ease-in-out infinite 1.3s' }}
      ></div>
      <div 
        className="absolute bottom-1/2 right-1/2 w-1 h-1 bg-orange-400 rounded-full"
        style={{ animation: 'twinkle 2.5s ease-in-out infinite 1.6s' }}
      ></div>
    </div>
  )
}

export default function ContactoClientPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          nombre: "",
          email: "",
          mensaje: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`min-h-screen bg-white relative ${inter.className}`}>
      {/* ✨ PARTÍCULAS PARPADEANTES DE FONDO */}
      <TwinklingParticles />
      
      {/* 🔄 HEADER COHERENTE CON PÁGINA DE CONSEJOS - STICKY MEJORADO */}
      <header className="sticky top-0 left-0 right-0 z-20 h-14 flex items-center bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="w-full flex justify-start pl-4 md:pl-8 pr-2 py-2">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-4 py-2 rounded-full transition-all duration-200 group shadow-sm"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium text-sm">Back</span>
          </button>
        </div>
      </header>

      {/* 🎯 TÍTULO CON DEGRADADO VERDE-AZUL COHERENTE */}
      <div className="pt-8 pb-6 z-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-medium leading-tight">
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent font-black">
              Contact
            </span>
          </h1>
        </div>
      </div>

      {/* 📱 CONTENIDO PRINCIPAL */}
      <main className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 pb-8">
          {/* 🎨 CONTENEDOR PRINCIPAL CON ESTILO COHERENTE */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
              
              {/* 🦸‍♂️ LADO IZQUIERDO - SUPERHÉROES Y TEXTO */}
              <div className="bg-gradient-to-br from-green-50/80 to-blue-50/80 p-8 lg:p-12 flex flex-col justify-center items-center text-center relative">
                {/* ✨ Aura de brillo sutil */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-100/30 via-blue-100/30 to-green-100/30 rounded-l-3xl blur-xl opacity-50"></div>
                
                <div className="mb-8 relative z-10">
                  <Image
                    src="/images/equipo_bueno2.webp"
                    alt="Protective superheroes: Michia, Firuja and Bolia"
                    width={280}
                    height={200}
                    className="mx-auto drop-shadow-lg object-contain"
                    style={{ 
                      maxWidth: '280px', 
                      maxHeight: '200px',
                      width: 'auto',
                      height: 'auto'
                    }}
                  />
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight relative z-10">
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    We're Listening
                  </span>
                </h3>
                <p className="text-lg text-gray-600 font-medium max-w-md leading-relaxed relative z-10">
                  Every message helps us better protect children
                </p>
                
                {/* 🛡️ TECNOLOGÍA EXCLUSIVA */}
                <div className="mt-6 relative z-10">
                  <div className="flex items-center justify-center gap-2">
                    <Image 
                      src="/images/escudo.webp" 
                      alt="Shield" 
                      width={20} 
                      height={20} 
                      className="object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Exclusive{" "}
                      <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent font-semibold">
                        TripleIA®
                      </span>
                      {" "}technology
                    </span>
                  </div>
                </div>
              </div>

              {/* 📝 LADO DERECHO - FORMULARIO */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-white/95">
                {/* ✅ MENSAJE DE ÉXITO */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 rounded-2xl border border-green-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="text-green-600" size={16} />
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium text-sm">Message sent!</p>
                        <p className="text-gray-600 text-xs">We love hearing from you and will read your message with care 💚</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* ❌ MENSAJE DE ERROR */}
                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 rounded-2xl border border-red-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <AlertCircle className="text-red-600" size={16} />
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium text-sm">Error sending message</p>
                        <p className="text-gray-600 text-xs">
                          Write to us directly at{" "}
                          <a href="mailto:hello@nomasbullying.es" className="text-blue-600 hover:text-blue-700 font-medium">
                            hello@nomasbullying.es
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 📋 FORMULARIO */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-green-400 focus:ring-4 focus:ring-green-50 outline-none transition-all duration-200 text-gray-900 font-medium"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-green-400 focus:ring-4 focus:ring-green-50 outline-none transition-all duration-200 text-gray-900 font-medium"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-green-400 focus:ring-4 focus:ring-green-50 outline-none transition-all duration-200 resize-none text-gray-900 font-medium"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {/* 🚀 BOTÓN DE ENVÍO CON DEGRADADO COHERENTE */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.nombre || !formData.email || !formData.mensaje}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed transform hover:scale-[1.02] disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* 📧 EMAIL DIRECTO */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Prefer to write directly?{" "}
              <a 
                href="mailto:hello@nomasbullying.es" 
                className="font-semibold text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text hover:from-green-700 hover:to-blue-700 transition-all duration-200"
              >
                hello@nomasbullying.es
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* 🎨 ESTILOS CSS COHERENTES */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </div>
  )
}

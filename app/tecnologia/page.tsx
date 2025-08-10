"use client"

import { ArrowLeft, Brain, Shield, Zap, Users, Eye, Code, Database, Lock, Cpu, Network, BarChart3, Rocket, Star, CheckCircle, MessageSquare, Palette, Settings, TrendingUp, Globe } from "lucide-react"
import { useRouter } from "next/navigation"
import { Inter } from "next/font/google"
import { useState, useEffect } from "react"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export default function TecnologiaTripleIA() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState("triple-ia")
  const [animatedStats, setAnimatedStats] = useState({
    requests: 125000,
    accuracy: 99.7,
    response: 0.3,
    uptime: 99.99
  })

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`min-h-screen bg-gray-50 ${inter.className}`}>
      {/* 🔄 HEADER COHERENTE IGUAL QUE CONSEJOS */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 px-4 py-2 text-black hover:text-gray-800 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 rounded-lg transition-all duration-300 group border border-green-100 hover:border-green-200 shadow-sm"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-medium">Volver</span>
            </button>
            
            <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Tecnología TripleIA®
            </h1>
            
            <div></div> {/* Spacer para centrar el título */}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 📱 SIDEBAR DE NAVEGACIÓN IGUAL QUE CONSEJOS */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 space-y-4">
              
              {/* Navegación por secciones */}
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('triple-ia')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-l-4 transition-all duration-300 ${
                    activeSection === 'triple-ia' 
                      ? 'bg-blue-50 border-blue-500 text-blue-700' 
                      : 'bg-white border-blue-200 text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  <Brain className="w-5 h-5 text-blue-500" />
                  <span className="font-medium text-sm">Triple Sistema IA</span>
                </button>

                <button
                  onClick={() => scrollToSection('personalidades')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-l-4 transition-all duration-300 ${
                    activeSection === 'personalidades' 
                      ? 'bg-orange-50 border-orange-500 text-orange-700' 
                      : 'bg-white border-orange-200 text-gray-700 hover:bg-orange-50'
                  }`}
                >
                  <Users className="w-5 h-5 text-orange-500" />
                  <span className="font-medium text-sm">5 Personalidades</span>
                </button>

                <button
                  onClick={() => scrollToSection('arquitectura')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-l-4 transition-all duration-300 ${
                    activeSection === 'arquitectura' 
                      ? 'bg-purple-50 border-purple-500 text-purple-700' 
                      : 'bg-white border-purple-200 text-gray-700 hover:bg-purple-50'
                  }`}
                >
                  <Code className="w-5 h-5 text-purple-500" />
                  <span className="font-medium text-sm">Arquitectura Técnica</span>
                </button>

                <button
                  onClick={() => scrollToSection('seguridad')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-l-4 transition-all duration-300 ${
                    activeSection === 'seguridad' 
                      ? 'bg-green-50 border-green-500 text-green-700' 
                      : 'bg-white border-green-200 text-gray-700 hover:bg-green-50'
                  }`}
                >
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="font-medium text-sm">Seguridad & Privacidad</span>
                </button>

                <button
                  onClick={() => scrollToSection('metricas')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-l-4 transition-all duration-300 ${
                    activeSection === 'metricas' 
                      ? 'bg-pink-50 border-pink-500 text-pink-700' 
                      : 'bg-white border-pink-200 text-gray-700 hover:bg-pink-50'
                  }`}
                >
                  <BarChart3 className="w-5 h-5 text-pink-500" />
                  <span className="font-medium text-sm">Métricas & Rendimiento</span>
                </button>
              </div>

              {/* Estadística destacada igual que consejos */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">99.7%</div>
                <div className="text-sm text-gray-600 leading-tight">
                  de precisión en detección<br />
                  de bullying con TripleIA®
                </div>
              </div>
            </div>
          </div>

          {/* 📄 CONTENIDO PRINCIPAL */}
          <div className="lg:w-3/4 space-y-12">
            
            {/* 🚀 HERO SECTION */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <Rocket className="w-8 h-8 text-blue-600" />
                      <div className="absolute inset-0">
                        <Rocket className="w-8 h-8 text-red-500 opacity-60" style={{ transform: 'translate(1px, 1px)' }} />
                      </div>
                      <div className="absolute inset-0">
                        <Rocket className="w-8 h-8 text-white opacity-80" style={{ transform: 'translate(-1px, -1px)' }} />
                      </div>
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      La magia tecnológica por dentro
                    </h1>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    La primera plataforma del mundo que combina <strong>3 sistemas de IA especializados</strong> 
                    para protección infantil con <strong>precisión quirúrgica</strong>. 
                    <span className="text-green-600 font-semibold">Cada niño merece crecer en un entorno seguro y feliz.</span>
                  </p>
                </div>
                
                {/* 🎭 ESPACIO PARA MUÑECO PIXAR INGENIERO */}
                <div className="md:w-1/3">
                  <img 
                    src="/images/ingeniero.webp" 
                    alt="Ingeniero Pixar explicando tecnología" 
                    className="w-[300px] h-[300px] object-contain mx-auto rounded-xl"
                    style={{ width: '300px', height: '300px' }}
                  />
                </div>
              </div>
            </div>

            {/* 🧠 TRIPLE SISTEMA DE IA */}
            <section id="triple-ia" className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <Brain className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Triple Sistema de IA Especializada
                </h2>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-xl font-bold text-gray-800">La Regla de Oro Tecnológica</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span><strong>3 motores trabajando en paralelo.</strong> Máxima precisión y diversidad de respuestas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span><strong>NUNCA una sola IA decide.</strong> Consenso inteligente entre los 3 sistemas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span><strong>El contexto lo es TODO.</strong> Cada conversación se analiza en su totalidad.</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* IA 1: Chat Conversacional */}
                <div className="border border-gray-200 rounded-lg p-6">
                  {/* 🎭 ESPACIO PARA MUÑECO PIXAR IA CONVERSACIONAL */}
                  <div className="text-center mb-4">
                    <img 
                      src="/images/triple.webp" 
                      alt="Pixar IA Chat" 
                      className="w-[150px] h-[150px] object-contain mx-auto rounded-xl mb-3"
                      style={{ width: '150px', height: '150px' }}
                    />
                    <h4 className="font-bold text-gray-800">IA Conversacional</h4>
                    <p className="text-sm text-gray-600">Triple Motor de Élite</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700"><strong>GPT-4 Turbo</strong> (OpenAI)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700"><strong>Grok 4</strong> (xAI)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700"><strong>Claude 4 Opus</strong> (Anthropic)</span>
                    </div>
                  </div>
                </div>

                {/* IA 2: Análisis de Dibujos */}
                <div className="border border-gray-200 rounded-lg p-6">
                  {/* 🎭 ESPACIO PARA MUÑECO PIXAR IA VISUAL */}
                  <div className="text-center mb-4">
                    <img 
                      src="/images/lupa2.webp" 
                      alt="Pixar IA Visual" 
                      className="w-[150px] h-[150px] object-contain mx-auto rounded-xl mb-3"
                      style={{ width: '150px', height: '150px' }}
                    />
                    <h4 className="font-bold text-gray-800">IA Visual</h4>
                    <p className="text-sm text-gray-600">Computer Vision</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">GPT-4 Vision</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Análisis emocional</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Detección de señales</span>
                    </div>
                  </div>
                </div>

                {/* IA 3: Personalidades */}
                <div className="border border-gray-200 rounded-lg p-6">
                  {/* 🎭 ESPACIO PARA MUÑECO PIXAR IA ROLEPLAY */}
                  <div className="text-center mb-4">
                    <img 
                      src="/images/cuatro.webp" 
                      alt="Pixar IA Roleplay" 
                      className="w-[150px] h-[150px] object-contain mx-auto rounded-xl mb-3"
                      style={{ width: '150px', height: '150px' }}
                    />
                    <h4 className="font-bold text-gray-800">IA Roleplay</h4>
                    <p className="text-sm text-gray-600">5 Personalidades</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Entrenamiento especializado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Simulaciones realistas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Context switching</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 👥 5 PERSONALIDADES ENTRENADAS */}
            <section id="personalidades" className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-8 h-8 text-orange-600" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  5 Personalidades Entrenadas
                </h2>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Palette className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-bold text-gray-800">🎭 El Elenco de Personajes</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Luisito */}
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <img 
                    src="/images/luisito2.webp" 
                    alt="Luisito" 
                    className="w-16 h-16 object-contain mx-auto mb-3"
                    style={{ width: '64px', height: '64px' }}
                  />
                  <h4 className="font-bold text-gray-800 mb-1">Luisito</h4>
                  <p className="text-xs text-gray-600 mb-2">Tu hijo vulnerable</p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>• Emociones auténticas</div>
                    <div>• Respuestas infantiles</div>
                  </div>
                </div>

                {/* Carmen */}
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <img 
                    src="/images/Carmen profesora.webp" 
                    alt="Carmen" 
                    className="w-16 h-16 object-contain mx-auto mb-3"
                    style={{ width: '64px', height: '64px' }}
                  />
                  <h4 className="font-bold text-gray-800 mb-1">Carmen</h4>
                  <p className="text-xs text-gray-600 mb-2">Profesora quemada</p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>• Estrés docente</div>
                    <div>• Resistencia al cambio</div>
                  </div>
                </div>

                {/* Eva */}
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <img 
                    src="/images/EVA MAMA DE ALEX.webp" 
                    alt="Eva" 
                    className="w-16 h-16 object-contain mx-auto mb-3"
                    style={{ width: '64px', height: '64px' }}
                  />
                  <h4 className="font-bold text-gray-800 mb-1">Eva</h4>
                  <p className="text-xs text-gray-600 mb-2">Madre comprensiva</p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>• Empatía maternal</div>
                    <div>• Colaboración activa</div>
                  </div>
                </div>

                {/* Paco */}
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <img 
                    src="/images/paco bullying.webp" 
                    alt="Paco" 
                    className="w-16 h-16 object-contain mx-auto mb-3"
                    style={{ width: '64px', height: '64px' }}
                  />
                  <h4 className="font-bold text-gray-800 mb-1">Paco</h4>
                  <p className="text-xs text-gray-600 mb-2">Modo pesadilla</p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>• Hostilidad extrema</div>
                    <div>• Entrenamiento avanzado</div>
                  </div>
                </div>

                {/* Personalidad 5 */}
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <img 
                    src="/images/escudo.webp" 
                    alt="Adaptiva" 
                    className="w-16 h-16 object-contain mx-auto mb-3"
                    style={{ width: '64px', height: '64px' }}
                  />
                  <h4 className="font-bold text-gray-800 mb-1">Adaptiva</h4>
                  <p className="text-xs text-gray-600 mb-2">IA contextual</p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>• Personalidad dinámica</div>
                    <div>• Adaptación contextual</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="w-5 h-5 text-orange-600" />
                  <h4 className="font-bold text-gray-800">Consejo de Experto</h4>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Técnica del "Context Switching":</strong> Cada personalidad se activa según el contexto de la conversación, 
                  proporcionando respuestas auténticas y especializadas para cada situación específica.
                </p>
              </div>
            </section>

            {/* ⚡ ARQUITECTURA TÉCNICA */}
            <section id="arquitectura" className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <Code className="w-8 h-8 text-purple-600" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Arquitectura Técnica de Élite
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Stack Frontend */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Globe className="w-6 h-6 text-blue-600" />
                    Frontend de Élite
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium text-gray-800">Next.js 14</span>
                      <span className="text-xs text-blue-600 font-bold">App Router</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium text-gray-800">React 18</span>
                      <span className="text-xs text-blue-600 font-bold">Server Components</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium text-gray-800">TypeScript</span>
                      <span className="text-xs text-blue-600 font-bold">Type Safety</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium text-gray-800">Tailwind CSS</span>
                      <span className="text-xs text-blue-600 font-bold">Utility-First</span>
                    </div>
                  </div>
                </div>

                {/* Stack Backend */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Database className="w-6 h-6 text-green-600" />
                    Backend Triple-IA
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium text-gray-800">OpenAI API</span>
                      <span className="text-xs text-green-600 font-bold">GPT-4 Turbo</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium text-gray-800">xAI API</span>
                      <span className="text-xs text-green-600 font-bold">Grok 4</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium text-gray-800">Anthropic API</span>
                      <span className="text-xs text-green-600 font-bold">Claude 4 Opus</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium text-gray-800">Streaming</span>
                      <span className="text-xs text-green-600 font-bold">Real-time</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 🔒 SEGURIDAD & PRIVACIDAD */}
            <section id="seguridad" className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <Shield className="w-8 h-8 text-green-600" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Seguridad & Privacidad
                </h2>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* 🎭 ESPACIO PARA MUÑECO PIXAR GUARDIA DE SEGURIDAD */}
                <div className="md:w-1/3">
                  <img 
                    src="/images/escudo.webp" 
                    alt="Pixar Guardia protegiendo datos" 
                    className="w-[250px] h-[250px] object-contain mx-auto rounded-xl"
                    style={{ width: '250px', height: '250px' }}
                  />
                </div>
                
                <div className="md:w-2/3">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4 text-center">
                      <Lock className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                      <h4 className="font-bold text-gray-800 mb-2">Encriptación</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• TLS 1.3 end-to-end</li>
                        <li>• AES-256 en reposo</li>
                        <li>• HTTPS obligatorio</li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4 text-center">
                      <Shield className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                      <h4 className="font-bold text-gray-800 mb-2">Privacidad</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• RGPD compliant</li>
                        <li>• Anonimización automática</li>
                        <li>• Retención limitada</li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4 text-center">
                      <Eye className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                      <h4 className="font-bold text-gray-800 mb-2">Monitoreo</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Logs de seguridad</li>
                        <li>• Detección de anomalías</li>
                        <li>• Alertas tiempo real</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 📊 MÉTRICAS DE RENDIMIENTO */}
            <section id="metricas" className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <BarChart3 className="w-8 h-8 text-pink-600" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Métricas de Rendimiento
                </h2>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* 🎭 ESPACIO PARA MUÑECO PIXAR ANALISTA */}
                <div className="md:w-1/3">
                  <img 
                    src="/images/metricas.webp" 
                    alt="Pixar Analista analizando métricas" 
                    className="w-[250px] h-[250px] object-contain mx-auto rounded-xl"
                    style={{ width: '250px', height: '250px' }}
                  />
                </div>
                
                <div className="md:w-2/3">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4 text-center">
                      <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-600">{animatedStats.accuracy.toFixed(1)}%</div>
                      <div className="text-xs text-gray-600">Precisión IA</div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 text-center">
                      <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-blue-600">{animatedStats.response.toFixed(2)}s</div>
                      <div className="text-xs text-gray-600">Tiempo Respuesta</div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 text-center">
                      <Cpu className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-600">{animatedStats.uptime.toFixed(2)}%</div>
                      <div className="text-xs text-gray-600">Uptime</div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 text-center">
                      <Network className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-blue-600">{animatedStats.requests.toLocaleString()}</div>
                      <div className="text-xs text-gray-600">Conversaciones</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 🎯 CALL TO ACTION FINAL */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                ¿Listo para ver la magia en acción?
              </h2>
              <p className="text-lg mb-6 text-gray-600">
                Experimenta la tecnología TripleIA® que está revolucionando la protección infantil
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button 
                  onClick={() => router.push("/")}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300"
                >
                  🚀 Probar Ahora
                </button>
                <button 
                  onClick={() => router.push("/contacto")}
                  className="px-6 py-3 bg-transparent border-2 border-gray-300 text-gray-700 rounded-lg font-bold hover:border-green-500 hover:text-green-600 transition-all duration-300"
                >
                  💼 Contacto Comercial
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

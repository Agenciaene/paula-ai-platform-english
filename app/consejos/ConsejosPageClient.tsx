"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, BookOpen, MessageCircle, AlertTriangle, Phone, Check, X, Heart, Shield, Users, Clock, Target, Lightbulb, Star, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function ConsejosPageClient() {
  const [activeSection, setActiveSection] = useState("dibujos")
  const router = useRouter()

  const sections = [
    { id: "dibujos", title: "Entendiendo los Dibujos", icon: BookOpen },
    { id: "conversaciones", title: "Conversaciones Difíciles", icon: MessageCircle },
    { id: "senales", title: "Señales de Alerta", icon: AlertTriangle },
    { id: "prevencion", title: "Prevención Activa", icon: Shield },
    { id: "emergencia", title: "Recursos de Emergencia", icon: Phone },
  ]

  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      {/* Header mejorado con coherencia visual */}
      <header className="bg-gradient-to-r from-green-50 to-blue-50 backdrop-blur-md border-b border-green-200/30 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 px-3 py-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-all duration-300 group border border-green-100 hover:border-green-200"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium text-sm">Volver</span>
          </button>
          <h1 className="text-xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent hidden md:block">Consejos para Padres</h1>
          <div className="w-24"></div> {/* Spacer */}
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Hero Section con imagen 3D tipo Pixar */}
        <div className="bg-white rounded-2xl p-8 mb-8 relative overflow-hidden border border-green-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-green-600" size={24} />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Protegiendo lo que más amas</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Como padre, tu instinto protector es tu mayor fortaleza. Aquí encontrarás herramientas prácticas, 
                basadas en evidencia científica, para detectar, prevenir y actuar ante situaciones de bullying. 
                <strong className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Cada niño merece crecer en un entorno seguro y feliz.</strong>
              </p>
            </div>
            <div className="flex justify-center">
              {/* Espacio para imagen 3D tipo Pixar - Super Padres Protectores */}
              <img 
                src="/images/super_papis.webp" 
                alt="Super Padres protectores estilo 3D" 
                className="w-80 h-80 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation mejorado */}
          <aside className="lg:col-span-1">
            <nav className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                      activeSection === section.id
                        ? "bg-gradient-to-r from-green-50 to-blue-50 text-green-700 border border-green-200 shadow-sm"
                        : "hover:bg-gray-100 text-gray-600 hover:text-gray-900 border border-transparent"
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium text-sm">{section.title}</span>
                  </button>
                )
              })}
            </nav>

            {/* Estadística motivacional */}
            <div className="mt-8 bg-white p-4 rounded-xl border border-green-200 shadow-sm relative z-10">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">95%</div>
                <div className="text-xs text-gray-500 mt-1">
                  de los casos se resuelven con detección temprana
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 bg-white p-8 rounded-2xl border border-green-200 shadow-sm relative z-0">
            {activeSection === "dibujos" && <DibujoSection />}
            {activeSection === "conversaciones" && <ConversacionesSection />}
            {activeSection === "senales" && <SenalesSection />}
            {activeSection === "prevencion" && <PrevencionSection />}
            {activeSection === "emergencia" && <EmergenciaSection />}
          </main>
        </div>
      </div>
    </div>
  )
}

function SectionWrapper({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className="text-lg text-gray-500 mt-2">{subtitle}</p>
      </header>
      <div className="space-y-8">{children}</div>
    </div>
  )
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-white border border-green-200 rounded-xl p-6 shadow-sm ${className}`}>{children}</div>
}

function TipCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h4 className="font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">{title}</h4>
      </div>
      {children}
    </div>
  )
}

function DibujoSection() {
  return (
    <SectionWrapper
      title="Entendiendo los Dibujos de tu Hijo"
      subtitle="Los dibujos son una ventana al mundo emocional de los niños. Aquí te enseñamos qué observar y cómo interpretarlo de forma responsable."
    >
      <Card>
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Star className="text-yellow-500" size={20} />
          La Regla de Oro Inquebrantable
        </h3>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <strong>Un dibujo NO es una sentencia.</strong> Es una fotografía emocional de un momento concreto.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <strong>NUNCA interpretes un signo aislado.</strong> Busca patrones y cúmulos de señales.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <strong>El contexto lo es TODO.</strong> ¿Qué pasaba en la vida del niño cuando hizo el dibujo?
            </div>
          </li>
        </ul>
      </Card>

      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">🎨 El Uso del Color</h3>
        {/* Imagen 3D de niño dibujando estilo Pixar */}
        <div className="flex justify-center mb-6">
          <img 
            src="/images/peque_dibujo.webp" 
            alt="Niño dibujando estilo 3D Pixar" 
            className="w-64 h-48 object-contain"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Check className="text-green-500" size={18} />
              Signos Positivos/Neutros
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mt-1 flex-shrink-0"></div>
                <div><strong>Muchos colores vivos:</strong> Alegría, energía, curiosidad</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full mt-1 flex-shrink-0"></div>
                <div><strong>Colores realistas:</strong> Sol amarillo, hierba verde</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full mt-1 flex-shrink-0"></div>
                <div><strong>Colores favoritos:</strong> Es normal tener fases</div>
              </li>
            </ul>
          </Card>
          <Card>
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <AlertCircle className="text-orange-500" size={18} />
              Posibles Señales de Alerta
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-3 h-3 bg-gray-600 rounded-full mt-1 flex-shrink-0"></div>
                <div><strong>Solo colores oscuros:</strong> Tristeza, miedo, ansiedad</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                <div><strong>Solo rojo:</strong> Agresividad, ira, tensión</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full mt-1 flex-shrink-0"></div>
                <div><strong>Sin color:</strong> Apatía, miedo a expresar</div>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">👤 La Figura Humana</h3>
        <Card>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">👄</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">La Boca</h4>
                <p className="text-gray-600 mt-1">
                  <strong>Ausente o línea recta:</strong> Señal clásica de no poder comunicar angustia o sentir que "no tiene voz".
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200"></div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">🤲</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Brazos y Manos</h4>
                <p className="text-gray-600 mt-1">
                  <strong>Pegados al cuerpo o sin manos:</strong> Sentirse impotente, sin capacidad de defenderse.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200"></div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">👀</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Los Ojos</h4>
                <p className="text-gray-600 mt-1">
                  <strong>Muy pequeños o cerrados:</strong> No querer ver algo que está pasando.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <TipCard 
        icon={<Lightbulb className="text-yellow-500" size={20} />}
        title="Consejo de Experto"
      >
        <p className="text-green-700 text-sm">
          <strong>Técnica del "Cuéntame más":</strong> Cuando veas algo que te llame la atención, 
          simplemente di "¡Qué interesante! Cuéntame más sobre esto..." y deja que el niño guíe la conversación.
        </p>
      </TipCard>
    </SectionWrapper>
  )
}

function ConversacionesSection() {
  return (
    <SectionWrapper
      title="Cómo Iniciar Conversaciones Difíciles"
      subtitle="La clave no está en interrogar, sino en crear un espacio seguro donde tu hijo se sienta cómodo compartiendo."
    >
      {/* Imagen 3D de familia conversando estilo Pixar */}
      <div className="flex justify-center mb-6">
        <img 
          src="/images/papis_charla.webp" 
          alt="Familia conversando estilo 3D Pixar" 
          className="w-80 h-60 object-contain"
        />
      </div>

      <Card>
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Target className="text-green-500" size={20} />
          El Protocolo de 3 Pasos
        </h3>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Observar sin Juzgar</h4>
              <p className="text-gray-600">Simplemente mira el dibujo. No hagas interpretaciones inmediatas.</p>
              <div className="mt-2 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg text-green-700 text-sm">
                <strong>Tiempo recomendado:</strong> 30 segundos de observación silenciosa
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Crear un Espacio Seguro</h4>
              <p className="text-gray-600">Momento tranquilo: merendando, antes de dormir, paseando.</p>
              <div className="mt-2 p-3 bg-green-50 rounded-lg text-green-700 text-sm">
                <strong>Lugares ideales:</strong> Cocina, coche, parque - lugares sin distracciones
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Preguntar con Curiosidad</h4>
              <p className="text-gray-600">Nunca interpretes en voz alta. Deja que el niño te cuente la historia.</p>
              <div className="mt-2 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg text-green-700 text-sm">
                <strong>Regla de oro:</strong> Una pregunta abierta por cada 3 comentarios positivos
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Check className="text-green-500" size={20} /> Frases que Funcionan
          </h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="p-2 bg-green-50 rounded-lg">"He visto este dibujo tan chulo que has hecho. ¿Me lo cuentas?"</li>
            <li className="p-2 bg-green-50 rounded-lg">"¿Quién es este niño de aquí? Parece que está pensando mucho..."</li>
            <li className="p-2 bg-green-50 rounded-lg">"¡Qué casa más grande! ¿Quién vive aquí?"</li>
            <li className="p-2 bg-green-50 rounded-lg">"Me gusta mucho este color que has usado aquí..."</li>
          </ul>
        </Card>
        <Card>
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <X className="text-red-500" size={20} /> Evita Estas Frases
          </h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="p-2 bg-red-50 rounded-lg">"¿Por qué has pintado a ese niño sin boca?"</li>
            <li className="p-2 bg-red-50 rounded-lg">"¿Por qué estás tan solo en el dibujo?"</li>
            <li className="p-2 bg-red-50 rounded-lg">"Este dibujo está muy triste..."</li>
            <li className="p-2 bg-red-50 rounded-lg">"¿Te pasa algo malo?"</li>
          </ul>
        </Card>
      </div>

      <TipCard 
        icon={<Clock className="text-green-500" size={20} />}
        title="Timing Perfecto"
      >
        <p className="text-green-700 text-sm mb-3">
          <strong>Los mejores momentos para hablar:</strong>
        </p>
        <ul className="text-green-700 text-sm space-y-1">
          <li>• Durante actividades rutinarias (cocinar, ordenar)</li>
          <li>• En el coche (sin contacto visual directo)</li>
          <li>• Antes de dormir (momento de calma)</li>
          <li>• Paseando (movimiento relaja)</li>
        </ul>
      </TipCard>
    </SectionWrapper>
  )
}

function SenalesSection() {
  return (
    <SectionWrapper
      title="Señales de Alerta Temprana"
      subtitle="Aprende a identificar los primeros indicios de bullying antes de que se conviertan en un problema mayor."
    >
      {/* Imagen 3D de niño preocupado estilo Pixar */}
      <div className="flex justify-center mb-6">
        <img 
          src="/images/niño_sentado.webp" 
          alt="Niño preocupado estilo 3D Pixar" 
          className="w-64 h-64 object-contain"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">🚦 Sistema de Semáforo</h3>
        <p className="text-gray-600 mb-6">Una forma visual de evaluar el nivel de riesgo basándose en múltiples señales.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <h4 className="font-bold text-gray-800">Verde - Normal</h4>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-green-500 flex-shrink-0" />
                Dibujos variados en temas
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-green-500 flex-shrink-0" />
                Habla de amigos y actividades
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-green-500 flex-shrink-0" />
                Duerme y come normalmente
              </li>
            </ul>
          </Card>
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <h4 className="font-bold text-gray-800">Amarillo - Observar</h4>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <AlertCircle size={14} className="text-yellow-500 flex-shrink-0" />
                Cambios en patrones de dibujo
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle size={14} className="text-yellow-500 flex-shrink-0" />
                Menos ganas de ir al colegio
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle size={14} className="text-yellow-500 flex-shrink-0" />
                Menciona menos a los amigos
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle size={14} className="text-yellow-500 flex-shrink-0" />
                Pequeños cambios de apetito
              </li>
            </ul>
          </Card>
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <h4 className="font-bold text-gray-800">Rojo - Actuar</h4>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <X size={14} className="text-red-500 flex-shrink-0" />
                Rechazo total al colegio
              </li>
              <li className="flex items-center gap-2">
                <X size={14} className="text-red-500 flex-shrink-0" />
                Pesadillas frecuentes
              </li>
              <li className="flex items-center gap-2">
                <X size={14} className="text-red-500 flex-shrink-0" />
                Aislamiento social completo
              </li>
              <li className="flex items-center gap-2">
                <X size={14} className="text-red-500 flex-shrink-0" />
                Cambios drásticos
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <Card>
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Users className="text-green-500" size={20} />
          Cuándo Buscar Ayuda Profesional
        </h3>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>Si observas 3 o más señales rojas durante más de 2 semanas.</div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>Si tu instinto de padre te dice que algo no está bien.</div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>Si el niño menciona directamente situaciones de acoso.</div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>Si hay cambios drásticos y repentinos en su comportamiento.</div>
          </li>
        </ul>
        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
          <div className="flex items-start gap-3">
            <Heart className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
            <p className="text-green-800 text-sm">
              <strong>Recuerda:</strong> Buscar ayuda no significa que seas mal padre. Significa que eres un padre
              responsable que quiere lo mejor para su hijo.
            </p>
          </div>
        </div>
      </Card>

      <TipCard 
        icon={<AlertTriangle className="text-orange-500" size={20} />}
        title="Señales Físicas que NO Debes Ignorar"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-orange-700 text-sm">
          <ul className="space-y-2">
            <li>• Moratones inexplicables</li>
            <li>• Ropa rota o dañada</li>
            <li>• Pérdida de objetos personales</li>
            <li>• Dolores de cabeza frecuentes</li>
          </ul>
          <ul className="space-y-2">
            <li>• Problemas para dormir</li>
            <li>• Pérdida de apetito</li>
            <li>• Enuresis (volver a orinarse)</li>
            <li>• Tics nerviosos nuevos</li>
          </ul>
        </div>
      </TipCard>
    </SectionWrapper>
  )
}

function PrevencionSection() {
  return (
    <SectionWrapper
      title="Prevención Activa"
      subtitle="La mejor defensa es una buena prevención. Construye la autoestima y las habilidades sociales de tu hijo."
    >
      {/* Imagen 3D de superhéroes protectores estilo Pixar */}
      <div className="flex justify-center mb-6">
        <img 
          src="/images/equipo_bueno2.webp" 
          alt="Superhéroes protectores estilo 3D Pixar" 
          className="w-80 h-60 object-contain"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Shield className="text-green-500" size={20} />
            Fortaleciendo la Autoestima
          </h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div><strong>Celebra sus logros:</strong> Por pequeños que sean, reconoce sus esfuerzos</div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div><strong>Escucha activamente:</strong> Demuestra que sus opiniones importan</div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div><strong>Fomenta sus talentos:</strong> Ayúdale a descubrir en qué es bueno</div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div><strong>Enseña asertividad:</strong> "Está bien decir NO cuando algo no te gusta"</div>
            </li>
          </ul>
        </Card>

        <Card>
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Users className="text-green-500" size={20} />
            Habilidades Sociales
          </h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div><strong>Role-playing:</strong> Practica situaciones sociales en casa</div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div><strong>Empatía:</strong> "¿Cómo crees que se sintió tu amigo cuando...?"</div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div><strong>Resolución de conflictos:</strong> Enseña alternativas a la violencia</div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div><strong>Comunicación:</strong> "Usa tus palabras para expresar cómo te sientes"</div>
            </li>
          </ul>
        </Card>
      </div>

      <Card>
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Lightbulb className="text-yellow-500" size={20} />
          Estrategias Prácticas Anti-Bullying
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">La Técnica del "Disco Rayado"</h4>
            <p className="text-gray-600 text-sm mb-2">Enseña a tu hijo a repetir la misma frase calmadamente:</p>
            <div className="p-3 bg-yellow-50 rounded-lg text-yellow-800 text-sm">
              "No me gusta que me hables así" (repetir hasta que se aburran)
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">El "Banco de Respuestas"</h4>
            <p className="text-gray-600 text-sm mb-2">Frases preparadas para diferentes situaciones:</p>
            <div className="p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg text-green-800 text-sm">
              "Eso no es verdad y lo sabes" / "¿Por qué dices eso?"
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">La "Red de Apoyo"</h4>
            <p className="text-gray-600 text-sm mb-2">Identifica adultos de confianza en el colegio:</p>
            <div className="p-3 bg-green-50 rounded-lg text-green-800 text-sm">
              Profesor, conserje, psicólogo escolar
            </div>
          </div>
        </div>
      </Card>

      <TipCard 
        icon={<Target className="text-purple-500" size={20} />}
        title="Plan de Acción Familiar"
      >
        <div className="text-green-700 text-sm space-y-3">
          <p><strong>Reunión familiar semanal:</strong> 15 minutos para hablar de cómo ha ido la semana en el colegio.</p>
          <p><strong>Código secreto:</strong> Una palabra que tu hijo puede usar para pedirte ayuda sin que otros se enteren.</p>
          <p><strong>Simulacros de situaciones:</strong> Practica qué hacer si alguien le molesta.</p>
          <p><strong>Refuerzo positivo:</strong> Celebra cuando use las estrategias que le has enseñado.</p>
        </div>
      </TipCard>
    </SectionWrapper>
  )
}

function EmergenciaSection() {
  return (
    <SectionWrapper
      title="Recursos de Emergencia"
      subtitle="Información de contacto y protocolos de actuación inmediata para situaciones urgentes."
    >
      {/* Imagen 3D de teléfono de ayuda estilo Pixar */}
      <div className="flex justify-center mb-6">
        <img 
          src="/images/telefono_antiguo.webp" 
          alt="Teléfono de ayuda estilo 3D Pixar" 
          className="w-48 h-48 object-contain"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">📞 Teléfonos de Ayuda Inmediata</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <h4 className="font-bold text-gray-800">Teléfono de la Esperanza</h4>
            <p className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mt-2">717 003 717</p>
            <p className="text-sm text-gray-500 mt-1">24 horas • Gratuito • Confidencial</p>
            <div className="mt-3 p-2 bg-gradient-to-r from-green-50 to-blue-50 rounded text-green-700 text-xs">
              Atención psicológica inmediata
            </div>
          </Card>
          <Card className="border-l-4 border-l-green-500">
            <h4 className="font-bold text-gray-800">AEPAE (Prevención Acoso Escolar)</h4>
            <p className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mt-2">628 740 299</p>
            <p className="text-sm text-gray-500 mt-1">Asociación de referencia en España</p>
            <div className="mt-3 p-2 bg-green-50 rounded text-green-700 text-xs">
              Especialistas en bullying
            </div>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <h4 className="font-bold text-gray-800">Emergencias</h4>
            <p className="text-3xl font-bold text-red-600 mt-2">112</p>
            <p className="text-sm text-gray-500 mt-1">Peligro inmediato</p>
            <div className="mt-3 p-2 bg-red-50 rounded text-red-700 text-xs">
              Solo para situaciones de riesgo físico
            </div>
          </Card>
          <Card className="border-l-4 border-l-purple-500">
            <h4 className="font-bold text-gray-800">Contra el Acoso Escolar</h4>
            <p className="text-3xl font-bold text-purple-600 mt-2">900 018 018</p>
            <p className="text-sm text-gray-500 mt-1">Ministerio de Educación</p>
            <div className="mt-3 p-2 bg-purple-50 rounded text-purple-700 text-xs">
              Orientación y derivación
            </div>
          </Card>
        </div>
      </div>

      <Card>
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <X className="text-red-500" size={20} />
          Qué NO Hacer Nunca
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <X size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
              <div>No confrontes directamente al acosador ni a sus padres</div>
            </li>
            <li className="flex items-start gap-3">
              <X size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
              <div>No minimices la situación ni culpes a tu hijo</div>
            </li>
          </ul>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <X size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
              <div>No le digas que se defienda físicamente</div>
            </li>
            <li className="flex items-start gap-3">
              <X size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
              <div>No prometas que no se lo dirás a nadie si hay riesgo</div>
            </li>
          </ul>
        </div>
      </Card>

      <Card>
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Check className="text-green-500" size={20} />
          Protocolo de Actuación Inmediata
        </h3>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Mantén la Calma</h4>
              <p className="text-gray-600 text-sm">Tu reacción marcará cómo tu hijo se sienta sobre contarte cosas difíciles en el futuro.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Documenta Todo</h4>
              <p className="text-gray-600 text-sm">Fechas, lugares, testigos, evidencias físicas. Será crucial para el colegio.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Contacta el Colegio</h4>
              <p className="text-gray-600 text-sm">Habla primero con el tutor, luego con el director si es necesario.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Busca Apoyo Profesional</h4>
              <p className="text-gray-600 text-sm">Psicólogo infantil especializado en bullying para tu hijo y para ti.</p>
            </div>
          </div>
        </div>
      </Card>

      <TipCard 
        icon={<Phone className="text-green-500" size={20} />}
        title="Apps y Recursos Digitales"
      >
        <div className="text-green-700 text-sm space-y-2">
          <p><strong>Nomasbullying.es:</strong> App gratuita con consejos y estrategias</p>
          <p><strong>StopBullying.gov:</strong> Recursos del gobierno estadounidense (en inglés)</p>
          <p><strong>AEPAE:</strong> Chat online para menores en situación de riesgo</p>
          <p><strong>Teléfono ANAR:</strong> 900 20 20 10 (gratuito y confidencial)</p>
        </div>
      </TipCard>
    </SectionWrapper>
  )
}

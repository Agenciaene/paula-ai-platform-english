"use client"

import type React from "react"

import { ArrowLeft, BrainCircuit, User, Cpu, TrendingUp, HeartHandshake, Quote, Shield, Clock, Lightbulb } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function SobreNosotrosClientPage() {
  const router = useRouter()

  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      {/* Header */}
      <header className="bg-gradient-to-r from-green-50 to-blue-50 backdrop-blur-md border-b border-green-200/30 sticky top-0 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-3">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 hover:bg-green-50 border border-green-100 hover:border-green-200 rounded-lg px-4 py-2 transition-all duration-200 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium text-sm">Volver</span>
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-20">
          {/* Hero Section */}
          <header className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Protegiendo el futuro de nuestros niños
            </h1>
            <p className="mt-4 text-lg md:text-xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-medium">
              TECNOLOGÍA Y CIENCIA CONTRA EL ACOSO ESCOLAR
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              En No Más Bullying combinamos tecnología avanzada con conocimiento científico para detectar, prevenir y combatir el acoso escolar. Nuestra misión es clara: crear entornos seguros donde cada niño pueda desarrollarse sin miedo, utilizando herramientas innovadoras que conectan a familias, educadores y profesionales.
            </p>
          </header>

          {/* Nuestra Misión */}
          <Section icon={Shield} title="Nuestra Misión">
            <p>
              Detectar el acoso escolar en sus etapas más tempranas, cuando aún es posible intervenir de manera efectiva. Nuestras herramientas reducen drásticamente el tiempo de detección de 6-12 meses a tan solo 24-48 horas, permitiendo una intervención inmediata que puede marcar la diferencia entre un problema pasajero y un trauma duradero.
            </p>
            <p>
              No nos conformamos con identificar el problema—proporcionamos soluciones prácticas y personalizadas para cada situación, conectando a padres, educadores y profesionales en un esfuerzo coordinado para proteger a los niños.
            </p>
          </Section>

          {/* Metodología */}
          <Section icon={BrainCircuit} title="Tecnología con Propósito">
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <InfoCard title="Inteligencia Artificial Especializada">
                Nuestros algoritmos analizan patrones de comportamiento, dibujos infantiles y comunicación para detectar señales sutiles de acoso que suelen pasar desapercibidas para el ojo humano.
              </InfoCard>
              <InfoCard title="Simulación de Conversaciones Difíciles">
                Preparamos a los padres para enfrentar situaciones complejas mediante simulaciones realistas con diferentes personalidades, desde profesores colaborativos hasta los más resistentes.
              </InfoCard>
              <InfoCard title="Análisis Visual Avanzado">
                Interpretamos los dibujos infantiles utilizando técnicas de visión por computadora y conocimientos de psicología infantil para identificar señales de angustia emocional.
              </InfoCard>
            </div>
          </Section>

          {/* Liderazgo */}
          <Section icon={User} title="Nuestro Equipo">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <Image
                  src="/images/alejandro-ortiz.webp"
                  alt="Alejandro Ortiz, fundador de KOBully"
                  width={300}
                  height={300}
                  className="object-cover rounded-lg w-80 h-80"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <p>
                  Bajo la dirección de <strong>Alejandro Ortiz</strong>, hemos creado un equipo multidisciplinar de psicólogos infantiles, ingenieros de software, especialistas en IA y educadores con más de 20 años de experiencia combinada en el campo de la protección infantil.
                </p>
                <p>
                  Nuestra experiencia personal con el acoso escolar nos impulsa a crear soluciones que realmente funcionen. No somos teóricos—somos padres, educadores y profesionales comprometidos con un cambio real y medible.
                </p>
                <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700">
                  "Cada minuto que reducimos en la detección del acoso es un día menos de sufrimiento para un niño."
                </blockquote>
              </div>
            </div>
          </Section>

          {/* Imagen 3D del equipo protector */}
          <div className="flex justify-center">
            <img 
              src="/images/equipo_bueno2.webp" 
              alt="Equipo protector anti-bullying estilo 3D Pixar" 
              className="w-96 h-72 object-contain"
            />
          </div>

          {/* Ventajas */}
          <Section icon={Lightbulb} title="Por Qué Somos Diferentes">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  Detección Temprana
                </h3>
                <p className="text-gray-600">
                  Mientras los métodos tradicionales pueden tardar meses en identificar situaciones de acoso, nuestras herramientas reducen este tiempo a 24-48 horas, permitiendo una intervención inmediata cuando es más efectiva.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  Enfoque Integral
                </h3>
                <p className="text-gray-600">
                  No nos limitamos a detectar—proporcionamos herramientas prácticas para padres, educadores y niños, creando un ecosistema completo de protección que aborda el problema desde todos los ángulos.
                </p>
              </div>
            </div>
          </Section>

          {/* Impacto */}
          <Section icon={TrendingUp} title="Resultados Medibles">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <ImpactStat value="-95%" label="Reducción en tiempo de detección" />
              <ImpactStat value="+87%" label="Efectividad en intervenciones tempranas" />
              <ImpactStat value="24h" label="Tiempo de respuesta promedio" />
            </div>
          </Section>

          {/* Promesa */}
          <Section icon={HeartHandshake} title="Nuestro Compromiso">
            <p>
              En No Más Bullying no ofrecemos soluciones teóricas—entregamos resultados concretos. Cada herramienta, cada algoritmo y cada interacción está diseñada con un único propósito: proteger a los niños del acoso escolar y sus devastadoras consecuencias.
            </p>
            <p className="font-medium mt-4">
              Porque entendemos que detrás de cada estadística hay un niño real, con sueños, miedos y un futuro por delante que merece ser protegido.
            </p>
          </Section>

          {/* Final Quote */}
          <div className="text-center pt-12 border-t border-gray-200">
            <Quote className="mx-auto h-10 w-10 text-green-300" />
            <blockquote className="mt-4 max-w-3xl mx-auto text-xl italic text-gray-800">
              "No podemos cambiar el pasado, pero con las herramientas adecuadas, podemos transformar el futuro de millones de niños que hoy sufren en silencio."
            </blockquote>
            <p className="mt-4 font-semibold text-gray-600">– Equipo No Más Bullying</p>
          </div>
        </div>
      </main>

      {/* Footer simple */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-500">© 2025 No Más Bullying. Todos los derechos reservados.</p>
          <p className="text-sm text-gray-400 mt-2">Tecnología al servicio de la protección infantil</p>
        </div>
      </footer>
    </div>
  )
}

// Helper components
function Section({
  icon: Icon,
  title,
  children,
}: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-green-100 p-3 rounded-lg">
          <Icon className="h-7 w-7 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="space-y-4 text-lg text-gray-600">{children}</div>
    </section>
  )
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  )
}

function ImpactStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
      <p className="text-4xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">{value}</p>
      <p className="mt-2 text-gray-600">{label}</p>
    </div>
  )
}

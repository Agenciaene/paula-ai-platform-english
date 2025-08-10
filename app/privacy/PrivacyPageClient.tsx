"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function PrivacyPageClient() {
  const router = useRouter()

  return (
    <div className={`min-h-screen bg-white relative overflow-hidden ${inter.className}`}>
      {/* ✨ PARTÍCULAS PARPADEANTES SUTILES */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Partículas azules */}
        <div className="absolute top-20 left-16 w-1 h-1 bg-blue-400 rounded-full animate-twinkle opacity-60"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-blue-500 rounded-full animate-twinkle opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-48 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-twinkle opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-64 right-1/3 w-1 h-1 bg-blue-500 rounded-full animate-twinkle opacity-60" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-80 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-twinkle opacity-50" style={{ animationDelay: '4s' }}></div>
        
        {/* Partículas verdes */}
        <div className="absolute top-24 right-16 w-1 h-1 bg-green-400 rounded-full animate-twinkle opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 left-20 w-1 h-1 bg-green-500 rounded-full animate-twinkle opacity-50" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-56 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-twinkle opacity-40" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-72 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-twinkle opacity-60" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-88 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-twinkle opacity-50" style={{ animationDelay: '4.5s' }}></div>
      </div>

      {/* 🔄 HEADER COHERENTE */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm z-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 px-3 py-2 text-black hover:text-gray-800 hover:bg-green-50 rounded-lg transition-all duration-300 group border border-green-100 hover:border-green-200"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-medium">Volver</span>
            </button>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Política de Privacidad
              </h1>
              <p className="text-xs text-gray-600 font-medium">Protección de datos y privacidad</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
        <div className="bg-white space-y-12">
          {/* 🎨 ENCABEZADO PRINCIPAL CON DEGRADADO */}
          <div className="border-b border-gray-200 pb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6 tracking-tight">
              POLÍTICA DE PRIVACIDAD
            </h1>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                La presente Política de Privacidad establece los términos en que No Mas Bullying usa y protege la
                información que es proporcionada por sus usuarios al momento de utilizar nuestros servicios. Esta
                plataforma está comprometida con la seguridad de los datos de sus usuarios.
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  <strong className="text-green-700">Fecha de entrada en vigor:</strong> 27 de enero de 2025
                </p>
                <p>
                  <strong className="text-green-700">Última actualización:</strong> 28 de julio de 2025
                </p>
                <p>
                  <strong className="text-green-700">Responsable del tratamiento:</strong> No Mas Bullying - Plataforma de Protección Infantil
                </p>
              </div>
            </div>
          </div>

          {/* 1. Información que recopilamos */}
          <section>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              1. INFORMACIÓN QUE RECOPILAMOS
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  1.1. Datos de Comunicación
                </h3>
                <div className="ml-6 space-y-3 text-gray-700">
                  <p>
                    <strong>a) Contenido de conversaciones:</strong> Registramos todos los mensajes intercambiados entre
                    el usuario y nuestro sistema de inteligencia artificial.
                  </p>
                  <p>
                    <strong>b) Metadatos de sesión:</strong> Fecha, hora de inicio y finalización, duración de las
                    conversaciones.
                  </p>
                  <p>
                    <strong>c) Respuestas generadas:</strong> Todas las respuestas proporcionadas por nuestro sistema de
                    IA.
                  </p>
                </div>
                <div className="ml-6 mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-r-lg">
                  <p className="text-sm text-amber-800">
                    <strong>PROTECCIÓN ESPECIAL:</strong> Cuando se mencionen nombres de menores de edad, nuestro
                    sistema procede automáticamente a su anonimización, reemplazándolos por términos genéricos en todos
                    nuestros registros.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  1.2. Datos Técnicos
                </h3>
                <div className="ml-6 space-y-3 text-gray-700">
                  <p>
                    <strong>a) Información de conexión:</strong> Dirección IP, tipo de navegador, sistema operativo.
                  </p>
                  <p>
                    <strong>b) Datos de dispositivo:</strong> Tipo de dispositivo utilizado para acceder al servicio.
                  </p>
                  <p>
                    <strong>c) Cookies técnicas:</strong> Únicamente las estrictamente necesarias para el funcionamiento
                    del servicio.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  1.3. Información que NO Recopilamos
                </h3>
                <div className="ml-6 text-gray-700">
                  <p className="mb-3">No Mas Bullying no recopila ni almacena:</p>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <ul className="space-y-2 list-disc list-inside text-sm">
                      <li>Nombres completos o datos de identificación personal</li>
                      <li>Direcciones físicas, números de teléfono o información de contacto</li>
                      <li>Información financiera o de medios de pago</li>
                      <li>Cookies de seguimiento, analítica o publicitarias</li>
                      <li>Acceso a cámara, micrófono o archivos del dispositivo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Finalidad del tratamiento */}
          <section>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              2. FINALIDAD DEL TRATAMIENTO
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  2.1. Finalidades Principales
                </h3>
                <div className="ml-6 space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-green-600 mt-1">a)</span>
                    <p>Proporcionar respuestas personalizadas y contextualmente relevantes a través de nuestro sistema de IA.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-green-600 mt-1">b)</span>
                    <p>Mantener la continuidad y coherencia en las conversaciones durante una sesión.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-green-600 mt-1">c)</span>
                    <p>Mejorar la calidad y precisión de las respuestas del sistema de inteligencia artificial.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-green-600 mt-1">d)</span>
                    <p>Garantizar la seguridad del servicio y prevenir usos malintencionados.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  2.2. Finalidades Secundarias
                </h3>
                <div className="ml-6 space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-blue-600 mt-1">a)</span>
                    <p>Realizar análisis estadísticos agregados y anonimizados para investigación.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-blue-600 mt-1">b)</span>
                    <p>Cumplir con obligaciones legales y requerimientos de autoridades competentes.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-blue-600 mt-1">c)</span>
                    <p>Ejercer o defender derechos en procedimientos legales.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Base legal */}
          <section>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              3. BASE LEGAL DEL TRATAMIENTO
            </h2>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-green-600 mt-1">a)</span>
                  <div>
                    <strong>Consentimiento:</strong> El uso voluntario de nuestros servicios constituye consentimiento
                    para el tratamiento de datos según se describe en esta política.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 mt-1">b)</span>
                  <div>
                    <strong>Interés legítimo:</strong> La mejora de nuestros servicios de protección infantil y
                    prevención del acoso escolar.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-green-600 mt-1">c)</span>
                  <div>
                    <strong>Cumplimiento legal:</strong> Obligaciones derivadas de la normativa aplicable en materia de
                    protección de menores.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Protección de menores */}
          <section>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              4. PROTECCIÓN ESPECIAL DE MENORES DE EDAD
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <p className="text-gray-700 mb-6 font-medium">
                  Dada la naturaleza de nuestros servicios, aplicamos medidas de protección reforzadas para cualquier
                  información que pueda relacionarse con menores de edad:
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      4.1. Anonimización Automática
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Cualquier referencia a nombres propios de menores es automáticamente sustituida por términos
                      genéricos en nuestros sistemas de almacenamiento.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      4.2. Acceso Restringido
                    </h4>
                    <p className="text-gray-700 text-sm">
                      El acceso a conversaciones que involucren menores está limitado exclusivamente a personal
                      autorizado con formación específica en protección infantil.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      4.3. Retención Reducida
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Las conversaciones que involucren menores se eliminan automáticamente en un plazo máximo de 90
                      días, inferior al período general de retención.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Seguridad */}
          <section>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              5. MEDIDAS DE SEGURIDAD
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  5.1. Medidas Técnicas
                </h3>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="space-y-3 text-gray-700 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-green-600 mt-1">•</span>
                      <p>Encriptación end-to-end de todas las comunicaciones utilizando protocolos TLS 1.3.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-green-600 mt-1">•</span>
                      <p>Encriptación de datos en reposo mediante algoritmos AES-256.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-green-600 mt-1">•</span>
                      <p>Sistemas de detección y prevención de intrusiones (IDS/IPS).</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-green-600 mt-1">•</span>
                      <p>Monitorización continua de accesos y actividades sospechosas.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  5.2. Medidas Organizativas
                </h3>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="space-y-3 text-gray-700 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 mt-1">•</span>
                      <p>Autenticación multifactor para todo el personal con acceso a datos.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 mt-1">•</span>
                      <p>Principio de acceso mínimo necesario (least privilege).</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 mt-1">•</span>
                      <p>Auditorías de seguridad regulares realizadas por terceros independientes.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 mt-1">•</span>
                      <p>Formación continua del personal en materia de protección de datos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Derechos del usuario */}
          <section>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              6. DERECHOS DE LOS USUARIOS
            </h2>

            <div className="space-y-6">
              <p className="text-gray-700 font-medium">
                Conforme al Reglamento General de Protección de Datos (RGPD) y la legislación nacional aplicable, los
                usuarios tienen los siguientes derechos:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    6.1. Derecho de Acceso
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Obtener confirmación sobre si estamos tratando sus datos personales y, en su caso, acceder a los
                    mismos.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    6.2. Derecho de Rectificación
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Solicitar la rectificación de datos inexactos o la completitud de datos incompletos.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    6.3. Derecho de Supresión
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Solicitar la eliminación de sus datos personales cuando concurran determinadas circunstancias.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    6.4. Derecho a la Limitación
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Solicitar la suspensión del tratamiento de sus datos en determinadas circunstancias.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    6.5. Derecho a la Portabilidad
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Recibir sus datos en un formato estructurado, de uso común y lectura mecánica.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    6.6. Derecho de Oposición
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Oponerse al tratamiento de sus datos por motivos relacionados con su situación particular.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6 shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Ejercicio de Derechos
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Para ejercer cualquiera de estos derechos, los usuarios pueden dirigirse a nosotros a través de:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    <strong className="text-green-700">Correo electrónico:</strong>{" "}
                    <a href="mailto:hola@nomasbullying.es" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                      hola@nomasbullying.es
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-green-700">Plazo de respuesta:</strong> Máximo 30 días naturales desde la recepción de la solicitud.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Retención de datos */}
          <section>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              7. PERÍODOS DE RETENCIÓN
            </h2>

            <div className="overflow-x-auto">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-gray-200">
                      <th className="p-4 text-left font-semibold text-gray-900 rounded-tl-xl">
                        Categoría de Datos
                      </th>
                      <th className="p-4 text-left font-semibold text-gray-900">
                        Período de Retención
                      </th>
                      <th className="p-4 text-left font-semibold text-gray-900 rounded-tr-xl">
                        Base Legal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-gray-700 font-medium">Conversaciones generales</td>
                      <td className="p-4 text-gray-600">6 meses</td>
                      <td className="p-4 text-gray-600">Mejora del servicio</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-gray-700 font-medium">Conversaciones con menores</td>
                      <td className="p-4 text-gray-600">90 días</td>
                      <td className="p-4 text-gray-600">Protección especial</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-gray-700 font-medium">Datos técnicos</td>
                      <td className="p-4 text-gray-600">12 meses</td>
                      <td className="p-4 text-gray-600">Seguridad y prevención</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-gray-700 font-medium">Logs de seguridad</td>
                      <td className="p-4 text-gray-600">24 meses</td>
                      <td className="p-4 text-gray-600">Cumplimiento legal</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-gray-700 font-medium">Datos anonimizados</td>
                      <td className="p-4 text-gray-600">Indefinido</td>
                      <td className="p-4 text-gray-600">Investigación</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 8. Contacto */}
          <section>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              8. CONTACTO Y CONSULTAS
            </h2>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 mb-4">
                Para cualquier consulta relacionada con esta Política de Privacidad o el tratamiento de sus datos personales, puede contactarnos:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-2">Contacto General</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Email:</strong> <a href="mailto:hola@nomasbullying.es" className="text-blue-600 hover:underline">hola@nomasbullying.es</a>
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Respuesta:</strong> Máximo 48 horas
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-700 mb-2">Delegado de Protección de Datos</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Email:</strong> <a href="mailto:dpo@nomasbullying.es" className="text-blue-600 hover:underline">dpo@nomasbullying.es</a>
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Respuesta:</strong> Máximo 30 días
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer legal */}
          <footer className="border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2025 NoMasBullying. Todos los derechos reservados. | 
              <span className="mx-2">•</span>
              <a href="/politica-privacidad" className="text-blue-600 hover:underline">Política de Privacidad</a>
              <span className="mx-2">•</span>
              <a href="/contacto" className="text-blue-600 hover:underline">Contacto</a>
            </p>
          </footer>
        </div>
      </div>

      {/* 🎨 ESTILOS CSS PARA ANIMACIONES */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

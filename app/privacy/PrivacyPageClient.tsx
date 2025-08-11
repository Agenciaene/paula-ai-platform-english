"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function PrivacyPageClient() {
  const router = useRouter()

  return (
    <div className={`min-h-screen bg-white relative overflow-hidden ${inter.className}`}>
      {/* ✨ SUBTLE TWINKLING PARTICLES */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Blue particles */}
        <div className="absolute top-20 left-16 w-1 h-1 bg-blue-400 rounded-full animate-twinkle opacity-60"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-blue-500 rounded-full animate-twinkle opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-48 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-twinkle opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-64 right-1/3 w-1 h-1 bg-blue-500 rounded-full animate-twinkle opacity-60" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-80 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-twinkle opacity-50" style={{ animationDelay: '4s' }}></div>
        
        {/* Green particles */}
        <div className="absolute top-24 right-16 w-1 h-1 bg-green-400 rounded-full animate-twinkle opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 left-20 w-1 h-1 bg-green-500 rounded-full animate-twinkle opacity-50" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-56 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-twinkle opacity-40" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-72 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-twinkle opacity-60" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-88 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-twinkle opacity-50" style={{ animationDelay: '4.5s' }}></div>
      </div>

      {/* 🔄 COHERENT HEADER */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm z-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 px-3 py-2 text-black hover:text-gray-800 hover:bg-green-50 rounded-lg transition-all duration-300 group border border-green-100 hover:border-green-200"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-medium">Back</span>
            </button>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-xs text-gray-600 font-medium">Data protection and privacy</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
        <div className="bg-white space-y-12">
          {/* 🎨 MAIN HEADER WITH GRADIENT */}
          <div className="border-b border-gray-200 pb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6 tracking-tight">
              PRIVACY POLICY
            </h1>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                This Privacy Policy establishes the terms under which No More Bullying uses and protects the
                information provided by its users when using our services. This
                platform is committed to the security of its users' data.
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  <strong className="text-green-700">Effective date:</strong> January 27, 2025
                </p>
                <p>
                  <strong className="text-green-700">Last update:</strong> July 28, 2025
                </p>
                <p>
                  <strong className="text-green-700">Data controller:</strong> No More Bullying - Child Protection Platform
                </p>
              </div>
            </div>
          </div>

          {/* 1. Information we collect */}
          <section>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              1. INFORMATION WE COLLECT
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  1.1. Communication Data
                </h3>
                <div className="ml-6 space-y-3 text-gray-700">
                  <p>
                    <strong>a) Conversation content:</strong> We record all messages exchanged between
                    the user and our artificial intelligence system.
                  </p>
                  <p>
                    <strong>b) Session metadata:</strong> Date, start and end time, duration of
                    conversations.
                  </p>
                  <p>
                    <strong>c) Generated responses:</strong> All responses provided by our
                    AI system.
                  </p>
                </div>
                <div className="ml-6 mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 rounded-r-lg">
                  <p className="text-sm text-amber-800">
                    <strong>SPECIAL PROTECTION:</strong> When names of minors are mentioned, our
                    system automatically proceeds to anonymize them, replacing them with generic terms in all
                    our records.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  1.2. Technical Data
                </h3>
                <div className="ml-6 space-y-3 text-gray-700">
                  <p>
                    <strong>a) Connection information:</strong> IP address, browser type, operating system.
                  </p>
                  <p>
                    <strong>b) Device data:</strong> Type of device used to access the service.
                  </p>
                  <p>
                    <strong>c) Technical cookies:</strong> Only those strictly necessary for the functioning
                    of the service.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  1.3. Information We DO NOT Collect
                </h3>
                <div className="ml-6 text-gray-700">
                  <p className="mb-3">No More Bullying does not collect or store:</p>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <ul className="space-y-2 list-disc list-inside text-sm">
                      <li>Full names or personal identification data</li>
                      <li>Physical addresses, phone numbers, or contact information</li>
                      <li>Financial or payment method information</li>
                      <li>Tracking, analytics, or advertising cookies</li>
                      <li>Access to camera, microphone, or device files</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Purpose of processing */}
          <section>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              2. PURPOSE OF PROCESSING
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  2.1. Main Purposes
                </h3>
                <div className="ml-6 space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-green-600 mt-1">a)</span>
                    <p>Provide personalized and contextually relevant responses through our AI system.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-green-600 mt-1">b)</span>
                    <p>Maintain continuity and coherence in conversations during a session.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-green-600 mt-1">c)</span>
                    <p>Improve the quality and accuracy of the artificial intelligence system's responses.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-green-600 mt-1">d)</span>
                    <p>Ensure service security and prevent malicious use.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  2.2. Secondary Purposes
                </h3>
                <div className="ml-6 space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-blue-600 mt-1">a)</span>
                    <p>Conduct aggregated and anonymized statistical analysis for research.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-blue-600 mt-1">b)</span>
                    <p>Comply with legal obligations and requirements from competent authorities.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-blue-600 mt-1">c)</span>
                    <p>Exercise or defend rights in legal proceedings.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Legal basis */}
          <section>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              3. LEGAL BASIS FOR PROCESSING
            </h2>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-green-600 mt-1">a)</span>
                  <div>
                    <strong>Consent:</strong> The voluntary use of our services constitutes consent
                    for data processing as described in this policy.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 mt-1">b)</span>
                  <div>
                    <strong>Legitimate interest:</strong> The improvement of our child protection services and
                    prevention of school bullying.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-green-600 mt-1">c)</span>
                  <div>
                    <strong>Legal compliance:</strong> Obligations arising from applicable regulations on
                    child protection.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Protection of minors */}
          <section>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              4. SPECIAL PROTECTION OF MINORS
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <p className="text-gray-700 mb-6 font-medium">
                  Given the nature of our services, we apply enhanced protection measures for any
                  information that may relate to minors:
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      4.1. Automatic Anonymization
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Any reference to minors' proper names is automatically replaced with generic
                      terms in our storage systems.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      4.2. Restricted Access
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Access to conversations involving minors is limited exclusively to authorized
                      personnel with specific training in child protection.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      4.3. Reduced Retention
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Conversations involving minors are automatically deleted within a maximum period of 90
                      days, less than the general retention period.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Security */}
          <section>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              5. SECURITY MEASURES
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  5.1. Technical Measures
                </h3>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="space-y-3 text-gray-700 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-green-600 mt-1">•</span>
                      <p>End-to-end encryption of all communications using TLS 1.3 protocols.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-green-600 mt-1">•</span>
                      <p>Data-at-rest encryption using AES-256 algorithms.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-green-600 mt-1">•</span>
                      <p>Intrusion detection and prevention systems (IDS/IPS).</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-green-600 mt-1">•</span>
                      <p>Continuous monitoring of access and suspicious activities.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  5.2. Organizational Measures
                </h3>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="space-y-3 text-gray-700 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 mt-1">•</span>
                      <p>Multi-factor authentication for all personnel with data access.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 mt-1">•</span>
                      <p>Principle of least privilege access.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 mt-1">•</span>
                      <p>Regular security audits conducted by independent third parties.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 mt-1">•</span>
                      <p>Continuous staff training on data protection.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. User rights */}
          <section>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              6. USER RIGHTS
            </h2>

            <div className="space-y-6">
              <p className="text-gray-700 font-medium">
                In accordance with the General Data Protection Regulation (GDPR) and applicable national legislation, 
                users have the following rights:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    6.1. Right of Access
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Obtain confirmation about whether we are processing your personal data and, if so, access to 
                    such data.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    6.2. Right to Rectification
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Request the rectification of inaccurate data or the completion of incomplete data.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    6.3. Right to Erasure
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Request the deletion of your personal data when certain circumstances apply.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    6.4. Right to Restriction
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Request the suspension of processing of your data in certain circumstances.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    6.5. Right to Data Portability
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Receive your data in a structured, commonly used and machine-readable format.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    6.6. Right to Object
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Object to the processing of your data for reasons related to your particular situation.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6 shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Exercising Rights
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  To exercise any of these rights, users can contact us through:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    <strong className="text-green-700">Email:</strong>{" "}
                    <a href="mailto:hello@nomorebullying.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                      hello@nomorebullying.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-green-700">Response time:</strong> Maximum 30 calendar days from receipt of the request.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Data retention */}
          <section>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              7. RETENTION PERIODS
            </h2>

            <div className="overflow-x-auto">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-gray-200">
                      <th className="p-4 text-left font-semibold text-gray-900 rounded-tl-xl">
                        Data Category
                      </th>
                      <th className="p-4 text-left font-semibold text-gray-900">
                        Retention Period
                      </th>
                      <th className="p-4 text-left font-semibold text-gray-900 rounded-tr-xl">
                        Legal Basis
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-gray-700 font-medium">General conversations</td>
                      <td className="p-4 text-gray-600">6 months</td>
                      <td className="p-4 text-gray-600">Service improvement</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-gray-700 font-medium">Conversations with minors</td>
                      <td className="p-4 text-gray-600">90 days</td>
                      <td className="p-4 text-gray-600">Special protection</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-gray-700 font-medium">Technical data</td>
                      <td className="p-4 text-gray-600">12 months</td>
                      <td className="p-4 text-gray-600">Security and prevention</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-gray-700 font-medium">Security logs</td>
                      <td className="p-4 text-gray-600">24 months</td>
                      <td className="p-4 text-gray-600">Legal compliance</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-gray-700 font-medium">Anonymized data</td>
                      <td className="p-4 text-gray-600">Indefinite</td>
                      <td className="p-4 text-gray-600">Research</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 8. Contact */}
          <section>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              8. CONTACT AND INQUIRIES
            </h2>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 mb-4">
                For any inquiries related to this Privacy Policy or the processing of your personal data, you can contact us:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-2">General Contact</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Email:</strong> <a href="mailto:hello@nomorebullying.com" className="text-blue-600 hover:underline">hello@nomorebullying.com</a>
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Response:</strong> Maximum 48 hours
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-700 mb-2">Data Protection Officer</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Email:</strong> <a href="mailto:dpo@nomorebullying.com" className="text-blue-600 hover:underline">dpo@nomorebullying.com</a>
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Response:</strong> Maximum 30 days
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Legal footer */}
          <footer className="border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2025 NoMoreBullying. All rights reserved. | 
              <span className="mx-2">•</span>
              <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>
              <span className="mx-2">•</span>
              <a href="/contact" className="text-blue-600 hover:underline">Contact</a>
            </p>
          </footer>
        </div>
      </div>

      {/* 🎨 CSS STYLES FOR ANIMATIONS */}
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

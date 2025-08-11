"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, BookOpen, MessageCircle, AlertTriangle, Phone, Check, X, Heart, Shield, Users, Clock, Target, Lightbulb, Star, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function ConsejosPageClient() {
  const [activeSection, setActiveSection] = useState("drawings")
  const router = useRouter()

  const sections = [
    { id: "drawings", title: "Understanding Drawings", icon: BookOpen },
    { id: "conversations", title: "Difficult Conversations", icon: MessageCircle },
    { id: "warning-signs", title: "Warning Signs", icon: AlertTriangle },
    { id: "prevention", title: "Active Prevention", icon: Shield },
    { id: "emergency", title: "Emergency Resources", icon: Phone },
  ]

  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      {/* Header improved with visual coherence */}
      <header className="bg-gradient-to-r from-green-50 to-blue-50 backdrop-blur-md border-b border-green-200/30 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 px-3 py-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-all duration-300 group border border-green-100 hover:border-green-200"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium text-sm">Back</span>
          </button>
          <h1 className="text-xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent hidden md:block">Parent Advice</h1>
          <div className="w-24"></div> {/* Spacer */}
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Hero Section with 3D Pixar-style image */}
        <div className="bg-white rounded-2xl p-8 mb-8 relative overflow-hidden border border-green-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-green-600" size={24} />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Protecting What You Love Most</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                As a parent, your protective instinct is your greatest strength. Here you'll find practical tools, 
                based on scientific evidence, to detect, prevent and act in bullying situations. 
                <strong className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Every child deserves to grow up in a safe and happy environment.</strong>
              </p>
            </div>
            <div className="flex justify-center">
              {/* Space for 3D Pixar-style image - Super Protective Parents */}
              <img 
                src="/images/super_papis.webp" 
                alt="Super protective parents 3D style" 
                className="w-80 h-80 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Improved Sidebar Navigation */}
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

            {/* Motivational statistic */}
            <div className="mt-8 bg-white p-4 rounded-xl border border-green-200 shadow-sm relative z-10">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">95%</div>
                <div className="text-xs text-gray-500 mt-1">
                  of cases are resolved with early detection
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 bg-white p-8 rounded-2xl border border-green-200 shadow-sm relative z-0">
            {activeSection === "drawings" && <DibujoSection />}
            {activeSection === "conversations" && <ConversacionesSection />}
            {activeSection === "warning-signs" && <SenalesSection />}
            {activeSection === "prevention" && <PrevencionSection />}
            {activeSection === "emergency" && <EmergenciaSection />}
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
      title="Understanding Your Child's Drawings"
      subtitle="Drawings are a window into children's emotional world. Here we teach you what to observe and how to interpret it responsibly."
    >
      <Card>
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Star className="text-yellow-500" size={20} />
          The Unbreakable Golden Rule
        </h3>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <strong>A drawing is NOT a diagnosis.</strong> It's an emotional snapshot of a specific moment.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <strong>NEVER interpret an isolated sign.</strong> Look for patterns and clusters of signals.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <strong>Context is EVERYTHING.</strong> What was happening in the child's life when they made the drawing?
            </div>
          </li>
        </ul>
      </Card>

      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">🎨 Use of Color</h3>
        {/* 3D image of child drawing Pixar style */}
        <div className="flex justify-center mb-6">
          <img 
            src="/images/peque_dibujo.webp" 
            alt="Child drawing Pixar 3D style" 
            className="w-64 h-48 object-contain"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Check className="text-green-500" size={18} />
              Positive/Neutral Signs
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mt-1 flex-shrink-0"></div>
                <div><strong>Many bright colors:</strong> Joy, energy, curiosity</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full mt-1 flex-shrink-0"></div>
                <div><strong>Realistic colors:</strong> Yellow sun, green grass</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full mt-1 flex-shrink-0"></div>
                <div><strong>Favorite colors:</strong> It's normal to have phases</div>
              </li>
            </ul>
          </Card>
          <Card>
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <AlertCircle className="text-orange-500" size={18} />
              Possible Warning Signs
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-3 h-3 bg-gray-600 rounded-full mt-1 flex-shrink-0"></div>
                <div><strong>Only dark colors:</strong> Sadness, fear, anxiety</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                <div><strong>Only red:</strong> Aggression, anger, tension</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full mt-1 flex-shrink-0"></div>
                <div><strong>No color:</strong> Apathy, fear of expression</div>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">👤 Human Figure</h3>
        <Card>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">👄</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">The Mouth</h4>
                <p className="text-gray-600 mt-1">
                  <strong>Absent or straight line:</strong> Classic sign of not being able to communicate distress or feeling "voiceless".
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200"></div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">🤲</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Arms and Hands</h4>
                <p className="text-gray-600 mt-1">
                  <strong>Stuck to body or no hands:</strong> Feeling powerless, unable to defend themselves.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200"></div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">👀</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">The Eyes</h4>
                <p className="text-gray-600 mt-1">
                  <strong>Very small or closed:</strong> Not wanting to see something that's happening.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <TipCard 
        icon={<Lightbulb className="text-yellow-500" size={20} />}
        title="Expert Tip"
      >
        <p className="text-green-700 text-sm">
          <strong>"Tell Me More" Technique:</strong> When you see something that catches your attention, 
          simply say "How interesting! Tell me more about this..." and let the child guide the conversation.
        </p>
      </TipCard>
    </SectionWrapper>
  )
}

function ConversacionesSection() {
  return (
    <SectionWrapper
      title="How to Start Difficult Conversations"
      subtitle="The key isn't interrogating, but creating a safe space where your child feels comfortable sharing."
    >
      {/* 3D image of family talking Pixar style */}
      <div className="flex justify-center mb-6">
        <img 
          src="/images/papis_charla.webp" 
          alt="Family talking Pixar 3D style" 
          className="w-80 h-60 object-contain"
        />
      </div>

      <Card>
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Target className="text-green-500" size={20} />
          The 3-Step Protocol
        </h3>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Observe Without Judging</h4>
              <p className="text-gray-600">Simply look at the drawing. Don't make immediate interpretations.</p>
              <div className="mt-2 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg text-green-700 text-sm">
                <strong>Recommended time:</strong> 30 seconds of silent observation
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Create a Safe Space</h4>
              <p className="text-gray-600">Quiet moment: snack time, before bed, walking.</p>
              <div className="mt-2 p-3 bg-green-50 rounded-lg text-green-700 text-sm">
                <strong>Ideal places:</strong> Kitchen, car, park - places without distractions
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Ask with Curiosity</h4>
              <p className="text-gray-600">Never interpret out loud. Let the child tell you the story.</p>
              <div className="mt-2 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg text-green-700 text-sm">
                <strong>Golden rule:</strong> One open question for every 3 positive comments
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Check className="text-green-500" size={20} /> Phrases That Work
          </h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="p-2 bg-green-50 rounded-lg">"I saw this cool drawing you made. Can you tell me about it?"</li>
            <li className="p-2 bg-green-50 rounded-lg">"Who's this kid here? Looks like they're thinking hard..."</li>
            <li className="p-2 bg-green-50 rounded-lg">"What a big house! Who lives here?"</li>
            <li className="p-2 bg-green-50 rounded-lg">"I really like this color you used here..."</li>
          </ul>
        </Card>
        <Card>
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <X className="text-red-500" size={20} /> Avoid These Phrases
          </h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="p-2 bg-red-50 rounded-lg">"Why did you draw that kid without a mouth?"</li>
            <li className="p-2 bg-red-50 rounded-lg">"Why are you so alone in the drawing?"</li>
            <li className="p-2 bg-red-50 rounded-lg">"This drawing looks very sad..."</li>
            <li className="p-2 bg-red-50 rounded-lg">"Is something wrong?"</li>
          </ul>
        </Card>
      </div>

      <TipCard 
        icon={<Clock className="text-green-500" size={20} />}
        title="Perfect Timing"
      >
        <p className="text-green-700 text-sm mb-3">
          <strong>Best moments to talk:</strong>
        </p>
        <ul className="text-green-700 text-sm space-y-1">
          <li>• During routine activities (cooking, tidying up)</li>
          <li>• In the car (no direct eye contact)</li>
          <li>• Before bedtime (calm moment)</li>
          <li>• While walking (movement relaxes)</li>
        </ul>
      </TipCard>
    </SectionWrapper>
  )
}

function SenalesSection() {
  return (
    <SectionWrapper
      title="Early Warning Signs"
      subtitle="Learn to identify the first signs of bullying before they become a bigger problem."
    >
      {/* 3D image of worried child Pixar style */}
      <div className="flex justify-center mb-6">
        <img 
          src="/images/niño_sentado.webp" 
          alt="Worried child Pixar 3D style" 
          className="w-64 h-64 object-contain"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">🚦 Traffic Light System</h3>
        <p className="text-gray-600 mb-6">A visual way to assess risk level based on multiple signs.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <h4 className="font-bold text-gray-800">Green - Normal</h4>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <Check size={14} className="text-green-500 flex-shrink-0" />
                Varied drawing themes
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-green-500 flex-shrink-0" />
                Talks about friends and activities
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-green-500 flex-shrink-0" />
                Sleeps and eats normally
              </li>
            </ul>
          </Card>
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <h4 className="font-bold text-gray-800">Yellow - Observe</h4>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <AlertCircle size={14} className="text-yellow-500 flex-shrink-0" />
                Changes in drawing patterns
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle size={14} className="text-yellow-500 flex-shrink-0" />
                Less eager to go to school
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle size={14} className="text-yellow-500 flex-shrink-0" />
                Mentions friends less
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle size={14} className="text-yellow-500 flex-shrink-0" />
                Small appetite changes
              </li>
            </ul>
          </Card>
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <h4 className="font-bold text-gray-800">Red - Act</h4>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <X size={14} className="text-red-500 flex-shrink-0" />
                Total school refusal
              </li>
              <li className="flex items-center gap-2">
                <X size={14} className="text-red-500 flex-shrink-0" />
                Frequent nightmares
              </li>
              <li className="flex items-center gap-2">
                <X size={14} className="text-red-500 flex-shrink-0" />
                Complete social isolation
              </li>
              <li className="flex items-center gap-2">
                <X size={14} className="text-red-500 flex-shrink-0" />
                Drastic changes
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <Card>
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Users className="text-green-500" size={20} />
          When to Seek Professional Help
        </h3>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>If you observe 3 or more red signs for more than 2 weeks.</div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>If your parental instinct tells you something isn't right.</div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>If the child directly mentions bullying situations.</div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>If there are drastic and sudden behavior changes.</div>
          </li>
        </ul>
        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
          <div className="flex items-start gap-3">
            <Heart className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
            <p className="text-green-800 text-sm">
              <strong>Remember:</strong> Seeking help doesn't mean you're a bad parent. It means you're a
              responsible parent who wants the best for their child.
            </p>
          </div>
        </div>
      </Card>

      <TipCard 
        icon={<AlertTriangle className="text-orange-500" size={20} />}
        title="Physical Signs You Should NOT Ignore"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-orange-700 text-sm">
          <ul className="space-y-2">
            <li>• Unexplained bruises</li>
            <li>• Torn or damaged clothing</li>
            <li>• Loss of personal items</li>
            <li>• Frequent headaches</li>
          </ul>
          <ul className="space-y-2">
            <li>• Sleeping problems</li>
            <li>• Loss of appetite</li>
            <li>• Bedwetting (regression)</li>
            <li>• New nervous tics</li>
          </ul>
        </div>
      </TipCard>
    </SectionWrapper>
  )
}

function PrevencionSection() {
  return (
    <SectionWrapper
      title="Active Prevention"
      subtitle="The best defense is good prevention. Build your child's self-esteem and social skills."
    >
      {/* 3D image of protective superheroes Pixar style */}
      <div className="flex justify-center mb-6">
        <img 
          src="/images/equipo_bueno2.webp" 
          alt="Protective superheroes Pixar 3D style" 
          className="w-80 h-60 object-contain"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Shield className="text-green-500" size={20} />
            Building Self-Esteem
          </h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div><strong>Celebrate achievements:</strong> No matter how small, recognize their efforts</div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div><strong>Listen actively:</strong> Show that their opinions matter</div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div><strong>Foster their talents:</strong> Help them discover what they're good at</div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div><strong>Teach assertiveness:</strong> "It's okay to say NO when you don't like something"</div>
            </li>
          </ul>
        </Card>

        <Card>
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Users className="text-green-500" size={20} />
            Social Skills
          </h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div><strong>Role-playing:</strong> Practice social situations at home</div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div><strong>Empathy:</strong> "How do you think your friend felt when...?"</div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div><strong>Conflict resolution:</strong> Teach alternatives to violence</div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div><strong>Communication:</strong> "Use your words to express how you feel"</div>
            </li>
          </ul>
        </Card>
      </div>

      <Card>
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Lightbulb className="text-yellow-500" size={20} />
          Practical Anti-Bullying Strategies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">The "Broken Record" Technique</h4>
            <p className="text-gray-600 text-sm mb-2">Teach your child to repeat the same phrase calmly:</p>
            <div className="p-3 bg-yellow-50 rounded-lg text-yellow-800 text-sm">
              "I don't like when you talk to me like that" (repeat until they get bored)
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">The "Response Bank"</h4>
            <p className="text-gray-600 text-sm mb-2">Prepared phrases for different situations:</p>
            <div className="p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg text-green-800 text-sm">
              "That's not true and you know it" / "Why are you saying that?"
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">The "Support Network"</h4>
            <p className="text-gray-600 text-sm mb-2">Identify trusted adults at school:</p>
            <div className="p-3 bg-green-50 rounded-lg text-green-800 text-sm">
              Teacher, janitor, school psychologist
            </div>
          </div>
        </div>
      </Card>

      <TipCard 
        icon={<Target className="text-purple-500" size={20} />}
        title="Family Action Plan"
      >
        <div className="text-green-700 text-sm space-y-3">
          <p><strong>Weekly family meeting:</strong> 15 minutes to talk about how the week went at school.</p>
          <p><strong>Secret code:</strong> A word your child can use to ask for help without others knowing.</p>
          <p><strong>Situation drills:</strong> Practice what to do if someone bothers them.</p>
          <p><strong>Positive reinforcement:</strong> Celebrate when they use the strategies you've taught them.</p>
        </div>
      </TipCard>
    </SectionWrapper>
  )
}

function EmergenciaSection() {
  return (
    <SectionWrapper
      title="Emergency Resources"
      subtitle="Contact information and immediate action protocols for urgent situations."
    >
      {/* 3D image of help phone Pixar style */}
      <div className="flex justify-center mb-6">
        <img 
          src="/images/telefono_antiguo.webp" 
          alt="Help phone Pixar 3D style" 
          className="w-48 h-48 object-contain"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">📞 Immediate Help Hotlines</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-green-500">
            <h4 className="font-bold text-gray-800">National Suicide Prevention Lifeline</h4>
            <p className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mt-2">988</p>
            <p className="text-sm text-gray-500 mt-1">24 hours • Free • Confidential</p>
            <div className="mt-3 p-2 bg-gradient-to-r from-green-50 to-blue-50 rounded text-green-700 text-xs">
              Immediate psychological support
            </div>
          </Card>
          <Card className="border-l-4 border-l-green-500">
            <h4 className="font-bold text-gray-800">StopBullying Hotline</h4>
            <p className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mt-2">1-800-273-8255</p>
            <p className="text-sm text-gray-500 mt-1">Leading organization in USA</p>
            <div className="mt-3 p-2 bg-green-50 rounded text-green-700 text-xs">
              Bullying specialists
            </div>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <h4 className="font-bold text-gray-800">Emergency</h4>
            <p className="text-3xl font-bold text-red-600 mt-2">911</p>
            <p className="text-sm text-gray-500 mt-1">Immediate danger</p>
            <div className="mt-3 p-2 bg-red-50 rounded text-red-700 text-xs">
              Only for physical risk situations
            </div>
          </Card>
          <Card className="border-l-4 border-l-purple-500">
            <h4 className="font-bold text-gray-800">Crisis Text Line</h4>
            <p className="text-3xl font-bold text-purple-600 mt-2">Text HOME to 741741</p>
            <p className="text-sm text-gray-500 mt-1">Text support 24/7</p>
            <div className="mt-3 p-2 bg-purple-50 rounded text-purple-700 text-xs">
              Guidance and support
            </div>
          </Card>
        </div>
      </div>

      <Card>
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <X className="text-red-500" size={20} />
          What to NEVER Do
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <X size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
              <div>Don't directly confront the bully or their parents</div>
            </li>
            <li className="flex items-start gap-3">
              <X size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
              <div>Don't minimize the situation or blame your child</div>
            </li>
          </ul>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <X size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
              <div>Don't tell them to fight back physically</div>
            </li>
            <li className="flex items-start gap-3">
              <X size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
              <div>Don't promise you won't tell anyone if there's risk</div>
            </li>
          </ul>
        </div>
      </Card>

      <Card>
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Check className="text-green-500" size={20} />
          Immediate Action Protocol
        </h3>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Stay Calm</h4>
              <p className="text-gray-600 text-sm">Your reaction will mark how your child feels about telling you difficult things in the future.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Document Everything</h4>
              <p className="text-gray-600 text-sm">Dates, places, witnesses, physical evidence. It will be crucial for the school.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Contact the School</h4>
              <p className="text-gray-600 text-sm">Talk to the teacher first, then the principal if necessary.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Seek Professional Support</h4>
              <p className="text-gray-600 text-sm">Child psychologist specialized in bullying for your child and for you.</p>
            </div>
          </div>
        </div>
      </Card>

      <TipCard 
        icon={<Phone className="text-green-500" size={20} />}
        title="Apps and Digital Resources"
      >
        <div className="text-green-700 text-sm space-y-2">
          <p><strong>Nomasbullying.com:</strong> Free app with tips and strategies</p>
          <p><strong>StopBullying.gov:</strong> US government resources</p>
          <p><strong>Cyberbullying Research Center:</strong> Online chat for at-risk minors</p>
          <p><strong>National Helpline:</strong> 1-800-422-4453 (free and confidential)</p>
        </div>
      </TipCard>
    </SectionWrapper>
  )
}

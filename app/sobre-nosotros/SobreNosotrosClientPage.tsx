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
            <span className="font-medium text-sm">Back</span>
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-20">
          {/* Hero Section */}
          <header className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Protecting Our Children's Future
            </h1>
            <p className="mt-4 text-lg md:text-xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-medium">
              TECHNOLOGY AND SCIENCE AGAINST BULLYING
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              At No More Bullying, we combine advanced technology with scientific knowledge to detect, prevent, and combat school bullying. Our mission is clear: to create safe environments where every child can develop without fear, using innovative tools that connect families, educators, and professionals.
            </p>
          </header>

          {/* Our Mission */}
          <Section icon={Shield} title="Our Mission">
            <p>
              To detect school bullying in its earliest stages, when effective intervention is still possible. Our tools drastically reduce detection time from 6-12 months to just 24-48 hours, enabling immediate intervention that can make the difference between a passing problem and lasting trauma.
            </p>
            <p>
              We don't just identify the problem—we provide practical and personalized solutions for each situation, connecting parents, educators, and professionals in a coordinated effort to protect children.
            </p>
          </Section>

          {/* Methodology */}
          <Section icon={BrainCircuit} title="Technology with Purpose">
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <InfoCard title="Specialized Artificial Intelligence">
                Our algorithms analyze behavior patterns, children's drawings, and communication to detect subtle signs of bullying that often go unnoticed by the human eye.
              </InfoCard>
              <InfoCard title="Difficult Conversation Simulation">
                We prepare parents to face complex situations through realistic simulations with different personalities, from collaborative teachers to the most resistant ones.
              </InfoCard>
              <InfoCard title="Advanced Visual Analysis">
                We interpret children's drawings using computer vision techniques and child psychology knowledge to identify signs of emotional distress.
              </InfoCard>
            </div>
          </Section>

          {/* Leadership */}
          <Section icon={User} title="Our Team">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <Image
                  src="/images/alejandro-ortiz.webp"
                  alt="Alejandro Ortiz, founder of No More Bullying"
                  width={300}
                  height={300}
                  className="object-cover rounded-lg w-80 h-80"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <p>
                  Under the leadership of <strong>Alejandro Ortiz</strong>, we have created a multidisciplinary team of child psychologists, software engineers, AI specialists, and educators with over 20 years of combined experience in the field of child protection.
                </p>
                <p>
                  Our personal experience with bullying drives us to create solutions that really work. We're not theorists—we're parents, educators, and professionals committed to real and measurable change.
                </p>
                <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700">
                  "Every minute we reduce in bullying detection is one less day of suffering for a child."
                </blockquote>
              </div>
            </div>
          </Section>

          {/* 3D Team Protection Image */}
          <div className="flex justify-center">
            <img 
              src="/images/equipo_bueno2.webp" 
              alt="Anti-bullying protective team Pixar 3D style" 
              className="w-96 h-72 object-contain"
            />
          </div>

          {/* Advantages */}
          <Section icon={Lightbulb} title="Why We're Different">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  Early Detection
                </h3>
                <p className="text-gray-600">
                  While traditional methods can take months to identify bullying situations, our tools reduce this time to 24-48 hours, allowing immediate intervention when it's most effective.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  Comprehensive Approach
                </h3>
                <p className="text-gray-600">
                  We don't just detect—we provide practical tools for parents, educators, and children, creating a complete protection ecosystem that addresses the problem from all angles.
                </p>
              </div>
            </div>
          </Section>

          {/* Impact */}
          <Section icon={TrendingUp} title="Measurable Results">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <ImpactStat value="-95%" label="Reduction in detection time" />
              <ImpactStat value="+87%" label="Effectiveness in early interventions" />
              <ImpactStat value="24h" label="Average response time" />
            </div>
          </Section>

          {/* Promise */}
          <Section icon={HeartHandshake} title="Our Commitment">
            <p>
              At No More Bullying, we don't offer theoretical solutions—we deliver concrete results. Every tool, every algorithm, and every interaction is designed with a single purpose: to protect children from bullying and its devastating consequences.
            </p>
            <p className="font-medium mt-4">
              Because we understand that behind every statistic is a real child, with dreams, fears, and a future ahead that deserves to be protected.
            </p>
          </Section>

          {/* Final Quote */}
          <div className="text-center pt-12 border-t border-gray-200">
            <Quote className="mx-auto h-10 w-10 text-green-300" />
            <blockquote className="mt-4 max-w-3xl mx-auto text-xl italic text-gray-800">
              "We cannot change the past, but with the right tools, we can transform the future of millions of children who suffer in silence today."
            </blockquote>
            <p className="mt-4 font-semibold text-gray-600">– No More Bullying Team</p>
          </div>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-500">© 2025 No More Bullying. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2">Technology at the service of child protection</p>
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

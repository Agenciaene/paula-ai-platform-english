"use client"

import type React from "react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Send, Menu, X, MessageCircle } from "lucide-react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

// ✨ COMPONENTE DE 30 PARTÍCULAS QUE PARPADEAN - TODAS SUTILES Y CHIQUITITAS
const TwinklingParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* 💙 10 PARTÍCULAS AZULES - REDISTRIBUIDAS EN PATRÓN ESPIRAL */}
      <div 
        className="absolute top-[5%] left-[15%] w-1 h-1 bg-blue-400 rounded-full"
        style={{ animation: 'twinkle 2s ease-in-out infinite' }}
      ></div>
      <div 
        className="absolute top-[10%] right-[25%] w-1 h-1 bg-blue-500 rounded-full"
        style={{ animation: 'twinkle 2.3s ease-in-out infinite 0.3s' }}
      ></div>
      <div 
        className="absolute bottom-[15%] left-[30%] w-1 h-1 bg-blue-400 rounded-full"
        style={{ animation: 'twinkle 2.1s ease-in-out infinite 0.6s' }}
      ></div>
      <div 
        className="absolute top-[35%] left-[10%] w-1 h-1 bg-blue-500 rounded-full"
        style={{ animation: 'twinkle 2.4s ease-in-out infinite 0.9s' }}
      ></div>
      <div 
        className="absolute bottom-[40%] right-[20%] w-1 h-1 bg-blue-400 rounded-full"
        style={{ animation: 'twinkle 2.2s ease-in-out infinite 1.2s' }}
      ></div>
      <div 
        className="absolute top-[55%] right-[35%] w-1 h-1 bg-blue-500 rounded-full"
        style={{ animation: 'twinkle 2.5s ease-in-out infinite 1.5s' }}
      ></div>
      <div 
        className="absolute top-[20%] left-[45%] w-1 h-1 bg-blue-400 rounded-full"
        style={{ animation: 'twinkle 2.6s ease-in-out infinite 1.8s' }}
      ></div>
      <div 
        className="absolute bottom-[25%] right-[45%] w-1 h-1 bg-blue-500 rounded-full"
        style={{ animation: 'twinkle 2.7s ease-in-out infinite 2.1s' }}
      ></div>
      <div 
        className="absolute top-[70%] left-[25%] w-1 h-1 bg-blue-400 rounded-full"
        style={{ animation: 'twinkle 2.8s ease-in-out infinite 2.4s' }}
      ></div>
      <div 
        className="absolute bottom-[10%] left-[55%] w-1 h-1 bg-blue-500 rounded-full"
        style={{ animation: 'twinkle 2.9s ease-in-out infinite 2.7s' }}
      ></div>
      
      {/* 💚 10 PARTÍCULAS VERDES - PATRÓN CIRCULAR MEJORADO */}
      <div 
        className="absolute top-[15%] right-[15%] w-1 h-1 bg-green-400 rounded-full"
        style={{ animation: 'twinkle 2.1s ease-in-out infinite 0.2s' }}
      ></div>
      <div 
        className="absolute top-[25%] left-[35%] w-1 h-1 bg-green-500 rounded-full"
        style={{ animation: 'twinkle 2.4s ease-in-out infinite 0.5s' }}
      ></div>
      <div 
        className="absolute bottom-[30%] right-[30%] w-1 h-1 bg-green-400 rounded-full"
        style={{ animation: 'twinkle 2.2s ease-in-out infinite 0.8s' }}
      ></div>
      <div 
        className="absolute top-[45%] left-[20%] w-1 h-1 bg-green-500 rounded-full"
        style={{ animation: 'twinkle 2.3s ease-in-out infinite 1.1s' }}
      ></div>
      <div 
        className="absolute bottom-[20%] left-[40%] w-1 h-1 bg-green-400 rounded-full"
        style={{ animation: 'twinkle 2.5s ease-in-out infinite 1.4s' }}
      ></div>
      <div 
        className="absolute top-[60%] right-[25%] w-1 h-1 bg-green-500 rounded-full"
        style={{ animation: 'twinkle 2.1s ease-in-out infinite 1.7s' }}
      ></div>
      <div 
        className="absolute top-[8%] left-[60%] w-1 h-1 bg-green-400 rounded-full"
        style={{ animation: 'twinkle 3.0s ease-in-out infinite 3.0s' }}
      ></div>
      <div 
        className="absolute bottom-[35%] left-[15%] w-1 h-1 bg-green-500 rounded-full"
        style={{ animation: 'twinkle 3.1s ease-in-out infinite 3.3s' }}
      ></div>
      <div 
        className="absolute top-[75%] right-[40%] w-1 h-1 bg-green-400 rounded-full"
        style={{ animation: 'twinkle 3.2s ease-in-out infinite 3.6s' }}
      ></div>
      <div 
        className="absolute bottom-[50%] right-[55%] w-1 h-1 bg-green-500 rounded-full"
        style={{ animation: 'twinkle 3.3s ease-in-out infinite 3.9s' }}
      ></div>
      
      {/* 🧡 10 PARTÍCULAS NARANJAS - DISTRIBUCIÓN GALAXIA */}
      <div 
        className="absolute top-[18%] left-[50%] w-1 h-1 bg-orange-400 rounded-full"
        style={{ animation: 'twinkle 2.3s ease-in-out infinite 0.4s' }}
      ></div>
      <div 
        className="absolute top-[30%] right-[40%] w-1 h-1 bg-orange-500 rounded-full"
        style={{ animation: 'twinkle 2.1s ease-in-out infinite 0.7s' }}
      ></div>
      <div 
        className="absolute bottom-[12%] right-[60%] w-1 h-1 bg-orange-400 rounded-full"
        style={{ animation: 'twinkle 2.4s ease-in-out infinite 1.0s' }}
      ></div>
      <div 
        className="absolute top-[65%] left-[45%] w-1 h-1 bg-orange-500 rounded-full"
        style={{ animation: 'twinkle 2.2s ease-in-out infinite 1.3s' }}
      ></div>
      <div 
        className="absolute bottom-[45%] right-[10%] w-1 h-1 bg-orange-400 rounded-full"
        style={{ animation: 'twinkle 2.5s ease-in-out infinite 1.6s' }}
      ></div>
      <div 
        className="absolute top-[80%] left-[35%] w-1 h-1 bg-orange-500 rounded-full"
        style={{ animation: 'twinkle 2.3s ease-in-out infinite 1.9s' }}
      ></div>
      <div 
        className="absolute top-[12%] left-[8%] w-1 h-1 bg-orange-400 rounded-full"
        style={{ animation: 'twinkle 3.4s ease-in-out infinite 4.2s' }}
      ></div>
      <div 
        className="absolute bottom-[5%] right-[35%] w-1 h-1 bg-orange-500 rounded-full"
        style={{ animation: 'twinkle 3.5s ease-in-out infinite 4.5s' }}
      ></div>
      <div 
        className="absolute top-[40%] right-[65%] w-1 h-1 bg-orange-400 rounded-full"
        style={{ animation: 'twinkle 3.6s ease-in-out infinite 4.8s' }}
      ></div>
      <div 
        className="absolute bottom-[60%] left-[65%] w-1 h-1 bg-orange-500 rounded-full"
        style={{ animation: 'twinkle 3.7s ease-in-out infinite 5.1s' }}
      ></div>
    </div>
  )
}

// 😈 COMPONENTE TRAMPA MEJORADO - ESQUINAS OVALADAS, LETRA MÁS GRANDE, FONDO DEGRADADO
const FakeInputTrap = () => {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  // 🎯 UN SOLO MENSAJE EN BUCLE
  const message = "Tap here to start..."

  // 🚀 Efecto máquina de escribir MÁS RÁPIDA
  useEffect(() => {
    let charIndex = 0
    let isDeleting = false
    
    const typeInterval = setInterval(() => {
      if (!isDeleting && charIndex < message.length) {
        // Escribiendo MÁS RÁPIDO
        setDisplayText(message.slice(0, charIndex + 1))
        charIndex++
      } else if (!isDeleting && charIndex === message.length) {
        // Pausa MÁS CORTA antes de borrar
        setTimeout(() => {
          isDeleting = true
        }, 1000)
      } else if (isDeleting && charIndex > 0) {
        // Borrando MÁS RÁPIDO
        setDisplayText(message.slice(0, charIndex - 1))
        charIndex--
      } else if (isDeleting && charIndex === 0) {
        // Reiniciar el bucle
        isDeleting = false
      }
    }, isDeleting ? 30 : 60)

    return () => clearInterval(typeInterval)
  }, [])

  // 💫 Cursor parpadeante MÁS RÁPIDO
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 400)
    
    return () => clearInterval(cursorInterval)
  }, [])

  const handleClick = () => {
    setIsPressed(true)
    setTimeout(() => {
      router.push('/chat')
    }, 150)
  }

  return (
    <div className="mt-6 flex flex-col items-center gap-4">
      <div 
        className="relative group cursor-pointer w-full max-w-sm"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
      >
        {/* 🌈 BOTÓN TRAMPERO MEJORADO - ESQUINAS OVALADAS, FONDO DEGRADADO */}
        <div
          className={"flex items-center w-full h-12 px-5 border-2 border-transparent rounded-3xl shadow-sm transition-all duration-300 select-none " + (isPressed ? 'scale-[0.98]' : '')}
          style={{
            background: isHovered 
              ? 'linear-gradient(45deg, rgba(16, 185, 129, 0.15), rgba(59, 130, 246, 0.15))'
              : 'linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(6, 182, 212, 0.1))',
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* 🤖 Texto con efecto máquina de escribir - LETRA MÁS GRANDE */}
          <div className="flex-1 flex items-center">
            <div className="text-gray-700 font-medium text-lg">
              <span>{displayText}</span>
              <span className={showCursor ? 'opacity-100 transition-opacity' : 'opacity-0 transition-opacity'}>|</span>
            </div>
          </div>
        </div>

        {/* 🎪 Indicador de "clickeable" */}
        <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full shadow-lg animate-bounce">
            Tap here!
          </div>
        </div>
      </div>
      
      {/* Beneficios profesionales */}
       <div className="text-center mt-2">
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
            <button
              onClick={() => router.push("/tecnologia")}
              className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent font-semibold hover:from-blue-600 hover:to-green-600 transition-all cursor-pointer"
            >
              TripleIA®
            </button>
            {" "}technology
          </span>
        </div>
      </div>
    </div>
  )
}

export default function AntiBullyingLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleRolePlayNav = (character: string) => {
    router.push("/roleplay?character=" + character)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNav = (path: string) => {
    if (path === "/consejos" || path === "/contacto" || path === "/sobre-nosotros" || path === "/tecnologia") {
      router.push(path)
      setIsMenuOpen(false)
    } else {
      alert("Navigating to: " + path + " (page under development)")
      setIsMenuOpen(false)
    }
  }

  const handleDonation = () => {
    window.open("https://donate.stripe.com/8x2fZhcec3bH3OrbZP1sQ04", "_blank" )
  }

  const RolePlayButton = ({
    character,
    imageSrc,
    altText,
    shortLabel,
    longLabel,
    ringColor,
    difficultyIcon,
    difficultyImage,
  }: {
    character: string
    imageSrc: string
    altText: string
    shortLabel: string
    longLabel: string
    ringColor?: string
    difficultyIcon?: string
    difficultyImage?: string
  }) => (
    <div className="relative">
      {difficultyImage ? (
        <div className="absolute -top-2 -right-2 z-10">
          <Image
            src={difficultyImage}
            alt="Difficulty icon"
            width={difficultyImage.includes('carmen_eva_ico') ? 32 : 35}
            height={difficultyImage.includes('carmen_eva_ico') ? 32 : 35}
            className="object-contain"
          />
        </div>
      ) : difficultyIcon && (
        <div className="absolute -top-2 -right-2 z-10 text-2xl">
          {difficultyIcon}
        </div>
      )}
      <button
        onClick={() => handleRolePlayNav(character)}
        className={"flex flex-col items-center text-center gap-3 text-gray-700 hover:scale-105 transition-transform duration-200 group w-36 p-2 rounded-xl " + (ringColor ? "ring-2 " + ringColor : "")}
      >
        <div className="h-24 w-full flex items-center justify-center">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={altText}
            width={130}
            height={130}
            className="object-contain max-h-full w-auto"
          />
        </div>
        <div className="h-10 flex items-center justify-center">
          <p className="text-sm leading-tight">
            <span className="md:hidden">{shortLabel}</span>
            <span className="hidden md:inline">{longLabel}</span>
          </p>
        </div>
      </button>
    </div>
    )
  }
  
  return (
    <div className={"h-dvh bg-white relative " + inter.className}>
      <header className="absolute top-0 left-0 right-0 z-20 h-14 flex items-center">
        <div className="w-full flex justify-end pr-8 pl-2 py-2 relative">
          {/* 🍔 MENÚ HAMBURGUESA DE 3 RAYITAS CLÁSICO */}
          <button onClick={toggleMenu} className="p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Menu">
            <Menu className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-14 right-8 bg-white border border-gray-200 rounded-lg shadow-lg w-48 py-2">
              <button
                onClick={() => handleNav("/sobre-nosotros")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors text-black"
              >
                About Us
              </button>
              <button
                onClick={() => handleNav("/consejos")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors text-black"
              >
                Tips for Parents
              </button>
              <button
                onClick={() => handleNav("/tecnologia")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors text-black"
              >
                ⚡ TripleIA® Technology
              </button>
              <button
                onClick={() => handleNav("/contacto")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors text-black"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="absolute top-0 left-0 right-0 bottom-0 pt-14 overflow-y-auto">
        <div className="max-w-4xl mx-auto text-center w-full px-4">
          {/* 🎯 TÍTULO CON DEGRADADO AZUL-VERDE EN "BULLYING" */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
            <span className="text-gray-600">Anti </span>
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent font-black">BULLYING</span>
            <span className="text-gray-600"> Chat</span>
          </h1>
          
          {/* 📏 SUBTÍTULO MÁS PEQUEÑO Y MÁS JUNTO */}
          <h2 className="text-lg md:text-xl font-medium text-gray-600 mt-1 mb-6">
            FOR PROTECTIVE PARENTS
          </h2>

          {/* 🦸‍♂️ IMAGEN DE LOS SUPERHÉROES CON 18 PARTÍCULAS QUE PARPADEAN */}
          <div className="mt-4 flex justify-center relative">
            {/* ✨ 18 Partículas que parpadean - 6 de cada color */}
            <TwinklingParticles />
            
            {/* ✨ Contenedor con brillo sutil */}
            <div className="relative group">
              {/* 💫 Aura de brillo sutil */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-green-100/30 to-orange-100/30 rounded-full blur-xl scale-110 opacity-50 group-hover:opacity-70 transition-opacity duration-1000"></div>
              
              {/* 🌟 Imagen principal - TAMAÑO CONTROLADO */}
              <Image
                src="/images/usateam.webp"
                alt="Three protective animal superheroes: blue kitt
    <div className="mt-6 flex flex-col items-center gap-4">
      <div 
        className="relative group cursor-pointer w-full max-w-sm"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
      >
        {/* 🌈 BOTÓN TRAMPERO MEJORADO - ESQUINAS OVALADAS, FONDO DEGRADADO */}
        <div
          className={"flex items-center w-full h-12 px-5 border-2 border-transparent rounded-3xl shadow-sm transition-all duration-300 select-none " + (isPressed ? 'scale-[0.98]' : '')}
          style={{
            background: isHovered 
              ? 'linear-gradient(45deg, rgba(16, 185, 129, 0.15), rgba(59, 130, 246, 0.15))'
              : 'linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(6, 182, 212, 0.1))',
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* 🤖 Texto con efecto máquina de escribir - LETRA MÁS GRANDE */}
          <div className="flex-1 flex items-center">
            <div className="text-gray-700 font-medium text-lg">
              <span>{displayText}</span>
              <span className={showCursor ? 'opacity-100 transition-opacity' : 'opacity-0 transition-opacity'}>|</span>
            </div>
          </div>
        </div>

        {/* 🎪 Indicador de "clickeable" */}
        <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full shadow-lg animate-bounce">
            ¡Toca aquí!
          </div>
        </div>
      </div>
      
      {/* Beneficios profesionales */}
       <div className="text-center mt-2">
        <div className="flex items-center justify-center gap-2">
          <Image 
            src="/images/escudo.webp" 
            alt="Escudo" 
            width={20} 
            height={20} 
            className="object-contain"
          />
          <span className="text-sm font-medium text-gray-700">
            Tecnología exclusiva{" "}
            <button
              onClick={() => router.push("/tecnologia")}
              className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent font-semibold hover:from-blue-600 hover:to-green-600 transition-all cursor-pointer"
            >
              TripleIA®
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default function AntiBullyingLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleRolePlayNav = (character: string) => {
    router.push("/roleplay?character=" + character)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNav = (path: string) => {
    if (path === "/consejos" || path === "/contacto" || path === "/sobre-nosotros" || path === "/tecnologia") {
      router.push(path)
      setIsMenuOpen(false)
    } else {
      alert("Navegando a: " + path + " (página en desarrollo)")
      setIsMenuOpen(false)
    }
  }

  const handleDonation = () => {
    window.open("https://donate.stripe.com/8x2fZhcec3bH3OrbZP1sQ04", "_blank" )
  }

  const RolePlayButton = ({
    character,
    imageSrc,
    altText,
    shortLabel,
    longLabel,
    ringColor,
    difficultyIcon,
    difficultyImage,
  }: {
    character: string
    imageSrc: string
    altText: string
    shortLabel: string
    longLabel: string
    ringColor?: string
    difficultyIcon?: string
    difficultyImage?: string
  }) => (
    <div className="relative">
      {difficultyImage ? (
        <div className="absolute -top-2 -right-2 z-10">
          <Image
            src={difficultyImage}
            alt="Icono de dificultad"
            width={difficultyImage.includes('carmen_eva_ico') ? 32 : 35}
            height={difficultyImage.includes('carmen_eva_ico') ? 32 : 35}
            className="object-contain"
          />
        </div>
      ) : difficultyIcon && (
        <div className="absolute -top-2 -right-2 z-10 text-2xl">
          {difficultyIcon}
        </div>
      )}
      <button
        onClick={() => handleRolePlayNav(character)}
        className={"flex flex-col items-center text-center gap-3 text-gray-700 hover:scale-105 transition-transform duration-200 group w-36 p-2 rounded-xl " + (ringColor ? "ring-2 " + ringColor : "")}
      >
        <div className="h-24 w-full flex items-center justify-center">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={altText}
            width={130}
            height={130}
            className="object-contain max-h-full w-auto"
          />
        </div>
        <div className="h-10 flex items-center justify-center">
          <p className="text-sm leading-tight">
            <span className="md:hidden">{shortLabel}</span>
            <span className="hidden md:inline">{longLabel}</span>
          </p>
        </div>
      </button>
    </div>
  )
  
  return (
    <div className={"h-dvh bg-white relative " + inter.className}>
      <header className="absolute top-0 left-0 right-0 z-20 h-14 flex items-center">
        <div className="w-full flex justify-end pr-8 pl-2 py-2 relative">
          {/* 🍔 MENÚ HAMBURGUESA DE 3 RAYITAS CLÁSICO */}
          <button onClick={toggleMenu} className="p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Menú">
            <Menu className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-14 right-8 bg-white border border-gray-200 rounded-lg shadow-lg w-48 py-2">
              <button
                onClick={() => handleNav("/sobre-nosotros")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors text-black"
              >
                Sobre Nosotros
              </button>
              <button
                onClick={() => handleNav("/consejos")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors text-black"
              >
                Consejos para Padres
              </button>
              <button
                onClick={() => handleNav("/tecnologia")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors text-black"
              >
                ⚡ Tecnología TripleIA®
              </button>
              <button
                onClick={() => handleNav("/contacto")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors text-black"
              >
                Contacto
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="absolute top-0 left-0 right-0 bottom-0 pt-14 overflow-y-auto">
        <div className="max-w-4xl mx-auto text-center w-full px-4">
          {/* 🎯 TÍTULO CON DEGRADADO AZUL-VERDE EN "BULLYING" */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
            <span className="text-gray-600">Chat Anti </span>
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent font-black">BULLYING</span>
          </h1>
          
          {/* 📏 SUBTÍTULO MÁS PEQUEÑO Y MÁS JUNTO */}
          <h2 className="text-lg md:text-xl font-medium text-gray-600 mt-1 mb-6">
            FOR PROTECTIVE PARENTS
          </h2>

          {/* 🦸‍♂️ IMAGEN DE LOS SUPERHÉROES CON 18 PARTÍCULAS QUE PARPADEAN */}
          <div className="mt-4 flex justify-center relative">
            {/* ✨ 18 Partículas que parpadean - 6 de cada color */}
            <TwinklingParticles />
            
            {/* ✨ Contenedor con brillo sutil */}
            <div className="relative group">
              {/* 💫 Aura de brillo sutil */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-green-100/30 to-orange-100/30 rounded-full blur-xl scale-110 opacity-50 group-hover:opacity-70 transition-opacity duration-1000"></div>
              
              {/* 🌟 Imagen principal - TAMAÑO CONTROLADO */}
              <Image
                src="/images/usateam.webp"
                alt="Tres superhéroes animales protectores: gatito azul, perrito verde y erizito naranja con escudos"
                width={450}
                height={350}
                className="mx-auto object-contain relative z-10 drop-shadow-lg"
                style={{ 
                  maxWidth: '450px', 
                  maxHeight: '350px',
                  width: 'auto',
                  height: 'auto'
                }}
                priority
              />
            </div>
          </div>

          {/* 😈 BOTÓN TRAMPERO MEJORADO */}
          <FakeInputTrap />

          <div className="mt-12 w-full">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              O practica conversaciones incómodas con nuestros <span className="bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent">PERSONAJES</span>
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <RolePlayButton
                  character="child"
                  imageSrc="/images/luisito2.webp"
                  altText="Icono de Luisito, un niño de 7 años"
                  shortLabel="Tu hijo Luisito"
                  longLabel="Hablar con tu hijo Luisito"
                  ringColor="ring-green-500/50 hover:ring-green-600"
                  difficultyIcon="✅"
                />
                <RolePlayButton
                  character="parent"
                  imageSrc="/images/EVA MAMA DE ALEX.webp"
                  altText="Icono de Eva, madre de Alex"
                  shortLabel="Mamá de Alex"
                  longLabel="Hablar con Eva, mamá de Alex"
                  ringColor="ring-blue-500/50 hover:ring-blue-600"
                  difficultyImage="/images/carmen_eva_ico copy copy.webp"
                />
                <RolePlayButton
                  character="teacher"
                  imageSrc="/images/Carmen profesora.webp"
                  altText="Icono de Carmen, una profesora agotada"
                  shortLabel="Profe Carmen"
                  longLabel="Hablar con la Profe Carmen"
                  ringColor="ring-orange-500/50 hover:ring-orange-600"
                  difficultyImage="/images/carmen_eva_ico copy copy.webp"
                />
                <RolePlayButton
                  character="parent_hostile"
                  imageSrc="/images/paco bullying.webp"
                  altText="Icono de Paco, un padre hostil"
                  shortLabel="Modo Pesadilla"
                  longLabel="Modo Pesadilla: Paco"
                  ringColor="ring-red-500/50 hover:ring-red-600"
                  difficultyImage="/images/paco_icon.webp"
                />
              </div>
            </div>
          </div>

          <div className="w-full text-center p-6 mt-12">
            <div className="text-sm text-gray-500 flex flex-col sm:flex-row sm:space-x-4 justify-center items-center gap-3 sm:gap-0">
              <div className="flex space-x-4 justify-center items-center">
                <span>© 2025 NoMasBullying</span>
                <span className="text-gray-300">|</span>
                <a href="/privacy" className="hover:underline">
                  Política de Privacidad
                </a>
                <span className="text-gray-300">|</span>
                <button onClick={() => router.push("/contacto")} className="hover:underline cursor-pointer">
                  Contacto
                </button>
              </div>
              
              <div className="flex justify-center">
                <span className="text-gray-300 hidden sm:inline">|</span>
                <button
                  onClick={handleDonation}
                  className="flex items-center gap-1.5 hover:underline text-blue-600 font-medium sm:ml-4"
                >
                  <span className="heartbeat-animation">
                    <Image
                      src="/images/corazon footer.webp"
                      alt="Corazón sonriente de Héroe"
                      width={28}
                      height={28}
                    />
                  </span>
                  Solo para Héroes
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10% { transform: scale(0.9); }
          20% { transform: scale(1.1); }
          30% { transform: scale(1.3); }
          40% { transform: scale(1.1); }
          50% { transform: scale(1); }
          60% { transform: scale(0.9); }
          70% { transform: scale(1.1); }
          80% { transform: scale(1.3); }
          90% { transform: scale(1.1); }
        }

        .heartbeat-animation {
          animation: heartbeat 0.8s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>

      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(-15px) translateX(3px); }
        }

        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-8px) translateX(4px); }
          66% { transform: translateY(-12px) translateX(-3px); }
        }

        @keyframes floatFast {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-6px) translateX(2px); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </div>
  )
}

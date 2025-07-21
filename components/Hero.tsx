"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <picture>
          <source srcSet="/hero-bg.jpg" type="image/webp" />
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Warsztat samochodowy"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        </picture>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-500/5 to-transparent rounded-full"></div>
      </div>

      <FloatingSVGs />

      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/25">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
              AutoClinic Pro
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
              Usługi
            </a>
            <a href="#reviews" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
              Opinie
            </a>
            <a href="#faq" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
              FAQ
            </a>
            <a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
              PRZYSZŁOŚĆ
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">SERWISU AUTO</span>
          </h1>

          <p
            className={`text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-lg transition-all duration-1500 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Nowoczesna technologia spotyka się z wieloletnim doświadczeniem. Diagnostyka komputerowa, precyzyjne naprawy
            i kompleksowy serwis.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1500 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <Link href={"#contact"}>
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 border border-orange-400/50">
                <span className="relative z-10">UMÓW SIĘ NA PRZEGLĄD</span>
              </button>
            </Link>

            <Link href={"#services"}>
              <button className="px-8 py-4 border-2 border-blue-500 text-blue-500 font-bold rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-2xl hover:shadow-blue-500/50 bg-blue-500/5">
                SPRAWDŹ OFERTĘ
              </button>
            </Link>
          </div>
        </div>

        <div
          className={`mt-16 relative transition-all duration-1500 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="w-32 h-32 mx-auto relative">
            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl"></div>
            <svg
              className="w-full h-full text-orange-500 relative z-10 drop-shadow-2xl"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
            </svg>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1500 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center shadow-lg shadow-orange-500/25">
          <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 shadow-sm shadow-orange-500/50"></div>
        </div>
      </div>
    </section>
  )
}

function FloatingSVGs() {
  const [visibleSVGs, setVisibleSVGs] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 6)
      setVisibleSVGs((prev) => {
        if (prev.includes(randomIndex)) return prev
        const newVisible = [...prev, randomIndex]
        if (newVisible.length > 3) newVisible.shift()
        return newVisible
      })

      setTimeout(() => {
        setVisibleSVGs((prev) => prev.filter((index) => index !== randomIndex))
      }, 4000)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const svgElements = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
        </svg>
      ),
      position: { top: "20%", left: "10%" },
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      position: { top: "60%", right: "15%" },
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
        </svg>
      ),
      position: { top: "30%", right: "8%" },
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      position: { top: "70%", left: "5%" },
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z" />
        </svg>
      ),
      position: { top: "45%", left: "12%" },
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
        </svg>
      ),
      position: { top: "80%", right: "20%" },
    },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none z-5">
      {svgElements.map((element, index) => (
        <div
          key={index}
          className={`absolute text-orange-500/30 transition-all duration-1000 ${
            visibleSVGs.includes(index) ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
          style={element.position}
        >
          {element.icon}
        </div>
      ))}
    </div>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-yellow-400">O NAS</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Doświadczenie i Profesjonalizm</h3>
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                MOTOKLINIKA SZYMANOWSKI I ZABOROWSKI to warsztat samochodowy z wieloletnim doświadczeniem w branży
                motoryzacyjnej. Specjalizujemy się w kompleksowym serwisie pojazdów osobowych i dostawczych.
              </p>
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                Nasz zespół składa się z wykwalifikowanych mechaników, którzy na bieżąco podnoszą swoje kwalifikacje,
                śledząc najnowsze trendy w technologii samochodowej.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Gwarantujemy wysoką jakość usług, konkurencyjne ceny i terminowość wykonania zleceń.
              </p>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Nasz zespół mechaników"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: "🔧",
      title: "Mechanika Silnika",
      description: "Kompleksowe naprawy i regeneracja silników wszystkich marek",
      features: ["Diagnostyka komputerowa", "Naprawa układów wtryskowych", "Regeneracja turbosprężarek"],
      image: "/service1.jpg",
    },
    {
      icon: "⚡",
      title: "Diagnostyka Elektroniczna",
      description: "Zaawansowana diagnostyka systemów elektronicznych pojazdu",
      features: ["Skanery OBD", "Programowanie sterowników", "Kalibracja systemów"],
      image: "/service2.jpg",
    },
    {
      icon: "❄️",
      title: "Klimatyzacja",
      description: "Serwis i naprawa systemów klimatyzacji i wentylacji",
      features: ["Uzupełnianie czynnika", "Dezynfekcja systemu", "Wymiana filtrów"],
      image: "/service3.jpg",
    },
    {
      icon: "🛞",
      title: "Serwis Opon",
      description: "Kompleksowa obsługa opon i felg",
      features: ["Wyważanie kół", "Geometria zawieszenia", "Przechowywanie opon"],
      image: "/service4.jpeg",
    },
    {
      icon: "🛡️",
      title: "Przeglądy Techniczne",
      description: "Przygotowanie do przeglądu i badań technicznych",
      features: ["Kontrola bezpieczeństwa", "Emisja spalin", "Dokumentacja"],
      image: "/service5.jpg",
    },
    {
      icon: "⚙️",
      title: "Serwis Przekładni",
      description: "Naprawa skrzyń biegów manualnych i automatycznych",
      features: ["Wymiana oleju", "Naprawa sprzęgła", "Diagnostyka CVT"],
      image: "/service6.jpg",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-500/3 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
              NASZE USŁUGI
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-lg">
            Oferujemy kompleksowy serwis samochodowy z wykorzystaniem najnowszych technologii
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 hover:border-orange-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-blue-500/5 rounded-2xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl blur opacity-20"></div>

              <div className="relative mb-6 h-32 rounded-lg overflow-hidden">
                <picture>
                  <source srcSet={service.image} type="image/webp" />
                  <img
                    src={`/placeholder.svg?height=128&width=300&text=${encodeURIComponent(service.title)}`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-4xl">{service.icon}</div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white hover:text-orange-500 transition-colors duration-300 drop-shadow-lg">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed drop-shadow-sm">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 shadow-sm shadow-orange-500/50"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
{/* 
                <button className="w-full py-3 bg-gradient-to-r from-orange-500/20 to-blue-500/20 border border-orange-500/30 rounded-lg text-orange-500 font-semibold hover:from-orange-500/30 hover:to-blue-500/30 hover:border-orange-500/50 transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
                  Dowiedz się więcej
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

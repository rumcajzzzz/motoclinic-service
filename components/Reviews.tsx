"use client"

import { useState, useEffect, useRef } from "react"

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const reviews = [
    {
      name: "Michał Kowalski",
      role: "Właściciel BMW X5",
      rating: 5,
      text: "Profesjonalna obsługa na najwyższym poziomie. Diagnostyka komputerowa wykryła problem, którego nie znalazł poprzedni warsztat. Polecam każdemu!",
      avatar: "/avatar.svg",
    },
    {
      name: "Anna Nowak",
      role: "Kierowca Audi A4",
      rating: 5,
      text: "Szybko, sprawnie i w dobrej cenie. Mechanicy dokładnie wytłumaczyli problem i pokazali co zostało naprawione. Wrócę na pewno!",
      avatar: "/avatar.svg",
    },
    {
      name: "Piotr Wiśniewski",
      role: "Właściciel Mercedes C-Class",
      rating: 5,
      text: "Najlepszy warsztat w okolicy! Nowoczesne wyposażenie, fachowa obsługa i uczciwe ceny. Mój samochód działa jak nowy.",
      avatar: "/avatar.svg",
    },
    {
      name: "Katarzyna Zielińska",
      role: "Kierowca Toyota Corolla",
      rating: 5,
      text: "Bardzo dobry kontakt z klientem. Wszystko zostało dokładnie wytłumaczone, a naprawa wykonana terminowo. Polecam!",
      avatar: "/avatar.svg",
    },
    {
      name: "Tomasz Lewandowski",
      role: "Właściciel Volkswagen Golf",
      rating: 5,
      text: "Profesjonalizm na każdym kroku. Szybka diagnostyka, rzetelna naprawa i konkurencyjne ceny. To tutaj będę serwisować swój samochód.",
      avatar: "/avatar.svg",
    },
  ]
  

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-2xl transition-colors duration-300 ${i < rating ? "text-orange-500" : "text-gray-600"}`}
      >
        ★
      </span>
    ))
  }

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
              CO MÓWIĄ KLIENCI
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-lg">
            Zaufało nam już ponad 1000 zadowolonych klientów
          </p>
        </div>
        
        <div
          className={`max-w-4xl mx-auto relative transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentReview * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 p-8 bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-500/50">
                      <picture>
                        <source srcSet={review.avatar} type="image/webp" />
                        <img
                          src={`/placeholder.svg?height=80&width=80&text=${review.name.charAt(0)}`}
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      </picture>
                    </div>

                    <div className="flex justify-center mb-6">{renderStars(review.rating)}</div>

                    <blockquote className="text-xl text-gray-300 mb-8 leading-relaxed italic drop-shadow-sm">
                      "{review.text}"
                    </blockquote>

                    <div>
                      <h4 className="text-xl font-bold text-white mb-1 drop-shadow-sm">{review.name}</h4>
                      <p className="text-orange-500 font-medium">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview ? "bg-orange-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300 group"
          >
            <svg
              className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-300 group"
          >
            <svg
              className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { number: "1000+", label: "Zadowolonych Klientów" },
            { number: "15+", label: "Lat Doświadczenia" },
            { number: "24/7", label: "Pomoc Techniczna" },
            { number: "100%", label: "Gwarancja Jakości" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 drop-shadow-lg">{stat.number}</div>
              <div className="text-gray-300 text-sm md:text-base drop-shadow-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

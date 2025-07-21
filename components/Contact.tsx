"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
              SKONTAKTUJ SIĘ Z NAMI
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-lg">
            Jesteśmy gotowi pomóc Ci w każdej sprawie związanej z Twoim samochodem
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-3xl font-bold mb-8 text-white drop-shadow-sm">
              Dane <span className="text-orange-500">Kontaktowe</span>
            </h3>

            <div className="space-y-8">
              {[
                {
                  icon: "📍",
                  title: "Adres",
                  content: ["ul. Mechaniczna 123", "00-000 Warszawa"],
                  link: "https://maps.google.com",
                  linkText: "Zobacz na mapie",
                },
                {
                  icon: "📞",
                  title: "Telefon",
                  content: ["+48 123 456 789", "+48 987 654 321"],
                  link: "tel:+48123456789",
                  linkText: "Zadzwoń teraz",
                },
                {
                  icon: "✉️",
                  title: "Email",
                  content: ["kontakt@autoclinicpro.pl", "serwis@autoclinicpro.pl"],
                  link: "mailto:kontakt@autoclinicpro.pl",
                  linkText: "Wyślij email",
                },
                {
                  icon: "🕒",
                  title: "Godziny otwarcia",
                  content: ["Pon-Pt: 8:00 - 18:00", "Sobota: 8:00 - 14:00", "Niedziela: Zamknięte"],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl border border-slate-600 hover:border-orange-500/50 transition-all duration-300 group shadow-lg"
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-orange-500 mb-2 drop-shadow-sm">{item.title}</h4>
                    {item.content.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-gray-300 mb-1 drop-shadow-sm">
                        {line}
                      </p>
                    ))}
                    {item.link && (
                      <a
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-block mt-2 text-blue-500 hover:text-blue-400 transition-colors duration-300 underline"
                      >
                        {item.linkText}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-orange-500 mb-2 flex items-center drop-shadow-sm">
                🚨 Pomoc Awaryjna 24/7
              </h4>
              <p className="text-gray-300 mb-2 drop-shadow-sm">W przypadku awarii na drodze dzwoń:</p>
              <a
                href="tel:+48600123456"
                className="text-2xl font-bold text-white hover:text-orange-500 transition-colors duration-300 drop-shadow-sm"
              >
                +48 600 123 456
              </a>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 shadow-xl">
              <h3 className="text-3xl font-bold mb-8 text-white drop-shadow-sm">
                Umów <span className="text-blue-500">Wizytę</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2 drop-shadow-sm">Imię i Nazwisko *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                      placeholder="Wprowadź swoje imię i nazwisko"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2 drop-shadow-sm">Telefon *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 drop-shadow-sm">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                    placeholder="twoj@email.pl"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 drop-shadow-sm">Rodzaj Usługi</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Wybierz usługę</option>
                    <option value="diagnostyka">Diagnostyka komputerowa</option>
                    <option value="mechanika">Mechanika silnika</option>
                    <option value="klimatyzacja">Serwis klimatyzacji</option>
                    <option value="opony">Serwis opon</option>
                    <option value="przeglad">Przegląd techniczny</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 drop-shadow-sm">Opis problemu</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Opisz problem z samochodem lub rodzaj potrzebnej usługi..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center space-x-2 border border-orange-400/50"
                >
                  <span>WYŚLIJ ZAPYTANIE</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

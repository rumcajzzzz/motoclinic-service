"use client"

import { useState, useEffect, useRef } from "react"

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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

  const faqs = [
    {
      question: "Jak długo trwa standardowa diagnostyka komputerowa?",
      answer:
        "Standardowa diagnostyka komputerowa trwa od 30 minut do 1 godziny, w zależności od złożoności problemu. Używamy najnowszych skanerów diagnostycznych, które pozwalają na szybkie i precyzyjne wykrycie usterek.",
    },
    {
      question: "Czy udzielają Państwo gwarancji na wykonane naprawy?",
      answer:
        "Tak, wszystkie nasze naprawy objęte są gwarancją. Okres gwarancji zależy od rodzaju usługi: naprawy mechaniczne - 12 miesięcy, części zamienne - zgodnie z gwarancją producenta, usługi serwisowe - 6 miesięcy.",
    },
    {
      question: "Jakie marki samochodów serwisują Państwo?",
      answer:
        "Serwisujemy wszystkie marki samochodów osobowych i dostawczych. Specjalizujemy się w markach europejskich (BMW, Mercedes, Audi, Volkswagen, Opel) oraz azjatyckich (Toyota, Honda, Nissan, Hyundai).",
    },
    {
      question: "Czy można umówić wizytę online?",
      answer:
        "Oczywiście! Oferujemy wygodny system rezerwacji online dostępny 24/7. Można również umówić wizytę telefonicznie lub osobiście w naszym warsztacie.",
    },
    {
      question: "Jakie formy płatności akceptują Państwo?",
      answer:
        "Akceptujemy wszystkie popularne formy płatności: gotówka, karty płatnicze (Visa, Mastercard), przelewy bankowe, płatności BLIK oraz faktury dla firm z odroczonym terminem płatności.",
    },
    {
      question: "Czy oferują Państwo samochody zastępcze?",
      answer:
        "Tak, dla klientów korzystających z większych napraw oferujemy samochody zastępcze. Usługa dostępna po wcześniejszej rezerwacji, szczegóły i warunki ustalamy indywidualnie.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
              CZĘSTO ZADAWANE PYTANIA
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-lg">
            Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl hover:from-slate-600 hover:to-slate-700 transition-all duration-300 border border-slate-600 hover:border-orange-500/50 group"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-bold text-white pr-4 group-hover:text-orange-500 transition-colors duration-300 drop-shadow-sm">
                    {faq.question}
                  </h3>
                  <div className="relative">
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full bg-orange-500/20 border border-orange-500/50 transition-all duration-300 ${
                        openIndex === index ? "rotate-45 bg-orange-500" : "group-hover:bg-orange-500/30"
                      }`}
                    >
                      <span
                        className={`text-2xl font-bold transition-colors duration-300 ${
                          openIndex === index ? "text-white" : "text-orange-500"
                        }`}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-700 rounded-b-xl border-x border-b border-slate-600 mt-1">
                  <p className="text-gray-300 leading-relaxed drop-shadow-sm">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 max-w-2xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-sm">
              Nie znalazłeś odpowiedzi na swoje pytanie?
            </h3>
            <p className="text-gray-300 mb-6 drop-shadow-sm">
              Skontaktuj się z nami bezpośrednio - nasz zespół chętnie udzieli szczegółowych informacji
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 border border-orange-400/50">
              SKONTAKTUJ SIĘ Z NAMI
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

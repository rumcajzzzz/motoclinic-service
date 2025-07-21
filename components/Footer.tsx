"use client"

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                AutoClinic Pro
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Nowoczesna klinika samochodowa łącząca tradycyjne rzemiosło z najnowszymi technologiami. Twój samochód w
              najlepszych rękach.
            </p>

          </div>

          <div>
            <h4 className="text-xl font-bold text-orange-500 mb-6">Szybkie Linki</h4>
            <ul className="space-y-3">
              {[
                { name: "Nasze Usługi", href: "#services" },
                { name: "Opinie Klientów", href: "#reviews" },
                { name: "FAQ", href: "#faq" },
                { name: "Kontakt", href: "#contact" },
                { name: "Cennik", href: "#" },
                { name: "Kariera", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-blue-500 mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-orange-500 mt-1">📍</span>
                <div>
                  <p className="text-gray-300">ul. Mechaniczna 123</p>
                  <p className="text-gray-300">00-000 Warszawa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-500">📞</span>
                <a
                  href="tel:+48123456789"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  +48 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-500">✉️</span>
                <a
                  href="mailto:kontakt@autoclinicpro.pl"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  kontakt@autoclinicpro.pl
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-orange-500 mt-1">🕒</span>
                <div>
                  <p className="text-gray-300">Pon-Pt: 8:00 - 18:00</p>
                  <p className="text-gray-300">Sobota: 8:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} AutoClinic Pro. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Polityka Prywatności
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Regulamin
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

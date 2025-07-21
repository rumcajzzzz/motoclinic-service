import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Script from "next/script"
import OdometerLoader from "@/components/Odometer"

export const metadata: Metadata = {
  title: "AutoClinic Pro - Profesjonalny Serwis Samochodowy",
  description:
    "Nowoczesna klinika samochodowa oferująca kompleksowy serwis mechaniczny. Diagnostyka komputerowa, naprawy silników, przeglądy techniczne i więcej.",
  keywords:
    "serwis samochodowy, mechanik, diagnostyka, naprawa silnika, przegląd techniczny, warsztat samochodowy, klinika samochodowa",
  authors: [{ name: "AutoClinic Pro" }],
  openGraph: {
    title: "AutoClinic Pro - Profesjonalny Serwis Samochodowy",
    description: "Nowoczesna klinika samochodowa oferująca kompleksowy serwis mechaniczny z najwyższą jakością usług.",
    type: "website",
    locale: "pl_PL",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/themes/odometer-theme-default.min.css"
          precedence="default"
        />
      </head>
      <body>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/odometer.min.js"
          strategy="beforeInteractive"
        />
        <OdometerLoader />
        {children}
      </body>
    </html>
  )
}

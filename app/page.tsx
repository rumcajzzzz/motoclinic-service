import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Reviews from "@/components/Reviews"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}

"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import AppPromotion from "@/components/app-promotion"
import Divisions from "@/components/divisions"
import About from "@/components/about"
import CafeSection from "@/components/cafe-section"
import Products from "@/components/products"
import Team from "@/components/team"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AppPromotion />
        <Divisions />
        <About />
        <CafeSection />
        <Products />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

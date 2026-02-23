"use client"

import { ArrowRight, Download, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"

export default function Hero() {
  const { t } = useLanguage()

  const images = [
    {
      url: "/organic-vegetables-farm-fresh-produce-nepal.jpg",
      alt: "Organic vegetables",
    },
    {
      url: "/sustainable-farming-agriculture-green-fields.jpg",
      alt: "Sustainable farming",
    },
    {
      url: "/100-percent-vegetarian-farming-organic-crops.jpg",
      alt: "Vegetarian farming",
    },
    {
      url: "/himalayan-farm-nepal-agriculture-organic-productio.jpg",
      alt: "Himalayan farm",
    },
    {
      url: "/farmer-harvesting-organic-vegetables-nepal-agricul.jpg",
      alt: "Farmer harvesting",
    },
  ]

  const values = [
    { key: "sustainability", description: "Eco-friendly farming" },
    { key: "innovation", description: "Technology-driven" },
    { key: "quality", description: "100% organic" },
    { key: "community", description: "Empowering farmers" },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section
      id="home"
      className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in-up order-2 md:order-1">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
                {t("heroTitle")}
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">{t("heroSubtitle")}</p>
            </div>

            <div className="relative w-64 h-64 mx-auto md:mx-0">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="currentColor"
                  className="text-primary/20"
                  strokeWidth="2"
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary text-primary-foreground rounded-full w-32 h-32 flex flex-col items-center justify-center text-center p-4">
                  <p className="font-bold text-xl">Sagarmatha</p>
                  <p className="text-xs mt-2 opacity-90">Pure Organic</p>
                </div>
              </div>

              {values.map((value, index) => {
                const angle = (index * 360) / values.length - 90
                const radius = 110
                const x = 100 + radius * Math.cos((angle * Math.PI) / 180)
                const y = 100 + radius * Math.sin((angle * Math.PI) / 180)
                return (
                  <div
                    key={index}
                    className="absolute w-20 h-20 flex flex-col items-center justify-center"
                    style={{ left: `${x - 40}px`, top: `${y - 40}px` }}
                  >
                    <div className="bg-white border-2 border-primary rounded-full w-20 h-20 flex items-center justify-center p-2 hover:bg-primary/10 transition-all cursor-pointer shadow-md">
                      <div className="text-center">
                        <p className="text-xs font-bold text-primary">{t(value.key)}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                {t("exploreNow")} <ArrowRight size={20} />
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-all flex items-center justify-center gap-2">
                <Download size={20} /> {t("downloadApp")}
              </button>
            </div>
          </div>

          <div className="hidden md:block relative order-1 md:order-2">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={images[currentImageIndex].url || "/placeholder.svg"}
                alt={images[currentImageIndex].alt}
                className="w-full h-96 object-cover transition-opacity duration-500"
              />

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 text-primary-foreground p-2 rounded-full hover:bg-primary transition-all z-10"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 text-primary-foreground p-2 rounded-full hover:bg-primary transition-all z-10"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? "bg-primary-foreground w-6" : "bg-primary-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

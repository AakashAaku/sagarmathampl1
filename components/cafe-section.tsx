"use client"

import { Heart, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

export default function CafeSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/10 to-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl bg-background overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div>
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
                ✓ {t.cafeNowLive}
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">{t.vegSmartCafe}</h2>
              <p className="text-2xl text-accent font-semibold mb-4">Venzo Smart Café</p>
              <p className="text-xl text-foreground/70 mb-4">{t.venzoTagline}</p>
              <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
                {t.vegSmartCafeDesc}. {t.cafeAboutText}
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Smart Ordering System",
                  "Organic Menu",
                  "Sustainable Packaging",
                  "Direct Farmer Partnerships",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Heart className="text-accent" size={20} />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-foreground/80">
                  <Clock size={20} className="text-accent" />
                  <span>10:00 AM - 10:00 PM Daily</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <MapPin size={20} className="text-accent" />
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
              <Link href="/venzo">
                <button className="w-full bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all mb-3">
                  {t.orderNow}
                </button>
              </Link>
              <Link href="/venzo">
                <button className="w-full bg-primary/20 text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/30 transition-all border border-primary">
                  {t.exploreMenu}
                </button>
              </Link>
            </div>
            <div>
              <img
                src="/modern-vegetarian-cafe-interior-organic-design.jpg"
                alt="Veg Smart Café concept"
                className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

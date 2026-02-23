"use client"

import { useLanguage } from "@/lib/language-context"

export default function About() {
  const { t } = useLanguage()

  const values = [
    { key: "sustainability", description: "Eco-friendly farming practices" },
    { key: "innovation", description: "Technology-driven agriculture" },
    { key: "community", description: "Empowering local farmers" },
    { key: "quality", description: "100% organic certified products" },
  ]

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t("aboutTitle")}</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">{t("aboutDesc")}</p>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">{t("ourMission")}</h3>
              <p className="text-foreground/70">{t("missionDesc")}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 border border-border hover:border-primary transition-colors"
              >
                <h3 className="font-bold text-primary mb-2">{t(value.key)}</h3>
                <p className="text-sm text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 md:p-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">{t("brandingTitle")}</h3>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{t("brandingDesc")}</p>
            <div className="flex justify-center gap-8 pt-6 flex-wrap">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-foreground/70">Organic Products</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-foreground/70">Vegetarian</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">∞</p>
                <p className="text-sm text-foreground/70">Sustainability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const links = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "divisions", href: "#divisions" },
    { key: "team", href: "#team" },
    { key: "products", href: "#products" },
    { key: "contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-lg text-primary-foreground hidden sm:block">Sagarmatha</span>
          </div>

          <nav className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t(link.key)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "np" : "en")}
              className="flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 px-3 py-2 rounded-lg transition-colors"
              title={language === "en" ? "Switch to Nepali" : "Switch to English"}
            >
              <Globe size={20} />
              <span className="text-sm font-semibold">{language === "en" ? "EN" : "नेपाली"}</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t(link.key)}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

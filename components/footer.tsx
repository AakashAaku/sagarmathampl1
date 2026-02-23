"use client"

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Sagarmatha</h3>
            <p className="opacity-80 text-sm">{t("tagline")}</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#home" className="hover:opacity-100 transition">
                  {t("home")}
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:opacity-100 transition">
                  {t("divisions")}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:opacity-100 transition">
                  {t("team")}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:opacity-100 transition">
                  {t("products")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition">
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t("contactInfo")}</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex gap-2 items-start">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>{t("address")}</span>
              </div>
              <div className="flex gap-2 items-center">
                <Mail size={16} />
                <a href={`mailto:${t("email")}`} className="hover:opacity-100 transition">
                  {t("email")}
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <Phone size={16} />
                <a href={`tel:${t("phone")}`} className="hover:opacity-100 transition">
                  {t("phone")}
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t("followUs")}</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>{t("copyright")}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition">
              {t("privacyPolicy")}
            </a>
            <a href="#" className="hover:opacity-100 transition">
              {t("termsOfService")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

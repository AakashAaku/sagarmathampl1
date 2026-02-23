"use client"

import { useState } from "react"
import { Heart, MapPin, Phone, Mail, Clock, Leaf, Utensils } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

export default function VenzoPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [activeTab, setActiveTab] = useState("breakfast")

  const menuItems = {
    breakfast: [
      { name: "Organic Oatmeal Bowl", desc: "Fresh berries, nuts, honey", price: "Rs. 350" },
      { name: "Vegetable Omelet", desc: "3 eggs, seasonal vegetables, cheese", price: "Rs. 450" },
      { name: "Whole Wheat Toast", desc: "Organic butter, farm jam", price: "Rs. 250" },
      { name: "Green Smoothie", desc: "Spinach, banana, organic milk", price: "Rs. 300" },
    ],
    lunch: [
      { name: "Organic Vegetable Thali", desc: "Dal, vegetables, rice, roti, yogurt", price: "Rs. 550" },
      { name: "Paneer Tikka Masala", desc: "Organic paneer, tomato gravy, basmati rice", price: "Rs. 650" },
      { name: "Chickpea Curry", desc: "Spiced chickpeas, naan, salad", price: "Rs. 500" },
      { name: "Beetroot Risotto", desc: "Organic beetroot, arborio rice, organic cheese", price: "Rs. 600" },
    ],
    dinner: [
      { name: "Spinach & Mushroom Pasta", desc: "Organic pasta, cream sauce, seasonal herbs", price: "Rs. 700" },
      { name: "Vegetable Biryani", desc: "Aromatic rice, mixed vegetables, spices", price: "Rs. 650" },
      { name: "Tofu Stir-fry", desc: "Organic tofu, vegetables, ginger-garlic sauce", price: "Rs. 600" },
      { name: "Vegetable Momos", desc: "Homemade wrappers, vegetable filling", price: "Rs. 450" },
    ],
  }

  const specialOffers = [
    { title: "Happy Hours", time: "10 AM - 12 PM", discount: "15% Off on All Beverages" },
    { title: "Lunch Combo", time: "12 PM - 2 PM", discount: "20% Off on Thali Combos" },
    { title: "Evening Special", time: "4 PM - 6 PM", discount: "Buy 1 Get 1 on Desserts" },
  ]

  const values = [
    { icon: Leaf, title: "100% Organic", desc: "All ingredients from certified organic farms" },
    { icon: Heart, title: "100% Vegetarian", desc: "Pure vegetarian cuisine with no compromises" },
    { icon: Utensils, title: "Farm-to-Table", desc: "Direct from Sagarmatha organic farms" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/20 to-accent/20 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ✓ {t.cafeNowLive}
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">Venzo Smart Café</h1>
              <p className="text-2xl text-accent font-semibold mb-2">{t.venzoDesc}</p>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">{t.venzoTagline}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="bg-background rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <Icon className="text-accent mx-auto mb-3" size={32} />
                    <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-foreground/60">{value.desc}</p>
                  </div>
                )
              })}
            </div>

            <img
              src="/modern-vegetarian-cafe-interior-organic-design.jpg"
              alt="Venzo Café Interior"
              className="w-full h-80 object-cover rounded-2xl shadow-lg mb-8"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">{t.cafeAbout}</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-4">{t.cafeAboutText}</p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We believe in supporting local farmers, using only the freshest ingredients, and creating a dining
              experience that nourishes both body and soul. Every dish is prepared with love and sustainable practices.
            </p>
          </div>
        </section>

        {/* Operating Hours & Info */}
        <section className="bg-primary/5 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-background rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <Clock className="text-accent mx-auto mb-3" size={32} />
                <h3 className="text-xl font-bold text-foreground mb-2">{t.cafeHours}</h3>
                <p className="text-foreground/60 mb-2">Monday - Sunday</p>
                <p className="text-accent font-semibold">10:00 AM - 10:00 PM</p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <MapPin className="text-accent mx-auto mb-3" size={32} />
                <h3 className="text-xl font-bold text-foreground mb-2">Location</h3>
                <p className="text-foreground/60">Kathmandu</p>
                <p className="text-accent font-semibold">Nepal</p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <Phone className="text-accent mx-auto mb-3" size={32} />
                <h3 className="text-xl font-bold text-foreground mb-2">Contact</h3>
                <p className="text-foreground/60 mb-1">+977 1 XXXX XXXX</p>
                <p className="text-accent font-semibold">cafe@venzo.np</p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">{t.menu}</h2>

            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveTab("breakfast")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "breakfast"
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary/10 text-foreground hover:bg-primary/20"
                }`}
              >
                {t.breakfastMenu}
              </button>
              <button
                onClick={() => setActiveTab("lunch")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "lunch"
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary/10 text-foreground hover:bg-primary/20"
                }`}
              >
                {t.lunchMenu}
              </button>
              <button
                onClick={() => setActiveTab("dinner")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "dinner"
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary/10 text-foreground hover:bg-primary/20"
                }`}
              >
                {t.dinnerMenu}
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {menuItems[activeTab as keyof typeof menuItems].map((item, index) => (
                <div key={index} className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
                    <span className="text-accent font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-foreground/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="bg-primary/5 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">{t.specialOffers}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {specialOffers.map((offer, index) => (
                <div key={index} className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{offer.title}</h3>
                  <p className="text-foreground/60 mb-4">{offer.time}</p>
                  <p className="text-lg font-semibold text-accent">{offer.discount}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Pure Vegetarian Dining?</h2>
            <p className="text-xl text-white/90 mb-8">Join us at Venzo Smart Café for an unforgettable culinary journey</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all">
                Reserve a Table
              </button>
              <button className="px-8 py-3 bg-primary/20 text-white font-bold rounded-lg border border-white hover:bg-primary/30 transition-all">
                Order Online
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

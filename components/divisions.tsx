"use client"

import { Leaf, Utensils, Globe, Code, Coffee } from "lucide-react"
import Link from "next/link"

export default function Divisions() {
  const divisions = [
    {
      id: "agriculture",
      icon: <Leaf size={40} />,
      title: "Agriculture & Organic Products",
      description: "100% organic, chemical-free produce with direct farmer-to-consumer connection",
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      id: "food-beverage",
      icon: <Utensils size={40} />,
      title: "Food & Beverage Division",
      description: "Pure vegetarian products crafted with organic ingredients for health-conscious consumers",
      color: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      id: "import-export",
      icon: <Globe size={40} />,
      title: "Import & Export Division",
      description: "International trade in organic products connecting Nepal to global markets",
      color: "bg-secondary/20",
      iconColor: "text-primary",
    },
    {
      id: "technology",
      icon: <Code size={40} />,
      title: "Digital Technology Platform",
      description: "Multi-vendor agricultural marketplace with real-time inventory management",
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      id: "cafe",
      icon: <Coffee size={40} />,
      title: "Veg Smart Café",
      description: "100% vegetarian modern café with smart ordering powered by Sagarmatha ecosystem",
      color: "bg-accent/10",
      iconColor: "text-accent",
    },
  ]

  return (
    <section id="divisions" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Business Divisions</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Integrated solutions driving innovation and social impact across agriculture, food, technology, and retail
            sectors
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((division, index) => (
            <Link key={index} href={`/divisions/${division.id}`}>
              <div
                className={`${division.color} rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
              >
                <div className={`${division.iconColor} mb-4`}>{division.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{division.title}</h3>
                <p className="text-foreground/70">{division.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

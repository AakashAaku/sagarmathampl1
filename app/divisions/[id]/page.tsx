"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DivisionDetail() {
  const params = useParams()
  const id = params.id as string

  const divisionsContent: Record<
    string,
    {
      title: string
      subtitle: string
      description: string
      features: string[]
      benefits: string[]
      image: string
    }
  > = {
    agriculture: {
      title: "Agriculture & Organic Products",
      subtitle: "100% Pure Organic Farming from Nepal",
      description:
        "Our Agriculture & Organic Products division is dedicated to providing farm-fresh, chemical-free produce directly to consumers. We work with certified organic farmers across Nepal to ensure the highest quality standards and sustainable farming practices.",
      features: [
        "Certified organic farming without synthetic pesticides or fertilizers",
        "Direct farmer-to-consumer connection for maximum freshness",
        "Year-round availability of seasonal produce",
        "Traceability system to track products from farm to table",
        "Support for local farming communities",
      ],
      benefits: [
        "100% chemical-free vegetables and fruits",
        "Higher nutritional value compared to conventional produce",
        "Support for sustainable agriculture",
        "Fair pricing for farmers",
        "Environmental conservation",
      ],
      image: "/organic-farm-vegetables-nepal-agricultural-product.jpg",
    },
    "food-beverage": {
      title: "Food & Beverage Division",
      subtitle: "Pure Vegetarian Crafted Products",
      description:
        "The Food & Beverage Division creates premium vegetarian products using organic ingredients. From traditional recipes to modern innovations, we offer a complete range of healthy, delicious food options for health-conscious consumers.",
      features: [
        "100% vegetarian product range",
        "Organic ingredients from our agriculture division",
        "No artificial preservatives or additives",
        "Traditional Nepali recipes with modern twist",
        "Nutritionally balanced formulations",
      ],
      benefits: [
        "Healthy vegetarian lifestyle options",
        "Support for local agricultural practices",
        "Premium quality assurance",
        "Authentic Nepali flavors",
        "Environmentally sustainable packaging",
      ],
      image: "/vegetarian-food-products-organic-healthy-cuisine.jpg",
    },
    "import-export": {
      title: "Import & Export Division",
      subtitle: "Global Trade in Organic Products",
      description:
        "Our Import & Export Division connects Nepali organic products to international markets while bringing the best global organic offerings to Nepal. We ensure compliance with all international standards and certifications.",
      features: [
        "International quality certifications",
        "Global market access for Nepali products",
        "Import of premium organic products",
        "Compliance with international standards",
        "Partnership with international distributors",
      ],
      benefits: [
        "Global reach for local products",
        "Premium international products availability",
        "Fair trade practices",
        "Export opportunities for farmers",
        "Currency diversification for company",
      ],
      image: "/international-trade-export-agricultural-products-g.jpg",
    },
    technology: {
      title: "Digital Technology Platform",
      subtitle: "Smart Agricultural Marketplace",
      description:
        "Our Digital Technology Platform revolutionizes agricultural commerce through an intelligent, multi-vendor marketplace. Real-time inventory management, smart pricing, and data analytics empower both vendors and consumers.",
      features: [
        "Multi-vendor agricultural marketplace",
        "Real-time inventory management system",
        "AI-powered price optimization",
        "Mobile app for seamless shopping",
        "Data analytics for demand forecasting",
      ],
      benefits: [
        "Efficient supply chain management",
        "Better pricing for consumers",
        "Increased sales for vendors",
        "Real-time market insights",
        "Reduced post-harvest losses",
      ],
      image: "/digital-technology-platform-agricultural-marketpla.jpg",
    },
    cafe: {
      title: "Veg Smart Café",
      subtitle: "100% Vegetarian Modern Café Experience",
      description:
        "Veg Smart Café is a modern, smart café offering 100% vegetarian meals powered by the Sagarmatha ecosystem. With digital ordering, real-time inventory from our agriculture division, and AI-driven recommendations, we create a seamless dining experience.",
      features: [
        "100% vegetarian menu",
        "Fresh ingredients from our farms",
        "Smart ordering system",
        "AI-powered meal recommendations",
        "Health-focused nutrition tracking",
      ],
      benefits: [
        "Convenient vegetarian dining",
        "Farm-fresh ingredients daily",
        "Personalized meal suggestions",
        "Health and nutrition information",
        "Modern, comfortable ambiance",
      ],
      image: "/modern-cafe-vegetarian-restaurant-organic-healthy-.jpg",
    },
  }

  const division = divisionsContent[id]

  if (!division) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Division Not Found</h1>
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Back button */}
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link
            href="/#divisions"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Divisions</span>
          </Link>
        </div>

        {/* Hero section with image */}
        <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <img
              src={division.image || "/placeholder.svg"}
              alt={division.title}
              className="w-full h-80 object-cover rounded-xl shadow-lg mb-8"
            />
          </div>
        </div>

        {/* Content section */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
            <p className="text-primary font-semibold mb-2">{division.subtitle}</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">{division.title}</h1>
            <p className="text-xl text-foreground/70 leading-relaxed">{division.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
              <ul className="space-y-4">
                {division.features.map((feature, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold mt-1">
                      ✓
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Benefits</h2>
              <ul className="space-y-4">
                {division.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold mt-1">
                      ☆
                    </div>
                    <span className="text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Join Our Movement?</h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Discover how this division can transform your agricultural experience and contribute to sustainable
              practices.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all">
              Get in Touch
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

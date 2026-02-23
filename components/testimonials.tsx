"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Farmer",
      content: "Sagarmatha has transformed how I connect with consumers. Fair pricing and direct market access!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Health Enthusiast",
      content: "Finally found truly organic products. The quality is exceptional and delivery is reliable.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Restaurant Owner",
      content: "Their wholesale platform makes sourcing organic ingredients effortless and cost-effective.",
      rating: 5,
    },
    {
      name: "Neha Singh",
      role: "Consumer",
      content: "Love supporting local farmers. The app is user-friendly and prices are fair.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What People Say</h2>
          <p className="text-lg text-foreground/70">
            Real stories from our community of farmers, consumers, and partners
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 border border-border hover:border-primary transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/70 mb-4">{testimonial.content}</p>
              <div>
                <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

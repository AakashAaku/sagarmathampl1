"use client"

export default function AppPromotion() {
  const features = [
    { title: "Multi-Vendor Marketplace", description: "Connect directly with farmers and vendors" },
    { title: "Wholesale & Retail", description: "Flexible options for all buyers" },
    { title: "Real-time Inventory", description: "Fresh organic products always available" },
    { title: "Direct Farmer Access", description: "Support local agricultural communities" },
    { title: "Organic Verification", description: "100% certified pure products" },
    { title: "Easy Delivery", description: "Fast and reliable shipping options" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/mobile-app-interface-organic-marketplace.jpg"
              alt="Mobile app interface"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Sagarmatha Mobile App</h2>
            <p className="text-lg text-foreground/70">
              Revolutionizing agricultural marketplace with our multi-vendor platform. Access organic products, connect
              with farmers, and support sustainable practices.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-foreground/60 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all">
                Download iOS
              </button>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all">
                Download Android
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

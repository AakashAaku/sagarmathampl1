"use client"

export default function Team() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Co-Founder & CEO",
      bio: "Visionary leader with 15 years in sustainable agriculture",
      image: "/placeholder.svg",
    },
    {
      name: "Sarah Smith",
      role: "Operations Manager",
      bio: "Expert in supply chain and organic certification",
      image: "/placeholder.svg",
    },
    {
      name: "Raj Patel",
      role: "Technology Director",
      bio: "Innovator in agricultural tech solutions",
      image: "/placeholder.svg",
    },
    {
      name: "Emily Chen",
      role: "Sustainability Officer",
      bio: "Environmental scientist passionate about organic farming",
      image: "/placeholder.svg",
    },
  ]

  return (
    <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Team</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Dedicated professionals committed to organic farming, sustainability, and agricultural innovation
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-foreground/70 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

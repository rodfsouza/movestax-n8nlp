    import { Card, CardContent } from "@/components/ui/card"
    import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

    const testimonials = [
      {
        name: "Alice Wonderland",
        role: "Automation Lead, Tech Solutions Inc.",
        testimonial: "Switching to this N8N hosting was a game-changer. Our workflows are faster and more reliable than ever!",
        avatar: "/api/placeholder/40/40?text=AW", // Placeholder
      },
      {
        name: "Bob The Builder",
        role: "Founder, BuildIt Co.",
        testimonial: "The support team is fantastic! They helped us migrate our complex N8N setup seamlessly. Highly recommended.",
        avatar: "/api/placeholder/40/40?text=BB", // Placeholder
      },
      {
        name: "Carol Danvers",
        role: "Marketing Manager, SkyHigh Agency",
        testimonial: "We've saved countless hours thanks to the stability and performance of their N8N hosting. It just works!",
        avatar: "/api/placeholder/40/40?text=CD", // Placeholder
      },
    ]

    export function TestimonialsSection() {
      return (
        <section id="testimonials" className="py-16 md:py-24 bg-background animate-fadeIn" style={{animationDelay: '0.6s'}}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Loved by Automators Like You</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Hear what our customers are saying about our managed N8N hosting services.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((item) => (
                <Card key={item.name}>
                  <CardContent className="pt-6">
                    <blockquote className="text-muted-foreground italic mb-4">"{item.testimonial}"</blockquote>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={item.avatar} alt={item.name} crossOrigin="anonymous" />
                        <AvatarFallback>{item.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )
    }

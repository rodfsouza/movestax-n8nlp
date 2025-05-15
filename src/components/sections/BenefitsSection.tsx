    import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
    import { Zap, ShieldCheck, Server, Users, Settings, Clock } from "lucide-react"

    const benefits = [
      {
        icon: Zap,
        title: "Instant Setup",
        description: "Get your N8N instance running in minutes, not hours. We handle all the technical setup.",
      },
      {
        icon: Server,
        title: "High Reliability",
        description: "Enjoy 99.9% uptime with our robust infrastructure, ensuring your automations run smoothly.",
      },
      {
        icon: ShieldCheck,
        title: "Top-Tier Security",
        description: "Your data and workflows are protected with regular security updates and best practices.",
      },
      {
        icon: Users,
        title: "Expert Support",
        description: "Our knowledgeable team is here to help you with any N8N hosting-related questions.",
      },
      {
        icon: Settings,
        title: "Easy Management",
        description: "A simple control panel to manage your N8N instance, backups, and configurations.",
      },
      {
        icon: Clock,
        title: "Automatic Updates",
        description: "We keep your N8N instance updated to the latest stable version, hassle-free.",
      },
    ]

    export function BenefitsSection() {
      return (
        <section id="benefits" className="py-16 md:py-24 bg-secondary/30 animate-fadeIn" style={{animationDelay: '0.4s'}}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Our N8N Hosting?</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              We provide a managed N8N hosting experience that lets you focus on building amazing automations.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )
    }

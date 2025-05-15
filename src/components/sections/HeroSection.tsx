    import { Button } from "@/components/ui/button"
    import { ArrowRight } from "lucide-react"

    export function HeroSection() {
      return (
        <section id="hero" className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/30 animate-fadeIn">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-brandTeal-DEFAULT to-brandPurple-DEFAULT">
              Focus on Automation, Not Infrastructure.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Unlock the full potential of N8N with our reliable, scalable, and fully managed hosting solutions. 
              We handle the complexities, so you can build powerful workflows with ease.
            </p>
            <div className="space-x-4">
              <Button size="lg" asChild>
                <a href="#pricing">
                  View Plans <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  Contact Sales
                </a>
              </Button>
            </div>
            <div className="mt-12 text-sm text-muted-foreground">
              <p>N8N is a free and source-available fair-code licensed workflow automation tool.</p>
              <p>Our hosting service simplifies its deployment and management.</p>
            </div>
          </div>
        </section>
      )
    }

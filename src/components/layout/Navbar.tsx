    import { ModeToggle } from "@/components/ModeToggle"
    import { Button } from "@/components/ui/button"
    import { Zap } from "lucide-react" // N8N uses a lightning bolt like logo

    export function Navbar() {
      return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
            <a href="/" className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">N8N Hosting</span>
            </a>
            <nav className="flex items-center space-x-4">
              <a href="#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Pricing
              </a>
              <a href="#benefits" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Benefits
              </a>
              <a href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                FAQ
              </a>
              <Button asChild size="sm">
                <a href="#contact">Get Started</a>
              </Button>
              <ModeToggle />
            </nav>
          </div>
        </header>
      )
    }

    import { Button } from "@/components/ui/button"
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
    import { CheckCircle2 } from "lucide-react"

    const plans = [
      {
        title: "N8N Lite",
        price: "$10.00",
        frequency: "/month",
        description: "Perfect for individuals and small projects getting started with N8N.",
        features: [
          "Basic N8N Instance",
          "Up to 5,000 executions/month",
          "Community Support",
          "Regular Backups",
        ],
        bestFor: "Individuals & Hobbyists",
        cta: "Choose Lite",
        highlight: false,
      },
      {
        title: "N8N with Postgres",
        price: "$15.00",
        frequency: "/month",
        description: "Ideal for businesses needing robust data storage and more executions.",
        features: [
          "N8N Instance with Dedicated Postgres DB",
          "Up to 25,000 executions/month",
          "Priority Email Support",
          "Daily Backups",
          "Custom Domain Option",
        ],
        bestFor: "Small to Medium Businesses",
        cta: "Choose Postgres",
        highlight: true,
      },
      {
        title: "N8N Queue Mode",
        price: "$25.00",
        frequency: "/month",
        description: "For high-volume workflows and teams needing maximum performance.",
        features: [
          "N8N with Postgres & Redis Queue",
          "Up to 100,000 executions/month",
          "Dedicated Support Channel",
          "Hourly Backups & Advanced Monitoring",
          "Scalable Workers",
        ],
        bestFor: "Growing Businesses & Teams",
        cta: "Choose Queue Mode",
        highlight: false,
      },
    ]

    export function PricingSection() {
      return (
        <section id="pricing" className="py-16 md:py-24 bg-background animate-fadeIn" style={{animationDelay: '0.2s'}}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Flexible Plans for Every Need</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Choose the N8N hosting plan that best fits your automation goals and budget. All plans come with our commitment to reliability and support.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <Card key={plan.title} className={`flex flex-col ${plan.highlight ? 'border-primary ring-2 ring-primary shadow-lg' : ''}`}>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-semibold">{plan.title}</CardTitle>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                      <span className="ml-1 text-xl font-semibold text-muted-foreground">{plan.frequency}</span>
                    </div>
                    <CardDescription className="pt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm font-semibold mb-3 text-primary">{plan.bestFor}</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={plan.highlight ? "default" : "outline"}>
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )
    }

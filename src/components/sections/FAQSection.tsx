    import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

    const faqs = [
      {
        question: "What is N8N?",
        answer: "N8N is a free and source-available fair-code licensed workflow automation tool. It allows you to connect various apps and services to automate tasks without extensive coding, using a visual node-based editor.",
      },
      {
        question: "Why do I need managed N8N hosting?",
        answer: "Managed hosting takes care of the server setup, maintenance, security, and updates for your N8N instance. This allows you to focus on building automations rather than managing infrastructure.",
      },
      {
        question: "Can I migrate my existing N8N workflows?",
        answer: "Yes, you can typically export your workflows from your existing N8N instance and import them into our hosted environment. Our support team can assist with this process.",
      },
      {
        question: "What kind of support do you offer?",
        answer: "We offer different levels of support based on your plan, ranging from community support for Lite plans to dedicated support channels for higher-tier plans. All plans include support for hosting-related issues.",
      },
      {
        question: "Is my data secure?",
        answer: "Yes, we take security very seriously. We implement industry best practices, regular security updates, and backups to protect your data and workflows.",
      },
    ]

    export function FAQSection() {
      return (
        <section id="faq" className="py-16 md:py-24 bg-secondary/30 animate-fadeIn" style={{animationDelay: '0.8s'}}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Find answers to common questions about N8N and our hosting services.
            </p>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )
    }

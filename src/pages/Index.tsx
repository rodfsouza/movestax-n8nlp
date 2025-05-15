    import { Navbar } from "@/components/layout/Navbar"
    import { Footer } from "@/components/layout/Footer"
    import { HeroSection } from "@/components/sections/HeroSection"
    import { PricingSection } from "@/components/sections/PricingSection"
    import { BenefitsSection } from "@/components/sections/BenefitsSection"
    import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
    import { FAQSection } from "@/components/sections/FAQSection"
    import { ContactSection } from "@/components/sections/ContactSection"

    const IndexPage = () => {
      return (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <HeroSection />
            <PricingSection />
            <BenefitsSection />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )
    }
    
    export default IndexPage

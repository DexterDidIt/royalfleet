import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function HomePage() {
  console.log("Webhook URL:", process.env.DISCORD_WEBHOOK_URL)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}

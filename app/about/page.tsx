import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutPage } from "@/components/about-page"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <AboutPage />
      </main>
      <Footer />
    </div>
  )
}

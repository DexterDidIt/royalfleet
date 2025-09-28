import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PrivacyPage } from "@/components/privacy-page"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <PrivacyPage />
      </main>
      <Footer />
    </div>
  )
}

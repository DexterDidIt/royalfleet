import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TermsPage } from "@/components/terms-page"

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <TermsPage />
      </main>
      <Footer />
    </div>
  )
}

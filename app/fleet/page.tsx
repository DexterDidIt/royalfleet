import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FleetShowcase } from "@/components/fleet-showcase"

export default function FleetPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <FleetShowcase />
      </main>
      <Footer />
    </div>
  )
}

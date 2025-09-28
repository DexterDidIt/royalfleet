import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingFlow } from "@/components/booking-flow"

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <BookingFlow />
      </main>
      <Footer />
    </div>
  )
}

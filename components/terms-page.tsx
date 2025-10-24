import { Crown } from "lucide-react"

export function TermsPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          {/* <div className="flex justify-center">
            <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
              <Crown className="h-8 w-8 text-primary" />
            </div>
          </div> */}
          <h1 className="royal-heading text-3xl sm:text-4xl lg:text-5xl text-balance">
            Terms & <span className="royal-gradient">Services</span>
          </h1>
          <p className="royal-text text-muted-foreground">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 royal-text text-foreground">
            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">1. Service Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                By booking with Royal Fleet, you agree to these terms and conditions. Our services include luxury
                vehicle transportation with professional chauffeurs across Delhi, Gurugram, and NCR region.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">2. Booking and Reservations</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>• All bookings must be made at least 24 hours in advance</p>
                <p>• Confirmation will be provided via phone call or SMS</p>
                <p>• Changes to bookings must be made at least 4 hours before scheduled pickup</p>
                <p>• We reserve the right to decline bookings based on availability</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">3. Pricing and Payment</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>• Pricing is based on distance, vehicle type, and duration of service</p>
                <p>• Payment can be made in cash or through digital payment methods</p>
                <p>• Additional charges may apply for waiting time beyond 15 minutes</p>
                <p>• Toll charges and parking fees are additional to the base fare</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">4. Cancellation Policy</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>• Free cancellation up to 4 hours before scheduled pickup</p>
                <p>• Cancellations within 4 hours may incur a 25% charge</p>
                <p>• No-show bookings will be charged 50% of the total fare</p>
                <p>• Weather-related cancellations are handled case by case</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">5. Passenger Responsibilities</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>• Passengers must be ready at the designated pickup time</p>
                <p>• Smoking and consumption of alcohol in vehicles is prohibited</p>
                <p>• Passengers are responsible for any damage to the vehicle</p>
                <p>• Respectful behavior towards chauffeurs is expected</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">6. Safety and Insurance</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>• All vehicles are fully insured and regularly maintained</p>
                <p>• Chauffeurs are licensed and background-verified</p>
                <p>• Safety equipment including first aid kits are available in all vehicles</p>
                <p>• Emergency contact numbers are provided with each booking</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Royal Fleet's liability is limited to the cost of the service provided. We are not responsible for
                indirect damages, delays due to traffic, or circumstances beyond our control.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">8. Privacy and Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect and use personal information solely for service delivery. Your data is protected and not
                shared with third parties without consent. See our Privacy Policy for detailed information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">9. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any disputes will be resolved through direct communication first. If unresolved, matters will be handled
                according to Indian law and jurisdiction of Delhi courts.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">10. Contact Information</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>For questions about these terms:</p>
                <p>• Phone: +91 9911256736</p>
                <p>• Email: info@royalfleet.in</p>
                <p>• Service Area: Delhi, Gurugram & NCR</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

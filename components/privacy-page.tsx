import { Crown } from "lucide-react"

export function PrivacyPage() {
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
            Privacy <span className="royal-gradient">Policy</span>
          </h1>
          <p className="royal-text text-muted-foreground">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 royal-text text-foreground">
            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">1. Information We Collect</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>We collect information you provide directly to us, such as:</p>
                <p>• Name and contact information (phone number, email address)</p>
                <p>• Pickup and drop-off locations</p>
                <p>• Travel dates and times</p>
                <p>• Payment information</p>
                <p>• Communication preferences</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">2. How We Use Your Information</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>We use the information we collect to:</p>
                <p>• Provide and improve our transportation services</p>
                <p>• Process bookings and payments</p>
                <p>• Communicate with you about your bookings</p>
                <p>• Send service updates and promotional offers (with consent)</p>
                <p>• Ensure safety and security of our services</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">3. Information Sharing</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share information:
                </p>
                <p>• With our chauffeurs to provide the requested service</p>
                <p>• With payment processors to handle transactions</p>
                <p>• When required by law or to protect our rights</p>
                <p>• With your explicit consent</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
                100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">5. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and comply with
                legal obligations. Booking records are typically kept for 3 years for business and tax purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">6. Your Rights</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>You have the right to:</p>
                <p>• Access your personal information</p>
                <p>• Correct inaccurate information</p>
                <p>• Request deletion of your information</p>
                <p>• Opt-out of marketing communications</p>
                <p>• File a complaint with relevant authorities</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">7. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may use cookies to enhance user experience and analyze website traffic. You can control
                cookie settings through your browser preferences.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">8. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use third-party services for payment processing, analytics, and communication. These services
                have their own privacy policies and we encourage you to review them.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">9. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to children under 18. We do not knowingly collect personal information
                from children. If you believe we have collected such information, please contact us immediately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">10. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="royal-heading text-2xl text-foreground">11. Contact Us</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>If you have questions about this privacy policy:</p>
                <p>• Phone: +91 9911256736</p>
                <p>• Email: info@royalfleet.in</p>
                <p>• Address: Delhi, Gurugram & NCR</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

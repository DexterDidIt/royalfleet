import Link from "next/link"
import { Crown, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-primary" />
              <span className="royal-heading text-xl text-primary">Royal Fleet</span>
            </div>
            <p className="royal-text text-muted-foreground">
              Experience luxury travel with our premium chauffeur services and high-end vehicles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="royal-heading text-lg text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block royal-text text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link
                href="/fleet"
                className="block royal-text text-muted-foreground hover:text-primary transition-colors"
              >
                Our Fleet
              </Link>
              <Link
                href="/about"
                className="block royal-text text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/booking"
                className="block royal-text text-muted-foreground hover:text-primary transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="royal-heading text-lg text-foreground">Legal</h3>
            <div className="space-y-2">
              <Link
                href="/terms"
                className="block royal-text text-muted-foreground hover:text-primary transition-colors"
              >
                Terms & Services
              </Link>
              <Link
                href="/privacy"
                className="block royal-text text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="block royal-text text-muted-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="royal-heading text-lg text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="royal-text text-muted-foreground">+91 9968290156</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="royal-text text-muted-foreground">info@royalfleet.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="royal-text text-muted-foreground">Delhi/Gurugram</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="royal-text text-center text-muted-foreground">
            © 2025 Royal Fleet. All rights reserved. Experience luxury travel like royalty.
          </p>
        </div>
      </div>
    </footer>
  )
}

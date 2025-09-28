import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"

const features = [
  "24/7 availability for your convenience",
  "Professional chauffeurs with years of experience",
  "Luxury vehicles maintained to the highest standards",
  "Competitive pricing with transparent billing",
  "Easy booking process with instant confirmation",
  "Comprehensive insurance coverage",
  "Real-time tracking and updates",
  "Personalized service tailored to your needs",
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="royal-heading text-3xl sm:text-4xl lg:text-5xl text-balance">
                Travel Like <span className="royal-gradient">Royalty</span>
              </h2>
              <p className="royal-text text-xl text-muted-foreground text-balance">
                At Royal Fleet, we don't just provide transportation – we deliver an experience. Every journey with us
                is crafted to make you feel like royalty.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span className="royal-text text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                <Link href="/booking" className="flex items-center space-x-2">
                  <span>Start Your Journey</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <img
                src="https://static3.toyotabharat.com/images/showroom/innova-mmc/unmatched-unrivaled-banner1600x850.jpg"
                alt="Professional chauffeur with luxury vehicle"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

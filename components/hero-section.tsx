"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Crown, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with luxury pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute inset-0 bg-[url('/luxury-car-interior-dark-elegant.jpg')] bg-cover bg-center opacity-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Crown icon */}
          {/* <div className="flex justify-center">
            <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
              <Crown className="h-12 w-12 text-primary" />
            </div>
          </div> */}

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="royal-heading text-4xl sm:text-5xl lg:text-7xl text-balance">
              Experience <span className="royal-gradient">Royal</span> Travel
            </h1>
            <p className="royal-text text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Premium chauffeur services with luxury vehicles for the most discerning travelers. Your journey begins
              with excellence.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold group"
            >
              <Link href="/booking" className="flex items-center space-x-2">
                <span>Book Your Royal Ride</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg bg-transparent"
            >
              <Link href="/fleet">View Our Fleet</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 space-y-4">
            <p className="royal-text text-sm text-muted-foreground">
              Trusted by premium travelers across Delhi & Gurugram
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                {/* <span className="royal-text text-sm">24/7 Service</span> */}
                <span className="royal-text text-sm">24 hours Advance booking</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="royal-text text-sm">Professional Chauffeurs</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="royal-text text-sm">Luxury Fleet</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Business Executive",
    content:
      "Royal Fleet transformed my daily commute. The professionalism and luxury they provide is unmatched. Truly a royal experience!",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Event Planner",
    content:
      "For our high-profile clients, we only trust Royal Fleet. Their attention to detail and premium service never disappoints.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Corporate Manager",
    content:
      "Punctual, professional, and luxurious. Royal Fleet has become our go-to choice for all executive transportation needs.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="royal-heading text-3xl sm:text-4xl lg:text-5xl text-balance">
            What Our <span className="royal-gradient">Clients</span> Say
          </h2>
          <p className="royal-text text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Don't just take our word for it. Here's what our valued clients have to say about their royal experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="flex justify-center">
                  <Quote className="h-8 w-8 text-primary" />
                </div>

                <p className="royal-text text-foreground text-center leading-relaxed">"{testimonial.content}"</p>

                <div className="flex justify-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <div className="text-center space-y-1">
                  <h4 className="royal-heading text-lg text-foreground">{testimonial.name}</h4>
                  <p className="royal-text text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

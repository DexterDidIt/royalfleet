"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, Users, Check } from "lucide-react"
import type { BookingData } from "@/components/booking-flow"

interface Car {
  id: string
  name: string
  type: string
  capacity: string
  features: string[]
  image: string
  description: string
}

const cars: Car[] = [
  {
    id: "innova",
    name: "Toyota Innova",
    type: "Premium SUV",
    capacity: "6+1 Seater",
    features: ["Premium AC", "GPS Navigation", "Professional Chauffeur", "Spacious Interior", "Luggage Space"],
    image:
      "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80",
    description:
      "Perfect for family trips, group travel, and long-distance journeys with premium comfort",
  },
  {
    id: "hycross",
    name: "Toyota Innova Hycross",
    type: "Hybrid SUV",
    capacity: "6+1 Seater",
    features: ["Premium AC", "GPS Navigation", "Professional Chauffeur", "Modern Interiors", "Fuel Efficient Hybrid"],
    image: "/fleet-images/hycross.png",
    description:
      "Eco-friendly hybrid SUV offering fuel efficiency and modern luxury for family and corporate travel",
  },
  {
    id: "ciaz",
    name: "Maruti Ciaz",
    type: "Executive Sedan",
    capacity: "4+1 Seater",
    features: ["Premium AC", "GPS Navigation", "Professional Chauffeur", "Fuel Efficient", "Executive Comfort"],
    image: "/fleet-images/city.avif",
    description:
      "Ideal for business travel and executive transportation with elegant design and fuel efficiency",
  },
  {
    id: "city",
    name: "Honda City",
    type: "Luxury Sedan",
    capacity: "4+1 Seater",
    features: ["Premium AC", "GPS Navigation", "Professional Chauffeur", "Luxury Interiors", "Smooth Ride"],
    image: "/fleet-images/city.jpg",
    description:
      "Premium sedan combining elegance and performance for executives and family travel",
  },
  {
    id: "swift-dzire",
    name: "Swift Dzire",
    type: "Premium Sedan",
    capacity: "4+1 Seater",
    features: ["Premium AC", "GPS Navigation", "Professional Chauffeur", "Compact Design", "City Optimized"],
    image: "/fleet-images/dzire.jpg",
    description:
      "Perfect for quick city trips, airport transfers, and solo or couple travel with compact comfort",
  },
]

interface CarSelectionStepProps {
  data: BookingData
  updateData: (data: Partial<BookingData>) => void
  onNext: () => void
  onPrev: () => void
}

export function CarSelectionStep({ data, updateData, onNext, onPrev }: CarSelectionStepProps) {
  const [error, setError] = useState("")

  const validateAndNext = () => {
    if (!data.selectedCar) {
      setError("Please select a vehicle to continue")
      return
    }
    setError("")
    onNext()
  }

  const selectCar = (carId: string) => {
    updateData({ selectedCar: carId })
    setError("")
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h3 className="royal-heading text-lg text-foreground">Choose Your Royal Ride</h3>
        <p className="royal-text text-sm text-muted-foreground">
          Select the perfect vehicle for your journey
        </p>
      </div>

      {/* Car list */}
      <div className="space-y-8">
        {cars.map((car) => {
          const isSelected = data.selectedCar === car.id

          return (
            <div key={car.id} className="space-y-4">
              <Card
                className={`cursor-pointer transition-all duration-300 hover:border-primary/50 ${
                  isSelected ? "border-primary bg-primary/5" : "border-border bg-card"
                }`}
                onClick={() => selectCar(car.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    {/* Car image */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-16 bg-muted rounded-lg overflow-hidden">
                        <img
                          src={car.image || "/placeholder.svg"}
                          alt={car.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src =
                              "/placeholder.svg?height=64&width=80&text=" + encodeURIComponent(car.name)
                          }}
                        />
                      </div>
                    </div>

                    {/* Car details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="royal-heading text-lg text-foreground">{car.name}</h4>
                          <p className="royal-text text-sm text-muted-foreground">{car.type}</p>
                        </div>
                        {isSelected && (
                          <div className="flex-shrink-0">
                            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                              <Check className="h-4 w-4 text-primary-foreground" />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span className="royal-text">{car.capacity}</span>
                        </div>
                      </div>

                      <p className="royal-text text-sm text-foreground">{car.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {car.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-muted text-xs royal-text text-muted-foreground rounded-md"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Buttons directly below selected car */}
              {isSelected && (
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    variant="outline"
                    onClick={onPrev}
                    className="flex-1 border-border text-foreground hover:bg-muted group bg-transparent"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back</span>
                  </Button>
                  <Button
                    onClick={validateAndNext}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground group"
                  >
                    <span>Select Fare</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Validation error */}
      {error && <p className="text-sm text-destructive text-center">{error}</p>}
    </div>
  )
}

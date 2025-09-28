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
    features: ["AC", "GPS", "Professional Chauffeur", "Spacious Interior"],
    image: "/placeholder.svg?key=innova",
    description: "Perfect for family trips and group travel with premium comfort",
  },
  {
    id: "ciaz",
    name: "Maruti Ciaz",
    type: "Executive Sedan",
    capacity: "4+1 Seater",
    features: ["AC", "GPS", "Professional Chauffeur", "Fuel Efficient"],
    image: "/placeholder.svg?key=ciaz",
    description: "Ideal for business travel and executive transportation",
  },
  {
    id: "ertiga",
    name: "Maruti Ertiga",
    type: "Compact SUV",
    capacity: "6+1 Seater",
    features: ["AC", "GPS", "Professional Chauffeur", "Comfortable Seating"],
    image: "/placeholder.svg?key=ertiga",
    description: "Great balance of space and efficiency for medium groups",
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
      <div className="text-center space-y-2">
        <h3 className="royal-heading text-lg text-foreground">Choose Your Royal Ride</h3>
        <p className="royal-text text-sm text-muted-foreground">Select the perfect vehicle for your journey</p>
      </div>

      <div className="space-y-4">
        {cars.map((car) => (
          <Card
            key={car.id}
            className={`cursor-pointer transition-all duration-300 hover:border-primary/50 ${
              data.selectedCar === car.id ? "border-primary bg-primary/5" : "border-border bg-card"
            }`}
            onClick={() => selectCar(car.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                {/* Car Image */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-16 bg-muted rounded-lg overflow-hidden">
                    <img
                      src={car.image || "/placeholder.svg"}
                      alt={car.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=64&width=80&text=" + encodeURIComponent(car.name)
                      }}
                    />
                  </div>
                </div>

                {/* Car Details */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="royal-heading text-lg text-foreground">{car.name}</h4>
                      <p className="royal-text text-sm text-muted-foreground">{car.type}</p>
                    </div>
                    {data.selectedCar === car.id && (
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
        ))}
      </div>

      {error && <p className="text-sm text-destructive text-center">{error}</p>}

      <div className="flex flex-col sm:flex-row gap-3 pt-4">
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
          <span>Continue to Confirmation</span>
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  )
}

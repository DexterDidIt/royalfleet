"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Crown } from "lucide-react"
import { TripDetailsStep } from "@/components/booking-steps/trip-details-step"
import { PassengerDetailsStep } from "@/components/booking-steps/passenger-details-step"
import { CarSelectionStep } from "@/components/booking-steps/car-selection-step"
import { ConfirmationStep } from "@/components/booking-steps/confirmation-step"
import { Button } from "@/components/ui/button"
import { PriceStep } from "./booking-steps/pricing_step"

export interface BookingData {
  pickupLocation: string
  dropoffLocation: string
  date: string
  time: string
  name: string
  mobile: string
  email: string
  selectedCar: string
  requestCallback: boolean
  priceOption?: string
  totalPrice?: number
  extraKms?: number
  extraHours?: number
  noOfPassengers?: number
  bookingForWomen?: boolean
}

const steps = [
  { id: 1, title: "Trip Details", description: "Where and when" },
  { id: 2, title: "Passenger Info", description: "Your details" },
  { id: 3, title: "Select Vehicle", description: "Choose your ride" },
  { id: 4, title: "Select Fare", description: "Pick your price option" },
  { id: 5, title: "Confirmation", description: "Review & book" },
]

export function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState<BookingData>({
    pickupLocation: "",
    dropoffLocation: "",
    date: "",
    time: "",
    name: "",
    mobile: "",
    email: "",
    selectedCar: "",
    requestCallback: false,
    priceOption: "",
    totalPrice: 0,
    extraKms: 0,
    extraHours: 0,
    noOfPassengers: 1,
    bookingForWomen: false
  })

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
      // Scroll to top smoothly
    window.scrollTo({ top: 30, behavior: "smooth" })
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      // Scroll to top smoothly
    window.scrollTo({ top: 30, behavior: "smooth" })
    }
  }

  const progress = (currentStep / 4) * 100

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <TripDetailsStep data={bookingData} updateData={updateBookingData} onNext={nextStep} />
      case 2:
        return (
          <PassengerDetailsStep data={bookingData} updateData={updateBookingData} onNext={nextStep} onPrev={prevStep} />
        )
      case 3:
        return (
          <CarSelectionStep data={bookingData} updateData={updateBookingData} onNext={nextStep} onPrev={prevStep} />
        )
      case 4:
        return (
          <PriceStep data={bookingData} updateData={updateBookingData} onNext={nextStep} onPrev={prevStep} />
        )
      case 5:
        return <ConfirmationStep data={bookingData} onPrev={prevStep} />
      default:
        return (
          <div className="text-center space-y-4 py-8">
            <div className="text-destructive">
              <Crown className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="royal-heading text-lg">Oops! Something went wrong</h3>
              <p className="royal-text text-sm text-muted-foreground">
                We encountered an unexpected error. Please refresh the page and try again.
              </p>
            </div>
            <Button
              onClick={() => setCurrentStep(1)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Start Over
            </Button>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          {/* <div className="flex justify-center">
            <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
              <Crown className="h-8 w-8 text-primary" />
            </div>
          </div> */}
          <h1 className="royal-heading text-3xl sm:text-4xl text-balance">
            Book Your <span className="royal-gradient">Royal</span> Ride
          </h1>
          <p className="royal-text text-muted-foreground">Experience luxury travel in just a few simple steps</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center space-y-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                    currentStep >= step.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step.id}
                </div>
                <div className="text-center">
                  <p className="royal-text text-xs font-medium text-foreground">{step.title}</p>
                  <p className="royal-text text-xs text-muted-foreground hidden sm:block">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="royal-heading text-xl text-center">
              Step {currentStep}: {steps[currentStep - 1].title}
            </CardTitle>
          </CardHeader>
          <CardContent>{renderStep()}</CardContent>
        </Card>
      </div>
    </div>
  )
}

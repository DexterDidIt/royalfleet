"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MapPin, User, Car, Crown, CheckCircle } from "lucide-react"
import type { BookingData } from "@/components/booking-flow"
import { submitBooking } from "@/lib/discord-utils"

interface ConfirmationStepProps {
  data: BookingData
  onPrev: () => void
}

export function ConfirmationStep({ data, onPrev }: ConfirmationStepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      const bookingData = {
        pickupLocation: data.pickupLocation,
        dropoffLocation: data.dropoffLocation,
        pickupDate: data.date,
        pickupTime: data.time,
        firstName: data.name.split(" ")[0] || data.name,
        lastName: data.name.split(" ").slice(1).join(" ") || "",
        email: data.email || "",
        phone: data.mobile,
        selectedCar: getCarName(data.selectedCar),
        passengers: "1",
        specialRequests: data.requestCallback ? "Callback requested" : "",
      }

      await submitBooking(bookingData)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting booking:", error)
      alert("There was an error submitting your booking. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center space-y-6 py-8">
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-green-500/10 border border-green-500/20">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="royal-heading text-2xl text-foreground">Booking Confirmed!</h3>
          <p className="royal-text text-muted-foreground">
            {data.requestCallback
              ? "We'll call you shortly to complete your booking."
              : "Your royal ride has been booked successfully. We'll contact you shortly with confirmation details."}
          </p>
        </div>

        <div className="space-y-4">
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-center space-x-2">
                <Crown className="h-5 w-5 text-primary" />
                <span className="royal-text text-sm text-foreground">Thank you for choosing Royal Fleet</span>
              </div>
            </CardContent>
          </Card>

          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(":")
    const date = new Date()
    date.setHours(Number.parseInt(hours), Number.parseInt(minutes))
    return date.toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  const getCarName = (carId: string) => {
    const carNames: Record<string, string> = {
      innova: "Toyota Innova",
      ciaz: "Maruti Ciaz",
      ertiga: "Maruti Ertiga",
    }
    return carNames[carId] || carId
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="royal-heading text-lg text-foreground">Review Your Booking</h3>
        <p className="royal-text text-sm text-muted-foreground">Please review your details before confirming</p>
      </div>

      <div className="space-y-4">
        {/* Trip Details */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="royal-heading text-base flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Trip Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="royal-text text-sm text-muted-foreground">From</p>
              <p className="royal-text text-foreground">{data.pickupLocation}</p>
            </div>
            <div>
              <p className="royal-text text-sm text-muted-foreground">To</p>
              <p className="royal-text text-foreground">{data.dropoffLocation}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="royal-text text-sm text-muted-foreground">Date</p>
                <p className="royal-text text-foreground">{formatDate(data.date)}</p>
              </div>
              <div>
                <p className="royal-text text-sm text-muted-foreground">Time</p>
                <p className="royal-text text-foreground">{formatTime(data.time)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Passenger Details */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="royal-heading text-base flex items-center space-x-2">
              <User className="h-4 w-4 text-primary" />
              <span>Passenger Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="royal-text text-sm text-muted-foreground">Name</p>
              <p className="royal-text text-foreground">{data.name}</p>
            </div>
            <div>
              <p className="royal-text text-sm text-muted-foreground">Mobile</p>
              <p className="royal-text text-foreground">+91 {data.mobile}</p>
            </div>
          </CardContent>
        </Card>

        {/* Vehicle Details */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="royal-heading text-base flex items-center space-x-2">
              <Car className="h-4 w-4 text-primary" />
              <span>Selected Vehicle</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="royal-text text-foreground">{getCarName(data.selectedCar)}</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Button
          variant="outline"
          onClick={onPrev}
          className="flex-1 border-border text-foreground hover:bg-muted group bg-transparent"
          disabled={isSubmitting}
        >
          <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </Button>
        <Button
          onClick={handleSubmit}
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              <span>Confirming...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Crown className="h-5 w-5" />
              <span>Confirm Royal Booking</span>
            </div>
          )}
        </Button>
      </div>
    </div>
  )
}

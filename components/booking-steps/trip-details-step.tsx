"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, MapPin, Calendar, Clock } from "lucide-react"
import type { BookingData } from "@/components/booking-flow"

interface TripDetailsStepProps {
  data: BookingData
  updateData: (data: Partial<BookingData>) => void
  onNext: () => void
}

export function TripDetailsStep({ data, updateData, onNext }: TripDetailsStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateAndNext = () => {
    const newErrors: Record<string, string> = {}

    if (!data.pickupLocation.trim()) {
      newErrors.pickupLocation = "Pickup location is required"
    }
    if (!data.dropoffLocation.trim()) {
      newErrors.dropoffLocation = "Drop-off location is required"
    }
    if (!data.date) {
      newErrors.date = "Date is required"
    } else {
      const selectedDate = new Date(data.date)
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(0, 0, 0, 0)

      if (selectedDate < tomorrow) {
        newErrors.date = "Date must be at least 24 hours ahead"
      }
    }
    if (!data.time) {
      newErrors.time = "Time is required"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      onNext()
    }
  }

  const getMinDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split("T")[0]
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {/* Pickup Location */}
        <div className="space-y-2">
          <Label htmlFor="pickup" className="royal-text font-medium flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Pickup Location</span>
          </Label>
          <Input
            id="pickup"
            placeholder="Enter full pickup address"
            value={data.pickupLocation}
            onChange={(e) => updateData({ pickupLocation: e.target.value })}
            className={`royal-text ${errors.pickupLocation ? "border-destructive" : ""}`}
          />
          {errors.pickupLocation && <p className="text-sm text-destructive">{errors.pickupLocation}</p>}
        </div>

        {/* Dropoff Location */}
        <div className="space-y-2">
          <Label htmlFor="dropoff" className="royal-text font-medium flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Drop-off Location</span>
          </Label>
          <Input
            id="dropoff"
            placeholder="Enter full drop-off address"
            value={data.dropoffLocation}
            onChange={(e) => updateData({ dropoffLocation: e.target.value })}
            className={`royal-text ${errors.dropoffLocation ? "border-destructive" : ""}`}
          />
          {errors.dropoffLocation && <p className="text-sm text-destructive">{errors.dropoffLocation}</p>}
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date" className="royal-text font-medium flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>Date</span>
            </Label>
            <Input
              id="date"
              type="date"
              min={getMinDate()}
              value={data.date}
              onChange={(e) => updateData({ date: e.target.value })}
              className={`royal-text ${errors.date ? "border-destructive" : ""}`}
            />
            {errors.date && <p className="text-sm text-destructive">{errors.date}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="time" className="royal-text font-medium flex items-center space-x-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Time</span>
            </Label>
            <Input
              id="time"
              type="time"
              value={data.time}
              onChange={(e) => updateData({ time: e.target.value })}
              className={`royal-text ${errors.time ? "border-destructive" : ""}`}
            />
            {errors.time && <p className="text-sm text-destructive">{errors.time}</p>}
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Button
          onClick={validateAndNext}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
          size="lg"
        >
          <span>Continue to Passenger Details</span>
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  )
}

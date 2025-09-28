"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, ArrowLeft, User, Phone } from "lucide-react"
import type { BookingData } from "@/components/booking-flow"

interface PassengerDetailsStepProps {
  data: BookingData
  updateData: (data: Partial<BookingData>) => void
  onNext: () => void
  onPrev: () => void
}

export function PassengerDetailsStep({ data, updateData, onNext, onPrev }: PassengerDetailsStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateAndNext = () => {
    const newErrors: Record<string, string> = {}

    if (!data.name.trim()) {
      newErrors.name = "Name is required"
    }
    if (!data.mobile.trim()) {
      newErrors.mobile = "Mobile number is required"
    } else if (!/^[6-9]\d{9}$/.test(data.mobile.replace(/\D/g, ""))) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      onNext()
    }
  }

  const handleRequestCallback = () => {
    if (!data.mobile.trim()) {
      setErrors({ mobile: "Mobile number is required for callback" })
      return
    }
    if (!/^[6-9]\d{9}$/.test(data.mobile.replace(/\D/g, ""))) {
      setErrors({ mobile: "Please enter a valid 10-digit mobile number" })
      return
    }

    updateData({ requestCallback: true })
    // Here you would typically send the callback request
    alert("Callback requested! We'll call you shortly.")
  }

  const formatMobileNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    return numbers.slice(0, 10)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="royal-text font-medium flex items-center space-x-2">
            <User className="h-4 w-4 text-primary" />
            <span>Full Name</span>
          </Label>
          <Input
            id="name"
            placeholder="Enter your full name"
            value={data.name}
            onChange={(e) => updateData({ name: e.target.value })}
            className={`royal-text ${errors.name ? "border-destructive" : ""}`}
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
        </div>

        {/* Mobile Number */}
        <div className="space-y-2">
          <Label htmlFor="mobile" className="royal-text font-medium flex items-center space-x-2">
            <Phone className="h-4 w-4 text-primary" />
            <span>Mobile Number</span>
          </Label>
          <div className="flex">
            <div className="flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md">
              <span className="royal-text text-sm text-muted-foreground">+91</span>
            </div>
            <Input
              id="mobile"
              placeholder="Enter 10-digit mobile number"
              value={data.mobile}
              onChange={(e) => updateData({ mobile: formatMobileNumber(e.target.value) })}
              className={`royal-text rounded-l-none ${errors.mobile ? "border-destructive" : ""}`}
              maxLength={10}
            />
          </div>
          {errors.mobile && <p className="text-sm text-destructive">{errors.mobile}</p>}
        </div>

        {/* Request Callback Option */}
        <div className="p-4 bg-muted/50 rounded-lg border border-border">
          <div className="space-y-3">
            <h3 className="royal-heading text-lg text-foreground">Need Assistance?</h3>
            <p className="royal-text text-sm text-muted-foreground">
              Not sure about your booking details? Request a callback and our team will help you complete your booking.
            </p>
            <Button
              variant="outline"
              onClick={handleRequestCallback}
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Phone className="mr-2 h-4 w-4" />
              Request Callback
            </Button>
          </div>
        </div>
      </div>

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
          <span>Continue to Vehicle Selection</span>
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  )
}

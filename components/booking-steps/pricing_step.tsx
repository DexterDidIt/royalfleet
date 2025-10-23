"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Info, Plus, Minus } from "lucide-react"
import type { BookingData } from "@/components/booking-flow"

interface PriceStepsProps {
  data: BookingData
  updateData: (data: Partial<BookingData>) => void
  onNext: () => void
  onPrev: () => void
}

// 🔹 Pricing + Extra Info for each car
const carPricing: Record<
  string,
  {
    options: { label: string; value: string; price: number }[]
    extraKm: number
    extraHr: number
    note?: string
  }
> = {
  "innova": {
    options: [
      { label: "4 Hours / 40 Km", value: "4 Hours / 40 Km", price: 1600 },
      { label: "8 Hours / 80 Km", value: "8 Hours / 80 Km", price: 2600 },
    ],
    extraKm: 20,
    extraHr: 250,
    note: "Excludes toll & parking charges",
  },
  "hycross": {
    options: [
      { label: "4 Hours / 40 Km", value: "4 Hours / 40 Km", price: 1800 },
      { label: "8 Hours / 80 Km", value: "8 Hours / 80 Km", price: 2800 },
    ],
    extraKm: 23,
    extraHr: 250,
    note: "Excludes toll & parking charges",
  },
  "ciaz": {
    options: [
      { label: "4 Hours / 40 Km", value: "4 Hours / 40 Km", price: 1400 },
      { label: "8 Hours / 80 Km", value: "8 Hours / 80 Km", price: 2200 },
    ],
    extraKm: 17,
    extraHr: 180,
    note: "Excludes toll & parking charges",
  },
  "city": {
    options: [
      { label: "4 Hours / 40 Km", value: "4 Hours / 40 Km", price: 1400 },
      { label: "8 Hours / 80 Km", value: "8 Hours / 80 Km", price: 2200 },
    ],
    extraKm: 17,
    extraHr: 180,
    note: "Excludes toll & parking charges",
  },
  "swift-dzire": {
    options: [
      { label: "4 Hours / 40 Km", value: "4 Hours / 40 Km", price: 1100 },
      { label: "8 Hours / 80 Km", value: "8 Hours / 80 Km", price: 1600 },
    ],
    extraKm: 15,
    extraHr: 150,
    note: "Excludes toll & parking charges",
  },
}

export function PriceStep({ data, updateData, onNext, onPrev }: PriceStepsProps) {
  const [selected, setSelected] = useState<string>(data.priceOption || "")
  const [extraKms, setExtraKms] = useState<number>(0)
  const [extraHours, setExtraHours] = useState<number>(0)

  const selectedCar = data.selectedCar || ""
  const carData = carPricing[selectedCar]

  const selectedOption = carData?.options.find((opt) => opt.value === selected)
  const basePrice = selectedOption?.price || 0

  const totalPrice =
    basePrice + extraKms * (carData?.extraKm || 0) + extraHours * (carData?.extraHr || 0)

  const handleSelect = (optionValue: string, price: number) => {
    setSelected(optionValue)
    updateData({ priceOption: optionValue })
  }

  const handleNext = () => {
    if (selected) {
      updateData({ totalPrice, extraKms, extraHours })
      onNext()
    }
  }

  return (
    <div className="space-y-6">
      {!carData ? (
        <p className="text-muted-foreground text-center py-10">
          Please select a vehicle first to view pricing options.
        </p>
      ) : (
        <>
          {/* Pricing Options */}
          <div className="grid gap-4">
            {carData.options.map((opt) => (
              <Button
                key={opt.value}
                variant={selected === opt.value ? "default" : "outline"}
                onClick={() => handleSelect(opt.value, opt.price)}
                className={`w-full py-6 text-lg font-medium justify-between transition-all ${
                  selected === opt.value ? "bg-primary text-primary-foreground" : ""
                }`}
              >
                <span>{opt.label}</span>
                <span>₹{opt.price}</span>
              </Button>
            ))}
          </div>

          {/* Extra Charges */}
          {selected && (
            <div className="mt-6 border border-border rounded-md p-4 bg-muted/30 space-y-3">
              <div className="flex items-center space-x-2">
                <Info className="h-4 w-4 text-primary" />
                <h4 className="text-sm font-semibold text-foreground">Add Extra Usage</h4>
              </div>

              {/* Extra KM Counter */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">
                  Extra Km (₹{carData.extraKm} per km)
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setExtraKms((v) => Math.max(0, v - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{extraKms}</span>
                  <Button size="icon" variant="outline" onClick={() => setExtraKms((v) => v + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Extra Hours Counter */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">
                  Extra Hours (₹{carData.extraHr} per hr)
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setExtraHours((v) => Math.max(0, v - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{extraHours}</span>
                  <Button size="icon" variant="outline" onClick={() => setExtraHours((v) => v + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="border-t border-border pt-3 text-sm text-muted-foreground">
                <p>{carData.note}</p>
              </div>

              {/* Total Summary */}
              <div className="border-t border-border pt-4 flex justify-between text-base font-semibold">
                <span>Total Price:</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>
          )}
        </>
      )}

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
          onClick={handleNext}
          disabled={!selected}
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground group"
        >
          <span>Continue to Confirmation</span>
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  )
}

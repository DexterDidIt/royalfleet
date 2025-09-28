export interface BookingData {
  pickupLocation: string
  dropoffLocation: string
  pickupDate: string
  pickupTime: string
  firstName: string
  lastName: string
  email: string
  phone: string
  selectedCar: string
  passengers?: string
  specialRequests?: string
}

export interface ContactData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export async function submitBooking(data: BookingData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || "Failed to submit booking")
    }

    return result
  } catch (error) {
    console.error("Booking submission error:", error)
    throw error
  }
}

export async function submitContactForm(data: ContactData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || "Failed to submit contact form")
    }

    return result
  } catch (error) {
    console.error("Contact form submission error:", error)
    throw error
  }
}

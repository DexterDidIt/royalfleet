import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    const requiredFields = [
      "pickupLocation",
      "dropoffLocation",
      "pickupDate",
      "pickupTime",
      "firstName",
      "lastName",
      "email",
      "phone",
      "selectedCar",
    ]
    const missingFields = requiredFields.filter((field) => !data[field])

    if (missingFields.length > 0) {
      return NextResponse.json({ error: `Missing required fields: ${missingFields.join(", ")}` }, { status: 400 })
    }

    // Format Discord message for booking
    const discordMessage = {
      embeds: [
        {
          title: "🚗 New Royal Fleet Booking Request",
          color: 0xd4af37, // Gold color
          fields: [
            {
              name: "📍 Trip Details",
              value: `**From:** ${data.pickupLocation}\n**To:** ${data.dropoffLocation}\n**Date:** ${data.pickupDate}\n**Time:** ${data.pickupTime}`,
              inline: false,
            },
            {
              name: "👤 Passenger Information",
              value: `**Name:** ${data.firstName} ${data.lastName}\n**Email:** ${data.email}\n**Phone:** ${data.phone}`,
              inline: true,
            },
            {
              name: "🚙 Vehicle Selection",
              value: `**Car:** ${data.selectedCar}\n**Passengers:** ${data.passengers || "Not specified"}\n**Special Requests:** ${data.specialRequests || "None"}`,
              inline: true,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Royal Fleet Booking System",
          },
        },
      ],
    }

    // Send to Discord webhook
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL
    if (!webhookUrl) {
      console.error("Discord webhook URL not configured")
      return NextResponse.json({ error: "Webhook configuration missing" }, { status: 500 })
    }

    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordMessage),
    })

    if (!discordResponse.ok) {
      throw new Error(`Discord webhook failed: ${discordResponse.status}`)
    }

    return NextResponse.json({
      success: true,
      message: "Booking request submitted successfully",
    })
  } catch (error) {
    console.error("Booking submission error:", error)
    return NextResponse.json({ error: "Failed to submit booking request" }, { status: 500 })
  }
}

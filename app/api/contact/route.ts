import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    const requiredFields = ["name", "email", "subject", "message"]
    const missingFields = requiredFields.filter((field) => !data[field])

    if (missingFields.length > 0) {
      return NextResponse.json({ error: `Missing required fields: ${missingFields.join(", ")}` }, { status: 400 })
    }

    // Format Discord message for contact form
    const discordMessage = {
      embeds: [
        {
          title: "📧 New Contact Form Submission",
          color: 0x1a1a1a, // Dark color
          fields: [
            {
              name: "👤 Contact Information",
              value: `**Name:** ${data.name}\n**Email:** ${data.email}\n**Phone:** ${data.phone || "Not provided"}`,
              inline: false,
            },
            {
              name: "📝 Subject",
              value: data.subject,
              inline: false,
            },
            {
              name: "💬 Message",
              value: data.message.length > 1000 ? data.message.substring(0, 1000) + "..." : data.message,
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Royal Fleet Contact Form",
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
      message: "Contact form submitted successfully",
    })
  } catch (error) {
    console.error("Contact form submission error:", error)
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 })
  }
}

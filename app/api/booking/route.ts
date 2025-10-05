import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log(data);

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
    ];
    // const missingFields = requiredFields.filter((field) => !data[field])
    const missingFields = requiredFields.filter(
      (field) => data[field] === undefined || data[field] === null
    );

    if (missingFields.length > 0) {
      console.log("error here");
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    // Format Discord message for booking
    const discordMessage = {
      content: "🚨 New booking received!",
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
              value: `**Car:** ${data.selectedCar}\n**Passengers:** ${
                data.passengers || "Not specified"
              }\n**Special Requests:** ${data.specialRequests || "None"}`,
              inline: true,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Royal Fleet Booking System",
          },
        },
      ],
    };

    // Send to Discord webhook
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    console.log(webhookUrl);
    if (!webhookUrl) {
      console.error("Discord webhook URL not configured");
      return NextResponse.json(
        { error: "Webhook configuration missing" },
        { status: 500 }
      );
    }
    console.log("Stringify josn below");
    console.log(JSON.stringify(discordMessage));

    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordMessage),
    });

    if (!discordResponse.ok) {
      throw new Error(`Discord webhook failed: ${discordResponse.status}`);
    }

    //function to get token
    async function fetchAuthToken(): Promise<string> {
      const customerId = "C-8693763AF295416";
      const base64Key = "Q2xhc2hvZmNsYW5zQDM2OQ==";
      const scope = "NEW";

      const url = `https://cpaas.messagecentral.com/auth/v1/authentication/token?customerId=${encodeURIComponent(
        customerId
      )}&key=${encodeURIComponent(base64Key)}&scope=${encodeURIComponent(
        scope
      )}`;

      try {
        const response = await fetch(url, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch token: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();

        if (!data.token) {
          throw new Error("authToken not found in response");
        }

        return data.token;
      } catch (error) {
        console.error("❌ Error fetching token:", error);
        throw error;
      }
    }

    //function to send confirmation sms
    async function sendConfSms(authToken: string): Promise<string> {
      const type = "SMS";
      const mobileNumber = data.phone;
      const flowType = "SMS";
      const messageType = "PROMOTIONAL";
      const senderId = "UTOMOB";
      // Welcome%20to%20Message%20Central.%20We%20are%20delighted%20to%20have%20you%20here!%20-%20Powered%20by%20U2opia
      const message = encodeURIComponent("Your booking is confirmed. Thank you for choosing us.");

      console.log(data.phone)
      const url = `https://cpaas.messagecentral.com/verification/v3/send?countryCode=91&flowT
ype=SMS&mobileNumber=${mobileNumber}&senderId=UTOMOB&type=SMS&message=${message}&messageType=PROMOTIONAL`;

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            'authToken': authToken
          }
        });

        console.log(response.body)

        if (!response.ok) {
          throw new Error(
            `Failed to send SMS: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        return data.responseCode;
      } catch (e) {
        throw Error(`Error while sending confirmation sms ${e}`);
      }
    }

    if (discordResponse.ok) {
      //Get the auth token
      const token = await fetchAuthToken();
      console.log("Fetched Token: ", token);
      //use auth token to Send message on mobile
      const smsResCode = await sendConfSms(token);
    }

    return NextResponse.json({
      success: true,
      message: "Booking request submitted successfully",
    });
  } catch (error) {
    console.error("Booking submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit booking request" },
      { status: 500 }
    );
  }
}

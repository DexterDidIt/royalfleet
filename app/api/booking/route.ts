import { TripDetailsStep } from "@/components/booking-steps/trip-details-step";
import PagesManifestPlugin from "next/dist/build/webpack/plugins/pages-manifest-plugin";
import { type NextRequest, NextResponse } from "next/server";
import FormData from "form-data";
import Mailgun from "mailgun.js";
import { da } from "date-fns/locale";


function generateBookingEmailHTML(data: any): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation - Royal Fleet</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #0a0a0a;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(212, 175, 55, 0.15);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2416 100%); padding: 40px 30px; text-align: center; border-bottom: 2px solid #d4af37;">
                            <h1 style="margin: 0; color: #d4af37; font-size: 32px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">Royal Fleet</h1>
                            <p style="margin: 10px 0 0 0; color: #c9c9c9; font-size: 14px; letter-spacing: 1px;">www.royalfleet.in</p>
                        </td>
                    </tr>

                    <!-- Greeting -->
                    <tr>
                        <td style="padding: 40px 30px 30px 30px;">
                            <h2 style="margin: 0 0 20px 0; color: #d4af37; font-size: 24px; font-weight: 600;">Booking Request Received</h2>
                            <p style="margin: 0; color: #e0e0e0; font-size: 16px; line-height: 1.6;">
                                Hi <strong style="color: #d4af37;">${data.firstName} ${data.lastName}</strong>,
                            </p>
                            <p style="margin: 15px 0 0 0; color: #c9c9c9; font-size: 16px; line-height: 1.6;">
                                Thank you for choosing <strong style="color: #d4af37;">Royal Fleet</strong>. We have received your booking request and our team will confirm your reservation shortly.
                            </p>
                        </td>
                    </tr>

                    <!-- Booking Details Table -->
                    <tr>
                        <td style="padding: 0 30px 40px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f0f0f; border-radius: 8px; overflow: hidden; border: 1px solid #2a2a2a;">
                                <tr>
                                    <td colspan="2" style="background-color: #d4af37; padding: 15px 20px;">
                                        <h3 style="margin: 0; color: #1a1a1a; font-size: 18px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Booking Details</h3>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td style="padding: 18px 20px; border-bottom: 1px solid #2a2a2a; color: #d4af37; font-weight: 600; font-size: 14px; width: 40%;">Pickup Location</td>
                                    <td style="padding: 18px 20px; border-bottom: 1px solid #2a2a2a; color: #e0e0e0; font-size: 14px;">${data.pickupLocation}</td>
                                </tr>
                                
                                <tr>
                                    <td style="padding: 18px 20px; border-bottom: 1px solid #2a2a2a; color: #d4af37; font-weight: 600; font-size: 14px;">Dropoff Location</td>
                                    <td style="padding: 18px 20px; border-bottom: 1px solid #2a2a2a; color: #e0e0e0; font-size: 14px;">${data.dropoffLocation}</td>
                                </tr>
                                
                                <tr>
                                    <td style="padding: 18px 20px; border-bottom: 1px solid #2a2a2a; color: #d4af37; font-weight: 600; font-size: 14px;">Pickup Date</td>
                                    <td style="padding: 18px 20px; border-bottom: 1px solid #2a2a2a; color: #e0e0e0; font-size: 14px;">${data.pickupDate}</td>
                                </tr>
                                
                                <tr>
                                    <td style="padding: 18px 20px; border-bottom: 1px solid #2a2a2a; color: #d4af37; font-weight: 600; font-size: 14px;">Pickup Time</td>
                                    <td style="padding: 18px 20px; border-bottom: 1px solid #2a2a2a; color: #e0e0e0; font-size: 14px;">${data.pickupTime}</td>
                                </tr>
                                
                                <tr>
                                    <td style="padding: 18px 20px; border-bottom: 1px solid #2a2a2a; color: #d4af37; font-weight: 600; font-size: 14px;">Selected Vehicle</td>
                                    <td style="padding: 18px 20px; border-bottom: 1px solid #2a2a2a; color: #e0e0e0; font-size: 14px;">${data.selectedCar}</td>
                                </tr>
                                
                                <tr>
                                    <td style="padding: 18px 20px; border-bottom: 1px solid #2a2a2a; color: #d4af37; font-weight: 600; font-size: 14px;">Contact Name</td>
                                    <td style="padding: 18px 20px; border-bottom: 1px solid #2a2a2a; color: #e0e0e0; font-size: 14px;">${data.firstName} ${data.lastName}</td>
                                </tr>
                                
                                <tr>
                                    <td style="padding: 18px 20px; border-bottom: 1px solid #2a2a2a; color: #d4af37; font-weight: 600; font-size: 14px;">Email</td>
                                    <td style="padding: 18px 20px; border-bottom: 1px solid #2a2a2a; color: #e0e0e0; font-size: 14px;">${data.email}</td>
                                </tr>
                                
                                <tr>
                                    <td style="padding: 18px 20px; color: #d4af37; font-weight: 600; font-size: 14px;">Phone</td>
                                    <td style="padding: 18px 20px; color: #e0e0e0; font-size: 14px;">${data.phone}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Contact Information -->
                    <tr>
                        <td style="padding: 0 30px 40px 30px;">
                            <div style="background: linear-gradient(135deg, #2d2416 0%, #1a1a1a 100%); border: 1px solid #d4af37; border-radius: 8px; padding: 25px; text-align: center;">
                                <p style="margin: 0 0 15px 0; color: #c9c9c9; font-size: 15px; line-height: 1.6;">
                                    For booking details, confirmation, or any assistance, please contact us:
                                </p>
                                <a href="tel:+919968290156" style="display: inline-block; background-color: #d4af37; color: #1a1a1a; text-decoration: none; padding: 14px 35px; border-radius: 6px; font-weight: bold; font-size: 16px; letter-spacing: 1px; margin-top: 10px; transition: background-color 0.3s;">
                                    📞 +91 9968290156
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #0f0f0f; padding: 30px; text-align: center; border-top: 2px solid #d4af37;">
                            <p style="margin: 0 0 10px 0; color: #c9c9c9; font-size: 14px;">
                                Thank you for choosing <strong style="color: #d4af37;">Royal Fleet</strong>
                            </p>
                            <p style="margin: 0; color: #808080; font-size: 12px; line-height: 1.5;">
                                Royal Fleet Team<br>
                                Delivering top-tier rider satisfaction
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
  `.trim();
}

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
              value: `**Name:** ${data.firstName} ${data.lastName}\n**Email:** ${data.email}\n**Phone:** ${data.phone}\n**Booking for Women?:** ${data.bookingForWomen}`,
              inline: true,
            },
            {
              name: "🚙 Vehicle Selection",
              value: `**Car:** ${data.selectedCar}\n**Passengers:** ${
                data.noOfPassengers || "Not specified"
              }\n**Special Requests:** ${data.specialRequests || "None"}`,
              inline: true,
            },
            {
              name: "💰 Selected Fare",
              value: `**Fare:** ${data.priceOption}\n**Extra kms:** ${data.extraKms}\n**Extra Hours:** ${data.extraHours}\n**TOTAL:** Rs. ${data.totalPrice}`,
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
    // async function fetchAuthToken(): Promise<string> {
    //   const customerId = "C-8693763AF295416";
    //   const base64Key = "Q2xhc2hvZmNsYW5zQDM2OQ==";
    //   const scope = "NEW";

    //   const url = `https://cpaas.messagecentral.com/auth/v1/authentication/token?customerId=${encodeURIComponent(
    //     customerId
    //   )}&key=${encodeURIComponent(base64Key)}&scope=${encodeURIComponent(
    //     scope
    //   )}`;

    //   try {
    //     const response = await fetch(url, {
    //       method: "GET",
    //     });

    //     if (!response.ok) {
    //       throw new Error(
    //         `Failed to fetch token: ${response.status} ${response.statusText}`
    //       );
    //     }

    //     const data = await response.json();

    //     if (!data.token) {
    //       throw new Error("authToken not found in response");
    //     }

    //     return data.token;
    //   } catch (error) {
    //     console.error("❌ Error fetching token:", error);
    //     throw error;
    //   }
    // }

    //function to send confirmation sms
    //     async function sendConfSms(authToken: string): Promise<string> {
    //       const type = "SMS";
    //       const mobileNumber = data.phone;
    //       const flowType = "SMS";
    //       const messageType = "PROMOTIONAL";
    //       const senderId = "UTOMOB";
    //       // Welcome%20to%20Message%20Central.%20We%20are%20delighted%20to%20have%20you%20here!%20-%20Powered%20by%20U2opia
    //       const message = encodeURIComponent("Your booking is confirmed. Thank you for choosing us.");

    //       console.log(data.phone)
    //       const url = `https://cpaas.messagecentral.com/verification/v3/send?countryCode=91&flowT
    // ype=SMS&mobileNumber=${mobileNumber}&senderId=UTOMOB&type=SMS&message=${message}&messageType=PROMOTIONAL`;

    //       try {
    //         const response = await fetch(url, {
    //           method: "POST",
    //           headers: {
    //             'authToken': authToken
    //           }
    //         });

    //         console.log(response.body)

    //         if (!response.ok) {
    //           throw new Error(
    //             `Failed to send SMS: ${response.status} ${response.statusText}`
    //           );
    //         }

    //         const data = await response.json();
    //         return data.responseCode;
    //       } catch (e) {
    //         throw Error(`Error while sending confirmation sms ${e}`);
    //       }
    //     }
    //function to send email via mailgun

    interface EmailOptions {
      to: string | string[];
      subject: string;
      text?: string;
      html?: string;
      from?: string;
    }
    async function sendEmail(options: EmailOptions) {
      const mailgun = new Mailgun(FormData);
      const mg = mailgun.client({
        username: "api",
        key: process.env.MAILGUN_API_KEY || "",
      });

      try {
        const messageData: any = {
          from: options.from || "Royal Fleet <postmaster@bot.royalfleet.in>",
          to: Array.isArray(options.to) ? options.to : [options.to],
          subject: options.subject,
        };

        if (options.text) messageData.text = options.text;
        if (options.html) messageData.html = options.html;

        const data = await mg.messages.create("bot.royalfleet.in", messageData);

        return { success: true, data };
      } catch (error) {
        console.error("Mailgun error:", error);
        return {
          success: false,
          error: error instanceof Error ? error.message : "Unknown error",
        };
      }
    }

    if (discordResponse.ok) {
      //Send automatic email
      const emailHTML = generateBookingEmailHTML(data);
      const result = await sendEmail({
        to: data.email,
        subject: "Booking Confirmation - Royal Fleet",
        html: emailHTML,
        // text: `Congratulations ${data.firstName}, we have received your booking request!`,
      });

      // //Get the auth token
      // const token = await fetchAuthToken();
      // console.log("Fetched Token: ", token);
      // //use auth token to Send message on mobile
      // const smsResCode = await sendConfSms(token);
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

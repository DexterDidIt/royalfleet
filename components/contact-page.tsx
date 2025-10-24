"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Crown, Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { submitContactForm } from "@/lib/discord-utils"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Royal Fleet",
  description: "Get in touch with our team for bookings, inquiries, or personalized travel solutions. We're here to serve you 24/7.",
   openGraph: {
    title: "Contact Royal Fleet",
    description: "Reach out for royal travel assistance or bookings.",
    url: "https://royalfleet.in/contact",
    siteName: "Royal Fleet",
    // images: [
    //   {
    //     url: "https://royalfleet.in/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Royal Fleet Luxury Cars",
    //   },
    // ],
    locale: "en_IN",
    type: "website",
  },
}

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const contactData = {
        name: formData.name,
        email: formData.email,
        phone: formData.mobile,
        subject: formData.subject || "General Inquiry",
        message: formData.message,
      }

      await submitContactForm(contactData)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", mobile: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          {/* <div className="flex justify-center">
            <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
              <Crown className="h-8 w-8 text-primary" />
            </div>
          </div> */}
          <h1 className="royal-heading text-3xl sm:text-4xl lg:text-5xl text-balance">
            Contact <span className="royal-gradient">Royal Fleet</span>
          </h1>
          <p className="royal-text text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Get in touch with our team for bookings, inquiries, or personalized travel solutions. We're here to serve
            you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="royal-heading text-2xl text-foreground">Get in Touch</h2>
              <p className="royal-text text-muted-foreground leading-relaxed">
                Whether you need immediate assistance or want to plan your next royal journey, our dedicated team is
                ready to help. Reach out to us through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="royal-heading text-lg text-foreground">Phone</h3>
                      <p className="royal-text text-muted-foreground">Call us anytime, 24/7 support</p>
                      <p className="royal-text text-foreground font-semibold">+91 9911256736</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="royal-heading text-lg text-foreground">Email</h3>
                      <p className="royal-text text-muted-foreground">Send us your queries</p>
                      <p className="royal-text text-foreground font-semibold">info@royalfleet.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="royal-heading text-lg text-foreground">Service Area</h3>
                      <p className="royal-text text-muted-foreground">We serve across the region</p>
                      <p className="royal-text text-foreground font-semibold">Delhi, Gurugram & NCR</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="royal-heading text-lg text-foreground">Availability</h3>
                      <p className="royal-text text-muted-foreground">Always at your service</p>
                      <p className="royal-text text-foreground font-semibold">24/7 Service</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="royal-heading text-xl text-foreground">Send us a Message</CardTitle>
                <p className="royal-text text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center space-y-4 py-8">
                    <div className="flex justify-center">
                      <div className="p-4 rounded-full bg-green-500/10 border border-green-500/20">
                        <Send className="h-8 w-8 text-green-500" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="royal-heading text-lg text-foreground">Message Sent!</h3>
                      <p className="royal-text text-muted-foreground">
                        Thank you for contacting Royal Fleet. We'll get back to you within 24 hours.
                      </p>
                    </div>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="royal-text font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="royal-text"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="royal-text font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="royal-text"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobile" className="royal-text font-medium">
                        Mobile Number *
                      </Label>
                      <div className="flex">
                        <div className="flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md">
                          <span className="royal-text text-sm text-muted-foreground">+91</span>
                        </div>
                        <Input
                          id="mobile"
                          placeholder="Enter 10-digit mobile number"
                          value={formData.mobile}
                          onChange={(e) => handleInputChange("mobile", e.target.value.replace(/\D/g, "").slice(0, 10))}
                          required
                          className="royal-text rounded-l-none"
                          maxLength={10}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="royal-text font-medium">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="royal-text"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="royal-text font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        className="royal-text min-h-[120px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="h-5 w-5" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

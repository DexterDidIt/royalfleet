"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Crown, Users, Fuel, Shield, Star, ArrowRight } from "lucide-react"

interface Vehicle {
  id: string
  name: string
  type: string
  capacity: string
  fuelType: string
  features: string[]
  highlights: string[]
  description: string
  image: string
  priceRange: string
  popular?: boolean
}

// const vehicles: Vehicle[] = [
//   {
//     id: "innova",
//     name: "Toyota Innova",
//     type: "Premium SUV",
//     capacity: "6+1 Seater",
//     fuelType: "Diesel",
//     features: ["Premium AC", "GPS Navigation", "Professional Chauffeur", "Spacious Interior", "Luggage Space"],
//     highlights: ["Most Popular", "Family Friendly", "Long Distance Comfort"],
//     description:
//       "The Toyota Innova is our flagship vehicle, perfect for family trips, group travel, and long-distance journeys. With its spacious interior and premium comfort features, it ensures a royal travel experience for up to 7 passengers.",
//     image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80&q=80",
//     priceRange: "₹15-20/km",
//     popular: true,
//   },
//   {
//     id: "ciaz",
//     name: "Maruti Ciaz",
//     type: "Executive Sedan",
//     capacity: "4+1 Seater",
//     fuelType: "Petrol",
//     features: ["Premium AC", "GPS Navigation", "Professional Chauffeur", "Fuel Efficient", "Executive Comfort"],
//     highlights: ["Business Travel", "Fuel Efficient", "Executive Choice"],
//     description:
//       "The Maruti Ciaz is ideal for business travel and executive transportation. Its elegant design and fuel efficiency make it perfect for city travel and corporate meetings, ensuring you arrive in style.",
//     image: "/placeholder.svg?key=ciaz-executive",
//     priceRange: "₹12-16/km",
//   },
//   {
//     id: "ertiga",
//     name: "Maruti Ertiga",
//     type: "Compact SUV",
//     capacity: "6+1 Seater",
//     fuelType: "Petrol",
//     features: ["Premium AC", "GPS Navigation", "Professional Chauffeur", "Comfortable Seating", "Good Mileage"],
//     highlights: ["Value for Money", "Compact Size", "City Friendly"],
//     description:
//       "The Maruti Ertiga offers the perfect balance of space and efficiency. Ideal for medium-sized groups and city travel, it provides comfortable seating for up to 7 passengers while maintaining excellent fuel economy.",
//     image: "/placeholder.svg?key=ertiga-compact",
//     priceRange: "₹10-14/km",
//   },
//   {
//     id: "swift-dzire",
//     name: "Swift Dzire",
//     type: "Premium Sedan",
//     capacity: "4+1 Seater",
//     fuelType: "Petrol",
//     features: ["Premium AC", "GPS Navigation", "Professional Chauffeur", "Compact Design", "City Optimized"],
//     highlights: ["Airport Transfers", "Quick Trips", "Economic Choice"],
//     description:
//       "The Swift Dzire is perfect for quick city trips, airport transfers, and solo or couple travel. Its compact design makes it ideal for navigating through city traffic while providing comfort and style.",
//     image: "/placeholder.svg?key=dzire-premium",
//     priceRange: "₹8-12/km",
//   },
//   {
//     id: "tempo-traveller",
//     name: "Tempo Traveller",
//     type: "Luxury Van",
//     capacity: "12+1 Seater",
//     fuelType: "Diesel",
//     features: [
//       "Premium AC",
//       "GPS Navigation",
//       "Professional Chauffeur",
//       "Push Back Seats",
//       "Entertainment System",
//       "Extra Luggage Space",
//     ],
//     highlights: ["Group Travel", "Event Transportation", "Maximum Comfort"],
//     description:
//       "The Tempo Traveller is our premium choice for large groups and special events. With luxury seating for up to 12 passengers, entertainment systems, and ample luggage space, it's perfect for weddings, corporate events, and group tours.",
//     image: "/placeholder.svg?key=tempo-luxury",
//     priceRange: "₹25-35/km",
//   },
//   {
//     id: "fortuner",
//     name: "Toyota Fortuner",
//     type: "Luxury SUV",
//     capacity: "6+1 Seater",
//     fuelType: "Diesel",
//     features: [
//       "Premium AC",
//       "GPS Navigation",
//       "Professional Chauffeur",
//       "Leather Interiors",
//       "Advanced Safety",
//       "Premium Sound System",
//     ],
//     highlights: ["Ultra Luxury", "VIP Choice", "Premium Experience"],
//     description:
//       "The Toyota Fortuner represents the pinnacle of luxury in our fleet. With its commanding presence, leather interiors, and advanced features, it's the preferred choice for VIP travel and special occasions.",
//     image: "/placeholder.svg?key=fortuner-vip",
//     priceRange: "₹30-40/km",
//   },
// ]

const vehicles: Vehicle[] = [
  {
    id: "innova",
    name: "Toyota Innova",
    type: "Premium SUV",
    capacity: "6+1 Seater",
    fuelType: "Diesel",
    features: ["Premium AC", "GPS Navigation", "Professional Chauffeur", "Spacious Interior", "Luggage Space"],
    highlights: ["Most Popular", "Family Friendly", "Long Distance Comfort"],
    description:
      "The Toyota Innova is our flagship vehicle, perfect for family trips, group travel, and long-distance journeys. With its spacious interior and premium comfort features, it ensures a royal travel experience for up to 7 passengers.",
    image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80&q=80",
    priceRange: "₹15-20/km",
    popular: true,
  },
  {
    id: "hycross",
    name: "Toyota Innova Hycross",
    type: "Hybrid SUV",
    capacity: "6+1 Seater",
    fuelType: "Hybrid (Petrol + Electric)",
    features: ["Premium AC", "GPS Navigation", "Professional Chauffeur", "Modern Interiors", "Fuel Efficient Hybrid"],
    highlights: ["Eco-Friendly", "Comfortable Ride", "Premium Hybrid SUV"],
    description:
      "The Toyota Innova Hycross brings innovation to premium travel with hybrid technology, offering both fuel efficiency and comfort. Perfect for family journeys and corporate travel with a touch of modern luxury.",
    image: "/fleet-images/hycross.png",
    priceRange: "₹18-24/km",
  },
  {
    id: "ciaz",
    name: "Maruti Ciaz",
    type: "Executive Sedan",
    capacity: "4+1 Seater",
    fuelType: "Petrol",
    features: ["Premium AC", "GPS Navigation", "Professional Chauffeur", "Fuel Efficient", "Executive Comfort"],
    highlights: ["Business Travel", "Fuel Efficient", "Executive Choice"],
    description:
      "The Maruti Ciaz is ideal for business travel and executive transportation. Its elegant design and fuel efficiency make it perfect for city travel and corporate meetings, ensuring you arrive in style.",
    image: "/fleet-images/city.avif",
    priceRange: "₹12-16/km",
  },
  {
    id: "city",
    name: "Honda City",
    type: "Luxury Sedan",
    capacity: "4+1 Seater",
    fuelType: "Petrol",
    features: ["Premium AC", "GPS Navigation", "Professional Chauffeur", "Luxury Interiors", "Smooth Ride"],
    highlights: ["Premium Comfort", "Executive Travel", "Stylish Choice"],
    description:
      "The Honda City is a premium sedan that combines elegance and performance. It is perfect for business executives and family travel alike, offering a smooth, stylish, and comfortable ride every time.",
    image: "/fleet-images/city.jpg",
    priceRange: "₹14-18/km",
  },
  {
    id: "swift-dzire",
    name: "Swift Dzire",
    type: "Premium Sedan",
    capacity: "4+1 Seater",
    fuelType: "Petrol",
    features: ["Premium AC", "GPS Navigation", "Professional Chauffeur", "Compact Design", "City Optimized"],
    highlights: ["Airport Transfers", "Quick Trips", "Economic Choice"],
    description:
      "The Swift Dzire is perfect for quick city trips, airport transfers, and solo or couple travel. Its compact design makes it ideal for navigating through city traffic while providing comfort and style.",
    image: "/fleet-images/dzire.jpg",
    priceRange: "₹8-12/km",
  },
];


export function FleetShowcase() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">

          {/* Logo commented Below  */}
          {/* <div className="flex justify-center">
            <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
              <Crown className="h-8 w-8 text-primary" />
            </div>
          </div> */}
          <h1 className="royal-heading text-3xl sm:text-4xl lg:text-5xl text-balance">
            Our <span className="royal-gradient">Royal</span> Fleet
          </h1>
          <p className="royal-text text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Choose from our premium collection of luxury vehicles, each maintained to the highest standards and driven
            by professional chauffeurs.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {vehicles.map((vehicle) => (
            <Card
              key={vehicle.id}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
              {/* Vehicle Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=224&width=400&text=" + encodeURIComponent(vehicle.name)
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Popular Badge */}
                {vehicle.popular && (
                  <div className="absolute top-4 left-4">

                  <Badge className="bg-primary text-primary-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                  {/* <Badge className="bg-primary text-primary-foreground"> */}
                  {/* <Badge className="bg-secondary text-primary"></Badge> */}


                {/* Price Range */}
                <div className="absolute bottom-4 right-4">
                  {/* <div className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="royal-text text-sm font-semibold text-foreground">{vehicle.priceRange}</span>
                  </div> */}
                </div>
              </div>
  

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="royal-heading text-xl text-foreground">{vehicle.name}</CardTitle>
                    <p className="royal-text text-muted-foreground">{vehicle.type}</p>
                  </div>
                </div>

                {/* Vehicle Stats */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-3">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span className="royal-text">{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Fuel className="h-4 w-4" />
                    <span className="royal-text">{vehicle.fuelType}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Shield className="h-4 w-4" />
                    <span className="royal-text">Insured</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Description */}
                <p className="royal-text text-foreground leading-relaxed">{vehicle.description}</p>

                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="royal-heading text-sm font-semibold text-foreground">Perfect For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="royal-heading text-sm font-semibold text-foreground">Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {vehicle.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span className="royal-text text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <div className="pt-4">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                    size="lg"
                  >
                    <Link href="/booking" className="flex items-center justify-center space-x-2">
                      <span>Book {vehicle.name}</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center space-y-6">
          <div className="space-y-4">
            <h2 className="royal-heading text-2xl sm:text-3xl text-balance">
              Can't Decide? <span className="royal-gradient">We're Here to Help</span>
            </h2>
            <p className="royal-text text-muted-foreground max-w-2xl mx-auto text-balance">
              Our team can help you choose the perfect vehicle for your specific needs. Contact us for personalized
              recommendations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Get Recommendations</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/booking">Start Booking</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Crown, Shield, Clock, Star, Users, MapPin } from "lucide-react"

const services = [
  {
    icon: Crown,
    title: "Premium Vehicles",
    description: "Luxury cars including Toyota Innova, Maruti Ciaz, and other high-end vehicles for your comfort.",
  },
  {
    icon: Users,
    title: "Professional Chauffeurs",
    description: "Experienced, courteous, and professionally trained drivers who prioritize your safety and comfort.",
  },
  {
    icon: Clock,
    title: "Punctual Service",
    description: "Always on time, every time. We value your schedule and ensure timely pickups and drop-offs.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "All vehicles are regularly maintained and sanitized. Your safety is our top priority.",
  },
  {
    icon: Star,
    title: "5-Star Experience",
    description: "From booking to destination, we provide a seamless luxury experience that exceeds expectations.",
  },
  {
    icon: MapPin,
    title: "Wide Coverage",
    description: "Serving Delhi, Gurugram, and surrounding areas with comprehensive coverage.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="royal-heading text-3xl sm:text-4xl lg:text-5xl text-balance">
            Why Choose <span className="royal-gradient">Royal Fleet</span>
          </h2>
          <p className="royal-text text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Experience the difference with our premium travel services designed for discerning clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="royal-heading text-xl text-foreground">{service.title}</h3>
                <p className="royal-text text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

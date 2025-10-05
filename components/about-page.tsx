import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Crown, Shield, Users, Star, Award, Clock, ArrowRight } from "lucide-react"

const values = [
  {
    icon: Crown,
    title: "Royal Excellence",
    description: "We believe every journey should be a royal experience, with attention to every detail that matters.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Your safety is our top priority. All vehicles are regularly maintained and fully insured.",
  },
  {
    icon: Users,
    title: "Professional Service",
    description: "Our chauffeurs are trained professionals who prioritize your comfort and punctuality.",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "We maintain the highest standards in vehicle quality, cleanliness, and customer service.",
  },
]

const stats = [
  { number: "5000+", label: "Happy Customers" },
  { number: "50+", label: "Premium Vehicles" },
  { number: "24/7", label: "Service Hours" },
  { number: "99%", label: "On-Time Rate" },
]

export function AboutPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          {/* <div className="flex justify-center">
            <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
              <Crown className="h-8 w-8 text-primary" />
            </div>
          </div> */}
          <h1 className="royal-heading text-3xl sm:text-4xl lg:text-5xl text-balance">
            About <span className="royal-gradient">Royal Fleet</span>
          </h1>
          <p className="royal-text text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Redefining luxury travel with premium chauffeur services and an unwavering commitment to excellence.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="royal-heading text-3xl sm:text-4xl text-balance">
              Our <span className="royal-gradient">Story</span>
            </h2>
            <div className="space-y-4 royal-text text-muted-foreground leading-relaxed">
              <p>
                Royal Fleet was born from a simple vision: to transform ordinary travel into extraordinary experiences.
                Founded in the heart of Delhi, we recognized the need for a premium transportation service that truly
                understands the value of luxury, punctuality, and personalized care.
              </p>
              <p>
                What started as a small fleet of premium vehicles has grown into the region's most trusted luxury
                transportation service. We've built our reputation on the foundation of treating every passenger like
                royalty, ensuring that each journey is not just a ride, but a memorable experience.
              </p>
              <p>
                Today, Royal Fleet serves discerning travelers across Delhi, Gurugram, and the NCR region, offering a
                diverse fleet of luxury vehicles and a team of professional chauffeurs who share our commitment to
                excellence.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <img
                src="https://mir-s3-cdn-cf.behance.net/projects/404/28c4ef220914597.Y3JvcCwxNzAxLDEzMzEsMTQ3LDA.jpg"
                alt="Royal Fleet luxury service"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="p-6 space-y-2">
                  <div className="royal-heading text-3xl sm:text-4xl royal-gradient">{stat.number}</div>
                  <p className="royal-text text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="royal-heading text-3xl sm:text-4xl text-balance">
              Our <span className="royal-gradient">Values</span>
            </h2>
            <p className="royal-text text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              The principles that guide everything we do and define the Royal Fleet experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-8 space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="royal-heading text-xl text-foreground text-center">{value.title}</h3>
                  <p className="royal-text text-muted-foreground text-center leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8 sm:p-12 text-center space-y-6">
              <div className="flex justify-center">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <h2 className="royal-heading text-2xl sm:text-3xl text-balance">
                Our <span className="royal-gradient">Mission</span>
              </h2>
              <p className="royal-text text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To provide unparalleled luxury transportation services that exceed expectations, ensuring every journey
                is safe, comfortable, and memorable. We are committed to setting new standards in premium travel while
                maintaining the personal touch that makes each client feel truly valued.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="royal-heading text-3xl sm:text-4xl text-balance">
              Why Choose <span className="royal-gradient">Royal Fleet</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <Clock className="h-8 w-8 text-primary" />
                <h3 className="royal-heading text-lg text-foreground">Punctuality Guaranteed</h3>
                <p className="royal-text text-muted-foreground">
                  We understand the value of your time. Our 99% on-time rate speaks for our commitment to punctuality.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <Shield className="h-8 w-8 text-primary" />
                <h3 className="royal-heading text-lg text-foreground">Safety & Security</h3>
                <p className="royal-text text-muted-foreground">
                  All vehicles are regularly maintained, fully insured, and driven by verified professional chauffeurs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <Star className="h-8 w-8 text-primary" />
                <h3 className="royal-heading text-lg text-foreground">Premium Experience</h3>
                <p className="royal-text text-muted-foreground">
                  From booking to destination, every touchpoint is designed to provide a truly royal experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h2 className="royal-heading text-2xl sm:text-3xl text-balance">
            Ready to Experience <span className="royal-gradient">Royal Treatment</span>?
          </h2>
          <p className="royal-text text-muted-foreground max-w-2xl mx-auto text-balance">
            Join thousands of satisfied customers who have made Royal Fleet their preferred choice for luxury travel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              <Link href="/booking" className="flex items-center space-x-2">
                <span>Book Your Royal Ride</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

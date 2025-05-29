"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Award, Clock } from "lucide-react"

interface HomePageProps {
  setCurrentPage: (page: string) => void
}

export function HomePage({ setCurrentPage }: HomePageProps) {
  const features = [
    {
      icon: BookOpen,
      title: "Vast Collection",
      description: "Access thousands of books across all genres and age groups",
    },
    {
      icon: Users,
      title: "User Friendly",
      description: "Designed specifically for children and teachers with intuitive interface",
    },
    {
      icon: Award,
      title: "Quality Content",
      description: "Curated selection of educational and entertaining books",
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Browse and manage your library account anytime, anywhere",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Welcome to <span className="text-primary">Bookwise</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Your digital library companion designed for children and teachers. Discover, borrow, and enjoy thousands of
            books with our user-friendly platform.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="text-lg px-8 py-3" onClick={() => setCurrentPage("browse")}>
              Start Browsing
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3" onClick={() => setCurrentPage("about")}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Bookwise?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've created the perfect digital library experience for educational institutions and young readers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-lg text-muted-foreground">Books Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-lg text-muted-foreground">Happy Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg text-muted-foreground">Schools Connected</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Start Your Reading Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of students and teachers who are already using Bookwise to enhance their learning experience.
          </p>
          <Button size="lg" className="text-lg px-8 py-3" onClick={() => setCurrentPage("browse")}>
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  )
}

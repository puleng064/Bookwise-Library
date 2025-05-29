"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Award, Heart, Target, Eye } from "lucide-react"

export function AboutPage() {
  const values = [
    {
      icon: BookOpen,
      title: "Education First",
      description: "We believe education is the foundation of a better future for all children.",
    },
    {
      icon: Users,
      title: "Inclusive Access",
      description: "Making quality educational resources accessible to every child, regardless of background.",
    },
    {
      icon: Award,
      title: "Quality Content",
      description: "Curating only the highest quality books and educational materials.",
    },
    {
      icon: Heart,
      title: "Child-Centered",
      description: "Every decision we make is focused on what's best for young learners.",
    },
  ]

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Bookwise</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering young minds through accessible, quality education and fostering a lifelong love for learning.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-6 w-6 mr-2 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To provide every child and educator with access to high-quality educational resources through innovative
                technology, creating an engaging and inclusive learning environment that nurtures curiosity, creativity,
                and critical thinking skills.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-6 w-6 mr-2 text-primary" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A world where every child has unlimited access to quality education, where learning is joyful and
                accessible, and where teachers are empowered with the best resources to inspire the next generation of
                learners and leaders.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
            <CardDescription>How Bookwise came to be</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Bookwise was founded in 2023 with a simple yet powerful vision: to bridge the gap between traditional
              libraries and modern technology. Our founders, a team of educators and technologists, recognized that many
              children and teachers lacked access to quality educational resources.
            </p>
            <p className="text-muted-foreground">
              Starting with a small collection of digital books, we've grown into a comprehensive library management
              system serving thousands of students and hundreds of schools across South Africa. Our platform combines
              the warmth and guidance of traditional libraries with the convenience and accessibility of modern
              technology.
            </p>
            <p className="text-muted-foreground">
              Today, Bookwise continues to evolve, always keeping our core mission at heart: making quality education
              accessible to every child, everywhere.
            </p>
          </CardContent>
        </Card>

        {/* Impact Stats */}
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Books Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Partner Schools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1M+</div>
              <div className="text-muted-foreground">Books Borrowed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

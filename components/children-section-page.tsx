"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Star, Heart, Smile, Zap, Users } from "lucide-react"

export function ChildrenSectionPage() {
  const ageGroups = [
    {
      title: "Early Readers (Ages 3-6)",
      description: "Picture books and simple stories to start the reading journey",
      books: ["The Very Hungry Caterpillar", "Goodnight Moon", "Brown Bear, Brown Bear"],
      color: "bg-pink-100 dark:bg-pink-900/20",
    },
    {
      title: "Beginning Readers (Ages 6-8)",
      description: "Easy chapter books and phonics-based stories",
      books: ["Frog and Toad", "Mercy Watson", "Biscuit Books"],
      color: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      title: "Confident Readers (Ages 8-12)",
      description: "Adventure stories and longer chapter books",
      books: ["Magic Tree House", "Diary of a Wimpy Kid", "Dog Man"],
      color: "bg-green-100 dark:bg-green-900/20",
    },
    {
      title: "Young Adults (Ages 12+)",
      description: "Complex stories and young adult fiction",
      books: ["Harry Potter", "Percy Jackson", "Wonder"],
      color: "bg-purple-100 dark:bg-purple-900/20",
    },
  ]

  const features = [
    {
      icon: Star,
      title: "Age-Appropriate Content",
      description: "Carefully curated books suitable for each age group",
    },
    {
      icon: Heart,
      title: "Safe Environment",
      description: "Child-friendly interface with parental controls",
    },
    {
      icon: Smile,
      title: "Fun Learning",
      description: "Interactive features that make reading enjoyable",
    },
    {
      icon: Zap,
      title: "Reading Rewards",
      description: "Achievement badges and reading challenges",
    },
  ]

  const popularBooks = [
    {
      title: "The Cat in the Hat",
      author: "Dr. Seuss",
      age: "3-7",
      rating: 4.8,
      cover: "https://m.media-amazon.com/images/I/81drfTT9ZfL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Where the Wild Things Are",
      author: "Maurice Sendak",
      age: "4-8",
      rating: 4.9,
      cover: "https://m.media-amazon.com/images/I/81p4iB7xMFL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Charlotte's Web",
      author: "E.B. White",
      age: "8-12",
      rating: 4.7,
      cover: "https://m.media-amazon.com/images/I/91A-UEE9pxL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Lion, the Witch and the Wardrobe",
      author: "C.S. Lewis",
      age: "8-12",
      rating: 4.6,
      cover: "https://m.media-amazon.com/images/I/81QUw81WcoL._AC_UF1000,1000_QL80_.jpg",
    },
  ]

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Children's Section</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A magical world of books designed specifically for young readers. Discover age-appropriate stories that
            inspire, educate, and entertain.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Age Groups */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Books by Age Group</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ageGroups.map((group, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`h-2 ${group.color}`}></div>
                <CardHeader>
                  <CardTitle className="text-xl">{group.title}</CardTitle>
                  <CardDescription>{group.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Popular Series:</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.books.map((book, bookIndex) => (
                        <Badge key={bookIndex} variant="secondary" className="text-xs">
                          {book}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Explore {group.title}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Books */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Children's Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularBooks.map((book, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-[3/4] relative mb-4">
                    <img
                      src={book.cover || "/placeholder.svg"}
                      alt={book.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <Badge className="absolute top-2 right-2" variant="secondary">
                      Ages {book.age}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-1 line-clamp-2">{book.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">by {book.author}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm">{book.rating}</span>
                    </div>
                    <Button size="sm" variant="outline">
                      View Book
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Reading Programs */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-6 w-6 mr-2 text-primary" />
              Special Programs for Children
            </CardTitle>
            <CardDescription>Join our reading programs designed to encourage young readers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <BookOpen className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Summer Reading Challenge</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Read 10 books during summer holidays and earn special badges
                </p>
                <Button size="sm">Join Challenge</Button>
              </div>

              <div className="text-center p-4 border rounded-lg">
                <Star className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Reading Rewards</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Earn points for every book read and unlock exciting rewards
                </p>
                <Button size="sm">Learn More</Button>
              </div>

              <div className="text-center p-4 border rounded-lg">
                <Heart className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Book Club for Kids</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Join monthly discussions about favorite books with other young readers
                </p>
                <Button size="sm">Join Club</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Parent Information */}
        <Card>
          <CardHeader>
            <CardTitle>Information for Parents</CardTitle>
            <CardDescription>How to support your child's reading journey</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Parental Controls</h4>
              <p className="text-muted-foreground text-sm">
                Set reading levels, time limits, and content filters to ensure age-appropriate access.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Reading Progress</h4>
              <p className="text-muted-foreground text-sm">
                Track your child's reading progress, see their favorite books, and celebrate achievements together.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Reading Tips</h4>
              <p className="text-muted-foreground text-sm">
                Access our guide on how to encourage reading habits and make reading time enjoyable for your child.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button variant="outline">Parent Dashboard</Button>
              <Button variant="outline">Reading Guide</Button>
              <Button variant="outline">Safety Settings</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Star, Calendar, TrendingUp, Search } from "lucide-react"
import { useState } from "react"

export function NewArrivalsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  const newBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      category: "Fiction",
      genre: "Contemporary Fiction",
      rating: 4.8,
      price: 299.99,
      addedDate: "2024-01-25",
      cover: "https://m.media-amazon.com/images/I/81tCtHFtOgL._AC_UF1000,1000_QL80_.jpg",
      description: "A thought-provoking novel about life's infinite possibilities",
      isPopular: true,
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self-Help",
      genre: "Personal Development",
      rating: 4.9,
      price: 349.99,
      addedDate: "2024-01-24",
      cover: "https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UF1000,1000_QL80_.jpg",
      description: "Transform your life with tiny changes that deliver remarkable results",
      isPopular: true,
    },
    {
      id: 3,
      title: "The Seven Moons of Maali Almeida",
      author: "Shehan Karunatilaka",
      category: "Fiction",
      genre: "Literary Fiction",
      rating: 4.6,
      price: 279.99,
      addedDate: "2024-01-23",
      cover: "https://m.media-amazon.com/images/I/81XS0eEGRhL._AC_UF1000,1000_QL80_.jpg",
      description: "Booker Prize winner - A darkly comic afterlife adventure",
      isPopular: false,
    },
    {
      id: 4,
      title: "The Thursday Murder Club",
      author: "Richard Osman",
      category: "Mystery",
      genre: "Cozy Mystery",
      rating: 4.7,
      price: 259.99,
      addedDate: "2024-01-22",
      cover: "https://m.media-amazon.com/images/I/81JDMX+gUwL._AC_UF1000,1000_QL80_.jpg",
      description: "Four unlikely friends investigate cold cases in their retirement home",
      isPopular: true,
    },
    {
      id: 5,
      title: "Educated",
      author: "Tara Westover",
      category: "Biography",
      genre: "Memoir",
      rating: 4.8,
      price: 319.99,
      addedDate: "2024-01-21",
      cover: "https://m.media-amazon.com/images/I/81NwOj14S6L._AC_UF1000,1000_QL80_.jpg",
      description: "A powerful memoir about education, family, and the struggle for self-invention",
      isPopular: false,
    },
    {
      id: 6,
      title: "The Invisible Life of Addie LaRue",
      author: "V.E. Schwab",
      category: "Fantasy",
      genre: "Urban Fantasy",
      rating: 4.5,
      price: 289.99,
      addedDate: "2024-01-20",
      cover: "https://m.media-amazon.com/images/I/91vFYz8J3HL._AC_UF1000,1000_QL80_.jpg",
      description: "A sweeping tale of a young woman cursed to be forgotten",
      isPopular: true,
    },
    {
      id: 7,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      category: "Non-Fiction",
      genre: "History",
      rating: 4.7,
      price: 369.99,
      addedDate: "2024-01-19",
      cover: "https://m.media-amazon.com/images/I/71N3-FFSDxL._AC_UF1000,1000_QL80_.jpg",
      description: "How Homo sapiens came to dominate the world",
      isPopular: false,
    },
    {
      id: 8,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      category: "Thriller",
      genre: "Psychological Thriller",
      rating: 4.6,
      price: 269.99,
      addedDate: "2024-01-18",
      cover: "https://m.media-amazon.com/images/I/81yfsIOijJL._AC_UF1000,1000_QL80_.jpg",
      description: "A woman's act of violence against her husband and her refusal to speak",
      isPopular: true,
    },
  ]

  const categories = ["all", ...new Set(newBooks.map((book) => book.category))]

  const filteredBooks = newBooks
    .filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || book.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime()
        case "rating":
          return b.rating - a.rating
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        default:
          return 0
      }
    })

  const popularBooks = newBooks.filter((book) => book.isPopular).slice(0, 4)

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">New Arrivals</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the latest additions to our library collection. Fresh books, trending titles, and must-read
            publications added weekly.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">24</div>
              <div className="text-sm text-muted-foreground">Books This Week</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">156</div>
              <div className="text-sm text-muted-foreground">Books This Month</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Star className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">4.7</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">Daily</div>
              <div className="text-sm text-muted-foreground">New Additions</div>
            </CardContent>
          </Card>
        </div>

        {/* Popular New Arrivals */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-primary" />
              Trending New Arrivals
            </CardTitle>
            <CardDescription>Most popular books from our recent additions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularBooks.map((book) => (
                <div key={book.id} className="text-center">
                  <div className="aspect-[3/4] relative mb-4">
                    <img
                      src={book.cover || "/placeholder.svg"}
                      alt={book.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <Badge className="absolute top-2 right-2" variant="destructive">
                      Popular
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2">{book.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">by {book.author}</p>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs">{book.rating}</span>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    View Book
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Browse All New Arrivals</CardTitle>
            <CardDescription>Find your next great read from our latest additions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search by title or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-[3/4] relative mb-4">
                  <img
                    src={book.cover || "/placeholder.svg"}
                    alt={book.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="text-xs">
                      New
                    </Badge>
                  </div>
                  {book.isPopular && (
                    <Badge className="absolute top-2 right-2" variant="destructive">
                      Popular
                    </Badge>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg line-clamp-2">{book.title}</h3>
                  <p className="text-muted-foreground text-sm">by {book.author}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {book.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm">{book.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">{book.description}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-bold text-primary">R{book.price.toFixed(2)}</span>
                    <span className="text-xs text-muted-foreground">
                      Added {new Date(book.addedDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      Preview
                    </Button>
                    <Button size="sm" className="flex-1">
                      Borrow
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No books found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Newsletter Signup */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Stay Updated on New Arrivals</CardTitle>
            <CardDescription>Get notified when new books are added to our collection</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input placeholder="Enter your email address" className="flex-1" />
              <Button>Subscribe to Updates</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              We'll send you weekly updates about new arrivals and special collections.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

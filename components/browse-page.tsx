"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { Search, ShoppingCart, Eye, Star } from "lucide-react"

interface BrowsePageProps {
  user: any
}

export function BrowsePage({ user }: BrowsePageProps) {
  const [books, setBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [selectedBook, setSelectedBook] = useState(null)
  const [cartCount, setCartCount] = useState(0)
  const { toast } = useToast()

  useEffect(() => {
    fetchBooks()
    // Load cart count from localStorage
    const storedCartCount = localStorage.getItem("cartCount")
    if (storedCartCount) {
      setCartCount(Number.parseInt(storedCartCount, 10))
    }
  }, [])

  useEffect(() => {
    filterBooks()
  }, [books, searchTerm, selectedGenre])

  // Update the fetchBooks function to include better book cover images
  const fetchBooks = async () => {
    try {
      // Simulated API call - replace with actual API
      const sampleBooks = [
        {
          id: 1,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          genre: "Fiction",
          description:
            "A classic American novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream.",
          cover_image: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
          price: 299.99,
          available_copies: 5,
          rating: 4.5,
        },
        {
          id: 2,
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          genre: "Fiction",
          description: "A gripping tale of racial injustice and childhood innocence in the American South.",
          cover_image: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
          price: 249.99,
          available_copies: 3,
          rating: 4.8,
        },
        {
          id: 3,
          title: "Harry Potter and the Philosopher's Stone",
          author: "J.K. Rowling",
          genre: "Fantasy",
          description: "The magical story of a young wizard's journey at Hogwarts School of Witchcraft and Wizardry.",
          cover_image: "https://m.media-amazon.com/images/I/81m1s4wIPML._AC_UF1000,1000_QL80_.jpg",
          price: 349.99,
          available_copies: 8,
          rating: 4.9,
        },
        {
          id: 4,
          title: "1984",
          author: "George Orwell",
          genre: "Dystopian",
          description: "A dystopian social science fiction novel about totalitarian control and surveillance.",
          cover_image: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
          price: 199.99,
          available_copies: 4,
          rating: 4.6,
        },
        {
          id: 5,
          title: "The Lord of the Rings",
          author: "J.R.R. Tolkien",
          genre: "Fantasy",
          description: "An epic fantasy adventure following the quest to destroy the One Ring.",
          cover_image: "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
          price: 599.99,
          available_copies: 3,
          rating: 4.7,
        },
        {
          id: 6,
          title: "Pride and Prejudice",
          author: "Jane Austen",
          genre: "Romance",
          description: "A romantic novel of manners exploring love, marriage, and social class in Georgian England.",
          cover_image: "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
          price: 179.99,
          available_copies: 6,
          rating: 4.4,
        },
      ]
      setBooks(sampleBooks)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch books",
        variant: "destructive",
      })
    }
  }

  const filterBooks = () => {
    let filtered = books

    if (searchTerm) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedGenre !== "all") {
      filtered = filtered.filter((book) => book.genre === selectedGenre)
    }

    setFilteredBooks(filtered)
  }

  const addToCart = async (bookId: number) => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to add books to cart",
        variant: "destructive",
      })
      return
    }

    try {
      // Get current cart items from localStorage
      const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]")

      // Find the book to add
      const bookToAdd = books.find((book) => book.id === bookId)
      if (!bookToAdd) return

      // Check if book already exists in cart
      const existingItemIndex = existingCart.findIndex((item) => item.id === bookId)

      if (existingItemIndex > -1) {
        // If book exists, increment quantity
        existingCart[existingItemIndex].quantity += 1
      } else {
        // If new book, add to cart with quantity 1
        existingCart.push({
          ...bookToAdd,
          quantity: 1,
        })
      }

      // Update localStorage
      localStorage.setItem("cartItems", JSON.stringify(existingCart))

      // Update cart count
      const newCartCount = existingCart.reduce((total, item) => total + item.quantity, 0)
      setCartCount(newCartCount)
      localStorage.setItem("cartCount", newCartCount.toString())

      // Dispatch custom event to update navbar
      window.dispatchEvent(new CustomEvent("cartUpdated", { detail: { count: newCartCount } }))

      toast({
        title: "Success",
        description: "Book added to cart successfully!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add book to cart",
        variant: "destructive",
      })
    }
  }

  const borrowBook = async (bookId: number) => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to borrow books",
        variant: "destructive",
      })
      return
    }

    try {
      // Simulated API call
      toast({
        title: "Success",
        description: "Book borrowed successfully! Check your borrowed books.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to borrow book",
        variant: "destructive",
      })
    }
  }

  const genres = ["all", ...new Set(books.map((book) => book.genre))]

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Browse Books</h1>
          <p className="text-muted-foreground mb-6">
            Discover our extensive collection of books for all ages and interests.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search books by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select genre" />
              </SelectTrigger>
              <SelectContent>
                {genres.map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre === "all" ? "All Genres" : genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4">
                <div className="aspect-[3/4] relative mb-4">
                  <img
                    src={book.cover_image || "/placeholder.svg"}
                    alt={book.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <Badge className="absolute top-2 right-2" variant="secondary">
                    {book.genre}
                  </Badge>
                </div>
                <CardTitle className="text-lg line-clamp-2">{book.title}</CardTitle>
                <CardDescription className="text-sm">by {book.author}</CardDescription>
              </CardHeader>

              <CardContent className="p-4 pt-0">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(book.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">{book.rating}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-2">ZAR {book.price.toFixed(2)}</div>
                <div className="text-sm text-muted-foreground">{book.available_copies} copies available</div>
              </CardContent>

              <CardFooter className="p-4 pt-0 space-y-2">
                <div className="flex space-x-2 w-full">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{book.title}</DialogTitle>
                        <DialogDescription>by {book.author}</DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <img
                            src={book.cover_image || "/placeholder.svg"}
                            alt={book.title}
                            className="w-full h-auto rounded-md"
                          />
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Description</h4>
                            <p className="text-muted-foreground">{book.description}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Details</h4>
                            <div className="space-y-1 text-sm">
                              <div>Genre: {book.genre}</div>
                              <div>Price: ZAR {book.price.toFixed(2)}</div>
                              <div>Available: {book.available_copies} copies</div>
                              <div>Rating: {book.rating}/5</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Button
                              onClick={() => addToCart(book.id)}
                              className="w-full"
                              disabled={book.available_copies === 0}
                            >
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              Add to Cart
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => borrowBook(book.id)}
                              className="w-full"
                              disabled={book.available_copies === 0}
                            >
                              Borrow Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button
                    size="sm"
                    onClick={() => addToCart(book.id)}
                    disabled={book.available_copies === 0}
                    className="flex-1"
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Cart
                  </Button>
                </div>

                <Button
                  variant="outline"
                  onClick={() => borrowBook(book.id)}
                  disabled={book.available_copies === 0}
                  className="w-full"
                >
                  Borrow
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No books found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

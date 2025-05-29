"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"
import { Calendar, Clock, AlertTriangle, CheckCircle } from "lucide-react"

interface BorrowedBooksProps {
  user: any
}

interface BorrowedBook {
  id: number
  book: {
    id: number
    title: string
    author: string
    cover_image: string
  }
  borrowed_date: string
  due_date: string
  status: "borrowed" | "overdue" | "returned"
  fine_amount: number
  days_remaining: number
}

export function BorrowedBooks({ user }: BorrowedBooksProps) {
  const [borrowedBooks, setBorrowedBooks] = useState<BorrowedBook[]>([])
  const { toast } = useToast()

  useEffect(() => {
    if (user) {
      fetchBorrowedBooks()
    }
  }, [user])

  // Update the fetchBorrowedBooks function to include better book cover images and current dates
  const fetchBorrowedBooks = async () => {
    // Get current date
    const today = new Date()

    // Calculate dates
    const fiveDaysAgo = new Date(today)
    fiveDaysAgo.setDate(today.getDate() - 5)

    const tenDaysAgo = new Date(today)
    tenDaysAgo.setDate(today.getDate() - 10)

    const twentyDaysAgo = new Date(today)
    twentyDaysAgo.setDate(today.getDate() - 20)

    // Calculate due dates (14 days from borrowed date)
    const fiveDaysAgoDue = new Date(fiveDaysAgo)
    fiveDaysAgoDue.setDate(fiveDaysAgo.getDate() + 14)

    const tenDaysAgoDue = new Date(tenDaysAgo)
    tenDaysAgoDue.setDate(tenDaysAgo.getDate() + 14)

    const twentyDaysAgoDue = new Date(twentyDaysAgo)
    twentyDaysAgoDue.setDate(twentyDaysAgo.getDate() + 14)

    // Format dates to YYYY-MM-DD
    const formatDate = (date) => {
      return date.toISOString().split("T")[0]
    }

    // Calculate days remaining
    const daysRemaining = (dueDate) => {
      const diffTime = new Date(dueDate) - today
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }

    // Simulated borrowed books data
    const sampleBorrowedBooks: BorrowedBook[] = [
      {
        id: 1,
        book: {
          id: 1,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          cover_image: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
        },
        borrowed_date: formatDate(fiveDaysAgo),
        due_date: formatDate(fiveDaysAgoDue),
        status: "borrowed",
        fine_amount: 0,
        days_remaining: daysRemaining(fiveDaysAgoDue),
      },
      {
        id: 2,
        book: {
          id: 3,
          title: "Harry Potter and the Philosopher's Stone",
          author: "J.K. Rowling",
          cover_image: "https://m.media-amazon.com/images/I/81m1s4wIPML._AC_UF1000,1000_QL80_.jpg",
        },
        borrowed_date: formatDate(twentyDaysAgo),
        due_date: formatDate(twentyDaysAgoDue),
        status: "overdue",
        fine_amount: 25.0,
        days_remaining: daysRemaining(twentyDaysAgoDue),
      },
    ]
    setBorrowedBooks(sampleBorrowedBooks)
  }

  const renewBook = async (bookId: number) => {
    try {
      // Simulated API call
      setBorrowedBooks((books) =>
        books.map((book) =>
          book.id === bookId
            ? {
                ...book,
                due_date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
                days_remaining: 14,
              }
            : book,
        ),
      )

      toast({
        title: "Book Renewed",
        description: "Your book has been renewed for another 14 days",
      })
    } catch (error) {
      toast({
        title: "Renewal Failed",
        description: "Unable to renew book at this time",
        variant: "destructive",
      })
    }
  }

  const returnBook = async (bookId: number) => {
    try {
      // Simulated API call - Remove the book from the list instead of just changing status
      setBorrowedBooks((books) => books.filter((book) => book.id !== bookId))

      toast({
        title: "Book Returned",
        description: "Thank you for returning the book on time!",
      })
    } catch (error) {
      toast({
        title: "Return Failed",
        description: "Unable to process return at this time",
        variant: "destructive",
      })
    }
  }

  const payFine = async (bookId: number, amount: number) => {
    try {
      // Simulated payment processing
      setBorrowedBooks((books) => books.map((book) => (book.id === bookId ? { ...book, fine_amount: 0 } : book)))

      toast({
        title: "Fine Paid",
        description: `Fine of R${amount.toFixed(2)} has been paid successfully`,
      })
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "Unable to process payment at this time",
        variant: "destructive",
      })
    }
  }

  const getStatusBadge = (status: string, daysRemaining: number) => {
    if (status === "returned") {
      return (
        <Badge variant="default" className="bg-green-500">
          <CheckCircle className="h-3 w-3 mr-1" />
          Returned
        </Badge>
      )
    }
    if (status === "overdue") {
      return (
        <Badge variant="destructive">
          <AlertTriangle className="h-3 w-3 mr-1" />
          Overdue
        </Badge>
      )
    }
    if (daysRemaining <= 2) {
      return (
        <Badge variant="destructive">
          <Clock className="h-3 w-3 mr-1" />
          Due Soon
        </Badge>
      )
    }
    return (
      <Badge variant="secondary">
        <Calendar className="h-3 w-3 mr-1" />
        Active
      </Badge>
    )
  }

  const getProgressValue = (daysRemaining: number) => {
    const totalDays = 14
    const daysUsed = totalDays - daysRemaining
    return Math.max(0, Math.min(100, (daysUsed / totalDays) * 100))
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Login Required</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Please login to view your borrowed books.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const activeBorrows = borrowedBooks.filter((book) => book.status !== "returned")
  const totalFines = borrowedBooks.reduce((sum, book) => sum + book.fine_amount, 0)

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Borrowed Books</h1>
          <p className="text-muted-foreground">Manage your borrowed books, renewals, and returns.</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Active Borrows</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeBorrows.length}</div>
              <p className="text-xs text-muted-foreground">Currently borrowed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Overdue Books</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">
                {borrowedBooks.filter((book) => book.status === "overdue").length}
              </div>
              <p className="text-xs text-muted-foreground">Need immediate attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Outstanding Fines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">R{totalFines.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">Total amount due</p>
            </CardContent>
          </Card>
        </div>

        {/* Borrowed Books List */}
        {borrowedBooks.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-muted-foreground text-lg mb-4">No borrowed books found</p>
              <Button>Browse Books</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {borrowedBooks.map((borrowedBook) => (
              <Card key={borrowedBook.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-6">
                    <img
                      src={borrowedBook.book.cover_image || "/placeholder.svg"}
                      alt={borrowedBook.book.title}
                      className="w-24 h-32 object-cover rounded"
                    />

                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-semibold">{borrowedBook.book.title}</h3>
                            <p className="text-muted-foreground">by {borrowedBook.book.author}</p>
                          </div>
                          {getStatusBadge(borrowedBook.status, borrowedBook.days_remaining)}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Borrowed:</span>{" "}
                            {new Date(borrowedBook.borrowed_date).toLocaleDateString()}
                          </div>
                          <div>
                            <span className="font-medium">Due:</span>{" "}
                            {new Date(borrowedBook.due_date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>

                      {borrowedBook.status !== "returned" && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Time remaining:</span>
                            <span className={borrowedBook.days_remaining < 0 ? "text-destructive font-medium" : ""}>
                              {borrowedBook.days_remaining < 0
                                ? `${Math.abs(borrowedBook.days_remaining)} days overdue`
                                : `${borrowedBook.days_remaining} days left`}
                            </span>
                          </div>
                          <Progress value={getProgressValue(borrowedBook.days_remaining)} className="h-2" />
                        </div>
                      )}

                      {borrowedBook.fine_amount > 0 && (
                        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-destructive">Outstanding Fine</p>
                              <p className="text-sm text-muted-foreground">Late return fee</p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-destructive">
                                R{borrowedBook.fine_amount.toFixed(2)}
                              </p>
                              <Button size="sm" onClick={() => payFine(borrowedBook.id, borrowedBook.fine_amount)}>
                                Pay Fine
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>

                {borrowedBook.status !== "returned" && (
                  <CardFooter className="bg-muted/50 border-t">
                    <div className="flex space-x-2 w-full">
                      <Button
                        variant="outline"
                        onClick={() => renewBook(borrowedBook.id)}
                        disabled={borrowedBook.status === "overdue"}
                      >
                        Renew Book
                      </Button>
                      <Button onClick={() => returnBook(borrowedBook.id)} className="flex-1">
                        Return Book
                      </Button>
                    </div>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

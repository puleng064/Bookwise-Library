"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, DollarSign, TrendingUp } from "lucide-react"

interface UserDashboardProps {
  user: any
}

export function UserDashboard({ user }: UserDashboardProps) {
  const [userStats, setUserStats] = useState({
    totalBorrowed: 0,
    currentlyBorrowed: 0,
    totalFines: 0,
    favoriteGenre: "",
    readingStreak: 0,
    booksThisMonth: 0,
  })

  const [recentActivity, setRecentActivity] = useState([])

  useEffect(() => {
    if (user) {
      fetchUserStats()
      fetchRecentActivity()
    }
  }, [user])

  const fetchUserStats = async () => {
    // Simulated user statistics
    setUserStats({
      totalBorrowed: 24,
      currentlyBorrowed: 3,
      totalFines: 15.5,
      favoriteGenre: "Fiction",
      readingStreak: 12,
      booksThisMonth: 5,
    })
  }

  const fetchRecentActivity = async () => {
    // Simulated recent activity
    setRecentActivity([
      { id: 1, action: "Borrowed", book: "The Great Gatsby", date: "2024-01-20" },
      { id: 2, action: "Returned", book: "1984", date: "2024-01-18" },
      { id: 3, action: "Renewed", book: "Harry Potter", date: "2024-01-15" },
      { id: 4, action: "Borrowed", book: "Pride and Prejudice", date: "2024-01-12" },
    ])
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Login Required</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Please login to view your dashboard.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {user.username}!</h1>
          <p className="text-muted-foreground">Here's your reading activity and library account overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Books Borrowed</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.totalBorrowed}</div>
              <p className="text-xs text-muted-foreground">{userStats.currentlyBorrowed} currently borrowed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reading Streak</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.readingStreak}</div>
              <p className="text-xs text-muted-foreground">days in a row</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.booksThisMonth}</div>
              <p className="text-xs text-muted-foreground">books read</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Outstanding Fines</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">R{userStats.totalFines.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">total amount due</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reading Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Reading Progress</CardTitle>
              <CardDescription>Your reading goals for this month</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Monthly Goal</span>
                  <span>{userStats.booksThisMonth}/8 books</span>
                </div>
                <Progress value={(userStats.booksThisMonth / 8) * 100} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Reading Streak</span>
                  <span>{userStats.readingStreak}/30 days</span>
                </div>
                <Progress value={(userStats.readingStreak / 30) * 100} className="h-2" />
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">Favorite Genre</p>
                <Badge variant="secondary" className="text-sm">
                  {userStats.favoriteGenre}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest library transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{activity.book}</p>
                      <p className="text-sm text-muted-foreground">
                        {activity.action} on {new Date(activity.date).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge
                      variant={
                        activity.action === "Borrowed"
                          ? "default"
                          : activity.action === "Returned"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {activity.action}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you might want to perform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-medium">Browse Books</h3>
                  <p className="text-sm text-muted-foreground">Find your next read</p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-medium">Renew Books</h3>
                  <p className="text-sm text-muted-foreground">Extend your borrowing period</p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <DollarSign className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-medium">Pay Fines</h3>
                  <p className="text-sm text-muted-foreground">Clear outstanding fees</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

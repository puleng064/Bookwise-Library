"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, BookOpen, User } from "lucide-react"
import { useState, useEffect } from "react"

interface NavbarProps {
  currentPage: string
  setCurrentPage: (page: string) => void
  user: any
  onLogin: () => void
  onLogout: () => void
  onToggleSidebar: () => void
}

export function Navbar({ currentPage, setCurrentPage, user, onLogin, onLogout, onToggleSidebar }: NavbarProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "browse", label: "Browse" },
    { id: "cart", label: "Cart" },
    { id: "ai-assistance", label: "AI Assistance" },
    { id: "borrowed-books", label: "Borrowed Books" },
  ]

  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    // Load initial cart count from localStorage
    const storedCartCount = localStorage.getItem("cartCount")
    if (storedCartCount) {
      setCartCount(Number.parseInt(storedCartCount, 10))
    }

    // Listen for cart updates
    const handleCartUpdate = (event: CustomEvent) => {
      setCartCount(event.detail.count)
    }

    window.addEventListener("cartUpdated", handleCartUpdate as EventListener)

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate as EventListener)
    }
  }, [])

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>

            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Bookwise</span>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                onClick={() => setCurrentPage(item.id)}
                className="relative"
              >
                {item.label}
                {item.id === "cart" && cartCount > 0 && (
                  <Badge variant="destructive" className="ml-2 h-5 w-5 p-0 text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            ))}
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />

            {user ? (
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  onClick={() => setCurrentPage(user.is_admin ? "admin-dashboard" : "user-dashboard")}
                  className="flex items-center space-x-2"
                >
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">{user.username}</span>
                </Button>
                <Button variant="outline" onClick={onLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <Button onClick={onLogin}>Login</Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

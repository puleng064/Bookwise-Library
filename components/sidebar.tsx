"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import {
  Home,
  Search,
  ShoppingCart,
  Bot,
  BookOpen,
  User,
  LogIn,
  LogOut,
  Info,
  Phone,
  HelpCircle,
  FileText,
  MessageSquare,
  Shield,
} from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  user: any
  currentPage: string
  setCurrentPage: (page: string) => void
  onLogin: () => void
  onLogout: () => void
}

export function Sidebar({ isOpen, onClose, user, currentPage, setCurrentPage, onLogin, onLogout }: SidebarProps) {
  const mainNavItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "browse", label: "Browse Books", icon: Search },
    { id: "cart", label: "Cart", icon: ShoppingCart },
    { id: "ai-assistance", label: "AI Assistance", icon: Bot },
    { id: "borrowed-books", label: "Borrowed Books", icon: BookOpen },
  ]

  const aboutItems = [
    { id: "about", label: "About Bookwise", icon: Info },
    { id: "contact", label: "Contact", icon: Phone },
  ]

  const customerServiceItems = [
    { id: "faqs", label: "FAQs", icon: HelpCircle },
    { id: "help-center", label: "Help Center", icon: MessageSquare },
    { id: "support", label: "Request Support", icon: FileText },
    { id: "policies", label: "Library Policies", icon: Shield },
  ]

  const handleNavigation = (pageId: string) => {
    setCurrentPage(pageId)
    onClose()
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-80 p-0">
        <SheetHeader className="p-6 pb-4">
          <SheetTitle className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span>Bookwise Menu</span>
          </SheetTitle>
        </SheetHeader>

        <div className="px-6 space-y-6">
          {/* User Section */}
          {user ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{user.username}</span>
              </div>
              <Button variant="ghost" size="sm" onClick={onLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button onClick={onLogin} className="w-full">
              <LogIn className="h-4 w-4 mr-2" />
              Login / Register
            </Button>
          )}

          <Separator />

          {/* Main Navigation */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Navigation</h3>
            {mainNavItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => handleNavigation(item.id)}
              >
                <item.icon className="h-4 w-4 mr-3" />
                {item.label}
              </Button>
            ))}
          </div>

          <Separator />

          {/* About Section */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">About</h3>
            {aboutItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => handleNavigation(item.id)}
              >
                <item.icon className="h-4 w-4 mr-3" />
                {item.label}
              </Button>
            ))}
          </div>

          <Separator />

          {/* Customer Service */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Customer Service</h3>
            {customerServiceItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => handleNavigation(item.id)}
              >
                <item.icon className="h-4 w-4 mr-3" />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { HomePage } from "@/components/home-page"
import { BrowsePage } from "@/components/browse-page"
import { CartPage } from "@/components/cart-page"
import { AIAssistance } from "@/components/ai-assistance"
import { BorrowedBooks } from "@/components/borrowed-books"
import { UserDashboard } from "@/components/user-dashboard"
import { AdminDashboard } from "@/components/admin-dashboard"
import { LoginForm } from "@/components/login-form"
import { RegisterForm } from "@/components/register-form"
import { AboutPage } from "@/components/about-page"
import { ContactPage } from "@/components/contact-page"
import { FAQsPage } from "@/components/faqs-page"
import { HelpCenterPage } from "@/components/help-center-page"
import { SupportPage } from "@/components/support-page"
import { PoliciesPage } from "@/components/policies-page"
import { TermsPage } from "@/components/terms-page"
import { PrivacyPage } from "@/components/privacy-page"
import { CookiePolicyPage } from "@/components/cookie-policy-page"
import { ChildrenSectionPage } from "@/components/children-section-page"
import { EducationalResourcesPage } from "@/components/educational-resources-page"
import { TeacherResourcesPage } from "@/components/teacher-resources-page"
import { NewArrivalsPage } from "@/components/new-arrivals-page"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [user, setUser] = useState(null)
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("bookwise_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLogin = (userData) => {
    setUser(userData)
    localStorage.setItem("bookwise_user", JSON.stringify(userData))
    setShowLogin(false)
    setCurrentPage("home")
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem("bookwise_user")
    setCurrentPage("home")
    setSidebarOpen(false)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />
      case "browse":
        return <BrowsePage user={user} />
      case "cart":
        return <CartPage user={user} />
      case "ai-assistance":
        return <AIAssistance />
      case "borrowed-books":
        return <BorrowedBooks user={user} />
      case "user-dashboard":
        return <UserDashboard user={user} />
      case "admin-dashboard":
        return user?.is_admin ? <AdminDashboard /> : <HomePage />
      case "about":
        return <AboutPage />
      case "contact":
        return <ContactPage />
      case "faqs":
        return <FAQsPage />
      case "help-center":
        return <HelpCenterPage />
      case "support":
        return <SupportPage />
      case "policies":
        return <PoliciesPage />
      case "terms":
        return <TermsPage />
      case "privacy":
        return <PrivacyPage />
      case "cookies":
        return <CookiePolicyPage />
      case "children-section":
        return <ChildrenSectionPage />
      case "educational-resources":
        return <EducationalResourcesPage />
      case "teacher-resources":
        return <TeacherResourcesPage />
      case "new-arrivals":
        return <NewArrivalsPage />
      default:
        return <HomePage />
    }
  }

  if (showLogin) {
    return (
      <div className="min-h-screen bg-background">
        <LoginForm
          onLogin={handleLogin}
          onClose={() => setShowLogin(false)}
          onSwitchToRegister={() => {
            setShowLogin(false)
            setShowRegister(true)
          }}
        />
      </div>
    )
  }

  if (showRegister) {
    return (
      <div className="min-h-screen bg-background">
        <RegisterForm
          onRegister={() => {
            setShowRegister(false)
            setShowLogin(true)
          }}
          onClose={() => setShowRegister(false)}
          onSwitchToLogin={() => {
            setShowRegister(false)
            setShowLogin(true)
          }}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        user={user}
        onLogin={() => setShowLogin(true)}
        onLogout={handleLogout}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          user={user}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onLogin={() => setShowLogin(true)}
          onLogout={handleLogout}
        />

        <main className="flex-1 min-h-screen">{renderCurrentPage()}</main>
      </div>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

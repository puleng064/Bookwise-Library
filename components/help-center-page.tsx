"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Users, CreditCard, Settings, Search, MessageCircle, Phone, Mail } from "lucide-react"

export function HelpCenterPage() {
  const helpCategories = [
    {
      icon: BookOpen,
      title: "Browsing & Borrowing",
      description: "Learn how to find and borrow books",
      topics: ["How to search for books", "Borrowing process", "Renewing books", "Return procedures"],
    },
    {
      icon: Users,
      title: "Account Management",
      description: "Manage your profile and preferences",
      topics: ["Creating an account", "Updating profile", "Password reset", "Account settings"],
    },
    {
      icon: CreditCard,
      title: "Payments & Billing",
      description: "Payment methods and billing questions",
      topics: ["Payment options", "Paying fines", "Billing history", "Refund policy"],
    },
    {
      icon: Settings,
      title: "Technical Support",
      description: "Technical issues and troubleshooting",
      topics: ["Login problems", "Mobile app issues", "Browser compatibility", "Performance issues"],
    },
  ]

  const quickActions = [
    {
      icon: Search,
      title: "Search FAQs",
      description: "Find quick answers to common questions",
      action: "Browse FAQs",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start Chat",
    },
    {
      icon: Phone,
      title: "Call Support",
      description: "Speak directly with our team",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send Email",
    },
  ]

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Help Center</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find answers, get support, and learn how to make the most of Bookwise
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input placeholder="Search for help articles, guides, and FAQs..." className="pl-10 py-3 text-lg" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Get Help Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <action.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    {action.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>
                        <Button variant="link" className="p-0 h-auto text-left justify-start">
                          {topic}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Articles */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Popular Help Articles</CardTitle>
            <CardDescription>Most viewed articles this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                "How to borrow your first book",
                "Understanding late fees and fines",
                "Setting up your reading preferences",
                "Troubleshooting login issues",
                "How to renew borrowed books",
              ].map((article, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium">{article}</span>
                  <Button variant="ghost" size="sm">
                    Read
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <Card>
          <CardHeader>
            <CardTitle>Still Need Help?</CardTitle>
            <CardDescription>Our support team is available Monday-Friday, 8AM-6PM (SAST)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <Mail className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold mb-1">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-3">support@bookwise.com</p>
                <Button variant="outline" size="sm">
                  Send Email
                </Button>
              </div>

              <div className="text-center p-4 border rounded-lg">
                <Phone className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold mb-1">Phone Support</h3>
                <p className="text-sm text-muted-foreground mb-3">+27 11 123 4567</p>
                <Button variant="outline" size="sm">
                  Call Now
                </Button>
              </div>

              <div className="text-center p-4 border rounded-lg">
                <MessageCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold mb-1">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-3">Available 9AM-5PM</p>
                <Button variant="outline" size="sm">
                  Start Chat
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

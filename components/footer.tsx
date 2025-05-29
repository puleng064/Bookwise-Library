"use client"

import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

interface FooterProps {
  setCurrentPage: (page: string) => void
}

export function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Bookwise */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Bookwise</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Bookwise is a comprehensive digital library management system designed specifically for children and
              teachers. We make reading accessible, enjoyable, and educational for everyone.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Button
                  variant="link"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground"
                  onClick={() => setCurrentPage("browse")}
                >
                  Browse Books
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground"
                  onClick={() => setCurrentPage("children-section")}
                >
                  Children's Section
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground"
                  onClick={() => setCurrentPage("educational-resources")}
                >
                  Educational Resources
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground"
                  onClick={() => setCurrentPage("teacher-resources")}
                >
                  Teacher Resources
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground"
                  onClick={() => setCurrentPage("new-arrivals")}
                >
                  New Arrivals
                </Button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Button
                  variant="link"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground"
                  onClick={() => setCurrentPage("help-center")}
                >
                  Help Center
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground"
                  onClick={() => setCurrentPage("faqs")}
                >
                  FAQs
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground"
                  onClick={() => setCurrentPage("policies")}
                >
                  Library Policies
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground"
                  onClick={() => setCurrentPage("support")}
                >
                  Contact Support
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground"
                  onClick={() => setCurrentPage("privacy")}
                >
                  Privacy Policy
                </Button>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">support@bookwise.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+27 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Johannesburg, South Africa</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Subscribe to our newsletter</p>
              <div className="flex space-x-2">
                <Input placeholder="Enter your email" className="text-sm" />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 Bookwise Library Management System. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Button
              variant="link"
              className="p-0 h-auto text-muted-foreground hover:text-foreground"
              onClick={() => setCurrentPage("terms")}
            >
              Terms of Service
            </Button>
            <Button
              variant="link"
              className="p-0 h-auto text-muted-foreground hover:text-foreground"
              onClick={() => setCurrentPage("privacy")}
            >
              Privacy Policy
            </Button>
            <Button
              variant="link"
              className="p-0 h-auto text-muted-foreground hover:text-foreground"
              onClick={() => setCurrentPage("cookies")}
            >
              Cookie Policy
            </Button>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-8 p-6 bg-primary/5 rounded-lg">
          <h4 className="font-semibold mb-2">Our Mission</h4>
          <p className="text-sm text-muted-foreground">
            At Bookwise, we believe that every child deserves access to quality educational resources. Our platform
            bridges the gap between traditional libraries and modern technology, creating an engaging and accessible
            learning environment for students and educators alike. We're committed to fostering a love for reading and
            learning that lasts a lifetime.
          </p>
        </div>
      </div>
    </footer>
  )
}

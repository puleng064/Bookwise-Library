"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Cookie, Settings, Shield, BarChart } from "lucide-react"

export function CookiePolicyPage() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
          <p className="text-xl text-muted-foreground">
            Learn about how we use cookies and similar technologies on Bookwise
          </p>
          <Badge variant="outline" className="mt-4">
            Last Updated: January 2024
          </Badge>
        </div>

        {/* What Are Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Cookie className="h-6 w-6 mr-2 text-primary" />
              What Are Cookies?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Cookies are small text files that are stored on your device when you visit our website. They help us
              provide you with a better experience by remembering your preferences and understanding how you use our
              platform.
            </p>
            <p className="text-muted-foreground">
              We also use similar technologies like web beacons, pixels, and local storage to enhance your experience
              and improve our services.
            </p>
          </CardContent>
        </Card>

        {/* Types of Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Types of Cookies We Use</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center mb-3">
                <Shield className="h-5 w-5 mr-2 text-green-600" />
                <h4 className="font-semibold">Essential Cookies</h4>
                <Badge variant="outline" className="ml-2">
                  Always Active
                </Badge>
              </div>
              <p className="text-muted-foreground mb-2">
                These cookies are necessary for the website to function properly and cannot be disabled.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Authentication and security</li>
                <li>Shopping cart functionality</li>
                <li>Form submission and validation</li>
                <li>Load balancing and performance</li>
              </ul>
            </div>

            <Separator />

            <div>
              <div className="flex items-center mb-3">
                <Settings className="h-5 w-5 mr-2 text-blue-600" />
                <h4 className="font-semibold">Functional Cookies</h4>
                <Badge variant="secondary" className="ml-2">
                  Optional
                </Badge>
              </div>
              <p className="text-muted-foreground mb-2">
                These cookies enable enhanced functionality and personalization.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Language and region preferences</li>
                <li>Theme settings (dark/light mode)</li>
                <li>Personalized book recommendations</li>
                <li>Saved search filters</li>
              </ul>
            </div>

            <Separator />

            <div>
              <div className="flex items-center mb-3">
                <BarChart className="h-5 w-5 mr-2 text-purple-600" />
                <h4 className="font-semibold">Analytics Cookies</h4>
                <Badge variant="secondary" className="ml-2">
                  Optional
                </Badge>
              </div>
              <p className="text-muted-foreground mb-2">
                These cookies help us understand how visitors interact with our website.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Page views and user journeys</li>
                <li>Popular content and features</li>
                <li>Error tracking and debugging</li>
                <li>Performance monitoring</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Third-Party Cookies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We may use third-party services that set their own cookies. These services help us provide better
              functionality and understand our users' needs.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Payment Processors</h4>
                <p className="text-muted-foreground text-sm">
                  Secure payment processing for book purchases and fine payments
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Analytics Services</h4>
                <p className="text-muted-foreground text-sm">Anonymous usage statistics to improve our platform</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Content Delivery Networks</h4>
                <p className="text-muted-foreground text-sm">Faster loading times for images and other content</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Managing Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Managing Your Cookie Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Browser Settings</h4>
              <p className="text-muted-foreground mb-3">
                You can control cookies through your browser settings. Here's how to manage cookies in popular browsers:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Chrome: Settings → Privacy and Security → Cookies and other site data</li>
                <li>Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
                <li>Safari: Preferences → Privacy → Manage Website Data</li>
                <li>Edge: Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Our Cookie Preferences</h4>
              <p className="text-muted-foreground mb-3">
                You can also manage your cookie preferences directly on our platform:
              </p>
              <Button variant="outline" className="w-full sm:w-auto">
                Manage Cookie Preferences
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Impact of Disabling Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Impact of Disabling Cookies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              While you can disable cookies, please note that this may affect your experience on our platform:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>You may need to log in repeatedly</li>
              <li>Your preferences and settings may not be saved</li>
              <li>Some features may not work properly</li>
              <li>Book recommendations may be less relevant</li>
              <li>We may not be able to remember your cart contents</li>
            </ul>
          </CardContent>
        </Card>

        {/* Updates to This Policy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Updates to This Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other
              operational, legal, or regulatory reasons.
            </p>
            <p className="text-muted-foreground">
              When we make changes, we will update the "Last Updated" date at the top of this policy and notify you
              through our platform or via email if the changes are significant.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Questions About Cookies?</CardTitle>
            <CardDescription>Contact us if you have any questions about our use of cookies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Email Support</h4>
                <p className="text-muted-foreground">privacy@bookwise.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Phone Support</h4>
                <p className="text-muted-foreground">+27 11 123 4567</p>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline">Manage Cookie Preferences</Button>
              <Button variant="outline">Download Cookie Policy</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

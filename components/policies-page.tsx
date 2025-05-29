"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { BookOpen, DollarSign, Users, Shield, AlertTriangle } from "lucide-react"

export function PoliciesPage() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Library Policies</h1>
          <p className="text-xl text-muted-foreground">
            Important policies and guidelines for using Bookwise Library services
          </p>
        </div>

        {/* Borrowing Policy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-primary" />
              Borrowing Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Borrowing Limits</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Maximum of 5 books can be borrowed at one time</li>
                <li>Standard borrowing period is 14 days</li>
                <li>Books can be renewed once if no reservations exist</li>
                <li>Renewal extends the borrowing period by another 14 days</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Eligibility</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Valid account with verified email address required</li>
                <li>Account must be in good standing (no outstanding fines over R50)</li>
                <li>Children under 13 require parental consent</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Reservations</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Books can be reserved if currently unavailable</li>
                <li>Reserved books are held for 48 hours once available</li>
                <li>Maximum of 3 active reservations per user</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Late Fees and Fines */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="h-6 w-6 mr-2 text-primary" />
              Late Fees and Fines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Important Notice</h4>
              </div>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                Late fees help ensure fair access to library resources for all users.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Fee Structure</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-muted rounded">
                  <span>Late return fee (per day, per book)</span>
                  <Badge variant="outline">R5.00</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded">
                  <span>Maximum fine per book</span>
                  <Badge variant="outline">R50.00</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded">
                  <span>Lost book replacement fee</span>
                  <Badge variant="outline">Full book price + R25 processing</Badge>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Payment Terms</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Fines must be paid before borrowing additional books</li>
                <li>Payment can be made online through your account</li>
                <li>Accounts with fines over R50 will be suspended</li>
                <li>Payment plans available for fines over R100</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* User Conduct */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-6 w-6 mr-2 text-primary" />
              User Conduct Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Expected Behavior</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Treat all library materials with care and respect</li>
                <li>Return books in the same condition as borrowed</li>
                <li>Respect other users' rights to access materials</li>
                <li>Use library services for educational and recreational purposes</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Prohibited Activities</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Sharing account credentials with others</li>
                <li>Attempting to circumvent borrowing limits</li>
                <li>Damaging or defacing library materials</li>
                <li>Using the platform for commercial purposes</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Consequences</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>First violation: Warning and educational guidance</li>
                <li>Second violation: Temporary suspension (7 days)</li>
                <li>Third violation: Extended suspension (30 days)</li>
                <li>Severe violations: Permanent account termination</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Privacy and Data Protection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-6 w-6 mr-2 text-primary" />
              Privacy and Data Protection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Information We Collect</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Account information (name, email, phone number)</li>
                <li>Borrowing history and reading preferences</li>
                <li>Payment information (processed securely)</li>
                <li>Usage analytics to improve our services</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">How We Use Your Data</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Provide and improve library services</li>
                <li>Send important account notifications</li>
                <li>Recommend books based on your interests</li>
                <li>Comply with legal requirements</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Your Rights</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Access and review your personal data</li>
                <li>Request corrections to inaccurate information</li>
                <li>Delete your account and associated data</li>
                <li>Opt-out of non-essential communications</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Questions About Our Policies?</CardTitle>
            <CardDescription>Contact us if you need clarification on any policy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Email Support</h4>
                <p className="text-muted-foreground">policies@bookwise.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Phone Support</h4>
                <p className="text-muted-foreground">+27 11 123 4567</p>
              </div>
            </div>
            <Separator className="my-4" />
            <p className="text-sm text-muted-foreground">
              Last updated: January 2024. Policies are subject to change with 30 days notice to users.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

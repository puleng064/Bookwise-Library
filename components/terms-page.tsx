"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function TermsPage() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">
            Please read these terms carefully before using Bookwise services
          </p>
          <Badge variant="outline" className="mt-4">
            Last Updated: January 2024
          </Badge>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>1. Introduction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Welcome to Bookwise ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our
              digital library management platform and services (the "Service") operated by Bookwise Library Management
              System.
            </p>
            <p className="text-muted-foreground">
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of
              these terms, then you may not access the Service.
            </p>
          </CardContent>
        </Card>

        {/* Acceptance of Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>2. Acceptance of Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              By creating an account or using any part of the Service, you acknowledge that you have read, understood,
              and agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p className="text-muted-foreground">
              If you are under 18 years of age, you must have your parent or guardian's permission to use the Service
              and they must agree to these Terms on your behalf.
            </p>
          </CardContent>
        </Card>

        {/* User Accounts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>3. User Accounts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Account Creation</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>You must provide accurate and complete information when creating an account</li>
                <li>You are responsible for maintaining the security of your account credentials</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
                <li>One person may not maintain multiple accounts</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Account Responsibilities</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>You are responsible for all activities that occur under your account</li>
                <li>You must keep your contact information current and accurate</li>
                <li>You must comply with all applicable laws and regulations</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Service Usage */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>4. Service Usage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Permitted Use</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Personal, non-commercial use for educational and recreational purposes</li>
                <li>Borrowing books according to our borrowing policies</li>
                <li>Accessing educational resources and materials</li>
                <li>Participating in library programs and activities</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Prohibited Use</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Commercial use or resale of library materials</li>
                <li>Sharing account credentials or allowing others to use your account</li>
                <li>Attempting to circumvent security measures or access restrictions</li>
                <li>Using the Service to distribute malware or engage in illegal activities</li>
                <li>Reverse engineering or attempting to extract source code</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>5. Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The Service and its original content, features, and functionality are and will remain the exclusive
              property of Bookwise and its licensors. The Service is protected by copyright, trademark, and other laws.
            </p>
            <p className="text-muted-foreground">
              Books and materials available through the Service are owned by their respective publishers and authors.
              Your access to these materials is governed by the terms of our licensing agreements.
            </p>
          </CardContent>
        </Card>

        {/* Payment Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>6. Payment Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Fees and Charges</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Some books and services may require payment</li>
                <li>Late fees apply to overdue materials as outlined in our policies</li>
                <li>All fees are in South African Rand (ZAR)</li>
                <li>Prices are subject to change with reasonable notice</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Payment Processing</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Payments are processed securely through approved payment providers</li>
                <li>You authorize us to charge your selected payment method</li>
                <li>Refunds are provided according to our refund policy</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>7. Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              In no event shall Bookwise, its directors, employees, partners, agents, suppliers, or affiliates be liable
              for any indirect, incidental, special, consequential, or punitive damages, including without limitation,
              loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
            </p>
            <p className="text-muted-foreground">
              Our total liability to you for any claims arising from or related to the Service shall not exceed the
              amount you have paid us in the twelve (12) months preceding the claim.
            </p>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>8. Termination</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We may terminate or suspend your account and access to the Service immediately, without prior notice or
              liability, for any reason, including if you breach the Terms.
            </p>
            <p className="text-muted-foreground">
              You may terminate your account at any time by contacting us. Upon termination, your right to use the
              Service will cease immediately, and any outstanding obligations will remain in effect.
            </p>
          </CardContent>
        </Card>

        {/* Changes to Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>9. Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
              provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <p className="text-muted-foreground">
              Your continued use of the Service after any changes constitutes acceptance of the new Terms.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>10. Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: legal@bookwise.com</p>
              <p>Phone: +27 11 123 4567</p>
              <p>Address: 123 Education Street, Johannesburg, 2000, South Africa</p>
            </div>
            <Separator className="my-4" />
            <p className="text-sm text-muted-foreground">
              These Terms of Service are effective as of January 2024 and will remain in effect except with respect to
              any changes in their provisions in the future.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

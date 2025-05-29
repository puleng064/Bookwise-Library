"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Lock, Users } from "lucide-react"

export function PrivacyPage() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <Badge variant="outline" className="mt-4">
            Last Updated: January 2024
          </Badge>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-6 w-6 mr-2 text-primary" />
              Our Commitment to Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              At Bookwise, we are committed to protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you use our digital library services.
            </p>
            <p className="text-muted-foreground">
              We believe in transparency and want you to understand exactly how your data is handled. This policy
              applies to all users of our platform, including students, teachers, and administrators.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="h-6 w-6 mr-2 text-primary" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Personal Information</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Name and contact information (email address, phone number)</li>
                <li>Account credentials (username and encrypted password)</li>
                <li>Demographic information (age, gender, preferences)</li>
                <li>Payment information (processed securely by third-party providers)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Usage Information</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Books borrowed, returned, and reading history</li>
                <li>Search queries and browsing patterns</li>
                <li>Device information and IP addresses</li>
                <li>Login times and session duration</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Automatically Collected Data</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Cookies and similar tracking technologies</li>
                <li>Browser type and version</li>
                <li>Operating system information</li>
                <li>Referral sources and page views</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Your Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-6 w-6 mr-2 text-primary" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Service Provision</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Create and manage your library account</li>
                <li>Process book borrowing and returns</li>
                <li>Handle payments and billing</li>
                <li>Provide customer support</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Service Improvement</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Analyze usage patterns to improve our platform</li>
                <li>Recommend books based on your interests</li>
                <li>Develop new features and services</li>
                <li>Conduct research and analytics</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Communication</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Send important account notifications</li>
                <li>Remind you about due dates and renewals</li>
                <li>Provide updates about new books and features</li>
                <li>Respond to your inquiries and support requests</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Data Protection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="h-6 w-6 mr-2 text-primary" />
              How We Protect Your Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Security Measures</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Industry-standard encryption for data transmission and storage</li>
                <li>Secure servers with regular security updates</li>
                <li>Access controls and authentication protocols</li>
                <li>Regular security audits and monitoring</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Data Retention</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Personal data is retained only as long as necessary</li>
                <li>Account data is deleted within 30 days of account closure</li>
                <li>Anonymized usage data may be retained for research purposes</li>
                <li>Legal requirements may extend retention periods</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Information Sharing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Information Sharing and Disclosure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">We Do Not Sell Your Data</h4>
              <p className="text-muted-foreground">
                We do not sell, trade, or rent your personal information to third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Limited Sharing</h4>
              <p className="text-muted-foreground mb-2">We may share your information only in these circumstances:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With service providers who assist in our operations (under strict confidentiality)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Privacy Rights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Access and Control</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Access and review your personal data</li>
                <li>Request corrections to inaccurate information</li>
                <li>Download your data in a portable format</li>
                <li>Delete your account and associated data</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Communication Preferences</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Opt-out of marketing communications</li>
                <li>Choose notification preferences</li>
                <li>Manage cookie settings</li>
                <li>Control data sharing preferences</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Children's Privacy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We take special care to protect the privacy of children under 13. We do not knowingly collect personal
              information from children under 13 without parental consent.
            </p>
            <p className="text-muted-foreground">
              If you are a parent or guardian and believe your child has provided us with personal information, please
              contact us immediately so we can remove that information.
            </p>
          </CardContent>
        </Card>

        {/* Contact Us */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Us About Privacy</CardTitle>
            <CardDescription>Questions or concerns about your privacy? We're here to help.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Privacy Officer</h4>
                <p className="text-muted-foreground">privacy@bookwise.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">General Contact</h4>
                <p className="text-muted-foreground">+27 11 123 4567</p>
              </div>
            </div>
            <Separator className="my-4" />
            <p className="text-sm text-muted-foreground">
              This Privacy Policy may be updated periodically. We will notify you of any material changes via email or
              through our platform.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

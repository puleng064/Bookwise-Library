"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Clock, MessageSquare } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function SupportPage() {
  const [ticketForm, setTicketForm] = useState({
    subject: "",
    category: "",
    priority: "",
    description: "",
    email: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Support Ticket Created",
      description: "Your ticket has been submitted. We'll respond within 24 hours.",
    })
    setTicketForm({ subject: "", category: "", priority: "", description: "", email: "" })
  }

  const supportTickets = [
    {
      id: "TK-001",
      subject: "Cannot login to my account",
      status: "Open",
      priority: "High",
      created: "2024-01-20",
      lastUpdate: "2024-01-21",
    },
    {
      id: "TK-002",
      subject: "Book not showing in borrowed list",
      status: "In Progress",
      priority: "Medium",
      created: "2024-01-18",
      lastUpdate: "2024-01-19",
    },
    {
      id: "TK-003",
      subject: "Payment processing issue",
      status: "Resolved",
      priority: "High",
      created: "2024-01-15",
      lastUpdate: "2024-01-16",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      case "In Progress":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "Resolved":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return <MessageSquare className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "destructive"
      case "In Progress":
        return "secondary"
      case "Resolved":
        return "default"
      default:
        return "outline"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "destructive"
      case "Medium":
        return "secondary"
      case "Low":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Request Support</h1>
          <p className="text-xl text-muted-foreground">Submit a support ticket and track your requests</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Create Support Ticket */}
          <Card>
            <CardHeader>
              <CardTitle>Create Support Ticket</CardTitle>
              <CardDescription>Describe your issue and we'll help you resolve it</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@gmail.com"
                    value={ticketForm.email}
                    onChange={(e) => setTicketForm((prev) => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Brief description of your issue"
                    value={ticketForm.subject}
                    onChange={(e) => setTicketForm((prev) => ({ ...prev, subject: e.target.value }))}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={ticketForm.category}
                      onValueChange={(value) => setTicketForm((prev) => ({ ...prev, category: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="account">Account Issues</SelectItem>
                        <SelectItem value="borrowing">Borrowing Problems</SelectItem>
                        <SelectItem value="payment">Payment Issues</SelectItem>
                        <SelectItem value="technical">Technical Problems</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select
                      value={ticketForm.priority}
                      onValueChange={(value) => setTicketForm((prev) => ({ ...prev, priority: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Please provide detailed information about your issue..."
                    rows={5}
                    value={ticketForm.description}
                    onChange={(e) => setTicketForm((prev) => ({ ...prev, description: e.target.value }))}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Submit Support Ticket
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Support Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Support Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Response Times</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• High Priority: Within 4 hours</li>
                    <li>• Medium Priority: Within 24 hours</li>
                    <li>• Low Priority: Within 48 hours</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Support Hours</h4>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 8:00 AM - 6:00 PM (SAST)
                    <br />
                    Saturday: 9:00 AM - 2:00 PM (SAST)
                    <br />
                    Sunday: Closed
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Before Submitting</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Check our FAQ section</li>
                    <li>• Try clearing your browser cache</li>
                    <li>• Ensure you're using a supported browser</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alternative Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Live Chat Support
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  📞 Call +27 11 123 4567
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  📧 Email support@bookwise.com
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Existing Tickets */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Your Support Tickets</CardTitle>
            <CardDescription>Track the status of your submitted tickets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {supportTickets.map((ticket) => (
                <div key={ticket.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(ticket.status)}
                      <span className="font-semibold">{ticket.id}</span>
                      <Badge variant={getStatusColor(ticket.status) as any}>{ticket.status}</Badge>
                      <Badge variant={getPriorityColor(ticket.priority) as any}>{ticket.priority}</Badge>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                  <h4 className="font-medium mb-2">{ticket.subject}</h4>
                  <div className="text-sm text-muted-foreground">
                    Created: {ticket.created} | Last Update: {ticket.lastUpdate}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

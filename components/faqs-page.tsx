"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function FAQsPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const faqs = [
    {
      id: "1",
      category: "Getting Started",
      question: "How do I create an account?",
      answer:
        "To create an account, click the 'Login' button and then select 'Register'. Fill in your details including a valid Gmail address and 10-digit phone number. Once registered, you can start browsing and borrowing books immediately.",
    },
    {
      id: "2",
      category: "Getting Started",
      question: "Is Bookwise free to use?",
      answer:
        "Bookwise offers both free and premium features. Basic browsing and account creation are free. Book borrowing may require payment depending on the book and your subscription plan.",
    },
    {
      id: "3",
      category: "Borrowing",
      question: "How do I borrow a book?",
      answer:
        "Browse our collection, click on a book you're interested in, and select 'Borrow Now' or add it to your cart first. Complete the checkout process to borrow the book for 14 days.",
    },
    {
      id: "4",
      category: "Borrowing",
      question: "How long can I keep a borrowed book?",
      answer:
        "Books can be borrowed for 14 days. You can renew most books if no one else has reserved them. Late returns incur a fine of R5 per day.",
    },
    {
      id: "5",
      category: "Borrowing",
      question: "How many books can I borrow at once?",
      answer: "You can borrow up to 5 books at a time. Once you return a book, you can immediately borrow another one.",
    },
    {
      id: "6",
      category: "Payment",
      question: "What payment methods do you accept?",
      answer:
        "We accept major South African bank cards including FNB, ABSA, Standard Bank, Nedbank, and Capitec. All payments are processed securely.",
    },
    {
      id: "7",
      category: "Payment",
      question: "How do I pay fines?",
      answer:
        "You can pay fines through your user dashboard or when viewing your borrowed books. We accept the same payment methods as book purchases.",
    },
    {
      id: "8",
      category: "Technical",
      question: "Can I access Bookwise on mobile devices?",
      answer:
        "Yes! Bookwise is fully responsive and works on all devices including smartphones, tablets, and computers.",
    },
    {
      id: "9",
      category: "Technical",
      question: "What if I forgot my password?",
      answer:
        "Contact our support team at support@bookwise.com with your username or email address, and we'll help you reset your password.",
    },
    {
      id: "10",
      category: "For Teachers",
      question: "Are there special features for teachers?",
      answer:
        "Yes! Teachers can access educational resources, curriculum-aligned materials, and bulk borrowing options for classroom use.",
    },
    {
      id: "11",
      category: "For Teachers",
      question: "Can I recommend books for the library?",
      answer:
        "Contact our support team with your book recommendations. We regularly review and add new titles based on user suggestions.",
    },
    {
      id: "12",
      category: "Account",
      question: "How do I update my account information?",
      answer:
        "Go to your user dashboard where you can update your profile information, preferences, and contact details.",
    },
  ]

  const categories = [...new Set(faqs.map((faq) => faq.category))]

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">Find answers to common questions about using Bookwise</p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">{category}</h2>
            <div className="space-y-4">
              {faqs
                .filter((faq) => faq.category === category)
                .map((faq) => (
                  <Card key={faq.id}>
                    <Collapsible open={openItems.includes(faq.id)} onOpenChange={() => toggleItem(faq.id)}>
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-left text-lg">{faq.question}</CardTitle>
                            <ChevronDown
                              className={`h-5 w-5 transition-transform ${openItems.includes(faq.id) ? "rotate-180" : ""}`}
                            />
                          </div>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
            </div>
          </div>
        ))}

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Still have questions?</CardTitle>
            <CardDescription>Can't find what you're looking for? Our support team is here to help.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1">Contact Support</Button>
              <Button variant="outline" className="flex-1">
                Email Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

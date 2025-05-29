"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bot, User, Send } from "lucide-react"

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export function AIAssistance() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your Bookwise AI assistant. How can I help you today? I can assist with finding books, borrowing procedures, library policies, and more!",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    try {
      // Simulate AI response
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const aiResponse = generateAIResponse(inputMessage)

      const aiMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
        isUser: false,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("hello") || input.includes("hi")) {
      return "Hello! Welcome to Bookwise. I'm here to help you with any questions about our library services. What would you like to know?"
    }

    if (input.includes("book") && input.includes("find")) {
      return "I can help you find books! You can browse our collection by genre, search by title or author, or tell me what type of book you're looking for and I'll make recommendations."
    }

    if (input.includes("borrow")) {
      return "To borrow a book: 1) Browse our collection, 2) Add books to your cart or click 'Borrow Now', 3) Complete the checkout process. Books can be borrowed for 14 days, and you can renew them if needed."
    }

    if (input.includes("return")) {
      return "Books should be returned within 14 days of borrowing. You can return them physically to the library or mark them as returned in your account. Late returns may incur fines of R5 per day."
    }

    if (input.includes("fine") || input.includes("fee")) {
      return "Late return fines are R5 per day per book. You can view your current fines in your user dashboard. Fines can be paid online through your account."
    }

    if (input.includes("account") || input.includes("profile")) {
      return "You can manage your account through the user dashboard. There you can view borrowed books, payment history, update your preferences, and manage your profile information."
    }

    if (input.includes("recommend")) {
      return "I'd be happy to recommend books! What genres do you enjoy? Are you looking for fiction, non-fiction, educational materials, or something specific for children or teachers?"
    }

    if (input.includes("children") || input.includes("kids")) {
      return "We have a wonderful children's section with picture books, early readers, chapter books, and educational materials. Popular categories include adventure stories, fairy tales, science books, and interactive learning materials."
    }

    if (input.includes("teacher") || input.includes("education")) {
      return "Our educational resources include curriculum-aligned textbooks, teaching guides, reference materials, and professional development books. We also offer bulk borrowing options for classroom use."
    }

    if (input.includes("help") || input.includes("support")) {
      return "I'm here to help! You can ask me about: finding books, borrowing procedures, account management, library policies, recommendations, or any other library-related questions. What specific help do you need?"
    }

    if (input.includes("hours") || input.includes("open")) {
      return "Our digital library is available 24/7! You can browse, borrow, and manage your account anytime. Physical library hours vary by location - please check with your local branch."
    }

    if (input.includes("price") || input.includes("cost")) {
      return "Book prices vary depending on the title. Most books range from R150-R600. You can see the exact price on each book's detail page. We also offer subscription plans for unlimited borrowing."
    }

    return "I understand you're asking about library services. Could you please be more specific? I can help with finding books, borrowing procedures, account questions, recommendations, or any other library-related topics."
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const quickQuestions = [
    "How do I borrow a book?",
    "What are the library policies?",
    "Can you recommend books for children?",
    "How do I return a book?",
    "What are the late fees?",
  ]

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">AI Assistance</h1>
          <p className="text-muted-foreground">
            Get instant help with our AI-powered library assistant. Ask questions about books, borrowing, policies, and
            more!
          </p>
        </div>

        <Card className="h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bot className="h-6 w-6 mr-2 text-primary" />
              Bookwise AI Assistant
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 p-0">
            <ScrollArea className="h-full p-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-3 ${message.isUser ? "flex-row-reverse space-x-reverse" : ""}`}
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>
                        {message.isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                      </AvatarFallback>
                    </Avatar>

                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isUser ? "bg-primary text-primary-foreground ml-auto" : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>

          <CardFooter className="border-t p-4">
            <div className="w-full space-y-4">
              {/* Quick Questions */}
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setInputMessage(question)}
                    className="text-xs"
                  >
                    {question}
                  </Button>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button onClick={sendMessage} disabled={isLoading || !inputMessage.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

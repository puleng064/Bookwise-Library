"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { BookOpen, Eye, EyeOff } from "lucide-react"

interface LoginFormProps {
  onLogin: (user: any) => void
  onClose: () => void
  onSwitchToRegister: () => void
}

export function LoginForm({ onLogin, onClose, onSwitchToRegister }: LoginFormProps) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulated login - replace with actual API call
      if (formData.username === "admin" && formData.password === "admin123") {
        onLogin({
          id: 1,
          username: "admin",
          email: "admin@bookwise.com",
          is_admin: true,
        })
        toast({
          title: "Welcome back!",
          description: "Successfully logged in as administrator",
        })
      } else if (formData.username && formData.password) {
        onLogin({
          id: 2,
          username: formData.username,
          email: `${formData.username}@example.com`,
          is_admin: false,
        })
        toast({
          title: "Welcome back!",
          description: "Successfully logged in",
        })
      } else {
        throw new Error("Invalid credentials")
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Invalid username or password",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <BookOpen className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl">Welcome to Bookwise</CardTitle>
          <CardDescription>Sign in to your account to access your library</CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>

            <div className="flex justify-between w-full text-sm">
              <Button variant="link" onClick={onSwitchToRegister} className="p-0">
                Don't have an account? Register
              </Button>
              <Button variant="link" onClick={onClose} className="p-0">
                Cancel
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

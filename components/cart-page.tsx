"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Trash2, CreditCard, Minus, Plus } from "lucide-react"

interface CartPageProps {
  user: any
}

export function CartPage({ user }: CartPageProps) {
  const [cartItems, setCartItems] = useState([])
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    bankName: "",
  })
  const { toast } = useToast()

  useEffect(() => {
    if (user) {
      fetchCartItems()
    }
  }, [user])

  const fetchCartItems = async () => {
    // Get cart items from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]")
    setCartItems(storedCartItems)
  }

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId)
      return
    }

    const updatedItems = cartItems.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))

    setCartItems(updatedItems)
    localStorage.setItem("cartItems", JSON.stringify(updatedItems))

    // Update cart count
    const newCartCount = updatedItems.reduce((total, item) => total + item.quantity, 0)
    localStorage.setItem("cartCount", newCartCount.toString())
    window.dispatchEvent(new CustomEvent("cartUpdated", { detail: { count: newCartCount } }))
  }

  const removeItem = (itemId: number) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId)
    setCartItems(updatedItems)
    localStorage.setItem("cartItems", JSON.stringify(updatedItems))

    // Update cart count
    const newCartCount = updatedItems.reduce((total, item) => total + item.quantity, 0)
    localStorage.setItem("cartCount", newCartCount.toString())
    window.dispatchEvent(new CustomEvent("cartUpdated", { detail: { count: newCartCount } }))

    toast({
      title: "Item Removed",
      description: "Book removed from cart",
    })
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem("cartItems")
    localStorage.setItem("cartCount", "0")

    // Dispatch event to update navbar
    window.dispatchEvent(new CustomEvent("cartUpdated", { detail: { count: 0 } }))

    toast({
      title: "Cart Cleared",
      description: "All items removed from cart",
    })
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const handleCheckout = async () => {
    if (
      !paymentDetails.cardNumber ||
      !paymentDetails.expiryDate ||
      !paymentDetails.cvv ||
      !paymentDetails.cardholderName
    ) {
      toast({
        title: "Payment Details Required",
        description: "Please fill in all payment details",
        variant: "destructive",
      })
      return
    }

    try {
      // Simulated payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Payment Successful!",
        description: `Order placed successfully. Total: ZAR ${calculateTotal().toFixed(2)}`,
      })

      // Clear cart after successful payment
      clearCart()
      setPaymentDetails({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardholderName: "",
        bankName: "",
      })
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment",
        variant: "destructive",
      })
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Login Required</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Please login to view your cart.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Shopping Cart</h1>
          <p className="text-muted-foreground">Review your selected books and proceed to checkout.</p>
        </div>

        {cartItems.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-muted-foreground text-lg mb-4">Your cart is empty</p>
              <Button>Continue Browsing</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Cart Items ({cartItems.length})</h2>
                <Button variant="outline" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>

              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.cover_image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-20 h-28 object-cover rounded"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-muted-foreground">by {item.author}</p>
                        <p className="text-primary font-bold text-lg mt-2">ZAR {item.price.toFixed(2)}</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-lg">ZAR {(item.price * item.quantity).toFixed(2)}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary & Payment */}
            <div className="space-y-6">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>ZAR {calculateTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (15%):</span>
                    <span>ZAR {(calculateTotal() * 0.15).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span>ZAR {(calculateTotal() * 1.15).toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Payment Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bankName">Bank Name</Label>
                    <Select
                      value={paymentDetails.bankName}
                      onValueChange={(value) => setPaymentDetails((prev) => ({ ...prev, bankName: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your bank" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fnb">FNB</SelectItem>
                        <SelectItem value="absa">ABSA</SelectItem>
                        <SelectItem value="standard">Standard Bank</SelectItem>
                        <SelectItem value="nedbank">Nedbank</SelectItem>
                        <SelectItem value="capitec">Capitec</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardholderName">Cardholder Name</Label>
                    <Input
                      id="cardholderName"
                      placeholder="Full name on card"
                      value={paymentDetails.cardholderName}
                      onChange={(e) => setPaymentDetails((prev) => ({ ...prev, cardholderName: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={paymentDetails.cardNumber}
                      onChange={(e) => setPaymentDetails((prev) => ({ ...prev, cardNumber: e.target.value }))}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/YY"
                        value={paymentDetails.expiryDate}
                        onChange={(e) => setPaymentDetails((prev) => ({ ...prev, expiryDate: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={paymentDetails.cvv}
                        onChange={(e) => setPaymentDetails((prev) => ({ ...prev, cvv: e.target.value }))}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleCheckout} className="w-full" size="lg">
                    Complete Purchase - ZAR {(calculateTotal() * 1.15).toFixed(2)}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

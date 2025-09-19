"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Truck, CreditCard } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import download from "../../assets/download.jpg"
import { placeOeder } from "@/service/post-request"


interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export default function CheckoutPage() {
  const [checkoutStep, setCheckoutStep] = useState("checkout")
  const router = useRouter()
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    phone: "",
    addressLine: "",
    city: "",
    country: "",
    postalCode: "",
  })

  // 📝 Handle Input Changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setShippingInfo((prev) => ({ ...prev, [name]: value }))
  }
  const getImageUrl = (imagePath: string) => {
    const cleanPath = imagePath.replace(/\\/g, "/").replace(/^\/+/, "")
    return `http://localhost:5000/${cleanPath}`
  }

  const handlePlaceOrder = async () => {
    try {
      const payload = {
        products: cartItems?.map((item) => ({
          product: item.id,
          quantity: item.quantity,
        })),
        paymentMethod: "cod", // can be "online" later
        // shippingAddress: {
        //   fullName: "John Doe", // TODO: replace with form inputs
        //   phone: "1234567890",
        //   addressLine: "123 Main Street",
        //   city: "New York",
        //   postalCode: "10001",
        //   country: "USA",
        // },
        shippingAddress: shippingInfo,
      };

      console.log("Order Payload:", payload);

      const res = await placeOeder(payload);

      if (res?.success) {
        // ✅ Clear cart
        localStorage.removeItem("checkoutItems");
        setCartItems([]);

        // ✅ Move to confirmation page
        setCheckoutStep("confirmation");
      } else {
        alert(res?.message || "Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong. Please try again.");
    }
  };


  const [cartItems, setCartItems] = useState<CartItem[]>([])
  useEffect(() => {
    const items = localStorage.getItem("checkoutItems")
    if (items) {
      setCartItems(JSON.parse(items))
    }
  }, [])

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (checkoutStep === "confirmation") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
            <p className="text-xl text-gray-600 mb-6">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
            <div className="bg-white rounded-xl p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-bold text-lg">ORD-2024-{Math.floor(Math.random() * 1000)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-bold text-2xl text-green-600">${total.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  localStorage.removeItem("checkoutItems")
                  setCheckoutStep("confirmation")
                }}
                className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white"
              >
                Continue Shopping
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => router.push("/orders")}
                className="border-2 bg-transparent"
              >
                View Orders
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span>📞 +1 (555) 123-4567</span>
            <span>✉️ support@shopmart.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Free shipping on orders over $50!</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link
              href="/"
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"
            >
              ShopMart
            </Link>
            <div className="text-2xl font-semibold text-gray-900">Secure Checkout</div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-600 text-lg">Complete your purchase securely</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Truck className="h-6 w-6 mr-3 text-blue-600" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <Input
                      type="text"
                      name="fullName"
                      value={shippingInfo.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="border-2 border-gray-200 rounded-xl py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <Input
                      type="text"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleInputChange}
                      placeholder="1234567890"
                      className="border-2 border-gray-200 rounded-xl py-3"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                  <Input
                    type="text"
                    name="addressLine"
                    value={shippingInfo.addressLine}
                    onChange={handleInputChange}
                    placeholder="123 Main Street"
                    className="border-2 border-gray-200 rounded-xl py-3"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                    <Input
                      type="text"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                      className="border-2 border-gray-200 rounded-xl py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
                    <Input
                      type="text"
                      name="country"
                      value={shippingInfo.country}
                      onChange={handleInputChange}
                      placeholder="USA"
                      className="border-2 border-gray-200 rounded-xl py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Postal Code</label>
                    <Input
                      type="text"
                      name="postalCode"
                      value={shippingInfo.postalCode}
                      onChange={handleInputChange}
                      placeholder="10001"
                      className="border-2 border-gray-200 rounded-xl py-3"
                    />
                  </div>
                </div>
              </CardContent>

            </Card>

            {/* Payment Information */}
            {/* <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <CreditCard className="h-6 w-6 mr-3 text-green-600" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                  <Input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="border-2 border-gray-200 rounded-xl py-3"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date</label>
                    <Input type="text" placeholder="MM/YY" className="border-2 border-gray-200 rounded-xl py-3" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">CVV</label>
                    <Input type="text" placeholder="123" className="border-2 border-gray-200 rounded-xl py-3" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Cardholder Name</label>
                  <Input type="text" placeholder="John Doe" className="border-2 border-gray-200 rounded-xl py-3" />
                </div>
              </CardContent>
            </Card> */}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg sticky top-8">
              <CardHeader>
                <CardTitle className="text-2xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Cart Items */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <Image
                        src={getImageUrl(item.image)}
                        width={96}
                        height={96}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{item.name}</h4>
                        <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">Total</span>
                      <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white py-4 text-lg rounded-xl"
                  size="lg"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </Button>




                <div className="text-center">
                  <Button
                    variant="outline"
                    onClick={() => router.push("/cart")}
                    className="text-orange-600 border-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    ← Back to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

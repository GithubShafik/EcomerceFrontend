"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, Settings, ShoppingCart, X, CreditCard } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { getCart } from "@/service/get-request"
import { updateCart } from "@/service/update-request"
import { deleteCartItemById } from "@/service/delete-request"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  category?: string
}

export default function CartPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const getImageUrl = (imagePath: string) => {
    const cleanPath = imagePath.replace(/\\/g, "/").replace(/^\/+/, "")
    return `http://localhost:5000/${cleanPath}`
  }

  const getCartByUserID = async () => {
    try {
      const res = await getCart();
      const fetchedItems = res.cart.items.map((item: any) => ({
        id: item.product._id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        image: `/${item.product.image.replace(/\\/g, "/")}`,
        category: item.product.category?.name || "General",
      }));
      setCartItems(fetchedItems);
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  };

  useEffect(() => {
    getCartByUserID()
  }, [])

  const handleUpdateCart = (id: string, quantity: number) => {
    updateCart({ quantity, productId: id })
      .then((res) => {
        console.log("Cart updated:", res);
        getCartByUserID()
      })
      .catch((err) => {
        console.error("Failed to update cart:", err);
      });
  };


  const handleDeletCartItem = (id: string) => {
    deleteCartItemById(id)
      .then((res) => {
        console.log(res);
        getCartByUserID()
      })
  }

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: any) => {
    const numericQuantity = Number(quantity);

    if (numericQuantity === 0) {
      removeFromCart(id);
      handleDeletCartItem(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: numericQuantity } : item
        )
      );
      handleUpdateCart(id, numericQuantity);
    }
  };


  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
              <p className="text-gray-600">Review items before checkout</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" className="relative bg-transparent">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8 overflow-auto">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
              <div className="text-right">
                <p className="text-sm text-gray-600">{cartItems.length} items</p>
                <p className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</p>
              </div>
            </div>

            {cartItems.length === 0 ? (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-12 text-center">
                  <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
                  <p className="text-gray-600 mb-8">Looks like you haven’t added anything to your cart yet</p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8"
                    onClick={() => router.push("/shop")}
                  >
                    Start Shopping
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                  {cartItems.map((item) => (
                    <Card key={item.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-6">
                          <Image
                            src={getImageUrl(item.image)}
                            alt={item.name}
                            width={96}
                            height={96}
                            className="w-24 h-24 object-cover rounded-xl"
                          />
                          <div className="flex-1">
                            <Badge variant="secondary" className="mb-2">
                              {item.category}
                            </Badge>
                            <h3 className="font-bold text-xl text-gray-900 mb-1">{item.name}</h3>
                            <p className="text-2xl font-bold text-orange-600">${item.price}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="rounded-full"
                            >
                              -
                            </Button>
                            <span className="w-12 text-center font-semibold text-lg">{item.quantity}</span>
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="rounded-full"
                            >
                              +
                            </Button>
                          </div>
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => handleDeletCartItem(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <Card className="border-0 shadow-lg sticky top-8">
                    <CardHeader>
                      <CardTitle className="text-2xl">Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold">${total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-semibold text-green-600">Free</span>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold">Total</span>
                          <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
                        </div>
                      </div>
                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white py-4 text-lg rounded-xl"
                        size="lg"
                        onClick={() => {
                          localStorage.setItem("checkoutItems", JSON.stringify(cartItems))
                          router.push("/checkout")
                        }}
                      >
                        <CreditCard className="h-5 w-5 mr-2" />
                        Proceed to Checkout
                      </Button>
                      <div className="text-center">
                        <Button
                          variant="outline"
                          onClick={() => router.push("/shop")}
                          className="text-orange-600 border-orange-600 hover:bg-orange-50"
                        >
                          Continue Shopping
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

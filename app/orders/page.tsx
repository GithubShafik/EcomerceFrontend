"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Filter, Bell, Settings, Loader2 } from "lucide-react"
import { getMyOrders } from "@/service/get-request"

export default function OrdersPage() {
  const router = useRouter()
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      setLoading(true)
      const data = await getMyOrders()
      setOrders(data || [])
    } catch (err: any) {
      setError("Failed to load orders")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800 border-green-200"
      case "Shipped":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Placed":
      case "Packed":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Out for Delivery":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Cancelled":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">My Orders</h2>
              <p className="text-gray-600">Track your order history</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" className="relative bg-transparent">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-8 overflow-auto">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">My Orders</h1>
                <p className="text-gray-600 text-lg">Track and manage your orders</p>
              </div>
              <Button variant="outline" className="border-2 bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                Filter Orders
              </Button>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                <span className="ml-3 text-gray-600 text-lg">Loading orders...</span>
              </div>
            )}

            {/* Error State */}
            {error && !loading && (
              <div className="text-center py-20">
                <p className="text-red-500 text-lg">{error}</p>
                <Button onClick={fetchOrders} className="mt-4">
                  Retry
                </Button>
              </div>
            )}

            {/* Empty State */}
            {!loading && !error && orders.length === 0 && (
              <div className="text-center py-20">
                <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No orders yet</p>
                <p className="text-gray-400">Start shopping to see your orders here!</p>
              </div>
            )}

            {/* Orders List */}
            {!loading && !error && orders.length > 0 && (
              <div className="space-y-6">
                {orders.map((order: any) => (
                  <Card key={order._id} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="flex items-center space-x-6">
                          <div className="bg-blue-100 p-4 rounded-xl">
                            <Package className="h-8 w-8 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-xl text-gray-900 mb-1">
                              Order #{order._id.slice(-8).toUpperCase()}
                            </h3>
                            <p className="text-gray-600 mb-2">
                              Ordered on {formatDate(order.createdAt)} • {order.products?.length || 0} items
                            </p>
                            <Badge className={`${getStatusColor(order.orderStatus?.name || "")} border font-semibold`}>
                              {order.orderStatus?.name || "Unknown"}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-right">
                            <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                            <p className="text-2xl font-bold text-gray-900">₹{order.totalAmount}</p>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-2 bg-transparent"
                              onClick={() => router.push(`/orders/${order._id}`)}
                            >
                              View Details
                            </Button>
                            {order.orderStatus?.name === "Delivered" && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-orange-600 border-orange-600 hover:bg-orange-50 bg-transparent"
                              >
                                Reorder
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Product summary */}
                      {order.products && order.products.length > 0 && (
                        <div className="mt-4 pt-4 border-t">
                          <div className="flex flex-wrap gap-3">
                            {order.products.map((item: any, idx: number) => (
                              <div key={idx} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg text-sm">
                                <span className="font-medium">{item.product?.name || "Product"}</span>
                                <span className="text-gray-400">×{item.quantity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

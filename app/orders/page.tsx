"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Filter, Bell, Settings, LogOut, Home, ShoppingBag, User, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import AppSidebar from "@/components/app-sidebar"

export default function OrdersPage() {
  const router = useRouter()

  const orders = [
    { id: "ORD-2024-001", date: "2024-01-15", status: "Delivered", total: 449.98, items: 3 },
    { id: "ORD-2024-002", date: "2024-01-10", status: "Shipped", total: 299.99, items: 1 },
    { id: "ORD-2024-003", date: "2024-01-05", status: "Processing", total: 179.98, items: 2 },
    { id: "ORD-2024-004", date: "2024-01-01", status: "Cancelled", total: 89.99, items: 1 },
    { id: "ORD-2023-045", date: "2023-12-28", status: "Delivered", total: 234.5, items: 2 },
    { id: "ORD-2023-044", date: "2023-12-20", status: "Delivered", total: 156.75, items: 1 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800 border-green-200"
      case "Shipped":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Processing":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Cancelled":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Main Content */}
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

            <div className="space-y-6">
              {orders.map((order) => (
                <Card key={order.id} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="flex items-center space-x-6">
                        <div className="bg-blue-100 p-4 rounded-xl">
                          <Package className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-gray-900 mb-1">{order.id}</h3>
                          <p className="text-gray-600 mb-2">
                            Ordered on {order.date} • {order.items} items
                          </p>
                          <Badge className={`${getStatusColor(order.status)} border font-semibold`}>
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                          <p className="text-2xl font-bold text-gray-900">${order.total}</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button variant="outline" size="sm" className="border-2 bg-transparent">
                            View Details
                          </Button>
                          {order.status === "Delivered" && (
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

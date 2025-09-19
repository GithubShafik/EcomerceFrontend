"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Package,
  DollarSign,
  Heart,
  Award,
  ShoppingBag,
  User,
  Bell,
  Settings,
  LogOut,
  Home,
  ShoppingCart,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import AppSidebar from "@/components/app-sidebar"

export default function Dashboard() {
  const router = useRouter()

  const dashboardStats = [
    {
      title: "Total Orders",
      value: "24",
      change: "+12%",
      icon: <Package className="h-6 w-6" />,
      color: "text-blue-600",
    },
    {
      title: "Total Spent",
      value: "$2,847",
      change: "+8%",
      icon: <DollarSign className="h-6 w-6" />,
      color: "text-green-600",
    },
    { title: "Wishlist Items", value: "18", change: "+3", icon: <Heart className="h-6 w-6" />, color: "text-pink-600" },
    {
      title: "Reward Points",
      value: "1,250",
      change: "+150",
      icon: <Award className="h-6 w-6" />,
      color: "text-orange-600",
    },
  ]

  const recentOrders = [
    { id: "ORD-2024-001", date: "2024-01-15", status: "Delivered", total: 449.98, items: 3 },
    { id: "ORD-2024-002", date: "2024-01-10", status: "Shipped", total: 299.99, items: 1 },
    { id: "ORD-2024-003", date: "2024-01-05", status: "Processing", total: 179.98, items: 2 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800 border-green-200"
      case "Shipped":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Processing":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
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
              <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard</h2>
              <p className="text-gray-600">Overview of your account activity</p>
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
            {/* Welcome Header */}
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold mb-2">Welcome back, John! 👋</h1>
                  <p className="text-blue-100 text-lg">Ready to continue your shopping journey?</p>
                </div>
                <div className="hidden md:block">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl font-bold">Level 3</div>
                    <div className="text-sm text-blue-100">Premium Member</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardStats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                      </div>
                      <div className={`${stat.color} bg-gray-50 p-3 rounded-xl`}>{stat.icon}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card
                className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md"
                onClick={() => router.push("/shop")}
              >
                <CardContent className="p-6 text-center">
                  <ShoppingBag className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Continue Shopping</h3>
                  <p className="text-gray-600">Discover new products and deals</p>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md"
                onClick={() => router.push("/orders")}
              >
                <CardContent className="p-6 text-center">
                  <Package className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Track Orders</h3>
                  <p className="text-gray-600">Check your order status</p>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md"
                onClick={() => router.push("/profile")}
              >
                <CardContent className="p-6 text-center">
                  <User className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Update Profile</h3>
                  <p className="text-gray-600">Manage your account settings</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Recent Orders</CardTitle>
                  <Button variant="outline" onClick={() => router.push("/orders")}>
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Package className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold">{order.id}</p>
                          <p className="text-sm text-gray-600">
                            {order.items} items • {order.date}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                        <p className="font-bold text-lg mt-1">${order.total}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

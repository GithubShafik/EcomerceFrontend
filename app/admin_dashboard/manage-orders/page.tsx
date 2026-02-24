"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Package, Loader2, RefreshCw, Users, DollarSign, ShoppingBag, Eye } from "lucide-react"
import { getAllOrders, getOrderStatuses } from "@/service/get-request"
import { updateOrderStatus } from "@/service/update-request"

export default function ManageOrdersPage() {
    const router = useRouter()
    const [orders, setOrders] = useState<any[]>([])
    const [statuses, setStatuses] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [updatingOrderId, setUpdatingOrderId] = useState<string | null>(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            setLoading(true)
            setError("")
            const [ordersData, statusesData] = await Promise.all([
                getAllOrders(),
                getOrderStatuses(),
            ])
            setOrders(ordersData || [])
            setStatuses(statusesData || [])
        } catch (err: any) {
            setError("Failed to load data")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const handleStatusChange = async (orderId: string, statusId: string) => {
        try {
            setUpdatingOrderId(orderId)
            await updateOrderStatus(orderId, statusId)
            // Refresh orders
            const ordersData = await getAllOrders()
            setOrders(ordersData || [])
        } catch (err: any) {
            console.error("Failed to update status:", err)
        } finally {
            setUpdatingOrderId(null)
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
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    // Stats
    const totalOrders = orders.length
    const totalRevenue = orders.reduce((sum: number, o: any) => sum + (o.totalAmount || 0), 0)
    const deliveredCount = orders.filter((o: any) => o.orderStatus?.name === "Delivered").length
    const pendingCount = orders.filter((o: any) => !["Delivered", "Cancelled"].includes(o.orderStatus?.name || "")).length

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <div className="flex-1 flex flex-col">
                {/* Top Header */}
                <header className="bg-white shadow-sm border-b px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Manage Orders</h2>
                            <p className="text-gray-600">View and manage all customer orders</p>
                        </div>
                        <Button onClick={fetchData} variant="outline" className="gap-2">
                            <RefreshCw className="h-4 w-4" />
                            Refresh
                        </Button>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 p-8 overflow-auto">
                    <div className="space-y-8">
                        {/* Stats Grid */}
                        <div className="grid md:grid-cols-4 gap-6">
                            <Card className="border-0 shadow-md">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600 mb-1">Total Orders</p>
                                            <p className="text-3xl font-bold text-gray-900">{totalOrders}</p>
                                        </div>
                                        <div className="text-blue-600 bg-blue-50 p-3 rounded-xl">
                                            <Package className="h-6 w-6" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-md">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600 mb-1">Total Revenue</p>
                                            <p className="text-3xl font-bold text-gray-900">₹{totalRevenue.toLocaleString()}</p>
                                        </div>
                                        <div className="text-green-600 bg-green-50 p-3 rounded-xl">
                                            <DollarSign className="h-6 w-6" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-md">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600 mb-1">Delivered</p>
                                            <p className="text-3xl font-bold text-gray-900">{deliveredCount}</p>
                                        </div>
                                        <div className="text-orange-600 bg-orange-50 p-3 rounded-xl">
                                            <ShoppingBag className="h-6 w-6" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-md">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600 mb-1">Pending</p>
                                            <p className="text-3xl font-bold text-gray-900">{pendingCount}</p>
                                        </div>
                                        <div className="text-yellow-600 bg-yellow-50 p-3 rounded-xl">
                                            <Users className="h-6 w-6" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Loading */}
                        {loading && (
                            <div className="flex items-center justify-center py-20">
                                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                                <span className="ml-3 text-gray-600 text-lg">Loading orders...</span>
                            </div>
                        )}

                        {/* Error */}
                        {error && !loading && (
                            <div className="text-center py-20">
                                <p className="text-red-500 text-lg">{error}</p>
                                <Button onClick={fetchData} className="mt-4">Retry</Button>
                            </div>
                        )}

                        {/* Empty */}
                        {!loading && !error && orders.length === 0 && (
                            <div className="text-center py-20">
                                <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                                <p className="text-gray-500 text-lg">No orders found</p>
                            </div>
                        )}

                        {/* Orders Table */}
                        {!loading && !error && orders.length > 0 && (
                            <Card className="border-0 shadow-md">
                                <CardHeader>
                                    <CardTitle className="text-xl">All Orders</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b bg-gray-50">
                                                    <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">Order ID</th>
                                                    <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">Customer</th>
                                                    <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">Products</th>
                                                    <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">Total</th>
                                                    <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">Payment</th>
                                                    <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">Date</th>
                                                    <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">Status</th>
                                                    <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">Update Status</th>
                                                    <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.map((order: any) => (
                                                    <tr key={order._id} className="border-b hover:bg-gray-50 transition-colors">
                                                        <td className="py-4 px-4">
                                                            <span
                                                                className="font-mono text-sm font-medium text-blue-600 cursor-pointer hover:underline"
                                                                onClick={() => router.push(`/orders/${order._id}`)}
                                                            >
                                                                #{order._id.slice(-8).toUpperCase()}
                                                            </span>
                                                        </td>
                                                        <td className="py-4 px-4">
                                                            <div>
                                                                <p className="font-medium text-gray-900">{order.userId?.name || "N/A"}</p>
                                                                <p className="text-sm text-gray-500">{order.userId?.email || ""}</p>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4">
                                                            <div className="flex flex-col gap-1">
                                                                {order.products?.map((item: any, idx: number) => (
                                                                    <span key={idx} className="text-sm text-gray-700">
                                                                        {item.product?.name || "Product"} ×{item.quantity}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4">
                                                            <span className="font-bold text-gray-900">₹{order.totalAmount}</span>
                                                        </td>
                                                        <td className="py-4 px-4">
                                                            <Badge variant="outline" className="capitalize">
                                                                {order.paymentMethod}
                                                            </Badge>
                                                        </td>
                                                        <td className="py-4 px-4">
                                                            <span className="text-sm text-gray-600">{formatDate(order.createdAt)}</span>
                                                        </td>
                                                        <td className="py-4 px-4">
                                                            <Badge className={`${getStatusColor(order.orderStatus?.name || "")} border font-semibold`}>
                                                                {order.orderStatus?.name || "Unknown"}
                                                            </Badge>
                                                        </td>
                                                        <td className="py-4 px-4">
                                                            <div className="flex items-center gap-2">
                                                                {updatingOrderId === order._id ? (
                                                                    <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                                                                ) : (
                                                                    <Select
                                                                        value={order.orderStatus?._id || ""}
                                                                        onValueChange={(value) => handleStatusChange(order._id, value)}
                                                                    >
                                                                        <SelectTrigger className="w-[160px]">
                                                                            <SelectValue placeholder="Select Status" />
                                                                        </SelectTrigger>
                                                                        <SelectContent>
                                                                            {statuses.map((status: any) => (
                                                                                <SelectItem key={status._id} value={status._id}>
                                                                                    {status.name}
                                                                                </SelectItem>
                                                                            ))}
                                                                        </SelectContent>
                                                                    </Select>
                                                                )}
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4">
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                className="gap-1.5"
                                                                onClick={() => router.push(`/orders/${order._id}`)}
                                                            >
                                                                <Eye className="h-4 w-4" />
                                                                View Receipt
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}

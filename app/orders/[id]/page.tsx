"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Package,
    Loader2,
    ArrowLeft,
    MapPin,
    CreditCard,
    Calendar,
    User,
    Mail,
    Phone,
    Printer,
} from "lucide-react"
import { getOrderById } from "@/service/get-request"

export default function OrderDetailPage() {
    const params = useParams()
    const router = useRouter()
    const orderId = params?.id as string

    const [order, setOrder] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        if (orderId) {
            fetchOrder()
        }
    }, [orderId])

    const fetchOrder = async () => {
        try {
            setLoading(true)
            const data = await getOrderById(orderId)
            setOrder(data)
        } catch (err: any) {
            setError("Failed to load order details")
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
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="flex items-center gap-3">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                    <span className="text-gray-600 text-lg">Loading order details...</span>
                </div>
            </div>
        )
    }

    if (error || !order) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-red-500 text-lg mb-4">{error || "Order not found"}</p>
                    <Button onClick={() => router.back()}>Go Back</Button>
                </div>
            </div>
        )
    }

    const statusName = order.orderStatus?.name || "Unknown"

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white shadow-sm border-b px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => router.back()}
                                className="bg-transparent"
                            >
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Order Details</h2>
                                <p className="text-gray-600">Order #{order._id.slice(-8).toUpperCase()}</p>
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            className="gap-2 print:hidden"
                            onClick={() => window.print()}
                        >
                            <Printer className="h-4 w-4" />
                            Print Receipt
                        </Button>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 p-8 overflow-auto">
                    <div className="max-w-4xl mx-auto space-y-6">

                        {/* Order Status Banner */}
                        <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-6 rounded-2xl shadow-xl">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-blue-100 text-sm mb-1">Order Status</p>
                                    <h3 className="text-3xl font-bold">{statusName}</h3>
                                    <p className="text-blue-100 mt-1">
                                        Placed on {formatDate(order.createdAt)}
                                    </p>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                                    <Package className="h-10 w-10" />
                                </div>
                            </div>
                        </div>

                        {/* Receipt Card */}
                        <Card className="border-0 shadow-md">
                            <CardContent className="p-0">
                                {/* Receipt Header */}
                                <div className="p-8 border-b bg-gray-50 rounded-t-lg">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900">ShopMart</h2>
                                            <p className="text-gray-500 text-sm mt-1">Order Receipt</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-gray-500">Order ID</p>
                                            <p className="font-mono font-bold text-gray-900">
                                                #{order._id.slice(-8).toUpperCase()}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Customer & Shipping Info */}
                                <div className="p-8 grid md:grid-cols-2 gap-8 border-b">
                                    {/* Customer Info */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                            Customer Information
                                        </h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <User className="h-4 w-4 text-gray-400" />
                                                <span className="text-gray-900 font-medium">
                                                    {order.userId?.name || order.shippingAddress?.fullName || "N/A"}
                                                </span>
                                            </div>
                                            {order.userId?.email && (
                                                <div className="flex items-center gap-3">
                                                    <Mail className="h-4 w-4 text-gray-400" />
                                                    <span className="text-gray-600">{order.userId.email}</span>
                                                </div>
                                            )}
                                            {order.shippingAddress?.phone && (
                                                <div className="flex items-center gap-3">
                                                    <Phone className="h-4 w-4 text-gray-400" />
                                                    <span className="text-gray-600">{order.shippingAddress.phone}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Shipping Address */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                            Shipping Address
                                        </h4>
                                        {order.shippingAddress && (
                                            <div className="flex gap-3">
                                                <MapPin className="h-4 w-4 text-gray-400 mt-1 shrink-0" />
                                                <div className="text-gray-600 leading-relaxed">
                                                    <p className="font-medium text-gray-900">{order.shippingAddress.fullName}</p>
                                                    <p>{order.shippingAddress.addressLine}</p>
                                                    <p>
                                                        {order.shippingAddress.city}
                                                        {order.shippingAddress.postalCode ? `, ${order.shippingAddress.postalCode}` : ""}
                                                    </p>
                                                    <p>{order.shippingAddress.country}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Payment & Date Info */}
                                <div className="p-8 grid md:grid-cols-2 gap-8 border-b">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                            Payment Method
                                        </h4>
                                        <div className="flex items-center gap-3">
                                            <CreditCard className="h-4 w-4 text-gray-400" />
                                            <Badge variant="outline" className="capitalize text-sm px-3 py-1">
                                                {order.paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}
                                            </Badge>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                            Order Date
                                        </h4>
                                        <div className="flex items-center gap-3">
                                            <Calendar className="h-4 w-4 text-gray-400" />
                                            <span className="text-gray-700">{formatDate(order.createdAt)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Products Table */}
                                <div className="p-8 border-b">
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                                        Order Items
                                    </h4>
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="text-left py-3 text-sm font-semibold text-gray-600">Product</th>
                                                <th className="text-center py-3 text-sm font-semibold text-gray-600">Qty</th>
                                                <th className="text-right py-3 text-sm font-semibold text-gray-600">Price</th>
                                                <th className="text-right py-3 text-sm font-semibold text-gray-600">Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.products?.map((item: any, idx: number) => {
                                                const price = item.product?.price || 0
                                                const subtotal = price * item.quantity
                                                return (
                                                    <tr key={idx} className="border-b last:border-0">
                                                        <td className="py-4">
                                                            <div className="flex items-center gap-3">
                                                                {item.product?.image && (
                                                                    <img
                                                                        src={item.product.image}
                                                                        alt={item.product?.name}
                                                                        className="w-12 h-12 rounded-lg object-cover bg-gray-100"
                                                                    />
                                                                )}
                                                                <span className="font-medium text-gray-900">
                                                                    {item.product?.name || "Product"}
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 text-center text-gray-600">{item.quantity}</td>
                                                        <td className="py-4 text-right text-gray-600">₹{price}</td>
                                                        <td className="py-4 text-right font-medium text-gray-900">₹{subtotal}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Total Section */}
                                <div className="p-8">
                                    <div className="flex flex-col items-end space-y-2">
                                        <div className="flex justify-between w-64">
                                            <span className="text-gray-500">Subtotal</span>
                                            <span className="text-gray-700">₹{order.totalAmount}</span>
                                        </div>
                                        <div className="flex justify-between w-64">
                                            <span className="text-gray-500">Shipping</span>
                                            <span className="text-green-600 font-medium">Free</span>
                                        </div>
                                        <div className="border-t pt-2 mt-2 flex justify-between w-64">
                                            <span className="text-lg font-bold text-gray-900">Total</span>
                                            <span className="text-lg font-bold text-gray-900">₹{order.totalAmount}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="px-8 py-6 bg-gray-50 rounded-b-lg text-center">
                                    <p className="text-gray-400 text-sm">
                                        Thank you for shopping with ShopMart! 🛒
                                    </p>
                                    <Badge className={`${getStatusColor(statusName)} border font-semibold mt-2`}>
                                        {statusName}
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    )
}

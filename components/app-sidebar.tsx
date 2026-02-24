"use client"

import React, { useState } from 'react'
import { usePathname, useRouter } from "next/navigation"
import {
    Package,
    LogOut,
    Home,
    ShoppingBag,
    User,
    ShoppingCart,
    CreditCard,
    Badge
} from "lucide-react"
import Link from "next/link"
import download from "../assets/download.jpg"
import { useAuthUserContexts } from '@/hooks/use-contexts'

const AppSidebar = () => {
    const router = useRouter();
    const { permisstions, user } = useAuthUserContexts();
    const pathname = usePathname()

    const [cartItems] = useState([
        {
            id: 1,
            name: "Premium Wireless Headphones",
            price: 299.99,
            quantity: 1,
            image: download,
            category: "Electronics",
        },
        {
            id: 2,
            name: "Luxury Skincare Set",
            price: 89.99,
            quantity: 2,
            image: download,
            category: "Beauty",
        },
    ])

    const navItems = [
        { id: "dashboard", label: "Dashboard", icon: <Home className="h-5 w-5" />, href: "/dashboard", permission: permisstions?.Dashboard?.read, },
        { id: "dashboard", label: "AdminDashboard", icon: <Home className="h-5 w-5" />, href: "/admin_dashboard", permission: permisstions?.AdminDashboard?.read, },
        { id: "manage-orders", label: "Manage Orders", icon: <Package className="h-5 w-5" />, href: "/admin_dashboard/manage-orders", permission: permisstions?.AdminDashboard?.read, },
        { id: "dashboard", label: "Manage Product", icon: <Home className="h-5 w-5" />, href: "/add-product", permission: permisstions?.ManageProduct?.read, },
        { id: "shop", label: "Shop Products", icon: <ShoppingBag className="h-5 w-5" />, href: "/shop", permission: permisstions?.ShopingProduct?.read, },
        { id: "cart", label: "Shopping Cart", icon: <ShoppingCart className="h-5 w-5" />, href: "/cart", permission: permisstions?.ShopingCart?.read, },
        { id: "orders", label: "My Orders", icon: <Package className="h-5 w-5" />, href: "/orders", permission: permisstions?.MyOrder?.read, },
        { id: "profile", label: "Profile Settings", icon: <User className="h-5 w-5" />, href: "/profile", permission: permisstions?.Dashboard?.read || permisstions?.AdminDashboard?.read, },
    ].filter((item: any) => item.permission)

    return (
        <div className="w-72 bg-white shadow-xl border-r">
            <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-orange-500">
                <Link href="/" className="text-2xl font-bold text-white">
                    ShopMart
                </Link>
                <p className="text-blue-100 text-sm mt-1">Dashboard</p>
            </div>

            {/* User Profile Section */}
            <div className="p-6 border-b">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        JD
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900">John Doe</p>
                        <p className="text-sm text-gray-600">Premium Member</p>
                    </div>
                </div>
            </div>

            <nav className="p-4 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <button
                            key={item.id}
                            onClick={() => router.push(item.href)}
                            className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl text-left transition-all duration-200
                                ${isActive
                                    ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-lg"
                                    : "text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                                }`}
                        >
                            <div className="flex items-center justify-center w-8 h-8">{item.icon}</div>
                            <span className="font-medium">{item.label}</span>
                            {item.id === "dashboard" && cartItems.length > 0 && isActive && (
                                <Badge className="ml-auto bg-orange-500 text-white">{cartItems.length}</Badge>
                            )}
                        </button>
                    )
                })}

                <div className="pt-6 mt-6 border-t">
                    <button
                        onClick={() => router.push("/")}
                        className="w-full flex items-center gap-3 px-4 py-4 rounded-xl text-left text-red-600 hover:bg-red-50 transition-all duration-200"
                    >
                        <LogOut className="h-5 w-5" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default AppSidebar

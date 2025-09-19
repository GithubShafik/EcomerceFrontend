"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Package, Bell, Settings, LogOut, Home, ShoppingBag, User, ShoppingCart, Shield } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import AppSidebar from "@/components/app-sidebar"

export default function ProfilePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
              <p className="text-gray-600">Manage your account settings</p>
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
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Account Settings</h1>
              <p className="text-gray-600 text-lg">Manage your account information and preferences</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Profile Info */}
              <div className="lg:col-span-2 space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <User className="h-6 w-6 mr-3 text-blue-600" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                        <Input type="text" defaultValue="John" className="border-2 border-gray-200 rounded-xl py-3" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                        <Input type="text" defaultValue="Doe" className="border-2 border-gray-200 rounded-xl py-3" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <Input
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="border-2 border-gray-200 rounded-xl py-3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        className="border-2 border-gray-200 rounded-xl py-3"
                      />
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8">
                      Update Profile
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Shield className="h-6 w-6 mr-3 text-green-600" />
                      Security Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Current Password</label>
                      <Input type="password" className="border-2 border-gray-200 rounded-xl py-3" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
                      <Input type="password" className="border-2 border-gray-200 rounded-xl py-3" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm New Password</label>
                      <Input type="password" className="border-2 border-gray-200 rounded-xl py-3" />
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8">
                      Change Password
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Profile Summary */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      JD
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">John Doe</h3>
                    <p className="text-gray-600 mb-4">Premium Member</p>
                    <Badge className="bg-orange-100 text-orange-800 border-orange-200">Level 3</Badge>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Account Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Member Since</span>
                      <span className="font-semibold">Jan 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Orders</span>
                      <span className="font-semibold">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Spent</span>
                      <span className="font-semibold">$2,847</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Reward Points</span>
                      <span className="font-semibold text-orange-600">1,250</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

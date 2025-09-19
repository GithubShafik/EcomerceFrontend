"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ShoppingCart,
  Star,
  Search,
  Heart,
  Filter,
  Grid3X3,
  List,
  Package,
  Bell,
  Settings,
  LogOut,
  Home,
  ShoppingBag,
  User,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import download from "../../assets/download.jpg"
import AppSidebar from "@/components/app-sidebar"
import { getCategory, getproducts } from "@/service/get-request"
import { addCart } from "@/service/post-request"
import { useSearchParams, usePathname, useRouter } from "next/navigation"


export default function ShopPage() {
  const [viewMode, setViewMode] = useState("grid")
  const [categoryList, setCategoryList] = useState<any[]>([])
  const [products, setProducts] = useState<any[]>([])
  const [filteredProducts, setFilteredProducts] = useState<any[]>([])

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const selectedCategory = searchParams.get("filter")


  const router = useRouter()


  useEffect(() => {
    getproducts()
      .then((res) => {
        setProducts(res)
      })

    getCategory()
      .then((res) => {
        setCategoryList(res.data)
      })
  }, [])

  useEffect(() => {
    if (!selectedCategory || selectedCategory === "all") {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter(
        (product) => product.category?.name?.toLowerCase() === selectedCategory.toLowerCase()
      )
      setFilteredProducts(filtered)
    }
  }, [selectedCategory, products])


  const getImageUrl = (imagePath: string) => {
    const cleanPath = imagePath.replace(/\\/g, "/").replace(/^\/+/, "")
    return `http://localhost:5000/${cleanPath}`
  }

  const handleAddCart = (productId: string) => {
    const payload = {
      productId,
      quantity: 1
    }

    addCart(payload)
      .then((res) => {
        console.log("Added to cart:", res)
      })
      .catch((err) => {
        console.error("Error adding to cart:", err)
      })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Shop Products</h2>
              <p className="text-gray-600">Browse and discover new products</p>
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
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Shop Products</h1>
                <p className="text-gray-600 text-lg">Discover amazing products at great prices</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                  <Button
                    size="sm"
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    onClick={() => setViewMode("grid")}
                    className="rounded-md"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant={viewMode === "list" ? "default" : "ghost"}
                    onClick={() => setViewMode("list")}
                    className="rounded-md"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="outline" className="border-2 bg-transparent">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:border-orange-500"
                  />
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant="outline"
                  className={`rounded-full bg-transparent ${!selectedCategory || selectedCategory === "all" ? "border-orange-500" : ""}`}
                  onClick={() => router.push(`${pathname}?filter=all`)}
                >
                  All Categories
                </Button>
                {categoryList.map((category: any) => (
                  <Button
                    key={category._id}
                    variant="outline"
                    className={`rounded-full bg-transparent capitalize ${selectedCategory === category.name.toLowerCase() ? "border-orange-500" : ""
                      }`}
                    onClick={() => router.push(`${pathname}?filter=${category.name.toLowerCase()}`)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>


            </div>

            {/* Products Grid */}
            <div
              className={viewMode === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8" : "space-y-6"}
            >
              {filteredProducts?.map((product) => (
                <Card
                  key={product._id}
                  className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={getImageUrl(product.image)}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      onClick={() => router.push(`/products/${product._id}`)}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-500 text-white font-semibold">
                        {product.category?.name || "Uncategorized"}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="icon" variant="secondary" className="rounded-full bg-white/90 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-orange-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    </div>
                    <Button
                      onClick={() => handleAddCart(product._id)}
                      className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white group-hover:shadow-lg transition-all duration-300">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
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

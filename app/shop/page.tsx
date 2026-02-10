"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  ShoppingCart,
  Star,
  Search,
  Heart,
  Filter,
  Grid3X3,
  List,
  Bell,
  Settings,
  X,
  Loader2,
  Package
} from "lucide-react"
import Image from "next/image"
import { getCategory, getproducts } from "@/service/get-request"
import { addCart } from "@/service/post-request"
import { useSearchParams, usePathname, useRouter } from "next/navigation"

export default function ShopPage() {
  const [viewMode, setViewMode] = useState("grid")
  const [categoryList, setCategoryList] = useState<any[]>([])
  const [products, setProducts] = useState<any[]>([])
  const [filteredProducts, setFilteredProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Filters
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [maxPrice, setMaxPrice] = useState(1000)

  const searchParams = useSearchParams()
  // const pathname = usePathname() // Not strictly needed if we manage state locally for filters
  // const selectedCategoryParam = searchParams.get("filter") 

  const router = useRouter()

  useEffect(() => {
    setLoading(true)
    Promise.all([getproducts(), getCategory()])
      .then(([productsRes, categoriesRes]) => {
        // Handle products
        let productData = []
        if (Array.isArray(productsRes)) {
          productData = productsRes
        } else if (productsRes?.products && Array.isArray(productsRes.products)) {
          productData = productsRes.products
        } else if (productsRes?.data && Array.isArray(productsRes.data)) {
          productData = productsRes.data
        }
        setProducts(productData)
        setFilteredProducts(productData)

        // Calculate max price for slider
        const max = productData.reduce((acc: number, p: any) => p.price > acc ? p.price : acc, 0)
        const roundedMax = Math.ceil(max / 100) * 100 // Round up to nearest 100
        setMaxPrice(roundedMax || 1000)
        setPriceRange([0, roundedMax || 1000])


        // Handle categories
        setCategoryList(categoriesRes.data || categoriesRes || [])
      })
      .catch(err => {
        console.error("Failed to fetch shop data", err)
      })
      .finally(() => setLoading(false))
  }, [])

  // Apply Filters
  useEffect(() => {
    let result = products

    // 1. Search
    if (searchQuery) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // 2. Category
    if (selectedCategories.length > 0) {
      result = result.filter(p => {
        const catName = p.category?.name || p.category // Handle populated vs ID
        return selectedCategories.includes(catName)
      })
    }

    // 3. Price
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

    setFilteredProducts(result)
  }, [products, searchQuery, selectedCategories, priceRange])


  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryName)) {
        return prev.filter(c => c !== categoryName)
      } else {
        return [...prev, categoryName]
      }
    })
  }

  const getImageUrl = (imagePath: string) => {
    if (!imagePath) return "https://placehold.co/600x400?text=No+Image"
    if (imagePath.startsWith("http")) return imagePath

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
        alert("Added to cart!")
      })
      .catch((err) => {
        console.error("Error adding to cart:", err)
      })
  }

  // Mobile Filter Drawer state (simplified as conditional rendering for now or reuse dialog)
  const [showFilters, setShowFilters] = useState(false)

  // Wrapper for Add to Cart to stop propagation
  const handleAddCartClick = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation()
    handleAddCart(productId)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Header */}
      <header className="bg-white shadow-sm border-b px-4 md:px-8 py-4 sticky top-0 z-20">
        <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Shop</h2>
          </div>
          <div className="flex items-center space-x-4">
            {/* Search Bar - hidden on small screens? */}
            <div className="hidden md:block relative w-64 lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-gray-100 border-none rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 flex gap-8">

        {/* Sidebar Filters - Desktop */}
        <aside className="hidden lg:block w-64 space-y-8 flex-shrink-0">
          <div>
            <h3 className="font-semibold mb-4 text-lg">Filters</h3>
            <div className="space-y-4">

              {/* Categories */}
              <div>
                <h4 className="font-medium mb-2 text-sm text-gray-700">Categories</h4>
                <div className="space-y-2">
                  {categoryList.map((cat: any) => (
                    <div key={cat._id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`cat-${cat._id}`}
                        checked={selectedCategories.includes(cat.name)}
                        onCheckedChange={() => handleCategoryChange(cat.name)}
                      />
                      <Label htmlFor={`cat-${cat._id}`} className="text-sm cursor-pointer">
                        {cat.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-medium mb-4 text-sm text-gray-700">Price Range</h4>
                <Slider
                  value={priceRange}
                  max={maxPrice}
                  step={10}
                  min={0}
                  onValueChange={setPriceRange}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">

          {/* Mobile Search & Filter Toggle */}
          <div className="lg:hidden mb-6 flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Filters (Collapsible) */}
          {showFilters && (
            <div className="lg:hidden bg-white p-4 rounded-lg shadow-sm mb-6 border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Filters</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}><X className="h-4 w-4" /></Button>
              </div>
              {/* Reusing filter logic - ideally extract to component */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2 text-sm text-gray-700">Categories</h4>
                  <div className="space-y-2">
                    {categoryList.map((cat: any) => (
                      <div key={cat._id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`mobile-cat-${cat._id}`}
                          checked={selectedCategories.includes(cat.name)}
                          onCheckedChange={() => handleCategoryChange(cat.name)}
                        />
                        <Label htmlFor={`mobile-cat-${cat._id}`} className="text-sm">
                          {cat.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-4 text-sm text-gray-700">Price Range</h4>
                  <Slider
                    value={priceRange}
                    max={maxPrice}
                    step={10}
                    min={0}
                    onValueChange={setPriceRange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          )}


          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-500 text-sm">Showing {filteredProducts.length} results</p>
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant={viewMode === "list" ? "secondary" : "ghost"}
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20 text-gray-500 bg-white rounded-lg border border-dashed border-gray-300">
              <Package className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>No products found matching your criteria</p>
              <Button variant="link" onClick={() => {
                setSearchQuery("")
                setSelectedCategories([])
                setPriceRange([0, maxPrice])
              }}>Clear all filters</Button>
            </div>
          ) : (
            <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6" : "space-y-4"}>
              {filteredProducts.map((product) => (
                <Card
                  key={product._id || product.id}
                  className={`group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-0 ${viewMode === "list" ? "flex flex-row" : ""}`}
                  onClick={() => router.push(`/products/${product._id || product.id}`)}
                >
                  <div className={`relative overflow-hidden bg-gray-100 ${viewMode === "list" ? "w-48 h-full" : "aspect-[4/3]"} w-full`}>
                    <img
                      src={getImageUrl(product.image)}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-orange-500 text-white hover:bg-orange-600">
                        {product.category?.name || "Product"}
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="secondary" className="rounded-full bg-white/80 hover:bg-white h-8 w-8">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className={`flex flex-col flex-1 p-4 ${viewMode === "list" ? "justify-between" : ""}`}>
                    <div className="mb-4">
                      <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-1 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                    </div>

                    <div className={`flex items-end justify-between mt-auto ${viewMode === "list" ? "items-center" : ""}`}>
                      <div>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-400 line-through block">
                            ${product.originalPrice}
                          </span>
                        )}
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                      </div>
                      <Button
                        size={viewMode === "list" ? "default" : "icon"}
                        className="bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
                        onClick={(e) => handleAddCartClick(e, product._id || product.id)}
                      >
                        <ShoppingCart className="h-4 w-4" />
                        {viewMode === "list" && <span className="ml-2">Add to Cart</span>}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

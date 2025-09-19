"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Menu, X, Star, ArrowRight, Search, Heart, Eye, Truck, Shield, Award, Zap } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import download from "../assets/download.jpg"
import { getCategory } from "@/service/get-request"

// Mock data
const featuredProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: download,
    category: "Electronics",
    rating: 4.8,
    reviews: 2847,
    badge: "Best Seller",
    discount: 25,
  },
  {
    id: 2,
    name: "Luxury Skincare Set",
    price: 89.99,
    originalPrice: 129.99,
    image: download,
    category: "Beauty",
    rating: 4.9,
    reviews: 1523,
    badge: "New",
    discount: 31,
  },
  {
    id: 3,
    name: "Designer Handbag",
    price: 449.99,
    originalPrice: 599.99,
    image: download,
    category: "Fashion",
    rating: 4.7,
    reviews: 892,
    badge: "Limited",
    discount: 25,
  },
  {
    id: 4,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    image: download,
    category: "Electronics",
    rating: 4.6,
    reviews: 3421,
    badge: "Hot",
    discount: 20,
  },
]


const features = [
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Free Shipping",
    description: "Free shipping on orders over $50",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Secure Payment",
    description: "100% secure payment processing",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Quality Guarantee",
    description: "30-day money back guarantee",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Fast Delivery",
    description: "Same day delivery available",
  },
]

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const [categories, setCategories] = useState<any[]>([])


  useEffect(() => {
    getCategory().then((res) => {
      if (res.data) {
        const enrichedCategories = res.data.map((cat: any) => {
          switch (cat.name.toLowerCase()) {
            case "cosmetics":
              return {
                ...cat,
                color: "from-pink-400 to-red-500",
                icon: "💄",
                description: "Beauty and skincare essentials",
                itemCount: "120+ items",
              };
            case "medicine":
              return {
                ...cat,
                color: "from-green-400 to-teal-500",
                icon: "💊",
                description: "Health & pharmaceutical products",
                itemCount: "300+ items",
              };
            case "fashion":
              return {
                ...cat,
                color: "from-purple-400 to-indigo-500",
                icon: "👗",
                description: "Latest trends and styles",
                itemCount: "500+ items",
              };
            default:
              return {
                ...cat,
                color: "from-gray-400 to-gray-600",
                icon: "📦",
                description: "Explore our collection",
                itemCount: "N/A",
              };
          }
        });

        setCategories(enrichedCategories);
      } else {
        console.log(res);
      }
    });
  }, []);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span>📞 +1 (555) 123-4567</span>
            <span>✉️ support@shopmart.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Free shipping on orders over $50!</span>
            <div className="flex space-x-2">
              <span>Follow us:</span>
              <Link href="#" className="hover:text-orange-400 transition-colors">
                FB
              </Link>
              <Link href="#" className="hover:text-orange-400 transition-colors">
                IG
              </Link>
              <Link href="#" className="hover:text-orange-400 transition-colors">
                TW
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"
              >
                ShopMart
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  className="w-full pl-12 pr-4 py-3 text-lg border-2 border-gray-200 rounded-full focus:border-orange-500 focus:ring-0"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 rounded-full px-6">
                  Search
                </Button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Button onClick={() => router.push("/cart")} variant="ghost" className="text-gray-700 hover:text-orange-500">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push("/dashboard")}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Login
              </Button>
              <Button
                onClick={() => router.push("/dashboard")}
                className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-6"
              >
                Sign Up
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t bg-white">
              <div className="flex flex-col space-y-4">
                <div className="px-4">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg"
                  />
                  <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
                <Link href="/categories" className="px-4 py-2 text-gray-700 hover:text-orange-500 transition-colors">
                  Categories
                </Link>
                <Link href="#" className="px-4 py-2 text-gray-700 hover:text-orange-500 transition-colors">
                  Deals
                </Link>
                <Link href="#" className="px-4 py-2 text-gray-700 hover:text-orange-500 transition-colors">
                  About
                </Link>
                <div className="flex flex-col space-y-2 px-4 pt-4 border-t">
                  <Button
                    variant="outline"
                    onClick={() => router.push("/login")}
                    className="border-blue-600 text-blue-600"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => router.push("/login")}
                    className="bg-gradient-to-r from-blue-600 to-orange-500 text-white"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-orange-300 text-sm font-medium">🔥 Limited Time Offer</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Shop Smart,
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  {" "}
                  Live Better
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Discover premium products at unbeatable prices. From electronics to fashion, we&lsquo;ve got everything you
                need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full shadow-xl"
                  onClick={() => router.push("/shop")}
                >
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg rounded-full bg-transparent backdrop-blur-sm"
                >
                  Watch Demo
                </Button> */}
              </div>
              <div className="flex items-center mt-8 space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-blue-200 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-blue-200 text-sm">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">4.9★</div>
                  <div className="text-blue-200 text-sm">Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <Image
                src={download}
                alt="Featured Products"
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="text-orange-500">{feature.icon}</div>
                <div>
                  <div className="font-semibold text-gray-900">{feature.title}</div>
                  <div className="text-sm text-gray-600">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Shop by Category</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our carefully curated categories featuring the latest trends and best-selling products
            </p>
          </div>
          <div className="w-full flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 overflow-hidden"
                  onClick={() => router.push(`/shop?filter=${category.name.toLowerCase().replace(" & ", "-")}`)}
                >
                  <div className={`h-48 bg-gradient-to-br ${category.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <div className="text-4xl mb-2">{category.icon}</div>
                      <div className="text-white font-semibold">{category.itemCount}</div>
                    </div>
                    <div className="absolute bottom-4 right-4 text-white/80 text-6xl group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl text-gray-900 mb-2">{category.name}</CardTitle>
                    <CardDescription className="text-gray-600 mb-4">{category.description}</CardDescription>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white group-hover:shadow-lg transition-all duration-300">
                      Explore Collection{" "}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Trending Products</h2>
              <p className="text-xl text-gray-600">Discover what&lsquo;s hot and trending right now</p>
            </div>
            <Button
              variant="outline"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
              onClick={() => router.push("/shop")}
            >
              View All Products
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    onClick={() => router.push(`/products/${product.id}`)}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${
                        product.badge === "Best Seller"
                          ? "bg-green-500"
                          : product.badge === "New"
                            ? "bg-blue-500"
                            : product.badge === "Limited"
                              ? "bg-purple-500"
                              : "bg-red-500"
                      } text-white font-semibold`}
                    >
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="secondary" className="rounded-full bg-white/90 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="icon"
                      className="rounded-full bg-orange-500 hover:bg-orange-600"
                      onClick={() => router.push(`/products/${product.id}`)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                  {product.discount && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                      -{product.discount}%
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3 bg-gray-100 text-gray-700">
                    {product.category}
                  </Badge>
                  <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white group-hover:shadow-lg transition-all duration-300">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get exclusive deals, new arrivals, and insider updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 text-lg rounded-full border-0"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mb-4">
                ShopMart
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner for premium products and exceptional shopping experiences. We&lsquo;re committed to
                bringing you the best deals and quality products.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-orange-500 bg-transparent"
                >
                  FB
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-orange-500 bg-transparent"
                >
                  IG
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-orange-500 bg-transparent"
                >
                  TW
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Customer Care</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 ShopMart. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400">We accept:</span>
              <div className="flex space-x-2">
                <div className="bg-white rounded px-2 py-1 text-xs font-bold text-gray-900">VISA</div>
                <div className="bg-white rounded px-2 py-1 text-xs font-bold text-gray-900">MC</div>
                <div className="bg-white rounded px-2 py-1 text-xs font-bold text-gray-900">AMEX</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

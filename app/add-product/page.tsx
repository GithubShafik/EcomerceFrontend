"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { addProducts } from "@/service/post-request"
import { getCategory } from "@/service/get-request"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Bell, Settings } from "lucide-react"

export default function AddProductPage() {
  const router = useRouter()

  const [productName, setProductName] = useState("")
  const [price, setPrice] = useState("")
  const [originalPrice, setOriginalPrice] = useState("")
  const [description, setDescription] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategory()
      .then((res) => {
        setCategories(res.data)
      })
      .catch((err) => {
        console.error("Failed to fetch categories", err)
      })
  }, [])

  const handleAddProduct = async () => {
    if (!image || !categoryId) {
      alert("Please select image and category")
      return
    }

    const formData = new FormData()
    formData.append("name", productName)
    formData.append("price", price)
    formData.append("description", description)
    formData.append("categoryId", categoryId)
    if (originalPrice) {
      formData.append("originalPrice", originalPrice)
    }
    formData.append("image", image)

    try {
      const response = await addProducts(formData)
      console.log(formData);
      
      alert("Product added successfully!")
    } catch (error) {
      console.error("Add product failed", error)
      alert("Failed to add product.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm border-b px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Add Product</h2>
              <p className="text-gray-600">Add a new product to your store</p>
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

        <main className="flex-1 p-8 overflow-auto">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Product Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="product-name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Product Name
                  </Label>
                  <Input
                    id="product-name"
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="e.g., Wireless Bluetooth Speaker"
                    className="border-2 border-gray-200 rounded-xl py-3"
                  />
                </div>
                <div>
                  <Label htmlFor="product-price" className="block text-sm font-semibold text-gray-700 mb-2">
                    Price ($)
                  </Label>
                  <Input
                    id="product-price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="79.99"
                    step="0.01"
                    className="border-2 border-gray-200 rounded-xl py-3"
                  />
                </div>
                <div>
                  <Label htmlFor="original-price" className="block text-sm font-semibold text-gray-700 mb-2">
                    Original Price ($) (Optional)
                  </Label>
                  <Input
                    id="original-price"
                    type="number"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    placeholder="99.99"
                    step="0.01"
                    className="border-2 border-gray-200 rounded-xl py-3"
                  />
                </div>
                <div>
                  <Label htmlFor="product-category" className="block text-sm font-semibold text-gray-700 mb-2">
                    Category
                  </Label>
                  <select
                    id="product-category"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="border-2 border-gray-200 rounded-xl py-3 w-full"
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat: any) => (
                      <option key={cat._id} value={cat._id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="product-description" className="block text-sm font-semibold text-gray-700 mb-2">
                    Description
                  </Label>
                  <Textarea
                    id="product-description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Detailed description of the product..."
                    rows={5}
                    className="border-2 border-gray-200 rounded-xl py-3"
                  />
                </div>
                <div>
                  <Label htmlFor="image-url" className="block text-sm font-semibold text-gray-700 mb-2">
                    Product Image
                  </Label>
                  <Input
                    id="image-url"
                    type="file"
                    onChange={(e) => setImage(e.target.files?.[0] || null)}
                    className="border-2 border-gray-200 rounded-xl py-3"
                  />
                </div>
                <Button
                  onClick={handleAddProduct}
                  className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-3"
                >
                  Add Product
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

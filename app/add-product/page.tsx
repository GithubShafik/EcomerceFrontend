"use client"

import { useState, useEffect } from "react"
import { getproducts } from "@/service/get-request"
import { Button } from "@/components/ui/button"
import { Bell, Settings, Plus, Loader2 } from "lucide-react"
import { ProductCard } from "@/components/ProductCard"
import { ProductForm } from "@/components/ProductForm"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Product } from "@/types/product"

export default function AddProductPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const data = await getproducts()
      if (Array.isArray(data)) {
        setProducts(data)
      } else if (data && Array.isArray(data.products)) {
        setProducts(data.products)
      } else if (data && Array.isArray(data.data)) {
        setProducts(data.data);
      } else {
        console.warn("Unexpected product data format:", data)
        setProducts([])
      }
    } catch (error) {
      console.error("Failed to fetch products", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleProductAdded = () => {
    setIsDialogOpen(false)
    setEditingProduct(null)
    fetchProducts() // Refresh list
  }

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsDialogOpen(true);
  }

  const handleDialogOpenChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      setEditingProduct(null);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm border-b px-8 py-6 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Product Management</h2>
              <p className="text-gray-600">Manage your store's products</p>
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
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-semibold">All Products ({products?.length || 0})</h3>

            <Dialog open={isDialogOpen} onOpenChange={handleDialogOpenChange}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white">
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Product
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{editingProduct ? "Edit Product" : "Add New Product"}</DialogTitle>
                </DialogHeader>
                <ProductForm
                  onSuccess={handleProductAdded}
                  onCancel={() => handleDialogOpenChange(false)}
                  initialData={editingProduct}
                />
              </DialogContent>
            </Dialog>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
            </div>
          ) : (
            <>
              {products.length === 0 ? (
                <div className="text-center py-20 text-gray-500">
                  <p>No products found. Add your first product!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products?.map((product) => (
                    <ProductCard
                      key={product.id || product.id || Math.random().toString()}
                      product={product}
                      onEdit={handleEdit}
                    // onDelete={(id) => console.log('Delete', id)}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  )
}

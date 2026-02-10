"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { getProductById } from "@/service/get-request" // Ensure this is implemented
import { addCart } from "@/service/post-request"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, ArrowLeft, Loader2, Star, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast" // Assuming shadcn toast exists, or use alert/sonner

export default function ProductDetailPage() {
    const params = useParams()
    const router = useRouter()
    const [product, setProduct] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [quantity, setQuantity] = useState(1)
    const [addingToCart, setAddingToCart] = useState(false)

    const productId = params.id as string

    useEffect(() => {
        if (productId) {
            getProductById(productId)
                .then((data) => {
                    // Adjust based on API structure
                    setProduct(data.data || data)
                })
                .catch((err) => {
                    console.error("Failed to fetch product", err)
                })
                .finally(() => setLoading(false))
        }
    }, [productId])

    const getImageUrl = (imagePath: string) => {
        if (!imagePath) return "https://placehold.co/600x400?text=No+Image"
        if (imagePath.startsWith("http")) return imagePath

        const cleanPath = imagePath.replace(/\\/g, "/").replace(/^\/+/, "")
        return `http://localhost:5000/${cleanPath}`
    }

    const handleAddToCart = async () => {
        setAddingToCart(true)
        try {
            await addCart({
                productId: product._id || product.id,
                quantity: quantity
            })
            alert("Added to cart successfully!")
        } catch (error) {
            console.error("Failed to add to cart", error)
            alert("Failed to add to cart")
        } finally {
            setAddingToCart(false)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
            </div>
        )
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 space-y-4">
                <h1 className="text-2xl font-bold text-gray-800">Product not found</h1>
                <Button onClick={() => router.back()} variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                </Button>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Button
                    variant="ghost"
                    className="mb-8 hover:bg-transparent hover:text-orange-600 pl-0"
                    onClick={() => router.back()}
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
                </Button>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                        {/* Image Section */}
                        <div className="h-[400px] md:h-[600px] bg-gray-100 relative group overflow-hidden">
                            <img
                                src={getImageUrl(product.image)}
                                alt={product.name}
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="mb-4">
                                <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-200 mb-4 text-sm px-3 py-1">
                                    {product.category?.name || "Category"}
                                </Badge>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                    {product.name}
                                </h1>
                                <div className="flex items-center space-x-1 text-yellow-400 mb-6">
                                    <Star className="h-5 w-5 fill-current" />
                                    <Star className="h-5 w-5 fill-current" />
                                    <Star className="h-5 w-5 fill-current" />
                                    <Star className="h-5 w-5 fill-current" />
                                    <Star className="h-5 w-5 text-gray-300" />
                                    <span className="text-gray-500 text-sm ml-2">(4.0)</span>
                                </div>
                            </div>

                            <div className="text-3xl font-bold text-gray-900 mb-6">
                                ${product.price}
                                {product.originalPrice && (
                                    <span className="text-lg text-gray-400 line-through ml-3">
                                        ${product.originalPrice}
                                    </span>
                                )}
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {product.description}
                            </p>

                            <div className="border-t border-b border-gray-100 py-6 mb-8 space-y-4">
                                <div className="flex items-center">
                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                    <span className="text-gray-700">In Stock & Ready to Ship</span>
                                </div>
                                <div className="flex items-center">
                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                    <span className="text-gray-700">Free Shipping over $50</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center border border-gray-300 rounded-lg">
                                    <button
                                        className="px-4 py-3 hover:bg-gray-100 text-gray-600 transition-colors rounded-l-lg"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-3 font-semibold min-w-[3rem] text-center">
                                        {quantity}
                                    </span>
                                    <button
                                        className="px-4 py-3 hover:bg-gray-100 text-gray-600 transition-colors rounded-r-lg"
                                        onClick={() => setQuantity(quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>

                                <Button
                                    className="flex-1 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white h-auto py-3 text-lg shadow-lg hover:shadow-xl transition-all"
                                    onClick={handleAddToCart}
                                    disabled={addingToCart}
                                >
                                    {addingToCart ? (
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    ) : (
                                        <ShoppingCart className="mr-2 h-5 w-5" />
                                    )}
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

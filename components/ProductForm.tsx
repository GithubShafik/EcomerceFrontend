"use client"

import { useState, useEffect } from "react"
import { addProducts } from "@/service/post-request"
import { getCategory } from "@/service/get-request" // Ensure this imports correctly
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

import { updateProduct } from "@/service/update-request";

interface ProductFormProps {
    onSuccess: () => void;
    onCancel?: () => void;
    initialData?: any;
}

export function ProductForm({ onSuccess, onCancel, initialData }: ProductFormProps) {
    const [productName, setProductName] = useState(initialData?.name || initialData?.productName || "")
    const [price, setPrice] = useState(initialData?.price || "")
    const [originalPrice, setOriginalPrice] = useState(initialData?.originalPrice || "")
    const [description, setDescription] = useState(initialData?.description || "")
    const [categoryId, setCategoryId] = useState(initialData?.category?._id || initialData?.category || "") // Handle object or ID
    const [image, setImage] = useState<File | null>(null)
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getCategory()
            .then((res) => {
                // Adjust based on actual API response structure
                setCategories(res.data || res)
            })
            .catch((err) => {
                console.error("Failed to fetch categories", err)
            })
    }, [])

    // Update state when initialData changes (e.g. opening different product)
    useEffect(() => {
        if (initialData) {
            setProductName(initialData.name || initialData.productName || "");
            setPrice(initialData.price || "");
            setOriginalPrice(initialData.originalPrice || "");
            setDescription(initialData.description || "");
            setCategoryId(initialData.category?._id || initialData.category || "");
        } else {
            // Reset if no initialData (Add mode)
            setProductName("");
            setPrice("");
            setOriginalPrice("");
            setDescription("");
            setCategoryId("");
            setImage(null);
        }
    }, [initialData]);

    const handleSubmit = async () => {
        if (!categoryId) {
            alert("Please select a category")
            return
        }

        // For add mode, image is required. For edit, it's optional.
        if (!initialData && !image) {
            alert("Please select an image");
            return;
        }

        setLoading(true);
        const formData = new FormData()
        formData.append("name", productName)
        formData.append("price", price)
        formData.append("description", description)
        formData.append("categoryId", categoryId)
        if (originalPrice) {
            formData.append("originalPrice", originalPrice)
        }
        if (image) {
            formData.append("image", image)
        }

        try {
            if (initialData) {
                // Update mode
                const id = initialData.id || initialData._id;
                await updateProduct(id, formData);
                alert("Product updated successfully!");
            } else {
                // Add mode
                await addProducts(formData)
                alert("Product added successfully!")
            }
            onSuccess();
        } catch (error) {
            console.error(initialData ? "Update product failed" : "Add product failed", error)
            alert(initialData ? "Failed to update product." : "Failed to add product.")
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="space-y-6">
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
                    className="border-gray-200"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
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
                        className="border-gray-200"
                    />
                </div>
                <div>
                    <Label htmlFor="original-price" className="block text-sm font-semibold text-gray-700 mb-2">
                        Original Price ($)
                    </Label>
                    <Input
                        id="original-price"
                        type="number"
                        value={originalPrice}
                        onChange={(e) => setOriginalPrice(e.target.value)}
                        placeholder="99.99"
                        step="0.01"
                        className="border-gray-200"
                    />
                </div>
            </div>

            <div>
                <Label htmlFor="product-category" className="block text-sm font-semibold text-gray-700 mb-2">
                    Category
                </Label>
                <select
                    id="product-category"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-200"
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
                    rows={4}
                    className="border-gray-200"
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
                    className="border-gray-200"
                />
            </div>
            <div className="flex justify-end gap-3 pt-4">
                {onCancel && (
                    <Button variant="outline" onClick={onCancel} disabled={loading}>Cancel</Button>
                )}
                <Button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white"
                >
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {initialData ? "Update Product" : "Add Product"}
                </Button>
            </div>
        </div>
    )
}

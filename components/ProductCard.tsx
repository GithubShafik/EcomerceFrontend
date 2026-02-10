import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { Edit, Trash2 } from "lucide-react";

interface ProductCardProps {
    product: Product | any;
    onEdit?: (product: Product) => void;
    onDelete?: (productId: string) => void;
}




export function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
    console.log(product, "sssssssssss");
    const getImageUrl = (imagePath: string) => {
        const cleanPath = imagePath.replace(/\\/g, "/").replace(/^\/+/, "")
        return `http://localhost:5000/${cleanPath}`
    }

    // Handle different image formats if necessary, for now assuming it's a URL string or not present
    // The backend might return 'image' or 'imageUrl'
    const imageUrl = (product as any).image || (product as any).imageUrl || "https://placehold.co/600x400?text=No+Image";

    return (
        <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-video w-full overflow-hidden relative">
                <img
                    src={getImageUrl(product.image)}
                    alt={product.name}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                    {onEdit && (
                        <Button variant="secondary" size="icon" className="h-8 w-8 bg-white/80 hover:bg-white" onClick={() => onEdit(product)}>
                            <Edit className="h-4 w-4 text-gray-700" />
                        </Button>
                    )}
                    {onDelete && (
                        <Button variant="destructive" size="icon" className="h-8 w-8" onClick={() => onDelete(product.id)}>
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    )}
                </div>
            </div>
            <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-bold line-clamp-1" title={product.name}>
                        {product.name}
                    </CardTitle>
                    <span className="font-bold text-green-600">
                        ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
                    </span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
                    {product.description}
                </p>
            </CardHeader>
            <CardFooter className="p-4 pt-0 text-xs text-muted-foreground">
                {/* Display category if available (it might be an object or ID) */}
                {product.category && (
                    <span className="bg-gray-100 px-2 py-1 rounded-full">
                        {typeof product.category === 'object' ? product.category.name : 'Category ' + product.category}
                    </span>
                )}
            </CardFooter>
        </Card>
    );
}

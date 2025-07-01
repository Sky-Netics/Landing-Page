"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchProductsList } from "@/apis/products.api"
import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard"

export default function ProductsPage() {
    const [perPage, setPerPage] = useState<number>(3);
    const [sortOrder, setSortOrder] = useState<string | number>("");

    const products = useQuery({
        refetchOnWindowFocus: false,
        queryKey: ["products", perPage],
        queryFn: () => fetchProductsList(1, perPage)
    })

    const sortedProducts = () => {
        if (sortOrder === "newest") {
            return products.data?.results.sort((a: IProduct, b: IProduct) => new Date(b.created) - new Date(a.created));
        } else if (sortOrder === 1) {
            return products.data?.results.sort((a: IProduct, b: IProduct) => a.price - b.price);
        } else if (sortOrder === 5) {
            return products.data?.results.sort((a: IProduct, b: IProduct) => b.price - a.price);
        }
        return products.data?.results;
    }
    
    return (
        <section className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <span className="py-2 flex gap-x-4 items-center">
                    <h5 className="text-[1rem] font-medium">مرتب‌سازی بر اساس:</h5>
                    <span className="text-gray-500 text-sm flex gap-x-4 items-center">
                        <h6
                            className="cursor-pointer hover:text-blue-600"
                            onClick={() => setSortOrder("newest")}
                        >
                            جدیدترین
                        </h6>
                        <h6
                            className="cursor-pointer hover:text-blue-600"
                            onClick={() => setSortOrder(1)}
                        >
                            ارزان‌ترین
                        </h6>
                        <h6
                            className="cursor-pointer hover:text-blue-600"
                            onClick={() => setSortOrder(5)}
                        >
                            گران‌ترین
                        </h6>
                    </span>
                </span>
                <h4 className="text-gray-500 text-sm">{products.data?.count} محصول</h4>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.isLoading && (
                    Array.from({length: 5}, (_, index) => (
                        <ProductCardSkeleton key={index}/>
                    ))
                )}
                {products.isSuccess && (
                    sortedProducts().map((product: IProduct, index: number) => (
                        <ProductCard key={index} product={product} />
                    ))
                )}
            </div>
            
            {products.isSuccess && products.data?.limit < products.data?.count && (
                <button 
                    onClick={() => setPerPage(perPage + 5)} 
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md mt-8 mx-auto block transition-colors"
                >
                    نمایش محصولات بیشتر
                </button>
            )}
        </section>
    )
}
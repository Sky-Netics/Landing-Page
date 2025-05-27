"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchProductsList } from "@/apis/products.api"
import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard"

export default function ProductsList() {
    const [page, setPage] = useState<number>(5);

    const products= useQuery({
        queryKey: ["products", page],
        queryFn: () => fetchProductsList(1, page),
        refetchOnWindowFocus: false
    })
    
    return (
        <section>
            <div className="flex justify-between items-center">
                <span className="py-2.5 flex gap-x-4">
                    <h5 className="text-[1rem]">Sortby:</h5>
                    <span className="text-gray-400 text-sm flex gap-x-2.5 items-center">
                        <h6 className="cursor-pointer">newest</h6>
                        <h6 className="cursor-pointer">cheaper</h6>
                        <h6 className="cursor-pointer">expensive</h6>
                        <h6 className="cursor-pointer">viewed</h6>
                    </span>
                </span>
                <h4 className="text-gray-400 text-sm">{products.data?.total} products</h4>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.isLoading && (
                    Array.from({length: 5}, (_, index) =>(
                        <ProductCardSkeleton key={index}/>
                    ))
                )}
                {products.isSuccess && (
                    products.data?.products.map((product: IProduct) => <ProductCard key={product.id} product={product} />)
                )}
            </div>
            {products.isSuccess && products.data?.limit< products.data?.total && (
                <button onClick={() => setPage(page+ 5)} className="text-blue-500 w-full hover:text-blue-700 cursor-pointer mt-5">
                    Load More
                </button>
            )}
        </section>
    )
}
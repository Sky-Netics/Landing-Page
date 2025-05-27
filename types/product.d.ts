interface IProduct{
    id: number
    sku: string
    title: string
    price: number
    stock: number
    brand: string
    rating: number
    weight: number
    category: string
    thumbnail: string
    tags: Array<string>
    description: string
    returnPolicy: string
    images: Array<string>
    discountPercentage: number
    availabilityStatus: string
    warrantyInformation: string
    shippingInformation: string
    minimumOrderQuantity: number
    dimensions: {
        width: number
        depth: number
        height: number
    }
    meta: {
        qrCode: string
        barcode: number
        createdAt: string
        updatedAt: string
    }
    reviews: [
        {
            date: string
            rating: number
            comment: string
            reviewerName: string
            reviewerEmail: string
        }
    ]
}
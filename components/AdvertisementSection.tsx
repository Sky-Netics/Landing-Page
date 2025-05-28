import Advertisement from "./Advertisement"

export default function AdvertisementSection() {
  const advertisements= [
    {
      image: "/8h36gm7n-1393821786.avif",
      title: "Fresh Produce",
      description: "Visit our fresh produce section featuring locally sourced fruits and vegetables. We guarantee the highest quality and freshness for all our products."
    },
    {
      image: "/intro-1736197109.jpg",
      title: "Special Offers",
      description: "Check out our weekly special offers and discounts. From household essentials to premium products, we have amazing deals for our valued customers."
    }
  ]
  
  return (
    <section className="place-items-center text-center mt-8 sm:mt-12 md:mt-16 mb-4 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-15">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] mb-4 sm:mb-7 font-bold text-gray-800 leading-tight">Our Features</h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-20 px-4">
        Discover our wide range of products and services. From fresh produce to household essentials, we provide quality products at competitive prices with excellent customer service.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
        {advertisements.map((item, index) =>(
          <Advertisement key={index} title={item.title} description={item.description} image={item.image} index={index}/>
        ))}
      </div>
    </section>
  )
}
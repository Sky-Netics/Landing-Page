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
    <section className="place-items-center text-center mt-16 mb-4 px-5 lg:px-15 xl:px-25">
      <h2 className="text-[40px] mb-7 font-bold text-gray-800">Our Features</h2>
      <p className="text-lg text-gray-600 max-w-3xl mb-20">
        Discover our wide range of products and services. From fresh produce to household essentials, we provide quality products at competitive prices with excellent customer service.
      </p>
      <div className="flex flex-col sm:flex-row gap-8">
        {advertisements.map((item, index) =>(
          <Advertisement key={index} title={item.title} description={item.description} image={item.image} index={index}/>
        ))}
      </div>
    </section>
  )
}
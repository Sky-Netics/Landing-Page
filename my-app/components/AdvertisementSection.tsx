import Advertisement from "./Advertisement"

export default function AdvertisementSection() {
  const advertisements= [
    {
      image: "/woman.png",
      title: "Rent Reporting",
      description: "We help you get the credit you deserve for paying your rent on time. By reporting your monthly rent payments, you may get the credit increases needed to purchase a home."
    },
    {
      image: "/man.png",
      title: "Buy a Home",
      description: "Get connected with a lender that specializes in FHA loans for credit challenged and first time home buyers. We also offer Realtor services in your market to simplify the shopping and purchase process."
    }
  ]
  
  return (
    <section className="flex flex-col justify-center items-center text-center mt-16 mb-4 px-6 sm:px-9 md:px-12 lg:px-16 xl:px-32">
      <h2 className="text-[40px] mb-7">What We Do</h2>
      <p className="text-lg text-gray-500 max-w-3xl mb-20">
        We help those with credit challenges and first-time home buyers connect with lenders suitable for their credit situation. Additionally, we assist renters in improving their credit scores.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {advertisements.map((item, index) =>(
          <Advertisement key={index} title={item.title} description={item.description} image={item.image} index={index}/>
        ))}
      </div>
    </section>
  )
}
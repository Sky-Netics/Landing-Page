import Image from "next/image"

export default function Points() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-15 relative flex justify-center items-center h-full sm:h-[450px] md:h-[500px] lg:h-[550px]">
      <div className="absolute inset-0">
        <Image 
          src="/supermarket2.jpg" 
          alt="FreshMart Store" 
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="my-5 sm:my-0 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-24 rounded-3xl relative bg-white z-10 max-w-[90%] sm:max-w-[80%] md:max-w-[700px] space-y-4 sm:space-y-5">
        <div className="bg-black absolute -left-2 sm:-left-10 -top-2 sm:-top-10 py-2 sm:py-4 px-4 sm:px-6 rounded-xl text-white">
          <h6 className="text-2xl sm:text-3xl font-medium">10K+</h6>
          <p className="text-xs sm:text-sm font-semibold">Happy Customers</p>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
          Join our <span className="text-blue-400">loyalty program</span> and save more
        </h2>
        <p className="text-sm sm:text-base text-gray-600">Our customers love shopping at FreshMart for our quality products and great service. With our loyalty program, members save an average of 15% on their grocery bills. Enjoy exclusive deals, personalized offers, and earn points on every purchase. Plus, get access to our fresh produce, organic products, and premium meat selections at competitive prices.</p>
      </div>
    </div>
  )
}
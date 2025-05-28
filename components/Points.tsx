import Image from "next/image"

export default function Points() {
  return (
    <div className="px-6 relative flex justify-center items-center h-full sm:h-[550px]">
      <Image src="/supermarket2.jpg" alt="FreshMart Store" width={1600} height={50} className="h-full sm:h-[550px] absolute left-0 right-0"/>
      <div className="my-5 sm:my-0 p-6 sm:p-24 rounded-3xl relative bg-white z-10 max-w-[700px] space-y-5">
        <div className="bg-green-600 absolute -left-4 -top-4 py-4 px-6 rounded-xl text-white">
          <h6 className="text-3xl font-medium">10K+</h6>
          <p className="text-sm font-semibold">Happy Customers</p>
        </div>
        <h2 className="text-4xl font-medium">
          Join our <span className="text-green-600">loyalty program</span> and save more
        </h2>
        <p className="font-normal">Our customers love shopping at FreshMart for our quality products and great service. With our loyalty program, members save an average of 15% on their grocery bills. Enjoy exclusive deals, personalized offers, and earn points on every purchase. Plus, get access to our fresh produce, organic products, and premium meat selections at competitive prices.</p>
      </div>
    </div>
  )
}
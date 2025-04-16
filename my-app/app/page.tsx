import Image from "next/image"

export default function Home() {
  return (
   <section className="relative flex justify-center lg:items-center items-end">
    <Image src="/nature.png" height={900} width={1600} alt="Nature"/>
    <div className="absolute max-w-[500px] flex flex-col items-center gap-y-7 md:gap-y-2 py-3">
      <h1 className="text-white text-3xl sm:text-5xl text-center font-bold leading-14">
        Natural Products For Lovers of <span className="text-yellow-500">Healthy</span> Organic Food
      </h1>
      <button className="text-white bg-green-500 rounded-md py-3 w-fit px-6 cursor-pointer hover:bg-green-700">Discover More</button>
    </div>
   </section>
  )
}
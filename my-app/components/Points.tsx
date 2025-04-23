import Image from "next/image"

export default function Points() {
  return (
    <div className="px-6 relative flex justify-center items-center h-full sm:h-[550px]">
      <Image src="/home.png" alt="Blue Home" width={1600} height={50} className="rounded-2xl h-full sm:h-[550px] absolute left-0 right-0"/>
      <div className="my-5 sm:my-0 p-6 sm:p-24 rounded-3xl relative bg-white z-10 max-w-[700px] space-y-5">
        <div className="bg-blue-400 absolute left-[-125px] top-[-90px] py-8 px-20 rounded-3xl text-white hidden lg:block">
          <h6 className="text-[56px] font-medium">105</h6>
          <p className="text-center text-lg font-semibold">points</p>
        </div>
        <h2 className="text-4xl font-medium">
          Users have seen their scores <span className="text-blue-400">increase by over 105 points</span>
        </h2>
        <p className="font-normal">By reporting your rent payments, you can possibly benefit like our other users that have seen an increase in their credit score. These increases have helped our users qualify for a home loan sooner than without reporting their rent. In some cases, users have gone from not qualifying for a home loan, to getting pre-qualified in just one reporting cycle.</p>
      </div>
    </div>
  )
}
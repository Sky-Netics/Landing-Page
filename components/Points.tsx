import Image from "next/image"

export default function Points() {
  return (
    <div className="px-6 relative flex justify-center items-center h-full sm:h-[550px]">
      <Image 
        src="/supermarket.png"
        alt="RENA Dairy Products" 
        fill
        className="object-cover absolute left-0 right-0"
        quality={100}
      />
      <div className="my-5 sm:my-0 p-6 sm:p-16 rounded-3xl relative bg-white/95 z-10 max-w-[800px] space-y-6 backdrop-blur-sm">
        <div className="bg-blue-600 absolute left-[-125px] top-[-90px] py-8 px-16 rounded-3xl text-white hidden lg:block shadow-xl">
          <h6 className="text-[56px] font-bold">34</h6>
          <p className="text-center text-lg font-semibold">سال تجربه</p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          <span className="text-blue-600">شرکت رنا</span> با 34 سال سابقه درخشان در تجارت بین‌المللی
        </h2>
        <p className="font-medium text-gray-600 leading-relaxed">
          شرکت بازرگانی بین‌المللی رنا با بیش از سه دهه تجربه، به عنوان یکی از معتبرترین تأمین‌کنندگان محصولات لبنی و صنعتی در منطقه شناخته می‌شود. ما با شبکه‌ای گسترده از تولیدکنندگان معتبر جهانی همکاری داشته و کیفیت محصولات خود را با بالاترین استانداردهای بین‌المللی تضمین می‌کنیم.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            کیفیت تضمینی
          </div>
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            تحویل به موقع
          </div>
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            قیمت رقابتی
          </div>
        </div>
      </div>
    </div>
  )
}




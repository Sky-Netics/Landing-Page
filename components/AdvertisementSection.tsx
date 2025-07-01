import Advertisement from "./Advertisement"

export default function AdvertisementSection() {
  const advertisements = [
    {
      image: "/woman.png",
      title: "واردات کره مرغوب",
      description: "شرکت رنا با واردات کره با کیفیت بالا از تولیدکنندگان معتبر بین‌المللی، محصولی مطابق با تمام استانداردهای بهداشتی و کیفی را ارائه می‌دهد. کره‌های وارداتی همراه با گواهینامه‌های بین‌المللی عرضه می‌شوند."
    },
    {
      image: "/man.png",
      title: "خامه شیر با کیفیت",
      description: "خامه شیر وارداتی عمده از تولیدکنندگان معتبر ایرانی با طعم و بافت طبیعی و بدون مواد افزودنی. مناسب برای تولیدات لبنی، شیرینی‌پزی، نوشیدنی‌های گرم و سرد و سس‌ها."
    },
    {
      image: "/man.png",
      title: "تجهیزات صنعتی",
      description: "تأمین تخصصی تجهیزات صنعتی شامل دیگ‌های بخار، سیستم‌های تبرید، تانکرهای استیل و سردخانه‌های صنعتی با کیفیت بالا و قیمت رقابتی."
    }
  ]
  
  return (
    <section className="place-items-center text-center mt-16 mb-4 px-5 lg:px-15 xl:px-25">
      <h2 className="text-[40px] mb-7 font-bold">خدمات و محصولات رنا</h2>
      <p className="text-lg text-gray-500 max-w-3xl mb-20 mx-auto">
        شرکت بازرگانی بین‌المللی رنا با 34 سال تجربه درخشان، ارائه‌دهنده محصولات با کیفیت در حوزه‌های غذایی، صنعتی و ساختمانی با تضمین کیفیت و قیمت مناسب
      </p>
      <div className="flex flex-col sm:flex-row gap-8 justify-center">
        {advertisements.map((item, index) => (
          <Advertisement 
            key={index} 
            title={item.title} 
            description={item.description} 
            image={item.image} 
            index={index}
          />
        ))}
      </div>
    </section>
  )
}


"/woman.png"
"/man.png"
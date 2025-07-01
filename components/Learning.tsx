import Article from "./Article"

export default function Learning() {
  const articles = [
    {
      tag: "صنایع غذایی",
      image: "/family.png",
      title: "استانداردهای بین‌المللی تولید کره مرغوب",
      description: "آشنایی با استانداردهای جهانی تولید کره و نحوه انتخاب بهترین تولیدکنندگان بین‌المللی توسط تیم کنترل کیفیت رنا"
    },
    {
      image: "/phone.png",
      tag: "تجهیزات صنعتی",
      title: "انتخاب دیگ‌های بخار برای صنایع لبنی",
      description: "معیارهای فنی انتخاب دیگ‌های بخار با ظرفیت مناسب برای کارخانه‌های تولید لبنیات و شیرینی‌پزی"
    },
    {
      image: "/report.png",
      tag: "فرآیند واردات",
      title: "مراحل قانونی واردات محصولات غذایی به ارمنستان",
      description: "راهنمای کامل فرآیند گمرکی و استانداردهای لازم برای واردات محصولات غذایی به بازار ارمنستان"
    }
  ]

  return (
    <section className="space-y-10 my-16 px-5 lg:px-15 xl:px-25 flex flex-col justify-center items-center">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">مرکز آموزشی رنا</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          مقالات تخصصی در زمینه صنایع غذایی، تجهیزات صنعتی و فرآیندهای واردات و صادرات
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {articles.map((article) => (
          <Article 
            key={article.title} 
            tag={article.tag} 
            image={article.image} 
            title={article.title} 
            description={article.description}
          />
        ))}
      </div>
      <button
        className="px-7 py-3 border-2 text-[16px] border-blue-600 rounded-lg cursor-pointer font-medium hover:text-white hover:bg-blue-600 transition-colors mt-6"
      >
        مشاهده همه مقالات
      </button>
    </section>
  )
}





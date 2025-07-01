"use client"

import React from "react"
import { Accordion } from "./Accardion"

export default function Question() {
  const questions = [
    {
      title: "شرکت رنا چه محصولاتی ارائه می‌دهد؟",
      description: "شرکت رنا با مسئولیت محدود، تخصصی در واردات کره و خامه شیر با کیفیت بالا از تولیدکنندگان معتبر بین‌المللی فعالیت می‌کند. محصولات ما همراه با گواهینامه‌های بین‌المللی و مطابق با تمام استانداردهای بهداشتی و کیفی عرضه می‌شوند."
    },
    {
      title: "فرآیند سفارش و تحویل چگونه است؟",
      description: <ol className="list-decimal pr-5 space-y-4">
        <li>
          مرحله ۱: ثبت سفارش
          <ol className="list-decimal pr-8 my-4 space-y-2">
            <li>تماس با واحد فروش از طریق شماره ‪700066 11 (374)+‬</li>
            <li>ارسال مشخصات کامل محصول مورد نیاز شامل نوع، مقدار و استانداردهای مورد نظر</li>
            <li>دریافت پیش‌فاکتور و تأیید نهایی سفارش</li>
          </ol>
        </li>
        <li>
          مرحله ۲: پرداخت و تأمین مالی
          <ul className="list-disc pr-12 my-4 space-y-2">
            <li>امکان پرداخت از طریق LC، حواله بانکی و سایر روش‌های متداول بین‌المللی</li>
            <li>پشتیبانی کامل از فرآیندهای گمرکی و ترخیص کالا</li>
          </ul>
        </li>
        <li>
          مرحله ۳: تحویل کالا
          <ol className="list-decimal pr-8 my-4 space-y-2">
            <li>تحویل در محل مورد نظر خریدار در ارمنستان</li>
            <li>امکان تحویل مرحله‌ای برای سفارشات عمده</li>
            <li>گارانتی کیفیت محصولات تا زمان تحویل</li>
          </ol>
        </li>
      </ol>
    },
    {
      title: "مزایای خرید از رنا چیست؟",
      description: <div className="space-y-3">
        <p>شرکت رنا با 34 سال تجربه در تجارت بین‌المللی مزایای زیر را ارائه می‌دهد:</p>
        <ul className="list-disc pr-8 space-y-2">
          <li>تضمین کیفیت محصولات مطابق با استانداردهای جهانی</li>
          <li>قیمت‌های رقابتی به دلیل خرید مستقیم از تولیدکنندگان</li>
          <li>تحویل به موقع و مطمئن</li>
          <li>پشتیبانی فنی و مشاوره تخصصی</li>
          <li>انعطاف‌پذیری در روش‌های پرداخت</li>
        </ul>
      </div>
    },
    {
      title: "شرایط همکاری با رنا چگونه است؟",
      description: <ol className="list-decimal pr-5 space-y-4">
        <li>
          شرایط عمومی:
          <ul className="list-disc pr-8 my-4 space-y-2">
            <li>ارائه مدارک ثبت شرکت و جواز کسب معتبر</li>
            <li>تعهد به استانداردهای نگهداری محصولات</li>
          </ul>
        </li>
        <li>
          شرایط خاص برای محصولات لبنی:
          <ol className="list-decimal pr-8 my-4 space-y-2">
            <li>دارا بودن مجوزهای بهداشتی مرتبط</li>
            <li>امکان بازرسی محل نگهداری محصولات توسط تیم کنترل کیفیت رنا</li>
          </ol>
        </li>
      </ol>
    },
    {
      title: "چگونه می‌توانم با رنا همکاری کنم؟",
      description: "برای شروع همکاری می‌توانید از طریق شماره تلفن ‪700066 11 (374)+‬ با واحد فروش تماس بگیرید یا به آدرس دفتر مرکزی ما در ایروان، خیابان آ. میکویان، پلاک ۲۲/۱ مراجعه فرمایید."
    }
  ]

  const ref = React.useRef(null)
  const [visible, setVisible] = React.useState(false)
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect()
        }
      }
    )
    if (ref.current) observer.observe(ref.current);
  }, [])

  return (
    <section className="mb-16 px-5">
      <div ref={ref} className={`transform transition-all text-right space-y-5 duration-1000 ease-out bg-blue-950 rounded-3xl justify-between text-white p-8 md:p-16 gap-8 flex flex-col md:flex-row
        ${visible ? "translate-x-0 opacity-100" : "translate-x-[4rem] opacity-0"}
      `}>
        <h2 className="text-2xl md:text-4xl font-bold">سوالات متداول</h2>
        <div className="max-w-[800px] w-full">
          {questions.map((question, index) => (
            <Accordion 
              key={index} 
              title={question.title} 
              description={question.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
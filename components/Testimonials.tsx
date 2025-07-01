"use client"

import { motion } from 'framer-motion'
import Comment from "@/components/Comment"

export default function Testimonials() {
  const comments = [
    {
      person: "رضا محمدی",
      company: "شرکت لبنیات آرا",
      description: "همکاری با شرکت رنا در زمینه واردات کره و خامه شیر بسیار رضایت‌بخش بوده است. محصولات با کیفیت بالا و بسته‌بندی مناسب در زمان مقرر تحویل داده شد."
    },
    {
      person: "نازنین کریمی",
      company: "سوپرمارکت زنجیره‌ای مهر",
      description: "به عنوان یکی از بزرگترین خریداران عمده، کیفیت محصولات رنا همیشه ثابت و قابل اعتماد بوده است. پشتیبانی و خدمات پس از فروش عالی دارند."
    },
    {
      person: "امیرحسین نجفی",
      company: "کارخانه تولید شیرینی",
      description: "خامه شیر وارداتی رنا بهترین انتخاب برای تولیدات ما بوده است. طعم و بافت طبیعی این محصول باعث افزایش کیفیت محصولات نهایی ما شده است."
    },
    {
      person: "سارا احمدی",
      company: "توزیع‌کننده مواد غذایی",
      description: "با بیش از 5 سال همکاری مستمر، رنا تنها تامین‌کننده‌ای است که هم در کیفیت و هم در تحویل به موقع همیشه قابل اعتماد بوده است."
    },
    {
      person: "محسن رضایی",
      company: "رستوران زنجیره‌ای",
      description: "کیفیت کره وارداتی رنا واقعاً قابل مقایسه با سایر برندها نیست. مشتریان ما تفاوت را احساس می‌کنند و این برای کسب‌وکار ما ارزشمند است."
    },
    {
      person: "فاطمه حسینی",
      company: "صنایع لبنی",
      description: "به عنوان یک تولیدکننده، استانداردهای سختگیرانه‌ای داریم. محصولات رنا نه تنها این استانداردها را برآورده می‌کنند، بلکه از آن فراتر می‌روند."
    }
  ]

  const duplicatedComments = [...comments, ...comments, ...comments, ...comments]

  return (
    <section className="space-y-10 my-16 px-5">
      <h2 className="text-3xl md:text-[40px] text-center font-bold">نظرات مشتریان</h2>
      <p className="text-lg text-gray-500 text-center max-w-3xl mx-auto">
        تجربیات ارزشمند همکاران و مشتریان ما از همکاری با شرکت رنا
      </p>
      <div className="overflow-hidden pt-10">
        <motion.div
          className="flex gap-x-6"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: typeof window !== "undefined" && window.innerWidth > 640 ? 40 : 20,
              ease: "linear"
            }
          }}
        >
          {duplicatedComments.map((comment, index) => (
            <Comment 
              key={index} 
              person={comment.person} 
              company={comment.company}
              description={comment.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
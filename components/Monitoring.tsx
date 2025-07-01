"use client"

import React from "react"
import Image from "next/image"

export default function Monitoring() {
    const ref = React.useRef(null)
    const [visible, setVisible] = React.useState(false)
  
    React.useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
            }
        }
        )
        if (ref.current) observer.observe(ref.current);
    }, [])
    
    return (
        <section className="px-5 lg:px-15 xl:px-25 my-16">
            <div ref={ref} className={`bg-blue-950 rounded-3xl flex flex-col md:flex-row justify-between gap-8 p-8 md:p-12 transform transition-all duration-1000 ease-out
                ${visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
            `}>
                <div className="text-white font-medium space-y-6 md:w-1/2 place-content-center">
                    <h2 className="text-3xl md:text-[40px] font-bold">سیستم نظارت بر کیفیت</h2>
                    <p className="text-lg leading-relaxed">
                        شرکت رنا با نظارت مستمر بر کیفیت محصولات از مرحله تولید تا تحویل، استانداردهای بین‌المللی را در تمام مراحل رعایت می‌کند.
                    </p>
                    <button className="text-[16px] px-6 py-3 bg-blue-400 rounded-lg cursor-pointer hover:bg-white hover:text-blue-950 transition-colors">
                        اطلاعات بیشتر
                    </button>
                </div>
                <div className="md:w-1/2 space-y-5 mt-6 md:mt-0">
                    <div className="flex gap-x-4 items-center bg-white p-4 rounded-xl place-self-end">
                        <Image src="/chart.svg" alt="Certificate" width={40} height={40}/>
                        <div>
                            <h3 className="text-lg font-medium">گواهینامه‌های بین‌المللی</h3>
                            <p className="text-sm text-gray-600">مطابقت با استانداردهای جهانی</p>
                        </div>
                    </div>
                    <div className="flex gap-x-4 items-center bg-white p-4 rounded-xl place-self-start">
                        <Image src="/monitor.svg" alt="Quality Check" width={40} height={40}/>
                        <div>
                            <h3 className="text-lg font-medium">کنترل کیفیت دقیق</h3>
                            <p className="text-sm text-gray-600">تضمین کیفیت در تمام مراحل</p>
                        </div>
                    </div>
                    <div className="flex gap-x-4 items-center bg-white p-4 rounded-xl place-self-end">
                        <Image src="/home.svg" alt="Delivery" width={40} height={40}/>
                        <div>
                            <h3 className="text-lg font-medium">تحویل به موقع</h3>
                            <p className="text-sm text-gray-600">تضمین زمان تحویل محصولات</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}







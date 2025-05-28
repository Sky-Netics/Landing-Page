"use client"

import React from "react"
import Image from "next/image"

export default function Monitoring() {
    const ref = React.useRef(null)
    const [visible, setVisible] = React.useState(false)
  
    React.useEffect(() =>{
      const observer= new IntersectionObserver(
        ([entry]) =>{
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      )
      if (ref.current) observer.observe(ref.current);
    }, [])
      
    return (
        <section className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-15">
            <div ref={ref} className={`bg-black rounded-3xl flex flex-col md:flex-row justify-between gap-6 md:gap-8 lg:gap-10 p-6 sm:p-8 md:p-12 transform transition-all duration-1000 ease-out
                ${visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
            `}>
                <div className="text-white font-medium space-y-4 md:w-1/2 place-content-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">FreshMart Shopping Experience</h2>
                    <p className="text-base sm:text-lg text-white/90">Track your shopping history, manage your loyalty points, and get personalized recommendations based on your preferences.</p>
                    <button className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 bg-blue-400 rounded-lg cursor-pointer hover:bg-white hover:text-black transition-colors">Learn More</button>
                </div>
                <div className="md:w-1/2 space-y-4 sm:space-y-5">
                    <div className="flex gap-x-2 items-center bg-white p-3 sm:p-4 rounded-xl place-self-end">
                        <Image src="/chart.svg" alt="Chart" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10"/>
                        <h3 className="text-base sm:text-lg text-nowrap font-medium">Track your savings</h3>
                    </div>
                    <div className="flex gap-x-2 items-center bg-white p-3 sm:p-4 rounded-xl place-self-start">
                        <Image src="/monitor.svg" alt="Monitor" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10"/>
                        <h3 className="text-base sm:text-lg text-nowrap font-medium">View your history</h3>
                    </div>
                    <div className="flex gap-x-2 items-center bg-white p-3 sm:p-4 rounded-xl place-self-end">
                        <Image src="/home.svg" alt="Chart" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10"/>
                        <h3 className="text-base sm:text-lg text-nowrap font-medium">Get rewards</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
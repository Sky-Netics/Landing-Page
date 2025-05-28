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
        <section className="px-5 lg:px-15 xl:px-25">
            <div ref={ref} className={`bg-green-900 rounded-3xl flex flex-col md:flex-row justify-between gap-5 p-12 transform transition-all duration-1000 ease-out
                ${visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
            `}>
                <div className="text-white font-medium space-y-4 md:w-1/2 place-content-center">
                    <h2 className="text-[40px]">FreshMart Shopping Experience</h2>
                    <p className="text-lg">Track your shopping history, manage your loyalty points, and get personalized recommendations based on your preferences.</p>
                    <button className="text-[16px] px-6 py-3 bg-green-400 rounded-lg cursor-pointer hover:bg-white hover:text-green-900">Learn More</button>
                </div>
                <div className="md:w-1/2 space-y-5">
                    <div className="flex gap-x-2 items-center bg-white p-4 rounded-xl place-self-end">
                        <Image src="/chart.svg" alt="Chart" width={40} height={40}/>
                        <h3 className="text-lg text-nowrap font-medium">Track your savings</h3>
                    </div>
                    <div className="flex gap-x-2 items-center bg-white p-4 rounded-xl place-self-start">
                        <Image src="/monitor.svg" alt="Monitor" width={40} height={40}/>
                        <h3 className="text-lg text-nowrap font-medium">View your history</h3>
                    </div>
                    <div className="flex gap-x-2 items-center bg-white p-4 rounded-xl place-self-end">
                        <Image src="/home.svg" alt="Chart" width={40} height={40}/>
                        <h3 className="text-lg text-nowrap font-medium">Get rewards</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
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
            <div ref={ref} className={`bg-blue-950 rounded-3xl flex flex-col md:flex-row justify-between gap-5 p-12 transform transition-all duration-1000 ease-out
                ${visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
            `}>
                <div className="text-white font-medium space-y-4 md:w-1/2 place-content-center">
                    <h2 className="text-[40px]">Credit Monitoring Tools</h2>
                    <p className="text-lg">As part of your rent reporting services, you also have access to credit monitoring services to track the progress of your credit score.</p>
                    <button className="text-[16px] px-6 py-3 bg-blue-400 rounded-lg cursor-pointer hover:bg-white hover:text-blue-950">Learn More</button>
                </div>
                <div className="md:w-1/2 space-y-5">
                    <div className="flex gap-x-2 items-center bg-white p-4 rounded-xl place-self-end">
                        <Image src="/chart.svg" alt="Chart" width={40} height={40}/>
                        <h3 className="text-lg text-nowrap font-medium">Report your rent</h3>
                    </div>
                    <div className="flex gap-x-2 items-center bg-white p-4 rounded-xl place-self-start">
                        <Image src="/monitor.svg" alt="Monitor" width={40} height={40}/>
                        <h3 className="text-lg text-nowrap font-medium">Monitor your progress</h3>
                    </div>
                    <div className="flex gap-x-2 items-center bg-white p-4 rounded-xl place-self-end">
                        <Image src="/home.svg" alt="Chart" width={40} height={40}/>
                        <h3 className="text-lg text-nowrap font-medium">Purchase a home</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
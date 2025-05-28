"use client"

import React from "react"
import Image from "next/image"

interface AdvertisementProps{
  title: string
  image: string
  index: number
  description: string
}

export default function Advertisement({title, description, image, index}: AdvertisementProps) {
  const ref= React.useRef(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() =>{
    const observer= new IntersectionObserver(
      ([entry]) =>{
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect()
        }
      }
    )
    if (ref.current) observer.observe(ref.current);
  }, [])

  return (
    <div ref={ref}
      className={`w-full sm:w-1/2 transform transition-all bg-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-3xl text-start space-y-3 sm:space-y-5 duration-1000 ease-out
        ${visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium leading-tight">{title}</h3>
      <p className="text-sm sm:text-base text-gray-500">{description}</p>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mt-4 sm:mt-8">
        <button className="w-full sm:w-auto py-2 sm:py-3 px-4 sm:px-6 bg-green-600 text-white text-sm sm:text-base text-nowrap cursor-pointer rounded-lg font-medium hover:bg-green-700 transition-colors">
          Learn More
        </button>
        <div className="w-full sm:w-auto flex justify-center sm:flex-shrink-0">
          <Image 
            src={image} 
            alt={title} 
            width={280} 
            height={280} 
            className="object-contain h-[200px] w-[200px] sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px]" 
          />
        </div>
      </div>
    </div>
  )
}
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
      className={`sm:w-1/2 transform transition-all bg-white p-12 rounded-3xl text-start space-y-5 duration-1000 ease-out
        ${visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="text-[32px] font-medium">{title}</h3>
      <p className="text-gray-500">{description}</p>
      <div className="flex flex-row justify-between items-end gap-4 mt-8">
        <button className="py-3 px-6 bg-green-600 text-white text-nowrap cursor-pointer rounded-lg font-medium hover:bg-green-700">
          Learn More
        </button>
        <div className="flex-shrink-0">
          <Image src={image} alt={title} width={280} height={280} className="object-contain h-[280px] w-[280px]" />
        </div>
      </div>
    </div>
  )
}
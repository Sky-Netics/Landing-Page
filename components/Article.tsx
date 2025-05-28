"use client"

import React from "react"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6"

interface ArticleProps{
  tag: string
  image: string
  title: string
  description: string
}

export default function Article({tag, image, title, description}: ArticleProps) {
  const [hover, setHover]= React.useState<boolean>(false);

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      className="p-6 bg-white rounded-2xl space-y-5 w-full shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-[225px] w-full overflow-hidden rounded-xl">
        <Image 
          src={image} 
          alt={title} 
          fill
          className={`object-cover cursor-pointer duration-500 ${hover ? "scale-105" : ""}`}
        />
      </div>
      <div className="space-y-4">
        <div className="flex gap-x-2 items-center">
          <span className="text-[12px] font-medium py-1 px-3 bg-green-100 text-green-800 rounded-full">{tag}</span>
          <h6 className="text-[11px] text-gray-500">APRIL 19, 2024</h6>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 hover:text-green-600 transition-colors">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <button className={`flex items-center gap-x-2 text-sm font-medium text-green-600 hover:text-green-700 transition-all duration-300 ${hover ? "gap-x-3" : ""}`}>
          Read More <FaArrowRight className={`text-sm ${hover ? "text-green-700" : ""}`}/>
        </button>
      </div>
    </div>
  )
}
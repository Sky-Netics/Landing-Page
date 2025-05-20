"use client"

import "swiper/css"
import Image from "next/image"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Slider() {
  return (
    <Swiper modules={[ Autoplay ]} slidesPerView={1} autoplay={{ delay: 3000 }} loop={true} className="brightness-50 rounded-b-2xl max-h-screen">
      <SwiperSlide>
        <Image src="/armenia.jpg" width={1600} height={850} alt="Armenia" className="rounded-b-2xl"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/supermarket.png" width={1600} height={850} alt="Supermarket" className="rounded-b-2xl"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/vegetable.jpg" width={1600} height={850} alt="Vegetable" className="rounded-b-2xl"/>
      </SwiperSlide>
    </Swiper>
  )
}
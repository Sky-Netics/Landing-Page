"use client"

import "swiper/css"
import Image from "next/image"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Slider() {
  return (
    <Swiper modules={[ Autoplay ]} slidesPerView={1} autoplay={{ delay: 3000 }} loop={true}>
      <SwiperSlide>
        <Image src="/recycle.jpg" width={1600} height={850} alt="Nature" className="brightness-50 shadow-2xl"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/perfume.jpg" width={1600} height={850} alt="Perfume"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/ship.jpg" width={1600} height={850} alt="Ship" className="brightness-50"/>
      </SwiperSlide>
    </Swiper>
  )
}
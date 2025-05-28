"use client"

import "swiper/css"
import Image from "next/image"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Slider() {
  return (
    <Swiper 
      loop={true}
      slidesPerView={1}
      modules={[ Autoplay ]}
      autoplay={{ delay: 3000 }}
      className="brightness-75 rounded-b-3xl max-h-screen shadow-2xl"
    >
      <SwiperSlide>
        <Image
          width={1600}
          height={350}
          alt="Modern Shopping Experience"
          src="/intro-1736197109.jpg" 
          className="rounded-b-3xl object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={1600}
          height={350}
          alt="Fresh Shopping Cart"
          src="/close-up-view-shopping-cart-overloaded-with-food-while-background-female-person-choosing-products.jpg"
          className="rounded-b-3xl object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={1600}
          height={350}
          alt="Safe Shopping"
          src="/person-shopping-with-face-mask.jpg"
          className="rounded-b-3xl object-cover"
        />
      </SwiperSlide>
    </Swiper>
  )
}
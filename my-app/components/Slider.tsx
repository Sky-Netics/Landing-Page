"use client"

import "swiper/css"
import Image from "next/image"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Home() {

  return (
    <section>
      <Swiper
        modules={[ Autoplay ]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: false }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper"
      >
      <SwiperSlide>
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/recycle.jpg"
            width={1600}
            height={400}
            alt="Nature"
            className="brightness-50"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/oil.jpg"
            width={1600}
            height={400}
            alt="Oil"
          />
        </div>
      </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/ship.jpg"
                  width={1600}
                  height={400}
                  alt="Slide 3"
              />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

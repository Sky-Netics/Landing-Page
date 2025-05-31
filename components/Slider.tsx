"use client";

import "swiper/css";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <Swiper
      loop={true}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      className="brightness-65 opacity-99 rounded-b-2xl h-screen shadow-2xl"
    >
      <SwiperSlide className="h-full">
        <div className="relative h-full w-full">
          <Image
            fill
            alt="Modern Shopping Experience"
            src="/armenia.jpg"
            className="rounded-b-2xl object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-full">
        <div className="relative h-full w-full">
          <Image
            fill
            alt="Fresh Shopping Cart"
            src="/close-up-view-shopping-cart-overloaded-with-food-while-background-female-person-choosing-products.jpg"
            className="rounded-b-2xl object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-full">
        <div className="relative h-full w-full">
          <Image
            fill
            alt="Safe Shopping"
            src="/person-shopping-with-face-mask.jpg"
            className="rounded-b-2xl object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-full">
        <div className="relative h-full w-full">
          <Image
            fill
            alt="Safe Shopping"
            src="/vegetable.jpg"
            className="rounded-b-2xl object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

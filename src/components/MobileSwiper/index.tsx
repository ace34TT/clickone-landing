'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

interface MobileSwiperProps {
  children: React.ReactNode
  className?: string
}

export const MobileSwiper: React.FC<MobileSwiperProps> = ({ children, className = '' }) => {
  return (
    <div className={`block lg:hidden ${className}`}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        grabCursor={true}
        className="w-full !pb-8"
        breakpoints={{
          768: {
            spaceBetween: 32,
          }
        }}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index} className="!w-[85%] md:!w-[45%] !h-auto flex">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

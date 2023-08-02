'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import required modules
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'

const Carousel = ({ data }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
        modules={[Navigation]}
        className='mySwipe'
      >
        {data.map(item => {
          const {
            id,
            avatar,
            author,
            siteLink,
            status,
            siteName,
            description
          } = item
          return (
            <SwiperSlide
              key={id}
              className='form_shadow my-10 rounded-md border'
            >
              <div className='p-5'>
                <p className='mb-3'>
                  <q>{description}</q>
                </p>
                <div className='flex items-start justify-start gap-2'>
                  <Image
                    src={avatar}
                    width={50}
                    height={50}
                    alt='author'
                    className='border-spacing-1 rounded-full border-[2.5px] border-gray-800'
                  />
                  <div className='flex flex-col'>
                    <p className='text-sm font-bold text-black dark:text-white'>
                      {author}
                    </p>
                    <p className='text-[12px]'>
                      {status}
                      <Link href={siteLink} className='text-blue-500'>
                        {siteName}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default Carousel

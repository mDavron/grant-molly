import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import banner from '../../../public/images/baner4.jpg'

const Banner = () => {
  return (
    <section>
      <div className='relative flex h-[500px] w-full justify-center md:h-[600px] lg:h-screen'>
        <Image
          src={banner}
          className='absolute bg-cover'
          fill
          priority
          placeholder='blur'
          alt='banner'
        />
        <div className='absolute left-0 top-0  h-full w-full bg-gray-800/70'>
          <div className='container mx-auto mt-[150px] lg:mt-[250px]'>
            <h1 className='text-2xl font-semibold uppercase text-white lg:text-6xl '>
              <span className='mb-2 block text-red-500 lg:mb-6'>
                МОТОРНОЕ МАСЛО
              </span>
              для автомобилей
            </h1>
            <p className='mb-10 mt-6  flex items-center gap-3 text-lg font-semibold text-yellow-500 lg:w-1/2 lg:text-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
                />
              </svg>
              Сайт временно находится в тестовом режиме!
            </p>
            <Link
              href={'/'}
              className='rounded-md bg-red-500/80 px-5 py-3 text-base font-semibold uppercase text-white transition hover:bg-red-500 md:px-8 md:py-4 md:text-lg'
            >
              КАТАЛОГ МАСЛА
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner

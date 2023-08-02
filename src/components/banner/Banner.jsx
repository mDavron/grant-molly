import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <section>
      <div className='relative flex min-h-screen w-full justify-center'>
        <Image src={'/images/baner4.jpg'} className='absolute' fill priority />
        <div className='absolute left-0 top-0  h-full w-full bg-gray-800/70'>
          <div className='container mx-auto mt-[150px] lg:mt-[250px]'>
            <h1 className='text-2xl font-semibold uppercase text-white lg:text-6xl '>
              <span className='mb-2 block text-red-500 lg:mb-6'>
                МОТОРНОЕ МАСЛО
              </span>
              для автомобилей
            </h1>
            <p className='mb-10 mt-6  text-lg font-semibold text-white lg:w-1/2 lg:text-xl'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              dolores corrupti nemo et nesciunt odit quidem debitis modi culpa
              velit!
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

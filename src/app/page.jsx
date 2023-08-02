import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <section className=''>
      <div className='relative flex h-[80vh]  w-full justify-center bg-[url("/images/baner4.jpg")] bg-cover bg-fixed lg:h-screen'>
        <div className='absolute left-0 top-0  h-full w-full bg-gray-800/70'>
          <div className='container mx-auto mt-[150px] lg:mt-[250px]'>
            <h1 className='text-3xl font-semibold uppercase text-white lg:text-6xl '>
              <span className='mb-2 block text-red-500 lg:mb-6'>
                МОТОРНОЕ МАСЛО
              </span>
              для автомобилей
            </h1>
            <p className='mb-10 mt-6  text-xl font-semibold text-white lg:w-1/2'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              dolores corrupti nemo et nesciunt odit quidem debitis modi culpa
              velit!
            </p>
            <Link
              href={'/'}
              className='rounded-md bg-red-500/80 px-5 py-3 text-base font-semibold uppercase text-white transition hover:bg-red-500 md:px-8 md:py-4 md:text-lg'
            >
              lorem ipsum
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage

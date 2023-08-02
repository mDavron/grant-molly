import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <section className=''>
      <div className='relative flex h-[60vh] w-full justify-center bg-[url("/images/baner4.jpg")] bg-cover bg-fixed lg:h-screen'>
        <div className='absolute left-0 top-0  h-full w-full bg-gray-800/70'>
          <div className='container mx-auto mt-[250px]'>
            <h1 className='text-6xl font-semibold uppercase text-white '>
              <span className='mb-6 block text-red-500'>МОТОРНОЕ МАСЛО</span>
              для автомобилей
            </h1>
            <p className='mb-10 mt-6 w-1/2 text-xl font-semibold text-white'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              dolores corrupti nemo et nesciunt odit quidem debitis modi culpa
              velit!
            </p>
            <Link
              href={'/'}
              className='rounded-md bg-red-500/80 px-8 py-4 text-lg font-semibold uppercase text-white'
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

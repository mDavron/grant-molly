import React from 'react'
import Carousel from './Carousel'
import { testimonialsData } from './data'

const Testimonials = () => {
  return (
    <section className='py-12'>
      <div className='container mx-auto'>
        <h1 className='section_title'>Testimonials</h1>
        <Carousel data={testimonialsData} />
      </div>
    </section>
  )
}

export default Testimonials

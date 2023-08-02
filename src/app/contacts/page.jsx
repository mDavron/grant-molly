import Image from 'next/image'
import React from 'react'

const ContactsPage = () => {
  return (
    <section>
      <div className='relative h-[60vh] w-full'>
        <Image
          src='/images/pexels-1.jpg'
          fill
          className='absolute bg-center object-cover'
          alt=''
          priority
        />
        <div className='absolute left-0 top-0 h-full w-full bg-gray-800/30' />
      </div>
    </section>
  )
}

export default ContactsPage

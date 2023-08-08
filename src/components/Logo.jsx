import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href='/'>
      <Image
        src={'/images/logo.png'}
        width={150}
        height={50}
        className=' h-10 w-24 object-cover md:h-12 md:w-40 lg:h-14'
        alt='logo.png'
      />
    </Link>
  )
}

export default Logo

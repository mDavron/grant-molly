import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href='/'>
      <Image src={'/images/logo.png'} width={150} height={50} />
    </Link>
  )
}

export default Logo

import Link from 'next/link'
import React from 'react'

export const Logo = ({ navBg, isHome }) => {
  return (
    <div>
      <Link href={'/'} className='inline-flex items-center gap-1 text-inherit'>
        <span
          className={`${navBg ? 'text-gray-800' : 'text-gray-50'} ${
            !isHome && 'text-gray-800'
          } font-semibold uppercase `}
        >
          Grant Molly
        </span>
      </Link>
    </div>
  )
}

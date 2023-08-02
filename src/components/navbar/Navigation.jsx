// 'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Navigation = ({ navLinks }) => {
  const pathname = usePathname()
  return (
    <nav className=' hidden md:flex md:items-center md:gap-4'>
      {navLinks?.map(link => {
        const { id, url, label } = link
        const isActive = pathname === url
        return (
          <Link
            className={`${
              isActive ? 'active' : ''
            } text-base font-medium uppercase transition hover:text-[#ff0000]`}
            href={url}
            key={id}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}

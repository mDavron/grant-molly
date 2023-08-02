'use client'
import React from 'react'
import Link from 'next/link'
import { HamburgerButton } from './HamburgerButton'
import { usePathname } from 'next/navigation'

export const ModalMenu = ({ navLinks, isOpen, setOpen }) => {
  const pathname = usePathname()

  return (
    <div
      className={`${isOpen ? 'menu_open' : ''}
        fixed -right-full top-0 z-50 h-full w-[80%] bg-white pl-6 pr-4 text-gray-900 opacity-0  transition-all sm:w-[40%]`}
    >
      <div className='flex h-[70px] w-full items-center justify-end'>
        <HamburgerButton isOpen={isOpen} setOpen={setOpen} />
      </div>
      <div className='flex flex-col gap-8 text-[18px] uppercase'>
        {navLinks.map(link => {
          const { id, url, label } = link
          const isActive = pathname === url
          return (
            <Link
              href={link.url}
              key={id}
              onClick={() => setOpen(false)}
              className={`${isActive ? 'active' : ''}
                text-inherit transition hover:text-[#ff0000;]`}
            >
              {label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

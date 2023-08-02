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
        <Link
          title='Grand Molly Ofis'
          href='tel:+998932743776'
          className='flex items-center gap-2 font-semibold uppercase'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
            />
          </svg>
          +998932743776
        </Link>
      </div>
    </div>
  )
}

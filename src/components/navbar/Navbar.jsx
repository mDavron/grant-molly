'use client'
import React from 'react'
import { Navigation } from './Navigation'
import { usePathname } from 'next/navigation'
import MobileMenu from './mobileNavbar'
import { Logo } from '../Logo'
import Link from 'next/link'

const navitems = [
  { id: 1, url: '/', label: 'Bosh Sahifa' },
  { id: 2, url: '/category', label: 'Mahsulotlar' },
  { id: 4, url: '/about', label: 'Biz haqimizda' },
  { id: 3, url: '/contacts', label: 'Kontaktlar' }
]

const Navbar = () => {
  const [navBg, setNavBg] = React.useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/' || pathname === '/contacts' ? true : false
  // CHANGE NAVBAR BG ON SCROLL
  const changeNavBg = () => {
    window.scrollY >= 81 ? setNavBg(true) : setNavBg(false)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', changeNavBg)
    return () => {
      window.removeEventListener('scroll', changeNavBg)
    }
  }, [])
  return (
    <header
      className={`${
        isHome ? 'bg-transparent text-gray-50' : 'bg-white text-gray-900'
      } ${navBg && 'bg-white text-gray-900'}  fixed top-0 z-30 h-[80px]
     w-full border-b border-[#2121213b] transition`}
    >
      <div className='container mx-auto w-full'>
        <div className='flex h-[80px] items-center justify-between'>
          <Logo navBg={navBg} isHome={isHome} />
          <div className='flex items-center gap-4'>
            <Navigation navLinks={navitems} />
            <MobileMenu navLinks={navitems} />
          </div>
          <Link
            href='/'
            className='hidden items-center gap-2 font-semibold uppercase md:flex'
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
            +9989 555 0000
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar

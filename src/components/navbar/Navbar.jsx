'use client'
import React from 'react'
import { Navigation } from './Navigation'
import { usePathname } from 'next/navigation'
import MobileMenu from './mobileNavbar'
import { Logo } from '../Logo'
// import Link from 'next/link'

const navitems = [
  { id: 1, url: '/', label: 'Главная' },
  { id: 2, url: '/category', label: 'Каталог' },
  { id: 4, url: '/sertificates', label: 'Сертификаты' },
  { id: 3, url: '/contacts', label: 'Контакты' }
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
      } ${navBg && 'bg-white/95 text-gray-900'}  fixed top-0 z-30 h-[80px]
     w-full border-b border-[#2121213b] transition`}
    >
      <div className='container mx-auto w-full'>
        <div className='flex h-[80px] items-center justify-between'>
          <Logo navBg={navBg} isHome={isHome} />
          <div className='flex items-center gap-4'>
            <Navigation navLinks={navitems} />
            <MobileMenu navLinks={navitems} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar

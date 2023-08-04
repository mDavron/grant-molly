import Link from 'next/link'
import React from 'react'
import Logo from '../Logo'
const navitems = [
  { id: 1, url: '/', label: 'Главная' },
  // { id: 2, url: '/category', label: 'Каталог' },
  { id: 4, url: '/sertificates', label: 'Сертификаты' },
  { id: 3, url: '/contacts', label: 'Контакты' }
]
const Footer = () => {
  return (
    <footer className='w-full  border-t-[1.5px] border-gray-600/50 bg-gray-50 pt-10 font-semibold  text-gray-800'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-6 space-y-10 md:grid-cols-2 md:space-y-0 lg:grid-cols-3'>
          <ul className='space-y-4'>
            <li>
              <Logo />
            </li>
            <li>Наш Aдресс:</li>
            <li className='group flex items-center gap-2'>
              <svg
                className='transtion-all h-5 w-5 group-hover:scale-110'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                />
              </svg>
              Узбекистан,Наманган
            </li>
          </ul>
          <ul className='space-y-4'>
            <li className='text-xl'>Наши контакты </li>
            <li className='group flex items-center gap-2'>
              <svg
                className='h-5 w-5 transition-all group-hover:scale-110'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                />
              </svg>
              <Link href={'tel:+998939153336'} target='_blank'>
                +99893 915 33 36
              </Link>
            </li>
            <li className='group flex items-center gap-2'>
              <svg
                className='h-5 w-5 transition-all group-hover:scale-110'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='14'
                viewBox='0 0 16 14'
                fill='none'
              >
                <path
                  d='M16 0.496194L13.4695 13.4168C13.4695 13.4168 13.115 14.3131 12.1424 13.8834L8.51446 11.0667L8.54131 11.088L6.23174 13.2213C6.23174 13.2213 6.05092 13.3595 5.85319 13.2733L6.31994 9.24164C6.31994 9.24164 12.7971 3.34528 13.0625 3.09435C13.3279 2.84342 13.2389 2.78971 13.2389 2.78971C13.2567 2.48508 12.7614 2.78971 12.7614 2.78971L4.17871 8.31013L0.605226 7.09164C0.605226 7.09164 0.0565574 6.89442 0.0031157 6.46388C-0.0512167 6.03422 0.623039 5.8009 0.623039 5.8009L14.8314 0.15546C14.8314 0.15546 16 -0.364004 16 0.496194Z'
                  fill='#1b72ff'
                />
              </svg>
              <Link href={'mailto:'} target='_blank'>
                @Grant_molly
              </Link>
            </li>
            {/* <li className='group flex items-center gap-2'>
              <svg
                className='h-5 w-5 transition-all group-hover:scale-110'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                />
              </svg>
              <Link href={'mailto:'} target='_blank'>
                example@com
              </Link>
            </li> */}
          </ul>
          <ul className='space-y-4'>
            {navitems.map(link => {
              const { id, url, label } = link
              return (
                <li key={id}>
                  <Link
                    className='
                   text-base font-medium uppercase transition hover:text-[#ff0000]'
                    href={url}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className='mt-10 flex items-center justify-center  border-t-[1.5px] border-gray-600/50 py-5'>
        <p className='text-lg'>&copy;2023 Все права защищены.</p>
      </div>
    </footer>
  )
}

export default Footer

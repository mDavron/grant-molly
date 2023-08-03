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
                viewBox='0 0 240 240'
              >
                <path
                  fill='none'
                  stroke='#000'
                  strokeWidth={10}
                  d='M66.964 134.874s-32.08-10.062-51.344-16.002c-17.542-6.693-1.57-14.928 6.015-17.59 7.585-2.66 186.38-71.948 194.94-75.233 8.94-4.147 19.884-.35 14.767 18.656-4.416 20.407-30.166 142.874-33.827 158.812-3.66 15.937-18.447 6.844-18.447 6.844l-83.21-61.442z'
                />
                <path
                  fill='none'
                  stroke='#000'
                  strokeWidth={10}
                  d='M92.412 201.62s4.295.56 8.83-3.702c4.536-4.26 26.303-25.603 26.303-25.603'
                />
                <path
                  fillRule='evenodd'
                  stroke='#000'
                  strokeLinejoin='bevel'
                  strokeWidth={10}
                  d='m66.985 134.887 28.922 14.082-3.488 52.65s-4.928.843-6.25-3.613c-1.323-4.455-19.185-63.12-19.185-63.12z'
                />
                <path
                  fillRule='evenodd'
                  stroke='#000'
                  strokeLinejoin='bevel'
                  strokeWidth={9.67}
                  d='M66.985 134.887s127.637-77.45 120.09-71.138c-7.55 6.312-91.168 85.22-91.168 85.22z'
                />
              </svg>
              <Link href={'mailto:'} target='_blank'>
                @Grant_molly
              </Link>
            </li>
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
                  d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                />
              </svg>
              <Link href={'mailto:'} target='_blank'>
                example@com
              </Link>
            </li>
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

import ZoomImages from '@/src/components/ZoomImages'
import React from 'react'

export const images = [
  { url: '/images/sert1.png' },
  { url: '/images/sert1.png' },
  { url: '/images/sert1.png' },
  { url: '/images/sert1.png' }
]
const SertificatesPage = () => {
  return (
    <section className='pt-[150px]'>
      <div className='container mx-auto'>
        <h1 className='mb-5 text-center text-2xl font-bold uppercase text-gray-800 lg:mb-10 lg:text-4xl'>
          СЕРТИФИКАТЫ
        </h1>
        <ZoomImages images={images} />
      </div>
    </section>
  )
}

export default SertificatesPage

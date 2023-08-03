import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import products from '../../data/products.json'

const ProductCard = ({ product }) => {
  return (
    <div className='flex min-h-[450px] w-full flex-col justify-center overflow-hidden rounded-sm shadow-md'>
      <div className='relative h-[75%] w-full flex-1'>
        <Image
          src={product.image}
          alt={product.name}
          fill
          // priority
          className='absolute object-contain'
        />
      </div>
      <div className='mt-2 min-h-[25%] bg-white px-4'>
        <p className='mb-3 text-lg font-medium'>{product.name}</p>
        <Link
          href={'/'}
          className='flex w-max items-center gap-1 bg-red-500/90 px-5 py-2 text-lg uppercase text-gray-100 transition hover:bg-red-500'
        >
          Подробнее
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
              d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}
const Products = () => {
  return (
    <section className='py-[80px]'>
      <div className='container mx-auto'>
        <div className='grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {products.map(p => (
            <ProductCard product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

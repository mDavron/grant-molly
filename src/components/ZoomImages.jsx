'use client'
import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ZoomImages = ({ images }) => {
  return (
    <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
      {images.map((img, i) => {
        return (
          <div key={i}>
            <Zoom>
              <Image
                src={img.url}
                width={400}
                height={500}
                className='object-content border'
                alt='sertificate'
              />
            </Zoom>
          </div>
        )
      })}
    </div>
  )
}

export default ZoomImages

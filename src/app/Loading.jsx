// "use client"
import React from 'react'

const Loading = () => {
  return (
    <section className='flex h-full w-full items-center justify-center pt-[80px]'>
      <div class='lds-spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default Loading

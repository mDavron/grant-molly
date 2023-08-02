'use client'
import React from 'react'
import { Sling as Hamburger } from 'hamburger-react'

export const HamburgerButton = ({ isOpen, setOpen }) => {
  return (
    <div className='md:hidden'>
      <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
    </div>
  )
}

// 'use client'
import React from 'react'
import { HamburgerButton } from './HamburgerButton'
import { ModalBlur } from './ModalBlur'
import { ModalMenu } from './ModalMenu'

const MobileNavbar = ({ navLinks }) => {
  const [isOpen, setOpen] = React.useState(false)
  return (
    <div className='md:hidden'>
      <HamburgerButton isOpen={isOpen} setOpen={setOpen} />
      {isOpen && (
        <ModalBlur isOpen={isOpen} setOpen={setOpen} navLinks={navLinks} />
      )}
      <ModalMenu isOpen={isOpen} setOpen={setOpen} navLinks={navLinks} />
    </div>
  )
}

export default MobileNavbar

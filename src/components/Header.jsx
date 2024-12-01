import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='bg-primary py-3 md:px-28 px-2 text-accent font-poppins flex items-center md:gap-10 gap-3   w-full'>
      <p className='flex items-center md:gap-3 gap-2'><FaPhoneAlt className='text-secondary text-xl' /> 08068078495</p>
      <p className='flex items-center md:gap-3 gap-2'><FaEnvelope className='text-secondary text-xl' /> judeorifa28@gmail.com</p>
    </header>
  )
}

export default Header
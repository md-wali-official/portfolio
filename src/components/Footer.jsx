import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1200px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
      <div className='space-y-4'>
        <h3 className='md:text-2xl text-gray-200 font-semibold'>Md Wali</h3>
      </div>

      <p className='text-gray-400 text-sm'>@2024 Md Wali</p>
    </div>
  )
}

export default Footer
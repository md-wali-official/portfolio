import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  const closeMenu = () => {
    setNav(false);
  }
  return (
    <div className='text-gray-200 max-w-[1200px] mx-auto '>
      <div className='w-full flex items-center justify-between text-lg md:px-0 px-2  h-24'>
        <h1 className='md:text-3xl font-bold md:px-0'>Md Wali</h1>

        <ul className='hidden md:flex'>
          <li className='p-5 cursor-pointer'><Link smooth={true} offset={50} duration={500} to='portfolio'>Portfolio</Link></li>
          <li className='p-5 cursor-pointer'><Link smooth={true} offset={50} duration={500} to='about'>Experience</Link></li>
          <li className='p-5 cursor-pointer'><Link smooth={true} offset={50} duration={500} to='contact' className='px-4 py-2 rounded-xl bg-primary-color'>Contact</Link></li>
        </ul>

        <div onClick={handleNav} className='block md:hidden z-40'>
          {
            nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />
          }
        </div>

        <div className={nav ? 'z-40 text-gray-300 fixed left-0 top-0 h-full md:hidden w-[60%] border-r border-r-gray-900 bg-[#171717] ease-in-out duration-500' : "fixed left-[-100%]"}>

          <h1 className='text-3xl font-bold m-4'>Md Wali</h1>

          <ul className='md:p-8 md:text-2xl'>
            <li className='p-5'><Link smooth={true} offset={50} duration={500} onClick={closeMenu} to='portfolio'>Portfolio</Link></li>
            <li className='p-5'><Link smooth={true} offset={50} duration={500} onClick={closeMenu} to='about'>Experience</Link></li>
            <li className='p-4'><Link smooth={true} offset={50} duration={500} onClick={closeMenu} to='contact' className='px-4 py-2 rounded-xl bg-primary-color'>Contact</Link></li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Navbar
"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img from '../../../public/img.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='fixed top-0 left-0 w-full z-50 shadow-violet-900 text-white bg-gradient-to-l from-red-200 via-red-300 to-yellow-200 flex flex-col md:flex-row items-center justify-between p-4 md:px-8 pt-5  mt-0 '>
      {/* Logo */}
      
      <div className='flex items-center    justify-between w-full md:w-auto'>
        <Link href='/'>
          <p className='cursor-pointer  bg-cover'>
            <Image src={img} alt='logo' width={200} height={200} />
          </p>
        </Link>
        {/* Mobile Menu Icon */}

        <button onClick={toggleMenu} className='block md:hidden focus:outline-none'>
          <svg className='w-6 h-6 text-gray-700' viewBox='0 0 24 24' fill='currentColor'>
            {isOpen ? (
             <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            ) : (
             <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Side Navigation */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} w-full mt-4  bg-gradient-to-l from-red-200 via-red-300 to-yellow-200 text-white rounded-md transition-all duration-500 ease-in-out`}
      >
        <div className='flex flex-col   items-centre'>
          <Link href='/'>
            <p className='text-gray-700 hover:text-indigo-500 cursor-pointer block mb-2 p-2 transition-all duration-300'>
              Home
            </p>
          </Link>
          <Link href='/services'>
            <p className='text-gray-700 hover:text-indigo-500 cursor-pointer p-2 transition-all duration-300'>
              Services
            </p>
          </Link>
          <Link href='/blog'>
            <p className='text-gray-700 hover:text-indigo-500 cursor-pointer p-2 transition-all duration-300'>
             Pricing
            </p>
          </Link>
          <Link href='/contact'>
            <p className='text-gray-700 hover:text-indigo-500 cursor-pointer p-2 transition-all duration-300'>Join Us</p>
          </Link>
          <Link href='/get-started'>
            <p className='bg-lime-500 hover:bg-indigo-500 border-black hover:text-black text-white font-semibold px-4 py-2 rounded-md my-2 cursor-pointer transition-all duration-300'>
              Get Started
            </p>
          </Link>
          <Link href='/learn-more'>
            <p className='border border-blue-500 text-blue-500 hover:bg-indigo-500 hover:text-white font-semibold px-4 py-2 rounded-md my-2 cursor-pointer transition-all duration-300'>
              Learn More
            </p>
          </Link>
          {/* Include other menu items for mobile */}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden   text-white md:flex flex-col md:flex-row md:space-x-6 w-full md:w-auto'>
        <Link href='/'>
          <p className=' hover:text-indigo-500 cursor-pointer'>Home</p>
        </Link>
        <Link href='/services'>
          <p className=' hover:text-indigo-500 cursor-pointer'>Services</p>
        </Link>
        <Link href='/blog'>
          <p className=' hover:text-indigo-500 cursor-pointer'>Pricing</p>
        </Link>
        <Link href='/contact'>
          <p className=' hover:text-indigo-500 cursor-pointer'>Join Us</p>
        </Link>
      </div>

      {/* Action Buttons */}
      <div className=' text-white hidden md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 justify-center md:justify-end w-full md:w-auto'>
        <Link href='/get-started'>
          <p className='bg-lime-500 hover:bg-indigo-500 border-black hover:text-black text-white font-semibold px-4 py-2 rounded-md mb-2 md:mb-0 cursor-pointer'>
            Get Started
          </p>
        </Link>
        <Link href='/learn-more'>
          <p className='  bg-amber-400 border border-blue-500 text-blue-500 hover:bg-indigo-500 hover:text-white font-semibold px-4 py-2 rounded-md cursor-pointer'>
            Learn More
          </p>
        </Link>
      </div>
      
    </nav>
  );
}
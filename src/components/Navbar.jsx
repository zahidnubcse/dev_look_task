import React from 'react'

export default function Navbar() {
  return (
    <div className='p-4 flex items-center justify-between'>
      
      {/* Logo */}
      <h1 className='text-3xl font-semibold'>Rise at SeveN</h1>

      {/* Navigation */}
      <ul className='flex gap-6 font-semibold'>
        <li className='cursor-pointer hover:text-gray-500'>Services+</li>
        <li className='cursor-pointer hover:text-gray-500'>International+</li>
        <li className='cursor-pointer hover:text-gray-500'>About+</li>
        <li className='cursor-pointer hover:text-gray-500'>Work</li>
        <li className='cursor-pointer hover:text-gray-500'>Careers</li>
        <li className='cursor-pointer hover:text-gray-500'>Blog</li>
        <li className='cursor-pointer hover:text-gray-500'>Webinar</li>
      </ul>

      {/* Button */}
      <button className='bg-white px-4 py-2 rounded-full border hover:bg-gray-100 transition'>
        Get In Touch
      </button>

    </div>
  )
}
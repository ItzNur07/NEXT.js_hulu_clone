import { useRouter } from 'next/router';
import React from 'react';
import requests from '../utils/requests';

const Navbar = () => {
  const router = useRouter();

  return (
      <nav className='relative'>
        <div className="flex whitespace-nowrap px-10 sm:px-20 text-2xl space-x-10 cursor-pointer sm:space-x-20 overflow-x-scroll scrollbar-hide">
          {Object.entries(requests).map(([key, {title, url}]) => (
            <h2 onClick={() => router.push(`/?genre=${key}`)} 
            className="last:pr-24 transition duration-100 transform hover:scale-125  hover:text-white active:text-red-500" key={key}>{title}</h2>
          ))}
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
      </nav>
  )
}

export default Navbar

import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-[100%] text-9xl'>
        <div className=' w-[100%] sm:w-[90%] flex flex-col border-t-4 border-black mx-auto items-center'>
          <p className='text-base sm:text-xl md:text-2xl lg:text-3xl'>Ecommerce Website © 2024 All rights reserved.</p>

          <ul className="flex flex-row">
              <li className='px-1 sm:px-2 text-base sm:text-lg'>About</li>
              <li className='px-1 sm:px-2 text-base sm:text-lg'>Careers</li>
              <li className='px-1 sm:px-2 text-base sm:text-lg'>History</li>
              <li className='px-1 sm:px-2 text-base sm:text-lg'>Services</li>
              <li className='px-1 sm:px-2 text-base sm:text-lg'>Projects</li>
              <li className='px-1 sm:px-2 text-base sm:text-lg'>Blog</li>
          </ul>
          <div className='flex flex-row py-2 gap-x-2 sm:gap-x-3 md:gap-x-4 lg:gap-x-5'>
              {/* Facebook */}
              <a href="https://www.facebook.com/yugal.kumbhare.7" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='text-2xl sm:text-2xl md:text-3xl'/>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/yugal___6832/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='text-2xl sm:text-2xl md:text-3xl'/>
              </a>
              {/* Whatsapp */}
              <a href="https://wa.me/<9316110894>" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className='text-2xl sm:text-2xl md:text-3xl'/>
              </a>
              {/* Github */}
              <a href="https://github.com/Yugal2003" target="_blank" rel="noopener noreferrer">
                <FaGithub className='text-2xl sm:text-2xl md:text-3xl'/>
              </a>
          </div>          
      </div>
    </div>
  )
}

export default Footer
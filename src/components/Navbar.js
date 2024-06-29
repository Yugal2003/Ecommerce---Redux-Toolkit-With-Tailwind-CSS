import React from 'react'
import {MdOutlineShoppingCart} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const {carts} = useSelector((state) => state.allCart)
  return (
    <div className='w-[100%] bg-blue-950'>
        <div className='flex flex-row justify-between w-[90%] mx-auto min-h-20 items-center'>
            <Link to={'/'}><h1 className='text-2xl md:text-2xl lg:text-3xl text-white'>Product</h1></Link>
            <div className="flex">
                    <Link to={'/cartdetails'}><MdOutlineShoppingCart className="cursor-pointer text-white" size={38}/></Link>
                    <span className="px-1.5 font-bold h-[60%] items-center rounded-full text-black bg-white">{carts.length}</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar
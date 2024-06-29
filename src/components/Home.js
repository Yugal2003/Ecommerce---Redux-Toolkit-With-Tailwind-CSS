import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import CartData from './Cartdata';
import { add } from '../store/CartSlice';
import {toast} from 'react-hot-toast'
import Footer from './Footer'

const Home = () => {
    const dispatch = useDispatch();

    const [cartData,setCartData] = useState(CartData);
    console.log(setCartData);
    console.log(cartData);

    const addToCart = (e) =>{
        dispatch(add(e))
        toast.success("Item added In Your Cart")
    }

  return (
    <div>
        <div>
            <div className='text-center text-2xl font-bold'>
                <h1>Products</h1>
            </div>
            <div className='w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto'>
                {
                    cartData.map((cart,index) => {
                        return(
                            <div className='border-2 border-gray-400 outline-none rounded-lg shadow-lg shadow-gray-500 md:shadow-lg md:shadow-gray-400  mx-4 my-2' key={index}>
                                <img className='my-2 mx-auto w-[22%] sm:w-[20%] md:w-[25%] lg:w-[30%]' src={cart.image} alt=''/>
                                <p className='items-center mx-auto w-[80%] text-center rounded-md text-lg sm:text-base md:text-base lg:text-base'>{cart.title}</p>
                                <div className='my-1 flex flex-row w-[80%] border-2 rounded-md border-gray mx-auto text-center items-center justify-between text-lg sm:text-base md:text-base lg:text-base'>
                                    <p><span className='font-semibold'>Rating</span> :<span className='font-bold'>{cart.rating}</span></p>
                                    <p><span className='font-semibold'>Price</span> :<span className='font-bold'>₹{cart.price}</span></p>
                                </div>
                                <p className='items-center mx-auto w-[80%] text-center  rounded-md  text-md sm:text-base md:text-base lg:text-base'>{cart.description}</p>
                                <div className='flex justify-center items-center'>
                                    <button className='border hover:shadow-indigo-500/40 outline-none bg-blue-700 my-2 px-2 py-1 rounded-md text-white font-semibold text-md' onClick={() => addToCart(cart)}>Add To Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
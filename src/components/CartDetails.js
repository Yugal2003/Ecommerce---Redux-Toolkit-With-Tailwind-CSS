import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { add,remove,removeSingleItem,allItemEmpty} from '../store/CartSlice';
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import {toast} from 'react-hot-toast'
import Footer from "./Footer";

// const CartData = [ // use for only hardcoded
//   {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack",
//     price: 109.95,
//     description: "Your perfect pack for everyday use and walks in the forest.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: 3.9,
//   },
//   {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts ",
//     price: 22.3,
//     description: "Slim-fitting style, contrast raglan long sleeve",
//     category: "men's clothing",
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     rating: 4.1,
//   },
//   {
//     id: 3,
//     title: "Mens Cotton Jacket",
//     price: 55.99,
//     description:
//       "great outerwear jackets for Spring/Autumn/Winter,er outdoors.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     rating: 4.7,
//   },
//   {
//     id: 4,
//     title: "Mens Casual Slim Fit",
//     price: 15.99,
//     description:
//       "The color could be slightly different between on the screen.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//     rating: 2.1,
//   },
// ];

const CartDetails = () => {

  const [totalPrice,setTotalPrice] = useState(0);
  const [totalQnty,setTotalQnty] = useState(0);

  const dispatch = useDispatch();

  const {carts} = useSelector((state) => state.allCart)
  console.log(carts);

  const handleIncrement = (e) =>{
      dispatch(add(e))
      toast.success("Item Quantity Increment !")
  }

  const handleDecrement = (e) =>{
    dispatch(remove(e))
    toast.success("Item Remove SuccessFully !")
  }

  const handleSingleDecrement = (e)=>{
    dispatch(removeSingleItem(e))
    toast.success("Item Quantity Decrement !")
  }

  const emptyCart = () =>{
    dispatch(allItemEmpty())
    toast.success("Remove All Item SuccessFully !")
  }

  const total = () => {
    let totalPrice = 0;
    carts.forEach((ele) => {
      totalPrice += ele.qnty * ele.price;
    });
    setTotalPrice(totalPrice)
  }

  const countQnty = () => {
    let totalQnty = 0;
    carts.forEach((ele) => {
      totalQnty += ele.qnty;
    });
    setTotalQnty(totalQnty)
  }

  // total price
  useEffect(()=>{
    total();
  },[carts]);

  // total qnty
  useEffect(()=>{
    countQnty();
  },[carts]);

  return (
    <div>
      <div className="w-[80%] my-2 mx-auto flex flex-row items-center justify-between">
          <h1 className="my-0 sm:my-4 text-2xl sm:text-3xl font-semibold">Product List</h1>
          <button className="text-white font-semibold text-sm sm:text-md border-none outline-none rounded-lg bg-red-500 px-2 py-1 sm:px-4 sm:py-2" onClick={emptyCart}>Remove All</button>
      </div>
      <br />
      <div className="overflow-x-auto">
        <table className="w-full sm:w-[95%] md:w-[88%] mx-auto border-4 border-black">
          <thead className="border-4 border-black">
            <tr>
              <th className="text-sm sm:text-lg md:text-xl border-4 border-black w-[20%] sm:w-[15%] md:w-[15%]">Product</th>
              <th className="text-sm sm:text-lg md:text-xl border-4 border-black w-[40%] sm:w-[32%] md:w-[32%]">Name</th>
              <th className="text-sm sm:text-lg md:text-xl border-4 border-black w-[20%] sm:w-[12%] md:w-[12%]">Price</th>
              <th className="text-sm sm:text-lg md:text-xl border-4 border-black w-[10%] sm:w-[8%] md:w-[8%]">Qty</th>
              <th className="text-sm sm:text-lg md:text-xl border-4 border-black w-[20%] sm:w-[20%] md:w-[20%]">Amount</th>
            </tr>
          </thead>
          <tbody className="border-4 border-black">
            { carts.length >=1 ? carts.map((cart) => (
              <tr key={cart.id}>
                <td className="border-4 border-black">
                  <img className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto" src={cart.image} alt={cart.title} />
                </td>
                <td className="border-4 border-black">
                  <p className="text-center text-sm sm:text-lg font-semibold">{cart.title}</p>
                </td>
                <td className="border-4 border-black">
                  <p className="text-center text-sm sm:text-lg font-semibold">₹ {cart.price}</p>
                </td>
                <td className="border-4 border-black">
                  <div className="flex justify-center items-center gap-1 sm:gap-8">
                    <button className="border-2 border-gray-400 px-2.5 rounded-lg text-sm sm:text-lg font-bold bg-red-600 outline-none" onClick={cart.qnty <= 1 ? () => handleDecrement(cart.id) : () => handleSingleDecrement(cart)}>-</button>
                    <p className="text-sm sm:text-xl font-bold">{cart.qnty}</p>
                    <button className="border-2 border-gray-400 px-2 rounded-lg text-sm sm:text-lg font-bold bg-green-600 outline-none" onClick={() => handleIncrement(cart)}>+</button>
                  </div>
                </td>
                <td className="border-4 border-black">
                  <p className="text-center text-sm sm:text-lg font-semibold">Total Amount: <span className="text-red-600 font-bold">{cart.price * cart.qnty}</span></p>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="5" className="border-4 border-black">
                  <div className="flex flex-col justify-center items-center h-52">
                    <MdOutlineLocalGroceryStore className="text-gray-300" size={50} />
                    <p className="text-gray-400 text-xl">Your Cart is Empty!</p>
                  </div>
                </td>
              </tr>
            )}

          </tbody>
          <br />
          <tfoot>
            <tr className="text-end text-sm sm:text-lg border-4 border-black">
              <th>Cart Items: <span className="text-red-600 text-sm sm:text-xl">{totalQnty}</span></th>
              <th colSpan="4">Total Price: <span className="text-red-600 text-sm sm:text-xl ml-8">{totalPrice}</span></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <p className="my-12"></p>
      <Footer/>
    </div>
  );
};

export default CartDetails;

//import React from 'react'
//import { DeleteIcon, Store } from "lucide-react"
import {X} from "lucide-react"
//import Counter from "./counter";
import Button from "./button";
//import { useContext } from "react";
//import { ItemContext } from "../context/context";
import { useAppSelector } from "../redux/hooks";
//import {store} from "../redux/Store"
//import Products from "../data/product";
import CartProduct from "./CartProducts";
//import AddToCart from "./addToCart";

type CartAddedProps ={
    onClose?: ()=>void;
    onClick?: (event:React.MouseEvent<HTMLButtonElement,MouseEvent>) =>void;
    setOpenCart?: React.Dispatch<React.SetStateAction<boolean>>
    // item: Item;
}

const CartAdded :React.FC<CartAddedProps>=({setOpenCart}) => {
    const products = useAppSelector((state) =>state.CartAdded)
    const getTotal= () =>{
      let Total = 0;
      products.forEach((item)=>{ Total += Math.ceil(item.price ) * item.quantity})
      return Total
    };

  //   const cartContext = useContext(ItemContext);

  //  if (!cartContext) {
  //       throw new Error("CartAdded must be used within an ItemProvider");
  //  }

  // const { item, setItem } = cartContext;

  //   // Clear the entire cart
  // const clearCart = () => setItem([]);

  //   const removeItem = (id: number) => {
  //   setItem(prev => prev.filter(i => i.id !== id));
  // };

  return (
    <div className="w-50vh min-h-screen overflow-y-scroll absolute top-0 right-0 bg-white shadow-2xl p-3 z-20 ">

        <div className='flex justify-end m-3 gap-4  mb-8'>
            {/* <div className='flex justify-start gap-1'>
                <DeleteIcon/>
            </div> */}
            <div className="absolute right top m-6 text-2xl cursor-pointer ">
                 <X onClick={()=>setOpenCart && setOpenCart(false)}/>
            </div>
        </div>

        
        <h3 className=" pt-5 text-lg font-medium text-center text-gray-500 uppercase">Your Cart</h3>
        {/* <div>
            {item.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        item.map(i => (
          <div  className="flex items-center gap-4 border-b py-4">
            <img src={i.image} alt={i.text} className="w-16 h-16 object-cover rounded" />
            <div className="flex-1">
              <h4 className="font-semibold">{i.text}</h4>
              <p className="text-sm text-gray-500">₦{i.price}</p>
            </div>
            <Counter />
            <div onClick={() => removeItem(i.id)} className="cursor-pointer text-red-500">
              <DeleteIcon />
            </div>
          </div>
        ))
      )}
        </div> */}
        {/* <div>
            <DeleteIcon/>
            <p>Remove</p>
                <p onClick={clearCart} className="text-black text-xl cursor-pointer"> Clear Cart</p>

        </div> */}
        <div>
          {
          products ?.map((item: any) => (
            <CartProduct
              id={item.id}
              image={item.image}
              text= {item.text}
              price={item.price}
              quantity={item.quantity}

            />
          ))
        }
        </div>

        <div className="flex justify-between p-3">
          <p>
            Total
          </p>
          <p>
           <p>₦{getTotal().toLocaleString()}</p>
          </p>
        </div>
        <div className=" flex justify-center gap-5">
            <Button>View Cart</Button>
            <Button>Proceed to checkout</Button>

        </div>
    </div>
  )
}

export default CartAdded
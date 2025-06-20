import React from 'react'
import { X } from 'lucide-react'

import { useAppDispatch } from '../redux/hooks'
import { removeProducts } from '../redux/slice/cartSlice'

interface itemsProps  {
    id: number;
    text: string;
    image: string;
    price: number;
    quantity: number;
}

const  CartProduct: React.FC<itemsProps> =({id,image,text,price,quantity}) =>{
    const dispatch = useAppDispatch()
    const newPrice = Math.ceil(price)
    return(
        <div className='flex justify-between items-center p-3'>
            <div className='flex items-center gap-4'>
                <img src={image} alt="" className='h-[80px]'/>
                <div className='space-y-2'>
                    <h2 className='font-medium'>
                        {text}
                    </h2>
                    <p className='text-gray-500 text-sm'>
                        {quantity}*{newPrice}
                    </p>
                </div>
            </div>
            <X onClick={()=> dispatch(removeProducts(id))} className='cursor-pointer' size={16}/>


        </div>

    )
}
export default CartProduct
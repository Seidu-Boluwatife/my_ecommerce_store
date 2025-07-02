import { DeleteIcon, X } from 'lucide-react'
import Counter from "../../src/component/counter"
//import { useState } from 'react';
import { useContext } from 'react';
import { ItemContext } from '../context/context';

type AddToCartProps ={
    onClose: ()=>void;
    product: Item;
}

interface Item {
    id: number;
    text: string;
    price: number;
    image: string;
}


const AddToCart :React.FC<AddToCartProps>= ({product, onClose}) => {

        const itemContext = useContext(ItemContext)
    
        if (!itemContext) {
            throw new Error("ItemContext must be used within an ItemProvider");
        }
    
        const {item, setItem} = itemContext
    
        const addToCart = (newItem: {
            id: number;
            text: string;
            image: string;
            price: number;
        }) => {
            // Check if the item already exists
            const exists = item.some((i) => i.id === newItem.id);
    
            if (!exists) {
            setItem((prevItems) => [...prevItems, newItem]);
            } else {
            // Optionally: update quantity or show message
            console.log("Item already in cart.");
            }
        };

    // const[showCart,setShowCart]=useState<boolean>(false)
    // const[selected,setSelected]=useState<boolean>(false)

  return (
    <div className='w-[60%] h-60vh border-1 bg-white absolute  p-10 shadow-2xl '>
        <div className='flex justify-end m-3 gap-4  mb-8'>
            <div className='flex justify-start gap-1'>
                <DeleteIcon/>
                <p> Clear Cart</p>
            </div>
            <div>
                 <X onClick={onClose}/>

            </div>
        </div>
       
        <div className='grid grid-cols-2'>
            <img src={product.image} alt=""className='w-54 h-54' />

            <div>

            <p className='text-3xl'> {product.text}</p>

                <button className='bg-black text-white cursor-pointer' onClick={() => addToCart(product)}>Add To Cart</button>
            
                <select name="Select colors" id="" className=''>
                    <option value="" disabled selected > Select Colors</option>
                    <option value="blue">blue</option>
                    <option value="black">black</option>
                    <option value="white">white</option>
                    <option value="Purple">Purple</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                    <option value="brown">brown</option>
                    <option value="Red">Red</option>
                    <option value="gray">gray</option>
                </select>
              
                    <Counter/>

       
            </div>
        </div>

        
    </div>
  )
}

export default AddToCart
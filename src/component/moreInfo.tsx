import { useState } from 'react';
import aiStar from '../assets/aiStar.svg';
import Button from './button';
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/slice/cartSlice";

import toast from "react-hot-toast";
interface Product {
  id: number;
  text: string;
  image: string;
  price: number;
  quantity?: number;
}

interface MoreInfoProps {
  product: Product;
  onClose: () => void;
}
type Item = {
    id: number;
    text: string;
    image: string;
    price: number;
    quantity?: number;
}

const items: Item[]= [
        { 
            id:1, 
            image: "/image/image10.jpg",
            text: 'Sleeve3-Striped Shirts ',
            price: 12000
        },
             { 
            id:2, 
            image: "/image/image9.jpg",
            text: 'T-shirt with Tape Details',
            price: 24000
        },
             { 
            id:3, 
            image: "/image/image8.jpg",
            text: 'Checkered Shirt',
            price: 37000
        },
             {  
            id:4, 
            image: "/image/image7.jpg",
            text: 'Skinny Fit Jeans',
            price: 18000
        },
             { 
            id:5, 
            image: "/image/image6.jpg",
            text: 'Vertical Striped Shirt',
            price: 28000
        },
         { 
            id:6, 
            image: "/image/image5.jpg",
            text: 'Cool Jean',
            price: 3000
        },
         { 
            id:7, 
            image: "/image/image4.jpg",
            text: 'Courage Graphic T-short',
            price: 23000
        },
         { 
            id:8, 
            image: "/image/image3.jpg",
            text: 'Polo with Contrast Trims',
            price: 14000
        },
         { 
            id:9, 
            image: "/image/Frame1.jpg",
            text: 'Gradient Graphic T-shirt',
            price: 3700
        },
         { 
            id:10, 
            image: "/image/image2.jpg",
            text: 'Polo with Tipping Details',
            price: 27000
        },

         { 
            id:11, 
            image: "/image/Frame11.jpg",
            text: 'Cool Polo',
            price: 17000
        },

         { 
            id:12, 
            image: "/image/Frame12.jpg",
            text: 'Cool Stripes',
            price: 47000
        },

        //  { 
        //     id:13, 
        //     image: "/image/imgLin1.jpeg",
        //     text: 'Lacey Thong',
        //     price: 3700
        // },

        //  { 
        //     id:14, 
        //     image: "/image/imgLin1.jpeg",
        //     text: 'Lacey Thong',
        //     price: 3700
        // },

        //  { 
        //     id:15, 
        //     image: "/image/imgLin1.jpeg",
        //     text: 'Lacey Thong',
        //     price: 3700
        // },

        //  { 
        //     id:16, 
        //     image: "/image/imgLin1.jpeg",
        //     text: 'Lacey Thong',
        //     price: 3700
        // },

        //  { 
        //     id:17, 
        //     image: "/image/imgLin1.jpeg",
        //     text: 'Lacey Thong',
        //     price: 3700
        // },

        //  { 
        //     id:18, 
        //     image: "/image/imgLin1.jpeg",
        //     text: 'Lacey Thong',
        //     price: 3700
        // },

        //  { 
        //     id:19, 
        //     image: "/image/imgLin1.jpeg",
        //     text: 'Lacey Thong',
        //     price: 3700
        // },

        //  { 
        //     id:20, 
        //     image: "/image/imgLin1.jpeg",
        //     text: 'Lacey Thong',
        //     price: 3700
        // },   
]
const MoreInfo = ({ product, onClose }: MoreInfoProps) => {
     const dispatch = useAppDispatch();

     const addProductToCart = (item: Item) => {
        const payload = { ...item, quantity: 1 };
        dispatch(addToCart(payload));
        toast.success("Added to cart");
      };
  const [count, setCount] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const basePrice = product.price;
  const totalPrice = basePrice * count;

  const incrementCount = () => {
    setCount(prev => prev + 1);
  };

  const decrementCount = () => {
    setCount(prev => (prev > 1 ? prev - 1 : 1));
  };

  const colors = [
    { name: 'amber', className: 'bg-amber-950' },
    { name: 'black', className: 'bg-black' },
    { name: 'blue', className: 'bg-blue-600' },
  ];

  const sizes = [
    { name: 'Small' },
    { name: 'Medium' },
    { name: 'Large' },
    { name: 'X-Large' },
  ];

  return (
  <div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-50 flex items-center justify-center">
    <div className="p-6 sm:p-10 bg-white rounded-md w-[90%] md:w-[70%] max-h-[90vh] overflow-y-auto relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        Close
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src={product.image} alt={product.text} className="h-full w-full object-contain rounded" />
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-bold">{product.text}</p>
          <img src={aiStar} alt="rating" />
          <p className="text-black text-3xl mb-2">₦{totalPrice}</p>
          <p>
            This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>

          <div>
            <p>Select Colors</p>
            <div className="flex gap-3">
              {colors.map((color) => (
                <div
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-5 h-5 rounded-full cursor-pointer ${color.className} ${
                    selectedColor === color.name ? 'ring-2 ring-offset-2 ring-black' : ''
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <div>
            <p>Choose Size</p>
            <div className="flex gap-3 mb-4">
              {sizes.map((size) => (
                <button
                  key={size.name}
                  onClick={() => setSelectedSize(size.name)}
                  className={`w-20 h-8 p-1 rounded-full ${
                    selectedSize === size.name ? 'bg-black text-white' : 'bg-gray-400'
                  }`}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="flex justify-between bg-gray-400 text-black w-24 h-8 p-1 rounded-full">
              <button onClick={decrementCount}>-</button>
              <p>{count}</p>
              <button onClick={incrementCount}>+</button>
            </div>

            <Button className="rounded-full bg-black" onClick={() => addProductToCart(product)}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

};

export default MoreInfo

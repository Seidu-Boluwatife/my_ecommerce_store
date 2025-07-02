import { useState } from "react";
import Button from "../component/button"
import MoreInfo from '../component/moreInfo'
// import { addToCart } from "../redux/slice/cartSlice";
// import { useAppDispatch } from "../redux/hooks";
// import toast from "react-hot-toast";
import aiStar from "../assets/aiStar.svg"

//array of objects
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

const Products = () => {
//   const dispatch = useAppDispatch();
  const [selectedProduct, setSelectedProduct] = useState<Item | null>(null);

//   const addProductToCart = (item: Item) => {
//     const payload = { ...item, quantity: 1 };
//     dispatch(addToCart(payload));
//     toast.success("Added to cart");
//   };

  return (
    <div>
      <div className="p-16 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative bg-white hover:border-blue-300 p-2 rounded-md mb-5"
          >
            <img src={item.image} alt="" className="w-full rounded-sm h-[200px]" />
            <p>{item.text}</p>
            <p className="font-bold">₦{item.price}</p>
            <img src={aiStar} alt="" />

            <div className="flex gap-2 mt-2">
              {/* <Button className="bg-black" onClick={() => addProductToCart(item)}>
                Add to Cart
              </Button> */}
              <Button className="bg-black" onClick={() => setSelectedProduct(item)}>
                More Info
              </Button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <MoreInfo
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Products;


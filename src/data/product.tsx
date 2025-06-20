//import { useState, useEffect } from "react";
import Button from "../component/button"
// import AddToCart from "../component/addToCart";
// import { useContext } from "react";
// import { ItemContext } from "../context/context";
import { addToCart } from "../redux/slice/cartSlice";
import { useAppDispatch } from "../redux/hooks";
import toast from "react-hot-toast";


//array of objects
type itemsProps = {
    id: number;
    text: string;
    image: string;
    price: number;
    quantity?: number;
}[]

// interface propType{
//      id: number;
//     text: string;
//     image: string;
//     price: string;
    


// }


const items: itemsProps= [
        { 
            id:1, 
            image: "/src/assets/image/coverPhoto.jpg",
            text: 'v-wavy Seamless ',
            price: 3700
        },
             { 
            id:2, 
            image: "src/assets/image/imgSleep2.jpeg",
            text: 'victoria seduction',
            price: 3700
        },
             { 
            id:3, 
            image: "src/assets/image/imgSleep2.jpeg",
            text: 'Diana Rose',
            price: 3700
        },
             { 
            id:4, 
            image: "/src/assets/image/coverPhoto.jpg",
            text: 'Silk-sleep',
            price: 3700
        },
             { 
            id:5, 
            image: "src/assets/image/imgLin1.jpeg",
            text: 'Lacey Thong',
            price: 3700
        },
         { 
            id:6, 
            image: "src/assets/image/imgLin1.jpeg",
            text: 'Lacey Thong',
            price: 3700
        },
         { 
            id:7, 
            image: "src/assets/image/imgLin1.jpeg",
            text: 'Lacey Thong',
            price: 3700
        },
         { 
            id:8, 
            image: "src/assets/image/imgLin1.jpeg",
            text: 'Lacey Thong',
            price: 3700
        },
         { 
            id:9, 
            image: "src/assets/image/imgLin1.jpeg",
            text: 'Lacey Thong',
            price: 3700
        },
         { 
            id:10, 
            image: "src/assets/image/imgLin1.jpeg",
            text: 'Lacey Thong',
            price: 3700
        },

         { 
            id:11, 
            image: "src/assets/image/imgLin1.jpeg",
            text: 'Lacey Thong',
            price: 3700
        },

         { 
            id:12, 
            image: "src/assets/image/imgLin1.jpeg",
            text: 'Lacey Thong',
            price: 3700
        },

         { 
            id:13, 
            image: "src/assets/image/imgLin1.jpeg",
            text: 'Lacey Thong',
            price: 3700
        },

         { 
            id:14, 
            image: "src/assets/image/imgLin1.jpeg",
            text: 'Lacey Thong',
            price: 3700
        },

         { 
            id:15, 
            image: "src/assets/image/imgLin1.jpeg",
            text: 'Lacey Thong',
            price: 3700
        },

         { 
            id:16, 
            image: "src/assets/image/imgLin1.jpeg",
            text: 'Lacey Thong',
            price: 3700
        },

         { 
            id:17, 
            image: "src/assets/image/imgLin1.jpeg",
            text: 'Lacey Thong',
            price: 3700
        },

         { 
            id:18, 
            image: "src/assets/image/imgLin1.jpeg",
            text: 'Lacey Thong',
            price: 3700
        },

         { 
            id:19, 
            image: "src/assets/image/imgLin1.jpeg",
            text: 'Lacey Thong',
            price: 3700
        },

         { 
            id:20, 
            image: "src/assets/image/imgLin1.jpeg",
            text: 'Lacey Thong',
            price: 3700
        },

        
    ]

const Products= ()=>{
    const dispatch = useAppDispatch();

    // State to control modal visibility and selected product
    // const [showCart, setShowCart] = useState<boolean>(false);
    // const [selectedProduct, setSelectedProduct] = useState<itemsProps[number] | null>(null);

    // const handleCartVisibility = (item: itemsProps[number]) => {
    //     setSelectedProduct(item);
    //     setShowCart(true);
    // };

    // const handleCloseCart = () => {
    //     setShowCart(false);
    //     setSelectedProduct(null);
    // };

    // useEffect(() => {
    //     console.log("Updated showCart:", showCart, selectedProduct);
    // }, [showCart, selectedProduct]);

   const addProductToCart = (item: itemsProps[number]) => {
    const payload = {
      ...item,
      quantity: 1,
    };
    dispatch(addToCart(payload))
    toast.success("Added to cart");
  };

    return(
        <div>
            <div className="grid gap-5 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                xl:grid-cols-5 ">
                {items.map((item) => (
                    <div key={item.id} className="border-4 relative bg-white border-gray-500 hover:border-blue-300 p-2 rounded-md mb-5">
                        <img src={item.image} alt="" className="w-full rounded-sm h-[200px]"/>
                        <p>{item.text}</p>
                        <p className="font-bold">{item.price}</p>
                        <Button onClick={() => addProductToCart(item)}>Select Option</Button>
                        
                    </div>
                ))}
            </div>
            {/* Modal rendered once, outside the map
            {showCart && selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300 ">
                    <AddToCart product={selectedProduct} onClose={handleCloseCart}/>
                </div>
            )} */}
        </div>
    )
    
}
export default Products

// function dispatch(arg0: { payload: Products; type: "cart/addToCart"; }) {
//     throw new Error("Function not implemented.");
// }

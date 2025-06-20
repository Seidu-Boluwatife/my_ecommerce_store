//import { SearchCheckIcon } from "lucide-react"

import { SearchIcon, ShoppingCartIcon } from "lucide-react"
//import { useSelector } from "react-redux"
import { useAppSelector } from "../redux/hooks"

//import Button from "./Button"
const NavBar =({setOpenCart}:any) =>{
    const count = useAppSelector((store) => store.CartAdded.length)

    return(
        <header className="flex flex-row border-gray-700/50 pl-16 pr-16  pt-2 pb-2 justify-between text-white  items-center-100  sticky-top-0  w-full fixed  top-0  z-50 bg-gray-900 ">
                <div className="text-amber-500 text-2xl ">
                    She's Essentials
                </div>
            <div className="flex justify-between gap-10 pl-4 pr-4  rounded-full p-1  text-xs">
                {/* <div className="hover:text-blue-500 underline-offset-1 cursor-pointer">Home</div>
                <div className="hover:text-blue-500 underline-offset-1 cursor-pointer">NGN</div>
               
                <div className="hover:text-blue-500 underline-offset-1 cursor-pointer">Cart</div> */}
                {/* <Moon className="hover:text-blue-500 underline-offset-1 cursor-pointer"/> */}

            </div>
            <div className="flex items-center justify-between border-2 rounded-md w-[50%] pl-3 pr-3">
                <input type="text" placeholder="search" className="  pl-2 w-full outline-none" />
                {<SearchIcon className="   hover cursor-pointer outline-none" size={16}/>}

            </div>
            <div onClick ={() =>setOpenCart(true)} className="flex gap-4 relative ">
             <div className="hover:text-blue-500 underline-offset-1 cursor-pointer">Login</div>

             {<ShoppingCartIcon />}
             <div className="absolute rounded-full bg-green-800 w-5 h-5 -top-3 -right-2 text-white flex items-center justify-center">
                    {count}
             </div>

            </div>


            
            
        </header>
     )
}
export default NavBar
//import { SearchCheckIcon } from "lucide-react"

import { SearchIcon, ShoppingCartIcon } from "lucide-react"
//import { useSelector } from "react-redux"
import { useAppSelector } from "../redux/hooks"
import Header from "./header"
import {Link } from 'react-router-dom'
import { Menu,X } from "lucide-react"
import { useState } from "react"

//import Button from "./Button"
const NavBar =({}:any) =>{
    const [isMenuOpen,setIsMenuOpen] = useState(false)

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    const count = useAppSelector((store) => store.CartAdded.length)

    return(
        <div className="flex flex-col mb-24 fixed top-0 left-0 right-0  z-50">
            <div>
                  <Header/>
            </div>
           <div className="flex  pl-6 pr-6 pt-1 pb-1 shadow-2xl  bg-white  ">
                <div className="text-black text-2xl font-bold  ">
                    SHOP.CO
                </div>
                  {/* <div className=" md:hidden flex items-center justify-between border-2 rounded-md p-2 ml-4
                  flex-1 min-w-0
                  w-full sm:w-3/4">
    <input
      type="text"
      placeholder="Search"
      className="flex-1 pl-2 outline-none"
    />
    <SearchIcon className="cursor-pointer ml-2" size={16} />
  </div> */}
                <section className="hidden md:flex flex-row  pl-16 pr-16  pt-2 pb-2 justify-between text-black items-center-100   w-full    ">
                
                    <div className=" space-x-3">
                        <Link to='/'>
                            Home
                        </Link>
                        <Link to ='/shop'>
                            Shop
                        </Link>
                    </div>
            
                    <div className="flex items-center justify-between border-2 rounded-md w-[50%] pl-3 pr-3">
                        <input type="text" placeholder="search" className="  pl-2 w-full outline-none" />
                        {<SearchIcon className="   hover cursor-pointer outline-none" size={16}/>}

                    </div>
                    <div  className="flex gap-4 relative ">
                        <div className="hover:text-blue-500 underline-offset-1 cursor-pointer">Login</div>

                    <Link to='/cart'>
                            <ShoppingCartIcon />
                    </Link>
                        <div className="absolute text-xs rounded-full bg-black w-3.5 h-3.5 font-bold -top-1 -right-4 text-white flex items-center justify-center">
                                {count}
                        </div>

                    </div>

                    
                
                
                </section>
                <div className="md:hidden  absolute right-0 top-10 pr-6" onClick={toggleMenu}>
                    {isMenuOpen ?<X/>: <Menu />}

                </div>

                
                {isMenuOpen &&( 
                    <section className=" flex   md:hidden  absolute top-16 pl-16 pr-16  pt-2 pb-2 justify-between text-black bg-white  items-center-100   -ml-7 w-full -mr-7 ">
                

                    
                        <div className=" space-x-3">
                            <Link to='/'>
                                Home
                            </Link>
                            <Link to ='/shop'>
                                Shop
                            </Link>
                        </div>
                
                       
                        <div  className="flex gap-4 relative ">
                            <div className="hover:text-blue-500 underline-offset-1 cursor-pointer">Login</div>

                        <Link to='/cart'>
                                <ShoppingCartIcon />
                        </Link>
                            <div className="absolute text-xs rounded-full bg-black w-3.5 h-3.5 font-bold -top-1 -right-4 text-white flex items-center justify-center">
                                    {count}
                            </div>

                        </div>

                    
                

                    
                    
                        
                
                    </section>

                )}
            </div>

        </div>
        
    )
}
export default NavBar
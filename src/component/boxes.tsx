//import { div } from "framer-motion/client";
import React from "react";
import type { ReactNode } from "react";
import type { ReactElement } from "react";

import Products from "../data/product";


interface BoxesProps{
    //icon?:React.ReactElement;
    label?:string;
    className?:string;
    onClick?:(event: React.MouseEvent<HTMLButtonElement>)=>void
    children?:ReactNode;
    image?:ReactElement;

};
// {image,label,className,children}

const Boxes:React.FC<BoxesProps> = ()=>{
    return(

        <div className=" ">
            
            {/* <div className="flex flex-col  p-2 gap-4 "> */}
                {/* <div className="absolute top-2 ">
                    {image}
                </div> */}

                {/* <span className="text-xl text-black  pt-6 ">{label}</span>
            </div>
            
            {className}
            {children} */}
            {/* <Products/> */}
            

        </div>
    )
}
export default Boxes
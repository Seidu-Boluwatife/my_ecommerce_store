import {clsx} from "clsx"
import React from "react"
import type { ButtonProps } from "./button.types"

export const Button: React.FC<ButtonProps> = ({children,icon,className, onClick }) => {
    const baseStyle = "w-36 h-10 rounded-md flex items-center gap-2 justify-center boder-2 border-black"
    const defaultStyle ="text-white bg-[#602414] cursor-pointer ,"
  return (
    <button
    className={clsx(baseStyle,defaultStyle,className)} 
    onClick={onClick}
    >

        {children}
        {icon && React.isValidElement(icon)&& (
            <span>
                {React.cloneElement(icon)}
            </span>

        )}

    </button>
  )
}
export default Button
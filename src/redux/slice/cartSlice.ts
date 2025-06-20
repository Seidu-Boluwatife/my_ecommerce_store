import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Products from "../../data/product";

interface Products{
    id:number,
    text:string,
    image:string,
    price:number,
    quantity:number,

}
const initialState: Array<Products> =[]

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action: PayloadAction<Products>)=>{
            if(state.findIndex((products) => products.id === action.payload.id) === -1)
            {
                state.push(action.payload)
            }
            else{
                return state.map((item)=>{
                    return item.id === action.payload.id ? {...item,
                        quantity:item.quantity + 1} : item
                    
                })
            }
        }  ,

        removeProducts:(state, action: PayloadAction<number>)=>{
            const id = action.payload
            
            return state.filter((item)=>item.id !== id)
            
        }
    }
})
export const {addToCart,removeProducts} = cartSlice.actions
export default cartSlice.reducer
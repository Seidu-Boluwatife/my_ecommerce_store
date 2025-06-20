import { configureStore } from "@reduxjs/toolkit"

import counterReducer from '../component/CounterSlice'
import { cartSlice } from "./slice/cartSlice";
export const store = configureStore({
    reducer:{
        counter:counterReducer,
        CartAdded:cartSlice.reducer   // adding reducer to store
    }

});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
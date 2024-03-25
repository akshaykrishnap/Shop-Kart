import { configureStore } from "@reduxjs/toolkit";
import WishlistSlice from "../Slices/WishlistSlice";
import cartSlice from "../Slices/cartSlice";



const store = configureStore({
    reducer:{
        wishlistReducer:WishlistSlice,  
        cartReducer:cartSlice
    }
})


export default store

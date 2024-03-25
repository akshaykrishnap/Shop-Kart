import { createSlice } from "@reduxjs/toolkit";



const wishlistSlice = createSlice({
    name:'wishlistSlice',
    initialState:[],
    reducers:{
        //actions
        //1) function to add item to wishlist
        addToWishList:(state,action)=>{
            state.push(action.payload)
        },

        //2) function to remove item from wishlist
        removeFromWishlist:(state,action)=>{
         return   state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishList,removeFromWishlist} = wishlistSlice.actions

export default wishlistSlice.reducer
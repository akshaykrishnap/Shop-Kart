import { createSlice } from "@reduxjs/toolkit"


const cartSlice =createSlice({
    name:'cartSlice',
    initialState:[],
    reducers:{
        //actions
        //1 function to add to items to cart
        addtoCart:(state,action)=>{
            state.push(action.payload)
        },

        //2) function to remove items from cart
        removeFromCart:(state,action)=>{
         return   state.filter(item=>item.id!=action.payload)
        },

        //3) functio to empty the cart array
        emptyCart:(state)=>{
            state=[]
        }

    }
})

export const {addtoCart,removeFromCart,emptyCart}=cartSlice.actions

export default cartSlice.reducer
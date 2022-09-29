import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItem : (state, action) => {
            state.cartItems.push(action.payload)
        },
        removeCartItem : (state, action) => {
            state.cartItems.pop(action.payload)  
        },
        incrementCartItem : (state, action) => {
            const product = state.cartItems.find((itm) => itm.id === action.payload)
            product.quantity += 1;
            product.totalPrice = product.quantity * product.price
        },

        decrementCartItem : (state, action) => {
            const product = state.cartItems.find((itm) => itm.id === action.payload)
            if(product.quantity > 1)
            {
            product.quantity -= 1;
            product.totalPrice = product.quantity * product.price
            }
        }

    },
})


export const { setCartItem, removeCartItem, incrementCartItem, decrementCartItem } = cartSlice.actions
export default cartSlice.reducer
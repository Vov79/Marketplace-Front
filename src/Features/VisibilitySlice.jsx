import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: "",
    authorization: "",
}

export const visibilitySlice = createSlice({
    name: 'visibility',
    initialState,
    reducers: {
        setCart : (state, action) => {
            state.cart= action.payload;
        },
        setAuthorization : (state, action) => {
            state.authorization= action.payload;
        },

    },
})


export const { setCart, setAuthorization } = visibilitySlice.actions
export default visibilitySlice.reducer
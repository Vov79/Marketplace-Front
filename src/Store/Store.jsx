import { configureStore } from "@reduxjs/toolkit"
import  cartSlice  from "../Features/Cart/CartSlice"
import phonesSlice from "../Features/PhonesSlice"
import visibilitySlice from "../Features/VisibilitySlice"
export const store = configureStore({
    reducer: {
        cart: cartSlice,
        visibility: visibilitySlice,
        phones: phonesSlice,
    },
})
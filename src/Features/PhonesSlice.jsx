import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    phones: [],
}

export const getPhones = createAsyncThunk(
    'phones/getPhones', 
     async (_, { rejectWithValue, dispatch}) => {
     const result = await axios.get('https://localhost:7286/api/Phone')
     dispatch(setPhones(result.data))
    },
)

export const phoneSlice = createSlice({
    name: 'phones',
    initialState,
    reducers: {
        setPhones: (state, action) => {
            state.phones = action.payload
        },
    },
    extraReducers: {
        [getPhones.fulfilled]: () => console.log('fullfiled'),
        [getPhones.pending]: () => console.log('pending'),
        [getPhones.rejected]: () => console.log('rejected'),
    }
})


export const { setPhones } = phoneSlice.actions
export default phoneSlice.reducer
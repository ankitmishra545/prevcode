import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add(state, action){
           state.push(action.payload)
        },
        remove(state, action){
            const itemIndex = state.findIndex((value) => value.id === action.payload);
            state.splice(itemIndex,1)
        },
        clear(state, action){
            return []
        },
    }
})

// automatically reducer and actions are created by createSlice method
export const {add, remove, clear} = cartSlice.actions;

export default cartSlice.reducer;
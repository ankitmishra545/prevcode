import { createSlice } from "@reduxjs/toolkit";


const adminSlice = createSlice({
    name: "admin",
    initialState: [],
    reducers: {
        addAdmin(state, action) {
            state.push(action.payload);
        }
    }
})

export default adminSlice.reducer

export const { addAdmin } = adminSlice.actions
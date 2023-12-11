import { createSlice, current } from "@reduxjs/toolkit";
import { addAdmin } from "./AdminSlice";


const usersSlice = createSlice({
    name: "user",
    initialState: {
        usersArray: [],
        count: 0
    },
    reducers: {
        addUser(state, action) {
            console.log("state",current(state))
            state.usersArray.push(action.payload)
            state.count++
        },
        removeUser(state, action) {
            state.usersArray.splice(action.payload,1)
            state.count--
        },
        deleteUser(){
            return {
                usersArray: [],
                count : 0
            };
        }
    },    
    // extraReducers: {
    //     ['admin/addAdmin']: (state, action) => {
    //         state.usersArray.push(action.payload)
    //         state.count++;
    //     }
    // }
    extraReducers: (builder) => {
        builder
        .addCase(addAdmin, (state, action) => {
            state.usersArray.push(action.payload)
            state.count++;
        })
    }
})

export  default usersSlice.reducer

export const {addUser, removeUser, deleteUser} = usersSlice.actions
import { configureStore } from "@reduxjs/toolkit";
import usersSlice  from "./UserSlice";
import adminSlice from "./AdminSlice";


const store = configureStore({
    reducer: {
        users: usersSlice,
        admins: adminSlice
    },
});

export default store;


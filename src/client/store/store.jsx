import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "../AppSlice";
import UserReducer from "../pages/customer/userSlice";


const store = configureStore({
    reducer: {
        app: AppReducer,
        user: UserReducer
    }
})

export default store;
import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "../AppSlice";
import UserReducer from "../pages/customer/userSlice";
import ProductsReducer from "../pages/products/productsSlice";
import CustomerReducer from "../pages/customer/customerSlice";


const store = configureStore({
    reducer: {
        app: AppReducer,
        user: UserReducer,
        product:ProductsReducer,
        customer:CustomerReducer
    }
})

export default store;
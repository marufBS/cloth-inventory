import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "../AppSlice";
import UserReducer from "../components/customers/userSlice";
import CustomerReducer from "../components/customers/customerSlice";
import ProductReducer from "../components/products/productsSlice";
import OrderReducer from "../components/orders/orderSlice"
import sidebarReducer from "../components/sidebar/sidebarSlice";


const store = configureStore({
    reducer: {
        app: AppReducer,
        user: UserReducer,
        product:ProductReducer,
        customer:CustomerReducer,
        order:OrderReducer,
        sidebar:sidebarReducer
    }
})

export default store;
import React from 'react'
import Properties from '../components/properties/properties'
import { Routes, Route, } from 'react-router-dom';
import Sidebar from '../components/sidebar/sidebar';
import Appbar from '../components/appbar/appbar';
import Products from '../components/products/products';
import Orders from '../components/orders/orders';
import Customers from '../components/customers/customers';
import { useSelector } from 'react-redux';

const Layout = () => {

    const isSidebarMinify = useSelector((state) => state.sidebar.minify)
    const productActionType = useSelector((state) => state.product.productActionType)
    const customerActionType = useSelector((state) => state.customer.customerActionType)
    const orderActionType = useSelector((state) => state.order.orderActionType)
    console.log(orderActionType)
    return (
        <div className="flex flex-col h-full">
            <Appbar />
            <div className="flex flex-row flex-1 h-0 ">
                <div className={`${isSidebarMinify ? 'w-[50px]' : 'w-[200px]'} transform transition-all duration-200 ease-out overflow-auto border-r-1 border-r-default-200`}>
                    <Sidebar />
                </div>
                <div className="flex-1 overflow-auto p-4">
                    <Routes>
                        <Route path="/" element={<Products />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/customers" element={<Customers />} />
                        <Route path="/orders" element={<Orders />} />
                    </Routes>
                </div>
                {
                    (productActionType || customerActionType || orderActionType) &&

                    <div className="w-2/12 overflow-auto border-l-1 border-l-default-200 transform transition-all duration-200 ease-out">
                        <Properties />
                    </div>
                }
            </div>
        </div>
    )
}

export default Layout
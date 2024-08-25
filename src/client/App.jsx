// import { Button } from "@nextui-org/react";
// import Appbar from "./components/appbar/appbar";
// import { Routes, Route, } from 'react-router-dom';
// import Products from "./components/products/products";
// import Inventory from "./components/orders/orders";
// import Customer from "./pages/customer/customer";
import { useDispatch, useSelector } from "react-redux";
// import SignUp from "./pages/signup/signup";
// import SignIn from "./pages/signin/signin";
// import CreateOrder from "./components/orders/createOrder";
// import SidebarExpand from "./components/sidebars/sidebar";
// import CustomerProperties from "./components/properties/customerProperties";
// import ProductProperties from "./components/properties/productProperties";
// import OrderProperties from "./components/properties/orderProperties";
// import { setMainWidth } from "./AppSlice";
import React, { useEffect, useRef } from "react";
// import Properties from "./components/properties/properties";
import Layout from "./layout/layout";
function App() {
  const mainRef = useRef(null)
  // const dispatch = useDispatch()
  // const mainWidth = useSelector((state) => state.app.mainWidth)
  const darkTheme = useSelector((state) => state.app.darkTheme)
  // const productActionType = useSelector((state) => state.product.productActionType)
  // const customerActionType = useSelector((state) => state.customer.customerActionType)
  // const inventoryActionType = useSelector((state) => state.inventory.inventoryActionType)
  // useEffect(() => {
  //   dispatch(setMainWidth(mainRef.current?.offsetWidth))
  // }, [mainRef.current?.offsetWidth])
  // console.log(mainWidth)

  return (
    <>
      <main ref={mainRef} className={`${darkTheme ? 'dark' : 'light'} bg-background text-foreground flex flex-col h-screen overflow-hidden`}>
        <Layout/>
      </main>

    </>
  );
}

export default App;
// import { Button } from "@nextui-org/react";
import Appbar from "./components/appbar/appbar";
import { Routes, Route, } from 'react-router-dom';
import Products from "./pages/products/products";
import Inventory from "./pages/inventory/inventory";
import Customer from "./pages/customer/customer";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setMainHeight } from "./AppSlice";
import SignUp from "./pages/signup/signup";
import SignIn from "./pages/signin/signin";
function App() {
  const mainRef = useRef(null)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setMainHeight(mainRef.current.offsetHeight))
  }, [])

  return (
    <main ref={mainRef} className={'dark text-foreground bg-background h-dvh'}>

      <Appbar />
      <div >
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </div>

    </main>
  );
}

export default App;

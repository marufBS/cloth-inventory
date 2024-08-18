// import { Button } from "@nextui-org/react";
import Appbar from "./components/appbar/appbar";
import { Routes, Route, } from 'react-router-dom';
import Products from "./pages/products/products";
import Inventory from "./pages/inventory/inventory";
import Customer from "./pages/customer/customer";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMainHeight } from "./AppSlice";
import SignUp from "./pages/signup/signup";
import SignIn from "./pages/signin/signin";
function App() {
  const mainRef = useRef(null)
  const dispatch = useDispatch()
  const mainHeight = useSelector((state) => state.app.mainHeight)
  useEffect(() => {
    dispatch(setMainHeight(mainRef.current.offsetHeight))
  }, [])
  console.log(mainHeight)

  return (
    <main ref={mainRef} className={'flex dark text-foreground bg-background h-dvh'}>
      <div className="flex-1">
        <Appbar />
        <div style={{height:mainHeight-65}} className="overflow-auto">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/inventory" element={<Inventory />} />
            {/* <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} /> */}
          </Routes>
        </div>
      </div>

    </main>
  );
}

export default App;

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
import CreateOrder from "./pages/inventory/createOrder";
import ViewOrder from "./pages/inventory/viewOrder";
import { Accordion, AccordionItem, Divider, Listbox, ListboxItem } from "@nextui-org/react";
import SidebarExpand from "./components/sidebars/sidebarExpand";
function App() {
  const mainRef = useRef(null)
  const dispatch = useDispatch()
  const mainHeight = useSelector((state) => state.app.mainHeight)
  const darkTheme = useSelector((state) => state.app.darkTheme)
  useEffect(() => {
    dispatch(setMainHeight(mainRef.current.offsetHeight))
  }, [])
  console.log(mainHeight)

  return (
    <main ref={mainRef} className={`flex ${darkTheme?'dark':'light'} text-foreground bg-background h-dvh`}>
      <div className="flex-1 flex flex-row">

        <SidebarExpand />
        <div className="flex flex-col w-full">
          <Appbar />
          <div style={{ height: mainHeight - 65 }} className="overflow-auto">
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customer />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/inventory/viewOrder/:id" element={<ViewOrder />} />
              <Route path="/inventory/createOrder" element={<CreateOrder />} />
              {/* <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} /> */}
            </Routes>
          </div>
        </div>
      </div>

    </main>
  );
}

export default App;


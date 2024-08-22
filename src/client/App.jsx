// import { Button } from "@nextui-org/react";
import Appbar from "./components/appbar/appbar";
import { Routes, Route, } from 'react-router-dom';
import Products from "./pages/products/products";
import Inventory from "./pages/inventory/inventory";
import Customer from "./pages/customer/customer";
import { useDispatch, useSelector } from "react-redux";
import SignUp from "./pages/signup/signup";
import SignIn from "./pages/signin/signin";
import CreateOrder from "./pages/inventory/createOrder";
import SidebarExpand from "./components/sidebars/sidebarExpand";
import CustomerAddEdit from "./components/customerAddEdit";
import ProductAddEdit from "./components/productAddEdit";
import OrderAddEdit from "./components/orderAddEdit";
function App() {
  // const mainRef = useRef(null)
  // const dispatch = useDispatch()
  // const mainHeight = useSelector((state) => state.app.mainHeight)
  const darkTheme = useSelector((state) => state.app.darkTheme)
  const productActionType = useSelector((state) => state.product.productActionType)
  const customerActionType = useSelector((state)=>state.customer.customerActionType)
  const inventoryActionType = useSelector((state)=>state.inventory.inventoryActionType)
  // useEffect(() => {
  //   dispatch(setMainHeight(mainRef.current.offsetHeight))
  // }, [])
  // console.log(mainHeight)

  return (
    <>
      {/* <main ref={mainRef} className={`flex ${darkTheme ? 'dark' : 'light'} text-foreground bg-background mrf h-screen overflow-hidden`}>
    </main> */}
      <main className={`${darkTheme ? 'dark' : 'light'} bg-background text-foreground flex flex-col h-screen overflow-hidden`}>
        <Appbar />
        <div className="flex flex-row flex-1 h-0">
          <SidebarExpand />
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customer />} />
              <Route path="/inventory" element={<Inventory />} />
              {/* <Route path="/inventory/viewOrder/:id" element={<ViewOrder />} /> */}
              <Route path="/inventory/createOrder" element={<CreateOrder />} />
              {/* <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} /> */}
            </Routes>
          </div>
          {
            productActionType &&
            <ProductAddEdit/>
          }
          {
            customerActionType&&
            <CustomerAddEdit/>
          }
          {
            inventoryActionType&&
            <OrderAddEdit/>
          }
        </div>
      </main>
      
    </>
  );
}

export default App;

// import React, { useState } from 'react';
// import { Button,Spacer } from '@nextui-org/react';
// import { FaHome, FaUser, FaCog } from 'react-icons/fa'; // Import icons from react-icons

// const Sidebar = () => {
//   const [isMinified, setIsMinified] = useState(false);

//   const toggleSidebar = () => {
//     setIsMinified(!isMinified);
//   };

//   return (
//     <div style={{ display: 'flex' }} className='bg-background text-foreground'>
//       <div
//         style={{
//           width: isMinified ? '60px' : '200px',
//           transition: 'width 0.3s',
//           backgroundColor: '#1F1F1F',
//           height: '100vh',
//           padding: '10px',
//         }}
//       >
//         <Button auto onClick={toggleSidebar} style={{ marginBottom: '20px' }}>
//           {isMinified ? '>' : '<'}
//         </Button>
//         <Spacer y={1} />
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//           <FaHome size={24} style={{ marginRight: isMinified ? '0' : '10px' }} />
//           {!isMinified && <p color="white">Home</p>}
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//           <FaUser size={24} style={{ marginRight: isMinified ? '0' : '10px' }} />
//           {!isMinified && <p color="white">Profile</p>}
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//           <FaCog size={24} style={{ marginRight: isMinified ? '0' : '10px' }} />
//           {!isMinified && <p color="white">Settings</p>}
//         </div>
//       </div>
//       <div style={{ flex: 1, padding: '20px' }}>
//         {/* <Text h2>Main Content Area</Text> */}
//         sdfdsfsdf
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

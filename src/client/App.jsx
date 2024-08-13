import { Button } from "@nextui-org/react";
import Appbar from "./components/appbar/appbar";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Products from "./pages/products/products";
import Inventory from "./pages/inventory/inventory";
import Customer from "./pages/customer/customer";
function App() {

  return (
    <main className={'dark text-foreground bg-background h-dvh'}>

      <Appbar />
      <div>
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/customer" element={<Customer/>} />
        </Routes>
      </div>

    </main>
  );
}

export default App;

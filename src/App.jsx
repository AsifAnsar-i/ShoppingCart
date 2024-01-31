import React, { useState } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { CartContext } from "./context/GlobalContext";
const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <div className="">
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
};

export default App;

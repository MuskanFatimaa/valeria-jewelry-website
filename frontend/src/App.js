import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages

import Home from "./pages/Home";
import ShopAll from "./pages/ShopAll";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";


//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<ShopAll />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
    <Footer />
    </Router>

  );
}


export default App;

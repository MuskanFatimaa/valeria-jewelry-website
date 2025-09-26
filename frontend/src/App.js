// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import ShopAll from "./pages/ShopAll";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopAll />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopAll />} />      {/* optional alias */}
          <Route path="/shopall" element={<ShopAll />} />   {/* the explicit ShopAll page */}
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

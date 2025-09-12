import React from "react";
import "./ProductsSection.css";

// Import images
import product1 from "../assets/prod1.jpg";
import product2 from "../assets/prod2.jpg";
import product3 from "../assets/prod3.jpg";
import product4 from "../assets/prod4.jpg";
import product5 from "../assets/prod5.jpg";
import product6 from "../assets/prod6.jpg";
import product7 from "../assets/prod7.jpg";
import product8 from "../assets/prod8.jpg";
import product9 from "../assets/prod9.jpg";
import product10 from "../assets/prod10.jpg";

function ProductsSection() {
  return (
    <div className="products-section">
      {/* Header */}
      <div className="products-header">
        <h2 className="products-heading">our most beloved</h2>
        <p className="products-description">a collection of adored and adorned classics—delicate, enduring, and designed to remain as radiant as your story.</p>
      </div>

      {/* Grid */}
      <div className="products-grid">
        <div className="product-card">
          <img src={product1} alt="Product 1" className="product-image" />
        </div>
        <div className="product-card">
          <img src={product2} alt="Product 2" className="product-image" />
        </div>
        <div className="product-card">
          <img src={product3} alt="Product 3" className="product-image" />
        </div>
        <div className="product-card">
          <img src={product4} alt="Product 4" className="product-image" />
        </div>
        <div className="product-card">
          <img src={product5} alt="Product 5" className="product-image" />
        </div>
        <div className="product-card">
          <img src={product6} alt="Product 6" className="product-image" />
        </div>
        <div className="product-card">
          <img src={product7} alt="Product 7" className="product-image" />
        </div>
        <div className="product-card">
          <img src={product8} alt="Product 8" className="product-image" />
        </div>
        <div className="product-card">
          <img src={product9} alt="Product 9" className="product-image" />
        </div>
        <div className="product-card">
          <img src={product10} alt="Product 10" className="product-image" />
        </div>

      </div>

      {/* Footer */}
      <div className="products-footer">
        <a href="/shop" className="shop-all-link">shop all</a>
      </div>
    </div>
  );
}

export default ProductsSection;

// src/pages/ShopAll.js
import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products.js";
import { useCart } from "../contexts/CartContext";
import "../styles/products.css"; // make sure this imports your products-section css

const ShopAll = () => {
  const cart = useCart();
  const { items = [], addToCart, updateQuantity } = cart || {};

  const handleAdd = (product) => {
    const existing = (items || []).find((it) => it.id === product.id);
    if (typeof addToCart === "function") {
      addToCart(product, 1);
      return;
    }
    if (typeof updateQuantity === "function") {
      // fallback: increase quantity (works if your context expects (id, qty))
      updateQuantity(product.id, existing ? existing.quantity + 1 : 1);
      return;
    }
    console.warn("Cart API: addToCart/updateQuantity not available.");
  };

  return (
    <section className="products-section">
      <div className="products-header">
        <h2 className="products-heading">shop all</h2>
        <p className="products-description">a curated collection — timeless pieces.</p>
      </div>

      <div className="products-grid">
        {products.map((p) => (
          <article key={p.id} className="product-card">
            <Link to={`/product/${p.id}`} aria-label={`View ${p.title}`}>
              <img src={p.image} alt={p.title} className="product-image" />
            </Link>

            {/* quick footer within card */}
            <div style={{
              position: "absolute",
              bottom: 12,
              left: 12,
              right: 12,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "8px"
            }}>
              <div>
                <div style={{ fontFamily: "Libre Caslon Display", fontSize: "1rem", color: "#4b0e0e" }}>{p.title}</div>
                <div style={{ fontSize: "0.95rem", color: "#59301E" }}>PKR {p.price.toFixed(0)}</div>
              </div>

              <button
                onClick={() => handleAdd(p)}
                className="add-to-cart-btn"
                aria-label={`Add ${p.title} to cart`}
                style={{
                  background: "#F8CE9F",
                  border: "none",
                  padding: "0.5rem 0.9rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontFamily: "Libre Caslon Display"
                }}
              >
                add
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="products-footer">
        <Link to="/" className="shop-all-link">Back to home</Link>
      </div>
    </section>
  );
};

export default ShopAll;

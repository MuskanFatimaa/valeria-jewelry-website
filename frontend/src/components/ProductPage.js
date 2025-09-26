// src/pages/ProductPage.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../contexts/CartContext";
import "../styles/products.css"; // reuse styles; create small overrides if needed

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const { items = [], addToCart, updateQuantity } = useCart() || {};

  if (!product) {
    return (
      <section className="products-section">
        <div style={{ padding: "4rem 2rem" }}>
          <h2>Product not found</h2>
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
      </section>
    );
  }

  const handleAdd = () => {
    const existing = (items || []).find((it) => it.id === product.id);
    if (typeof addToCart === "function") {
      addToCart(product, 1);
    } else if (typeof updateQuantity === "function") {
      updateQuantity(product.id, existing ? existing.quantity + 1 : 1);
    } else {
      console.warn("Cart API missing");
    }
  };

  return (
    <section className="products-section" style={{ padding: "3rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: "2rem", alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <img src={product.image} alt={product.title} style={{ width: "100%", objectFit: "cover", borderRadius: 8 }} />
        </div>

        <div style={{ width: 420 }}>
          <h1 style={{ fontFamily: "Lavishly Yours", fontSize: "3rem", margin: 0 }}>{product.title}</h1>
          <p style={{ color: "#59301E", fontSize: "1.25rem", marginTop: "0.5rem" }}>PKR {product.price.toFixed(0)}</p>

          <p style={{ marginTop: "1rem", lineHeight: 1.6 }}>{product.description}</p>

          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
            <button
              onClick={handleAdd}
              style={{
                background: "#F8CE9F",
                border: "none",
                padding: "0.9rem 1.3rem",
                borderRadius: 8,
                cursor: "pointer",
                fontFamily: "Libre Caslon Display",
              }}
            >
              Add to cart
            </button>

            <button
              onClick={() => navigate("/cart")}
              style={{
                background: "transparent",
                border: "1px solid #E8C793",
                padding: "0.9rem 1.3rem",
                borderRadius: 8,
                cursor: "pointer",
                color: "#FDEADB",
                fontFamily: "Libre Caslon Display",
              }}
            >
              View cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;

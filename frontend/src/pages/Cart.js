// src/pages/Cart.js
import React from "react";
import { useCart } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import { Link, useNavigate } from "react-router-dom";
import "../styles/cart.css";

const Cart = () => {
  const { items, subtotal } = useCart();
  const navigate = useNavigate();

  // Avoid negative subtotal edge cases
  const safeSubtotal = Math.max(subtotal, 0);
  const shipping = items.length > 0 ? 500 : 0; // flat rate
  const total = safeSubtotal + shipping;

  return (
    <section className="cart-page">
      <div className="cart-container">
        {/* Cart Items List */}
        <div className="cart-list">
          <h2 className="cart-title">Your Cart</h2>

          {items.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty.</p>
              <Link to="/shopall" className="btn-link">
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="cart-items">
              {items.map((it) => (
                <CartItem key={it.id} item={it} />
              ))}
            </div>
          )}
        </div>

        {/* Order Summary */}
        <aside className="cart-summary">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>PKR {safeSubtotal.toFixed(0)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>PKR {shipping.toFixed(0)}</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>PKR {total.toFixed(0)}</span>
          </div>

          <button
            className="checkout-btn"
            disabled={items.length === 0}
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </aside>
      </div>
    </section>
  );
};

export default Cart;

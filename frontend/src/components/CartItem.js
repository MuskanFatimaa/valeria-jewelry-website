// src/components/CartItem.js
import React from "react";
import "../styles/cart.css"; // shared cart styles
import { FaTrash } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  // Prevent accidental 0 or negative values
  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="cart-item">
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.title}
        className="ci-image"
        loading="lazy"
      />

      {/* Product Info */}
      <div className="ci-body">
        <h4 className="ci-title">{item.title}</h4>
        <p className="ci-price">PKR {Number(item.price).toFixed(0)}</p>

        {/* Quantity Controls */}
        <div className="ci-controls">
          <button
            className="qty-btn"
            aria-label="decrease quantity"
            onClick={handleDecrease}
            disabled={item.quantity <= 1}
          >
            −
          </button>

          <span className="qty">{item.quantity}</span>

          <button
            className="qty-btn"
            aria-label="increase quantity"
            onClick={handleIncrease}
          >
            +
          </button>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
            title="Remove item"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

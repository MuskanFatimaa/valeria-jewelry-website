// src/pages/Checkout.js
import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "Pakistan",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const shipping = items.length > 0 ? 500 : 0;
  const total = subtotal + shipping;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (items.length === 0) {
      setMessage("Your cart is empty.");
      return;
    }
    if (!form.name || !form.email || !form.address) {
      setMessage("Please fill your name, email and address.");
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          customer: form,
          total,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        throw new Error(err || "Checkout failed");
      }

      const data = await res.json();
      clearCart();
      setMessage(
        "Order placed successfully! Order ID: " + (data.orderId || "—")
      );
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      console.error(err);
      setMessage("Error placing order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="checkout-page">
      <div className="checkout-container">
        {/* Left: form */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2 className="checkout-title">Shipping & Contact</h2>

          <label>
            Full name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              required
            />
          </label>

          <label>
            Phone
            <input name="phone" value={form.phone} onChange={handleChange} />
          </label>

          <label>
            Address
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            City
            <input name="city" value={form.city} onChange={handleChange} />
          </label>

          <label>
            Country
            <input name="country" value={form.country} onChange={handleChange} />
          </label>

          <button type="submit" className="checkout-btn" disabled={loading}>
            {loading
              ? "Placing order…"
              : `Place Order — PKR ${total.toFixed(0)}`}
          </button>

          {message && <p className="checkout-message">{message}</p>}
        </form>

        {/* Right: order summary */}
        <aside className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-items">
            {items.map((it) => (
              <div key={it.id} className="order-item">
                <span>
                  {it.title} × {it.quantity}
                </span>
                <span>PKR {(it.price * it.quantity).toFixed(0)}</span>
              </div>
            ))}
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>PKR {subtotal.toFixed(0)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>PKR {shipping.toFixed(0)}</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>PKR {total.toFixed(0)}</span>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Checkout;

// src/contexts/CartContext.js
import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState = { items: [] };

function cartReducer(state, action) {
  switch (action.type) {
    case "INITIALIZE":
      return action.payload || initialState;
    case "ADD_ITEM": {
      const item = action.payload;
      const exists = state.items.find((i) => i.id === item.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + (item.quantity || 1) } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...item, quantity: item.quantity || 1 }] };
    }
    case "UPDATE_QTY":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id ? { ...i, quantity: action.payload.quantity } : i
        ),
      };
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
    case "CLEAR_CART":
      return { items: [] };
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // initialize from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("valeria_cart");
      if (raw) dispatch({ type: "INITIALIZE", payload: JSON.parse(raw) });
    } catch (e) {
      // ignore
    }
  }, []);

  // persist
  useEffect(() => {
    localStorage.setItem("valeria_cart", JSON.stringify(state));
  }, [state]);

  // actions
  const addToCart = (product, quantity = 1) =>
    dispatch({ type: "ADD_ITEM", payload: { ...product, quantity } });

  const updateQuantity = (id, quantity) =>
    dispatch({ type: "UPDATE_QTY", payload: { id, quantity } });

  const removeFromCart = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const subtotal = state.items.reduce((s, i) => s + Number(i.price) * Number(i.quantity), 0);

  return (
    <CartContext.Provider
      value={{ items: state.items, addToCart, updateQuantity, removeFromCart, clearCart, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

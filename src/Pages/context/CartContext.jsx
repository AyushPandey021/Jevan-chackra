import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const CartProvider = ({ children }) => {
  // persist cart to localStorage so page refresh doesn't lose items
  const [cartItems, setCartItems] = useState(() => {
    try {
      const raw = localStorage.getItem("cart_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart_v1", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, qty = 1) => {
    setCartItems(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + qty } : p);
      }
      // store only required fields (image/title/price)
      const item = {
        id: product.id,
        title: product.title || product.name,
        image: (product.images && product.images[0]) || product.image || "https://images.unsplash.com/photo-1732492211688-b1984227af93?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: product.price || product.price,
        quantity: qty
      };
      return [...prev, item];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(p => p.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(prev => prev.map(p => p.id === id ? { ...p, quantity } : p));
  };

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce((s, it) => s + it.price * it.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

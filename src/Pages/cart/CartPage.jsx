import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">🛒 Your Cart</h1>

      <div className="space-y-6">
        {cartItems.map(item => (
          <div key={item.id} className="flex flex-col sm:flex-row gap-6 bg-white shadow-md p-4 rounded-xl">
            <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded-lg" />
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
              <p className="text-gray-600">Price: ₹{item.price}</p>

              <div className="mt-2 flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-3 py-1 border rounded">-</button>
                <div className="px-3">{item.quantity}</div>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 border rounded">+</button>
              </div>

              <p className="text-gray-800 font-medium mt-2">Total: ₹{item.price * item.quantity}</p>
            </div>

            <div className="flex items-center justify-end">
              <button onClick={() => removeFromCart(item.id)} className="px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200">Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
        <p className="text-lg text-gray-700">Total Items: <span className="font-bold">{totalItems}</span></p>
        <p className="text-lg text-gray-700 mb-4">Grand Total: <span className="font-bold text-green-600">₹{total}</span></p>

        <div className="flex gap-3 mt-4">
          <button onClick={() => navigate("/checkout")} className="flex-1 py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700">Proceed to Checkout</button>
          <button onClick={() => navigate("/")} className="flex-1 py-3 bg-gray-500 text-white font-bold rounded hover:bg-gray-600">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
}

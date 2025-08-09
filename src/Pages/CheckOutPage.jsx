import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { cartItems, total, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // in real app call API — here we simulate success
    clearCart();
    navigate("/order-confirmation");
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      <div className="bg-white p-4 rounded shadow">
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between py-2 border-b">
            <div>
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
            </div>
            <div className="font-semibold">₹{item.price * item.quantity}</div>
          </div>
        ))}

        <div className="mt-4 flex justify-between font-bold text-lg">
          <div>Grand Total</div>
          <div>₹{total}</div>
        </div>

        <div className="mt-6">
          {/* Minimal form — expand as needed */}
          <button onClick={handlePlaceOrder} className="w-full py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

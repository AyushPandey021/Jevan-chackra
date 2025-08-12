// src/Pages/CartPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Pages/context/CartContext";
import { FaTrashAlt } from "react-icons/fa";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const [coupon, setCoupon] = useState("");

  // Totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = coupon === "SALE20" ? subtotal * 0.2 : 0;
  const deliveryFee = subtotal > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-50 p-6">
        <h2 className="text-3xl font-bold text-gray-700">Your cart is empty</h2>
        <p className="text-gray-500 mt-2">Start shopping to fill your cart.</p>
        <Link
          to="/productsList"
          className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 mt-20 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <button
              onClick={() => cart.forEach((item) => removeFromCart(item.id))}
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Delete All
            </button>
          </div>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 rounded-lg object-cover border"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm">
                    ₹{item.price} each
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Quantity selector */}
                <div className="flex items-center border rounded-full px-3 py-1">
                  <button className="px-2">−</button>
                  <span className="px-2">{item.quantity}</span>
                  <button className="px-2">+</button>
                </div>
                {/* Remove button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow p-6 h-fit">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>

          {/* Coupon Code */}
          <div className="flex mb-4">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Coupon Code"
              className="flex-1 border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none"
            />
            <button
              className="bg-black text-white px-4 py-2 rounded-r-full hover:bg-gray-800 transition"
            >
              Apply
            </button>
          </div>

          {/* Price Details */}
          <div className="flex justify-between py-2 text-gray-700">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between py-2 text-red-500">
            <span>Discount</span>
            <span>-₹{discount}</span>
          </div>
          <div className="flex justify-between py-2 text-gray-700">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee}</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          {/* Checkout Button */}
          <Link
            to="/checkout"
            className="block mt-6 bg-black text-white text-center py-3 rounded-full hover:bg-gray-800 transition"
          >
            Go to Checkout →
          </Link>
        </div>
      </div>
    </div>
  );
}

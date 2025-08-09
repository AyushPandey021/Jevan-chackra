import React from "react";
import { Link } from "react-router-dom";

export default function OrderConfirmation() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Order Confirmed 🎉</h1>
      <p className="mb-6">Thank you! Your order has been placed successfully. We will email you the details shortly.</p>
      <Link to="/" className="inline-block bg-black text-white px-6 py-3 rounded">Continue Shopping</Link>
    </div>
  );
}

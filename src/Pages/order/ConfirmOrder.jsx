// src/Pages/ConfirmOrder.jsx
import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ConfirmOrder() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 text-center animate-fadeIn">
        {/* Success Icon */}
        <div className="flex justify-center">
          <CheckCircleIcon className="w-20 h-20 text-green-500 animate-bounce" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mt-4">
          Order Placed Successfully 🎉
        </h1>
        <p className="mt-2 text-gray-600">
          Thank you for your purchase! Your order is being processed and will be delivered soon.
        </p>

        {/* Order Summary Card */}
        <div className="mt-6 border rounded-xl p-4 bg-gray-50 text-left">
          <h2 className="font-semibold text-gray-700 text-lg mb-3">Order Summary</h2>
          <div className="flex justify-between text-gray-600 text-sm mb-2">
            <span>Order ID:</span>
            <span>#ORD-{Math.floor(Math.random() * 1000000)}</span>
          </div>
          <div className="flex justify-between text-gray-600 text-sm mb-2">
            <span>Estimated Delivery:</span>
            <span>3-5 Business Days</span>
          </div>
          <div className="flex justify-between text-gray-600 text-sm mb-2">
            <span>Payment Status:</span>
            <span className="text-green-600 font-semibold">Paid</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Back to Home
          </Link>
          <Link
            to="/orders"
            className="border border-gray-300 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            View My Orders
          </Link>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
}

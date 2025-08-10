// src/Pages/OrdersPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon, ClockIcon, XCircleIcon } from "@heroicons/react/24/solid";

export default function OrdersPage() {
  // Example data (replace with API data later)
  const orders = [
    {
      id: "ORD123456",
      date: "2025-08-05",
      status: "Delivered",
      items: [
        { title: "Wireless Headphones", image: "/images/headphones.jpg", price: 1999, quantity: 1 },
        { title: "Smart Watch", image: "/images/watch.jpg", price: 2999, quantity: 1 },
      ],
      total: 4998,
    },
    {
      id: "ORD789012",
      date: "2025-08-02",
      status: "Pending",
      items: [
        { title: "Laptop Bag", image: "/images/bag.jpg", price: 1499, quantity: 1 },
      ],
      total: 1499,
    },
    {
      id: "ORD345678",
      date: "2025-07-28",
      status: "Cancelled",
      items: [
        { title: "Bluetooth Speaker", image: "/images/speaker.jpg", price: 999, quantity: 1 },
      ],
      total: 999,
    },
  ];

  // Status Badge Styles
  const getStatusBadge = (status) => {
    switch (status) {
      case "Delivered":
        return (
          <span className="flex items-center gap-1 bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
            <CheckCircleIcon className="w-4 h-4" /> {status}
          </span>
        );
      case "Pending":
        return (
          <span className="flex items-center gap-1 bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs font-medium">
            <ClockIcon className="w-4 h-4" /> {status}
          </span>
        );
      case "Cancelled":
        return (
          <span className="flex items-center gap-1 bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-medium">
            <XCircleIcon className="w-4 h-4" /> {status}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Orders</h1>

        {orders.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p className="text-gray-500 mb-4">You haven’t placed any orders yet.</p>
            <Link
              to="/"
              className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
              >
                {/* Order Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h2 className="font-semibold text-lg">Order #{order.id}</h2>
                    <p className="text-sm text-gray-500">Placed on {order.date}</p>
                  </div>
                  {getStatusBadge(order.status)}
                </div>

                {/* Order Items */}
                <div className="divide-y">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 py-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 rounded-lg object-cover border"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-xs text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-semibold">₹{item.price * item.quantity}</p>
                    </div>
                  ))}
                </div>

                {/* Order Footer */}
                <div className="flex justify-between items-center mt-4">
                  <p className="font-semibold">Total: ₹{order.total}</p>
                  <Link
                    to={`/order/${order.id}`}
                    className="text-blue-500 text-sm font-medium hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

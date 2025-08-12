import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [shippingMethod, setShippingMethod] = useState("express");
  const [coupon, setCoupon] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = shippingMethod === "express" ? 9 : 0;
  const taxes = 5;
  const total = subtotal + shippingFee + taxes;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) {
      alert("Please fill all required fields before placing the order.");
      return;
    }
    clearCart();
    navigate("/confirm-order");
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h2 className="text-lg font-semibold">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen mt-20 py-6 px-3">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Shipping Form */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-bold mb-3">Shipping Address</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name*"
              className="border rounded-lg p-2 text-sm"
            />
            {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
            
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name*"
              className="border rounded-lg p-2 text-sm"
            />
            {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email*"
              className="border rounded-lg p-2 text-sm md:col-span-2"
            />
            {errors.email && <span className="text-red-500 text-xs md:col-span-2">{errors.email}</span>}

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number*"
              className="border rounded-lg p-2 text-sm md:col-span-2"
            />
            {errors.phone && <span className="text-red-500 text-xs md:col-span-2">{errors.phone}</span>}

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City*"
              className="border rounded-lg p-2 text-sm"
            />
            {errors.city && <span className="text-red-500 text-xs">{errors.city}</span>}

            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="State*"
              className="border rounded-lg p-2 text-sm"
            />
            {errors.state && <span className="text-red-500 text-xs">{errors.state}</span>}

            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleInputChange}
              placeholder="Zip Code*"
              className="border rounded-lg p-2 text-sm"
            />
            {errors.zip && <span className="text-red-500 text-xs">{errors.zip}</span>}

            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Description*"
              rows="2"
              className="border rounded-lg p-2 text-sm md:col-span-2"
            ></textarea>
            {errors.description && <span className="text-red-500 text-xs md:col-span-2">{errors.description}</span>}
          </form>

          <h2 className="text-lg font-bold mt-4 mb-3">Shipping Method</h2>
          <div className="flex gap-3">
            <label
              className={`flex-1 border rounded-lg p-3 cursor-pointer text-sm ${
                shippingMethod === "free" ? "border-black" : "border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="shipping"
                value="free"
                checked={shippingMethod === "free"}
                onChange={() => setShippingMethod("free")}
                className="hidden"
              />
              <p className="font-semibold">Free Shipping</p>
              <p className="text-xs text-gray-500">7-20 Days</p>
              <p className="mt-1 font-bold">$0</p>
            </label>

            <label
              className={`flex-1 border rounded-lg p-3 cursor-pointer text-sm ${
                shippingMethod === "express" ? "border-black" : "border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="shipping"
                value="express"
                checked={shippingMethod === "express"}
                onChange={() => setShippingMethod("express")}
                className="hidden"
              />
              <p className="font-semibold">Express Shipping</p>
              <p className="text-xs text-gray-500">1-3 Days</p>
              <p className="mt-1 font-bold">$9</p>
            </label>
          </div>
        </div>

        {/* Right: Cart Summary */}
        <div className="bg-white rounded-xl shadow p-4 h-fit">
          <h2 className="text-base font-bold mb-3">Your Cart</h2>

          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-3">
              <div className="flex gap-2">
                <img src={item.image} alt={item.title} className="w-14 h-14 rounded-lg object-cover" />
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
              <p className="text-sm font-semibold">₹{item.price * item.quantity}</p>
            </div>
          ))}

          {/* Coupon */}
          <div className="flex mb-3">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Discount code"
              className="flex-1 border border-gray-300 rounded-l-lg px-2 py-1 text-sm focus:outline-none"
            />
            <button className="bg-black text-white px-3 rounded-r-lg text-sm">Apply</button>
          </div>

          {/* Price details */}
          <div className="flex justify-between py-1 text-sm text-gray-700">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between py-1 text-sm text-gray-700">
            <span>Shipping</span>
            <span>₹{shippingFee}</span>
          </div>
          <div className="flex justify-between py-1 text-sm text-gray-700">
            <span>Estimated Taxes</span>
            <span>₹{taxes}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-base">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-4 bg-black text-white py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition"
          >
            Continue to Payment →
          </button>
        </div>
      </div>
    </div>
  );
}

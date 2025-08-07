// pages/CartPage.jsx
import React from "react";
import { useCart } from "../Pages/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold"
      >
        ← Back to Shopping
      </button>

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 font-[Montserrat]">
        🛒 Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-6 bg-white shadow-md p-4 rounded-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">Price: ₹{item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-800 font-medium">
                    Total: ₹{item.price * item.quantity}
                  </p>
                </div>
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Order Summary
            </h2>
            <p className="text-lg text-gray-700">
              Total Items: <span className="font-bold">{totalItems}</span>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Grand Total:{" "}
              <span className="font-bold text-green-600">₹{totalPrice}</span>
            </p>
       <button
  onClick={() => navigate("/checkout")} // ✅ fixed navigation
  className="w-full py-3 mt-4 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition"
>
  Proceed to Checkout
</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;

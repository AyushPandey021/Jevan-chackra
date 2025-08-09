// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { useCart } from "../Pages/CartContext";
// import { FaArrowLeft } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const CheckoutPage = () => {
//   const navigate = useNavigate();
//   const { cartItems, removeFromCart, updateQuantity } = useCart();

//   const [form, setForm] = useState({
//     fullName: "",
//     address: "",
//     bookmark: "",
//     postalCode: "",
//     state: "",
//     country: "",
//     phone: "",
//     altPhone: "",
//   });



//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const deliveryCharge = 50;
//   const holdingCharge = 20;
//   const GST = "18%";

//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//   const totalAmount = cartItems.reduce(
//     (sum, item) => sum + item.quantity * item.price,
//     0
//   );

//   const grandTotal = totalAmount + deliveryCharge + holdingCharge;

//   const handleInputChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };
//   const handlePlaceOrder = () => {
//     for (const key in form) {
//       if (!form[key]) {
//         alert("⚠️ Please fill all the form fields before placing the order.");
//         return;
//       }
//     }

//     setShowConfirmation(true);

//     setTimeout(() => {
//       setShowConfirmation(false);
//       navigate("/cart"); // ⬅️ Redirect to cart page after 3 seconds
//     }, 3000);
//   };
//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <div className="flex justify-between items-center mb-6">
//         <Link to="/cart" className="flex items-center text-gray-600 hover:text-black">
//           <FaArrowLeft className="mr-2" /> Back to Cart
//         </Link>
//         <h2 className="text-3xl font-bold text-red-800 font-[Montserrat]">Checkout</h2>
//       </div>

//       {cartItems.length === 0 ? (
//         <div className="text-center py-20">
//           <h3 className="text-2xl mb-4 text-gray-700 font-semibold">Your cart is empty 😕</h3>
//           <Link to="/products" className="text-red-600 font-medium underline hover:text-red-800">
//             Continue Shopping
//           </Link>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* LEFT FORM */}
//           <div className="bg-white p-6 rounded shadow-md space-y-4">
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">Shipping Details</h3>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={form.fullName}
//               onChange={handleInputChange}
//               className="w-full border px-4 py-2 rounded"
//             />
//             <textarea
//               name="address"
//               placeholder="Full Address"
//               value={form.address}
//               onChange={handleInputChange}
//               className="w-full border px-4 py-2 rounded"
//             />
//             <input
//               type="text"
//               name="bookmark"
//               placeholder="Bookmark Address (e.g., Home, Office)"
//               value={form.bookmark}
//               onChange={handleInputChange}
//               className="w-full border px-4 py-2 rounded"
//             />
//             <input
//               type="text"
//               name="postalCode"
//               placeholder="Postal Code"
//               value={form.postalCode}
//               onChange={handleInputChange}
//               className="w-full border px-4 py-2 rounded"
//             />
//             <input
//               type="text"
//               name="state"
//               placeholder="State"
//               value={form.state}
//               onChange={handleInputChange}
//               className="w-full border px-4 py-2 rounded"
//             />
//             <input
//               type="text"
//               name="country"
//               placeholder="Country"
//               value={form.country}
//               onChange={handleInputChange}
//               className="w-full border px-4 py-2 rounded"
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number"
//               value={form.phone}
//               onChange={handleInputChange}
//               className="w-full border px-4 py-2 rounded"
//             />
//             <input
//               type="text"
//               name="altPhone"
//               placeholder="Alternate Phone Number"
//               value={form.altPhone}
//               onChange={handleInputChange}
//               className="w-full border px-4 py-2 rounded"
//             />
//             <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition">
//               Save Address
//             </button>
//           </div>

//           {/* RIGHT ORDER DETAILS */}
//           <div className="bg-gray-100 p-6 rounded shadow-md">
//             <h3 className="text-xl font-semibold mb-4 text-gray-700">Your Items</h3>
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex justify-between items-center mb-4 border-b pb-2">
//                 <div className="flex gap-3 items-center">
//                   <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
//                   <div>
//                     <h4 className="font-semibold text-gray-800">{item.title}</h4>
//                     <p className="text-sm text-gray-600">₹{item.price}</p>
//                     <div className="flex items-center gap-2 mt-2">
//                       <button
//                         onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
//                         className="px-2 py-1 bg-gray-200 rounded"
//                       >
//                         -
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                         className="px-2 py-1 bg-gray-200 rounded"
//                       >
//                         +
//                       </button>
//                       <button
//                         onClick={() => removeFromCart(item.id)}
//                         className="text-xs text-red-500 hover:underline ml-2"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-red-600 font-semibold">
//                   ₹{item.price * item.quantity}
//                 </div>
//               </div>
//             ))}

//             {/* Summary */}
//             <div className="mt-6 space-y-2 text-gray-700">
//               <div className="flex justify-between">
//                 <span>Items Total:</span>
//                 <span>₹{totalAmount}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Delivery Charge:</span>
//                 <span>₹{deliveryCharge}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Holding Charge:</span>
//                 <span>₹{holdingCharge}</span>
//               </div>
//               <div className="flex justify-between text-sm text-gray-500">
//                 <span>GST (18%):</span>
//                 <span>{GST} (included)</span>
//               </div>
//               <hr />
//               <div className="flex justify-between font-bold text-lg">
//                 <span>Grand Total:</span>
//                 <span>₹{grandTotal}</span>
//               </div>
//               <button
//                 onClick={handlePlaceOrder}
//                 className="w-full mt-4 bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
//               >
//                 🚀 Place Order Now
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Order Confirmation Card */}
//       {showConfirmation && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded shadow-lg text-center">
//             <h2 className="text-2xl font-bold text-green-700 mb-2">✅ Order Placed!</h2>
//             <p className="text-gray-700">Thank you for shopping with us, {form.fullName}!</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;




import React from 'react';
import { useCart } from '../Pages/CartContext';

export default function Checkout() {
  const { cartItems, total, updateQuantity, removeFromCart, clearCart } = useCart();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border p-4 rounded">
              <div className="flex items-center gap-3">
                <img src={item.images?.[0]} alt={item.title} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">₹{item.price} x {item.quantity}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-2">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2">+</button>
                <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-600">Remove</button>
              </div>
            </div>
          ))}

          <div className="text-right font-semibold">Total: ₹{total}</div>

          <div className="flex justify-end gap-3">
            <button onClick={() => clearCart()} className="px-4 py-2 border rounded">Clear</button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded">Proceed to Payment</button>
          </div>
        </div>
      )}
    </div>
  );
}
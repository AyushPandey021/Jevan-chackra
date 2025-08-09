import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../Pages/CartContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Cart ka function le rahe

  if (!product) return null;

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    navigate(`/checkout/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
      whileHover={{ scale: 1.02 }}
      onClick={handleViewDetails}
    >
      <img
        src={product.images?.[0] || "https://via.placeholder.com/150"}
        alt={product.title || "No Title"}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{product.title}</h2>
        <p className="text-sm text-gray-500">{product.tag}</p>

        <div className="mt-2 flex items-center gap-2">
          {product.originalPrice && (
            <span className="text-gray-400 line-through">₹{product.originalPrice}</span>
          )}
          {product.price && (
            <span className="text-red-600 font-bold">₹{product.price}</span>
          )}
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-2 rounded-lg transition"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-lg transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

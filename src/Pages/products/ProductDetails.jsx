import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../data/product";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => String(p.id) === String(id));
  const { cartItems, addToCart } = useCart();

  const [mainIndex, setMainIndex] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setMainIndex(0);
    setQty(1);
  }, [id]);

  if (!product) return <div className="p-6">Product not found</div>;

  const inCart = cartItems.find(c => c.id === product.id);

  const handleAdd = () => {
    addToCart(product, qty);
  };

  const handleBuyNow = () => {
    addToCart(product, qty);
    navigate("/checkout");
  };

  return (
    <div className="p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <motion.div layout>
          <motion.img
            key={product.images[mainIndex]}
            src={product.images[mainIndex]}
            alt={product.title}
            className="w-full h-96 object-cover rounded"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        </motion.div>

        <div className="mt-4 flex gap-3 overflow-x-auto">
          {product.images.map((img, idx) => (
            <button key={idx} onClick={() => setMainIndex(idx)} className={`flex-none rounded overflow-hidden border ${mainIndex === idx ? "ring-2 ring-red-500" : "border-gray-200"}`}>
              <img src={img} alt={`thumb-${idx}`} className="w-20 h-20 object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        {product.tag && <p className="text-sm text-gray-500 mt-1">{product.tag}</p>}

        <div className="mt-4">
          <span className="text-gray-400 line-through mr-2">₹{product.originalPrice}</span>
          <span className="text-2xl text-red-600 font-bold">₹{product.price}</span>
        </div>

        <p className="mt-4 text-gray-700">{product.description}</p>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex items-center border rounded">
            <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-3 py-2">-</button>
            <div className="px-4">{qty}</div>
            <button onClick={() => setQty(q => q + 1)} className="px-3 py-2">+</button>
          </div>

          <button onClick={handleAdd} className={`px-5 py-2 rounded text-white ${inCart ? "bg-green-500" : "bg-red-600 hover:bg-red-700"}`}>
            {inCart ? "Added" : "Add to Cart"}
          </button>

          <button onClick={handleBuyNow} className="px-5 py-2 rounded border border-gray-300">
            Buy Now
          </button>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">Product Details</h3>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>High quality handcrafted rakhi</li>
            <li>Free gift wrapping</li>
            <li>30 days replacement policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

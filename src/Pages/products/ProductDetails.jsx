// src/Pages/ProductDetail.jsx
import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/product.js";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [zoomStyle, setZoomStyle] = useState({});
  const zoomRef = useRef(null);

  if (!product) {
    return <h2 className="p-4">Product not found</h2>;
  }

  const handleBuyNow = () => {
    addToCart({ ...product, quantity });
    navigate("/checkoutpage");
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  // Zoom hover handler
  const handleMouseMove = (e) => {
    const { left, top, width, height } = zoomRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomStyle({
      backgroundImage: `url(${selectedImage})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "200%",
      backgroundRepeat: "no-repeat",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({});
  };

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left - Product Images */}
      <div>
        <div
          ref={zoomRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="border rounded-lg overflow-hidden w-full h-[450px] bg-white relative"
          style={zoomStyle.backgroundImage ? zoomStyle : {}}
        >
          {!zoomStyle.backgroundImage && (
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-full object-contain transition-transform duration-300"
            />
          )}
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 mt-4">
          {product.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.title} ${index + 1}`}
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 object-cover border rounded cursor-pointer hover:scale-105 transition ${
                selectedImage === img ? "border-black" : "border-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right - Details */}
      <div>
        <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
        <p className="text-xl font-semibold text-green-600 mb-4">₹{product.price}</p>

        {/* Rating placeholder */}
        <div className="flex items-center gap-2 mb-4">
          ⭐⭐⭐⭐⭐ <span className="text-sm text-gray-500">(24 reviews)</span>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-semibold">Quantity:</span>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              className="px-4 py-2 text-lg hover:bg-gray-100"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              className="px-4 py-2 text-lg hover:bg-gray-100"
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={handleAddToCart}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            🛒 Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            ⚡ Buy Now
          </button>
        </div>

        {/* Product Description */}
        <div className="border-t pt-4">
          <h2 className="text-lg font-bold mb-2">Product Details</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            {product.description ||
              "This premium quality product offers a perfect blend of style and comfort. Crafted with precision and using top-grade materials, it ensures durability and a modern look. Ideal for everyday use or special occasions."}
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>High-quality material for long-lasting wear</li>
            <li>Ergonomic design for maximum comfort</li>
            <li>Stylish look suitable for multiple occasions</li>
            <li>Easy to clean and maintain</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

// Utility to generate random products
const generateRandomProducts = (count) => {
  const titles = [
    'Abundance Rakhi',
    'Protection Rakhi',
    'Energy Shield Rakhi',
    'Love Bond Rakhi',
    'Wealth Attractor Rakhi',
    'Peace & Harmony Rakhi',
    'Health Booster Rakhi',
    'Jealousy Guard Rakhi',
    'Triple Power Rakhi',
    'Divine Connection Rakhi',
  ];

  return Array.from({ length: count }, (_, index) => {
    const title = titles[Math.floor(Math.random() * titles.length)];
    const originalPrice = Math.floor(Math.random() * 200 + 200); // ₹200 - ₹400
    const price = originalPrice - Math.floor(Math.random() * 100); // ₹100 less max
    return {
      id: index + 1,
      title,
      image: `https://source.unsplash.com/300x300/?rakhi,${index}`, // random rakhi image
      price,
      originalPrice,
    };
  });
};

const allProducts = generateRandomProducts(20);

const ProductCard = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visibleProducts = allProducts.slice(0, visibleCount);

  return (
    <div className="p-6">
      
         <h1 className="text-6xl md:text-5xl font-bold text-center text-red-900 mb-8 font-[Montserrat]">
      Our Products
        {/* <span className="block text-lg mt-2 text-gray-600">
          Flexbox Fallback (via Tailwind)
        </span> */}
      </h1>

      <h1>We Provides Some Product</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold text-center mb-2">{product.title}</h3>
            <div className="text-center">
              <span className="text-gray-400 line-through mr-2">₹{product.originalPrice}</span>
              <span className="text-red-600 font-bold text-lg">₹{product.price}</span>
            </div>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
              ADD TO CART
            </button>
          </div>
        ))}
      </div>

      {visibleCount < allProducts.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleViewMore}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

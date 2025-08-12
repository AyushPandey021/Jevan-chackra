// src/pages/ProductsPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155223f3e7?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 3499,
    image:
      "https://images.unsplash.com/photo-1523473827532-2a64d0d47783?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "DSLR Camera",
    price: 45999,
    image:
      "https://images.unsplash.com/photo-1519183071298-a2962be96c85?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Gaming Mouse",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1606813902917-4a2c13f59bb1?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Bluetooth Speaker",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=60",
  },
];

export default function ProductsPage() {
  const navigate = useNavigate();

  const goToProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Our Products
      </h1>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 p-14">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => goToProduct(product.id)}
            className="cursor-pointer border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col bg-white"
          >
            {/* Image container with fixed height */}
            <div className="h-40 sm:h-48 overflow-hidden flex justify-center items-center">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover h-full w-full"
              />
            </div>

            {/* Card content */}
            <div className="p-3 sm:p-4 flex flex-col flex-grow justify-between">
              <h2 className="text-base sm:text-lg font-semibold truncate">
                {product.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                ₹{product.price}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToProduct(product.id);
                }}
                className="mt-2 sm:mt-3 w-full bg-blue-600 text-white py-1.5 sm:py-2 text-sm sm:text-base rounded-md hover:bg-blue-700 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

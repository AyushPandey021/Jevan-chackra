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
      "https://plus.unsplash.com/premium_photo-1729851527149-e414003cbf1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3JpcHR1YWx8ZW58MHx8MHx8fDA%3D",
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
    <div className="bg-white min-h-screen p-3 sm:p-6 lg:p-8">
      {/* Heading */}
      <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold mb-6 text-center text-[#5C4033]">
        Our Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => goToProduct(product.id)}
            className="cursor-pointer bg-white border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="aspect-square overflow-hidden flex items-center justify-center rounded-t-lg">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-2 sm:p-3 flex flex-col flex-grow justify-between">
              <div>
                <h2 className="text-sm sm:text-base font-medium text-[#5C4033] truncate">
                  {product.title}
                </h2>
                <p className="text-[#8B4513] text-xs sm:text-sm font-semibold">
                  ₹{product.price.toLocaleString()}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToProduct(product.id);
                }}
                className="mt-2 w-full bg-[#8B4513] text-white py-1 sm:py-1.5 text-xs sm:text-sm rounded hover:bg-[#5C4033] transition-colors"
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

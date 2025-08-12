import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 1999,
    image:
      "https://imgs.search.brave.com/8_saa1eMPcUBlPejNVJLZfLZ4xf_E4YOa6LtEXBMjhw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/cGlyaXR1YWwtYXdh/a2VuaW5nLWNvbmNl/cHRfMjMtMjE1MDc3/MTY3My5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQw",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 3499,
    image:
      "https://imgs.search.brave.com/2XhQtc_GPKN8uNEK8gg-bNsyOoRtXDjsR35KTqEV1MU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvNDc4/MDQyMzMvc3RvY2st/cGhvdG8tc3Bpcml0/dWFsLWhlYWxpbmct/b3Ji",
  },
  {
    id: 3,
    title: "DSLR Camera",
    price: 45999,
    image:
      "https://imgs.search.brave.com/Nl_JVUxO5TjzHQ4LB1qMYm4C8E5maNN8yFrKCk0XtBc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvaGlu/ZHVpc20tc3Bpcml0/dWFsLWFlc3RoZXRp/Yy1weWd1ZzV3Y2d1/Mzc4dDYyLmpwZw",
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
      "https://imgs.search.brave.com/JWmYDNHTqCbD8iErER5gFWCNU3cELGquWWkqlR4cpuo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzIv/MTcxLzI5Ny9zbWFs/bC96ZW4tc3BhY2Ut/cmVsYXhhdGlvbi1t/ZWRpdGF0aW5nLXN0/YXIteW9nYS1nbG93/aW5nLXNwaXJpdHVh/bGl0eS1zaWxob3Vl/dHRlLWxvdHVzLXVu/aXZlcnNlLWVuZXJn/eS1waG90by5qcGc",
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

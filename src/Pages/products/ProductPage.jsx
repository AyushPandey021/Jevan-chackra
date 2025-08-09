import React, { useState } from "react";
import ProductCard from "../../Components/ui/ProductsCard";
import { products } from "../data/product";

export default function ProductsPage() {
  const [visible, setVisible] = useState(12);

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, visible).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {visible < products.length && (
        <div className="flex justify-center mt-8">
          <button onClick={() => setVisible(v => v + 4)} className="px-6 py-2 bg-black text-white rounded">
            View More
          </button>
        </div>
      )}
    </div>
  );
}

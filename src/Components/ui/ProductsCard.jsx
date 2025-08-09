import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Simulate add to cart action (replace with real state/store later)
    alert(`${product.title} added to cart!`);
  };

  const handleBuyNow = () => {
    navigate("/cart"); // or "/checkout" if you have that page
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border p-4">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded" />
      <div className="py-4">
        <h2 className="font-bold text-xl mb-2">{product.title}</h2>
        <p className="text-gray-700 text-base mb-2">{product.description}</p>
        <p className="text-lg font-semibold text-green-600 mb-4">₹{product.price}</p>
        <div className="flex gap-4">
          <button
            onClick={handleAddToCart}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

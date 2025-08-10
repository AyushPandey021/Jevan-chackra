import { useNavigate } from "react-router-dom";
import { useCart } from "../../Pages/context/CartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!product) return null;

  const goToDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
    >
      {/* Image */}
      <div onClick={goToDetails}>
        <img
          src={product.images?.[0] || "https://via.placeholder.com/250"}
          alt={product.title}
          className="w-full h-56 object-cover"
        />
      </div>

      {/* Details */}
      <div className="text-center p-3 flex-1 flex flex-col justify-between">
        <h3
          className="text-sm font-medium text-gray-800 truncate"
          title={product.title}
        >
          {product.title}
        </h3>
        <div className="mt-1">
          {product.oldPrice && (
            <span className="text-gray-400 line-through mr-2">
              ₹{product.oldPrice}
            </span>
          )}
          <span className="text-black font-bold">₹{product.price}</span>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
        className="bg-red-500 hover:bg-red-600 text-white py-2 flex justify-center items-center gap-1 font-medium"
      >
        <ShoppingCartIcon className="w-5 h-5" />
        ADD TO CART
      </button>
    </div>
  );
}

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
      className="
        w-60 bg-white rounded-lg shadow-md hover:shadow-lg 
        transition-all duration-300 cursor-pointer flex flex-col
        overflow-hidden border border-gray-200
      "
    >
      {/* Image */}
      <div onClick={goToDetails}>
        <img
          src={product.images?.[0] || "https://via.placeholder.com/250"}
          alt={product.title}
          className="w-full h-48 object-cover object-center"
        />
      </div>

      {/* Details */}
      <div className="p-3 text-center flex flex-col flex-grow">
        <h3
          className="text-sm font-semibold text-gray-800"
          title={product.title}
        >
          {product.title}
        </h3>
        <div className="mt-1 mb-3">
          {product.oldPrice && (
            <span className="line-through text-gray-500 text-sm mr-2">
              ₹{product.oldPrice}
            </span>
          )}
          <span className="text-lg font-bold text-gray-900">
            ₹{product.price}
          </span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
        className="
          bg-red-600 hover:bg-red-700 text-white font-medium text-sm 
          py-2 flex items-center justify-center gap-2 
          w-full transition-colors
        "
      >
        <ShoppingCartIcon className="w-4 h-4" />
        ADD TO CART
      </button>
    </div>
  );
}

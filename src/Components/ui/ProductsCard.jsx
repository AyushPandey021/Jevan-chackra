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
        bg-white rounded-md shadow-sm hover:shadow-md 
        transition-all duration-300 cursor-pointer flex flex-col
        overflow-hidden border border-gray-200
        w-full max-w-[160px] sm:max-w-[180px] mx-auto
      "
    >
      {/* Image */}
      <div onClick={goToDetails} className="aspect-[1/1] overflow-hidden">
        <img
          src={product.images?.[0] || "https://via.placeholder.com/250"}
          alt={product.title}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Details */}
      <div className="p-2 text-center flex flex-col flex-grow">
        <h3
          className="text-xs font-semibold text-gray-800 truncate"
          title={product.title}
        >
          {product.title}
        </h3>
        <div className="mt-1 mb-2">
          {product.oldPrice && (
            <span className="line-through text-gray-500 text-[10px] mr-1">
              ₹{product.oldPrice}
            </span>
          )}
          <span className="text-sm font-bold text-gray-900">
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
          bg-[#8B4513]  hover:bg-[#8B4513] text-white font-medium 
          text-xs py-1 flex items-center justify-center gap-1 
          w-full transition-colors
        "
      >
        <ShoppingCartIcon className="w-4 h-4" />
        ADD
      </button>
    </div>
  );
}

// import { useNavigate } from "react-router-dom";
// import { useCart } from "../../Pages/context/CartContext";
// import { ShoppingCartIcon } from "@heroicons/react/24/solid";

// export default function ProductCard({ product }) {
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   if (!product) return null;

//   const goToDetails = () => {
//     navigate(`/product/${product.id}`);
//   };

//   return (
//     <div
//       onClick={goToDetails}
//       className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col w-full max-w-[220px]"
//     >
//       {/* Image */}
//       <img
//         src={product.images?.[0] || "https://via.placeholder.com/200"}
//         alt={product.title}
//         className="w-full h-48 object-cover rounded-t-lg"
//       />

//       {/* Details */}
//       <div className="p-3 text-center flex-1 flex flex-col justify-between">
//         <h3 className="text-sm font-medium text-gray-800 truncate" title={product.title}>
//           {product.title}
//         </h3>
//         <div className="mt-1">
//           {product.oldPrice && (
//             <span className="text-gray-400 line-through mr-2 text-sm">
//               ₹{product.oldPrice}
//             </span>
//           )}
//           <span className="text-black font-bold text-sm">₹{product.price}</span>
//         </div>
//       </div>

//       {/* Add to Cart Button */}
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           addToCart(product);
//         }}
//         className="bg-red-500 hover:bg-red-600 text-white py-2 flex justify-center items-center gap-1 font-medium text-sm rounded-b-lg"
//       >
//         <ShoppingCartIcon className="w-4 h-4" />
//         Add to Cart
//       </button>
//     </div>
//   );
// }



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
      onClick={goToDetails}
      className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col w-full
                 max-w-[220px] sm:max-w-[240px] md:max-w-[260px]"
    >
      {/* Image */}
      <img
        src={product.images?.[0] || "https://via.placeholder.com/200"}
        alt={product.title}
        className="w-full h-48 sm:h-52 md:h-56 object-cover rounded-t-lg"
      />

      {/* Details */}
      <div className="p-3 text-center flex-1 flex flex-col justify-between">
        <h3
          className="text-sm sm:text-base font-medium text-gray-800 truncate"
          title={product.title}
        >
          {product.title}
        </h3>
        <div className="mt-1">
          {product.oldPrice && (
            <span className="text-gray-400 line-through mr-2 text-sm sm:text-base">
              ₹{product.oldPrice}
            </span>
          )}
          <span className="text-black font-bold text-sm sm:text-base">
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
        className="bg-red-500 hover:bg-red-600 text-white py-2 flex justify-center items-center gap-1 font-medium text-sm sm:text-base rounded-b-lg"
      >
        <ShoppingCartIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        Add to Cart
      </button>
    </div>
  );
}

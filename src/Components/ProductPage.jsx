// import React, { useState } from 'react';
// import { FaArrowLeft } from 'react-icons/fa';
// import { useCart } from '../Pages/CartContext'; // ✅ Import your cart hook

// // Utility to generate random products with tags
// const generateRandomProducts = (count) => {
//   const titles = [
//     'Abundance Rakhi',
//     'Protection Rakhi',
//     'Energy Shield Rakhi',
//     'Love Bond Rakhi',
//     'Wealth Attractor Rakhi',
//     'Peace & Harmony Rakhi',
//     'Health Booster Rakhi',
//     'Jealousy Guard Rakhi',
//     'Triple Power Rakhi',
//     'Divine Connection Rakhi',
//   ];

//   const tags = ['Discounted', 'Trending', 'Best Seller'];

//   return Array.from({ length: count }, (_, index) => {
//     const title = titles[Math.floor(Math.random() * titles.length)];
//     const originalPrice = Math.floor(Math.random() * 200 + 200);
//     const price = originalPrice - Math.floor(Math.random() * 100);
//     const tag = tags[Math.floor(Math.random() * tags.length)];
//     return {
//       id: index + 1,
//       title,
//       image: `https://source.unsplash.com/300x300/?rakhi,${index}`,
//       price,
//       originalPrice,
//       tag,
//     };
//   });
// };

// const allProducts = generateRandomProducts(100);

// const getTagStyle = (tag) => {
//   switch (tag) {
//     case 'Discounted':
//       return 'bg-yellow-100 text-yellow-800';
//     case 'Trending':
//       return 'bg-pink-100 text-pink-700';
//     case 'Best Seller':
//       return 'bg-green-100 text-green-700';
//     default:
//       return 'bg-gray-200 text-gray-800';
//   }
// };

// const ProductPage = () => {
//   const [visibleCount, setVisibleCount] = useState(20);
//   const { addToCart } = useCart();

//   // Track added products in a Set for fast lookup
//   const [addedProducts, setAddedProducts] = useState(new Set());

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     setAddedProducts((prev) => new Set(prev).add(product.id));
//   };

//   const handleViewMore = () => {
//     setVisibleCount((prev) => prev + 8);
//   };

//   const visibleProducts = allProducts.slice(0, visibleCount);

//   return (
//     <div className="p-6 max-w-screen-xl mx-auto">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <button
//           className="flex items-center text-gray-600 hover:text-black"
//           onClick={() => window.history.back()}
//         >
//           <FaArrowLeft className="mr-2" />
//           Back
//         </button>

//         <div className="flex gap-3">
//           <span className="bg-yellow-100 text-yellow-800 px-3 py-1 text-sm rounded-full font-semibold">
//             🔖 Discounted
//           </span>
//           <span className="bg-pink-100 text-pink-700 px-3 py-1 text-sm rounded-full font-semibold">
//             🔥 Trending
//           </span>
//           <span className="bg-green-100 text-green-700 px-3 py-1 text-sm rounded-full font-semibold">
//             🏆 Best Seller
//           </span>
//         </div>
//       </div>

//       {/* Title */}
//       <div className="text-center mb-10">
//         <h1 className="text-4xl md:text-5xl font-bold text-red-900 font-[Montserrat] mb-2">
//           Discover Our Premium Rakhi Collection
//         </h1>
//         <p className="text-gray-600 text-lg">
//           Celebrate the bond with handpicked designs curated for love, protection & blessings.
//         </p>
//       </div>

//       {/* Products */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {visibleProducts.map((product) => {
//           const isAdded = addedProducts.has(product.id);
//           return (
//             <div
//               key={product.id}
//               className="relative bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition duration-300"
//             >
//               {/* Badge */}
//               <div
//                 className={`absolute top-3 left-3 px-2 py-1 text-xs rounded font-semibold ${getTagStyle(
//                   product.tag
//                 )}`}
//               >
//                 {product.tag === 'Discounted' && '🔖'}
//                 {product.tag === 'Trending' && '🔥'}
//                 {product.tag === 'Best Seller' && '🏆'} {product.tag}
//               </div>

//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-56 object-cover rounded mb-4"
//               />
//               <h3 className="text-lg font-semibold text-center mb-2">{product.title}</h3>
//               <div className="text-center">
//                 <span className="text-gray-400 line-through mr-2">₹{product.originalPrice}</span>
//                 <span className="text-red-600 font-bold text-lg">₹{product.price}</span>
//               </div>

//               <button
//                 onClick={() => handleAddToCart(product)}
//                 disabled={isAdded}
//                 className={`mt-4 px-4 py-2 rounded text-white ${
//                   isAdded ? 'bg-green-500' : 'bg-red-600 hover:bg-red-700'
//                 }`}
//               >
//                 {isAdded ? 'Added' : 'Add to Cart'}
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       {/* View More */}
//       {visibleCount < allProducts.length && (
//         <div className="flex justify-center mt-12">
//           <button
//             onClick={handleViewMore}
//             className="bg-black text-white px-8 py-3 text-lg rounded hover:bg-gray-800 transition"
//           >
//             View More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductPage;

import React, { useState } from 'react';
import ProductCard from './Card';
import { products } from '../data/product';

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
          <button onClick={() => setVisible((v) => v + 4)} className="px-6 py-2 bg-black text-white rounded">
            View More
          </button>
        </div>
      )}
    </div>
  );
}
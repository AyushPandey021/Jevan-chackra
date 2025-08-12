import React from 'react';

const ProductCard = ({ image, title, originalPrice, discountedPrice }) => (
  <div className="border border-gray-300 rounded-md p-4 m-2 text-center shadow-sm font-sans hover:shadow-lg transition-shadow duration-300">
    <img src={image} alt={title} className="w-full h-auto mb-3 rounded object-cover" />
    <h4 className="text-sm font-semibold mb-1">{title}</h4>
    <p className="mb-3">
      <span className="line-through text-gray-500 mr-2">₹{originalPrice}</span>
      <span className="font-bold text-red-600">₹{discountedPrice}</span>
    </p>
    <button className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800 font-semibold">
      Add Details
    </button>
  </div>
);

const ProductList = () => {
  const products = [
    {
      image: 'https://example.com/image1.jpg', // Replace with actual image URL
      title: 'Abundance Rakhi',
      originalPrice: 299,
      discountedPrice: 239,
    },
    {
      image: 'https://example.com/image2.jpg',
      title: 'Protection From Jealousy Rakhi',
      originalPrice: 259,
      discountedPrice: 159,
    },
    {
      image: 'https://example.com/image3.jpg',
      title: 'Triple Protection Rakhi',
      originalPrice: 299,
      discountedPrice: 199,
    },
    {
      image: 'https://example.com/image4.jpg',
      title: 'Money Magnet Rakhi',
      originalPrice: 299,
      discountedPrice: 199,
    },
    // Add more products if needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-2xl font-bold mb-6">Product Grid</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-1">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            originalPrice={product.originalPrice}
            discountedPrice={product.discountedPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

import React from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop",
    alt: "Notebook, iPad, laptop, and coffee",
  },
  {
    src: "https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop",
    alt: "Sunset behind San Francisco",
  },
  {
    src: "https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop",
    alt: "Tokyo busy street at night",
  },
  {
    src: "https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop",
    alt: "Car interior busy night",
  },
  {
    src: "https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop",
    alt: "Woman crossing road in NYC",
  },
  {
    src: "https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop",
    alt: "Man playing electric guitar",
  },
];

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-6xl md:text-5xl font-bold text-center text-red-900 mb-8 font-[Montserrat]">
      Our Services
        {/* <span className="block text-lg mt-2 text-gray-600">
          Flexbox Fallback (via Tailwind)
        </span> */}
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden shadow-lg rounded group"
          >
            {/* Image with blur effect on hover */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transform transition duration-300 group-hover:scale-110 group-hover:blur-xs"
            />

            {/* Centered Button */}
            <button className="absolute top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black font-semibold px-4 py-2 rounded shadow hover:bg-black hover:text-white transition duration-300">
              Click Me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;



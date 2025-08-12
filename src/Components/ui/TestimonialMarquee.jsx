import React from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    message:
      "This platform exceeded my expectations! The design, functionality, and support are just amazing.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Mehta",
    role: "UI/UX Designer",
    message:
      "I’ve never seen such a smooth and beautiful interface. Absolutely love it!",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Aditi Verma",
    role: "Digital Marketer",
    message:
      "Everything feels premium here. The experience is so smooth and user-friendly.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Arjun Singh",
    role: "Entrepreneur",
    message:
      "From design to execution, everything is top-notch. I’d recommend it to anyone.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Sneha Kapoor",
    role: "Content Creator",
    message:
      "The overall experience was absolutely wonderful! Will definitely use it again.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function TestimonialGrid() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-indigo-500 shadow-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-indigo-500">{testimonial.role}</p>
              <p className="text-gray-600 mt-3 text-sm">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

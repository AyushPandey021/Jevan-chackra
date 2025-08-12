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
    name: "Arjun Singh",
    role: "Entrepreneur",
    message:
      "From design to execution, everything is top-notch. I’d recommend it to anyone.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

export default function TestimonialGrid() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-[#5C4033] mb-12 sm:text-4xl">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#fff8f0] border border-[#d7b186] rounded-3xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-[#a97456] shadow-md mb-5"
              />
              <h3 className="text-lg font-semibold text-[#5C4033]">
                {testimonial.name}
              </h3>
              <p className="text-sm text-[#9c7f53] italic">{testimonial.role}</p>
              <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                "{testimonial.message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

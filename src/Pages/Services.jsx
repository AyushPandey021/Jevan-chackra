import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import numrology from "./../assets/numrology.png";
import HumkaraHeleem from "./../assets/humkara-heelam.png";
import lamafera from "./../assets/lemafera.jpg";
import thoerfornt from "./../assets/thoerfornt.png";
import angle from "./../assets/angle2.png";
import main from "./../assets/Main.png";
import anglefront from "./../assets/front.png";
import SP3 from "./../assets/SP3.png";

const servicesData = [
  { title: "Numerology Service", description: "Modern, unique, and engaging designs for your brand.",
    src: numrology, alt: "Notebook", link: "/numerology-service" },
  { title: "Lama Fera Healing Services", description: "Capturing moments with perfection and style.",
    src: lamafera, alt: "Sunset", link: "/lamaFera-healing" },
  { title: "Torat Consultancy Service", description: "Experience the city like never before.",
    src: thoerfornt, alt: "Tokyo Street", link: "/tarotconsultancy" },
  { title: "Humkara Heleem Healing Services", description: "Travel in style and comfort with our premium rides.",
    src: HumkaraHeleem, alt: "Car Interior", link: "/humkara-heleem" },
  { title: "Angel Healing and Therapy", description: "Trendy styles inspired by the heart of the city.",
    src: angle, alt: "NYC Street", link: "/therapyangel-healing" },
  { title: "Special Spiritual Energy Healing", description: "Enjoy live performances from talented artists.",
    src: main, alt: "Guitar Player", link: "/specialspiritual-energy-healing" },
  { title: "Angel And Oracle Card Reading", description: "Enjoy live performances from talented artists.",
    src: anglefront, alt: "Oracle Cards", link: "/angelandoracle-cardreading" },
  { title: "Emotional Freedom techniques", description: "Enjoy live performances from talented artists.",
    src: SP3, alt: "Stage Performance", link: "/emotionalfreedom-techniques" },
];

const ServicesGallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-800 mb-4 font-[Montserrat] animate-bounce">
          Explore Our Services
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Browse our collection of services crafted with passion and expertise.
          Each one is unique, designed to bring value and creativity into your life.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {servicesData.map((item, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="aspect-w-4 aspect-h-3">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover rounded-t-xl transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end">
              <div className="p-4 text-white">
                <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
              <div className="flex justify-center mb-4">
                <Link
                  to={item.link}
                  className="bg-white text-black font-semibold px-4 py-2 rounded shadow hover:bg-black hover:text-white transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm sm:text-base">
          We deliver unique experiences tailored just for you — blending creativity,
          quality, and passion.
        </p>
        <Link
          to="/contact"
          className="bg-amber-800 text-white px-6 py-3 rounded-full shadow-md hover:bg-amber-700 transition duration-300"
        >
          Get Started
        </Link>
      </motion.div>
    </div>
  );
};

export default ServicesGallery;

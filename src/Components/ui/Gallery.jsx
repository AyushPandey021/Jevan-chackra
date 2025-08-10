import React from "react";
import numrology from "../../assets/numrology.png";
import HumkaraHeleem from "../../assets/humkara-heelam.png";
import lamafera from "../../assets/lemafera.jpg";
import thoerfornt from "../../assets/thoerfornt.png";
import angle from "../../assets/angle2.png";
import main from "../../assets/main.png";
import { Link } from "react-router-dom";

const services = [
  {
    src: numrology,
    alt: "Notebook, iPad, laptop, and coffee",
    link: "/numerology-service",
    label: "Numerology",
  },
  {
    src: HumkaraHeleem,
    alt: "Sunset behind San Francisco",
    link: "/humkara-heleem",
    label: "Humkara Heleem",
  },
  {
    src: lamafera,
    alt: "Tokyo busy street at night",
    link: "/lamaFera-healing",
    label: "Lamafera",
  },
  {
    src: thoerfornt,
    alt: "Car interior busy night",
    link: "/tarotconsultancy",
    label: "Theorfornt",
  },
  {
    src: angle,
    alt: "Woman crossing road in NYC",
    link: "/angelandoracle-cardreading",
    label: "Angel Healing",
  },
  {
    src: main,
    alt: "Man playing electric guitar",
    link: "/specialspiritual-energy-healing",
    label: "Spiritual Energy",
  },
];

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-6xl md:text-5xl font-bold text-center text-red-900 mb-8 font-[Montserrat]">
        Our Services
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden shadow-lg rounded group"
          >
            <img
              src={service.src}
              alt={service.alt}
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110 group-hover:blur-sm"
            />

            <Link
              to={service.link}
              className="absolute top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black font-semibold px-4 py-2 rounded shadow hover:bg-black hover:text-white transition duration-300"
            >
              {service.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

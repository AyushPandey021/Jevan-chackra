import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
// import sushmitaImg from "../assets/jivan-founder.png";
// import visionImg from "../assets/vision.jpg"; // Add symbolic image for vision
// import missionImg from "../assets/mission.jpg"; // Add symbolic image for mission

const SushmitaAbbi = () => {
  return (
    <div className="bg-gradient-to-br  from-pink-50 via-purple-100 to-yellow-50 text-gray-800">
      {/* Founder Section */}
      <div className="min-h-screen px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">
        {/* Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="https://jevanchakra.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-09-at-1.00.52-AM-1-872x1024.png"
            alt="Sushmita Abbi"
            className="rounded-3xl max-w-sm shadow-2xl border-4 border-white"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-5xl font-bold text-purple-700">Meet Our Visionary</h2>
          <h3 className="text-3xl font-semibold">Sushmita Abbi</h3>
          <p>
            A postgraduate turned holistic healer, Sushmita combines her experience in the corporate and education sectors with her intuitive talents to help others live with purpose and peace.
          </p>
          <p>
            As an Occultist, Wellness Coach, and Spiritual Therapist, she offers guidance through Numerology, Tarot, Angel Healing, and more—empowering others on their personal and spiritual journeys.
          </p>
          <blockquote className="bg-white/40 backdrop-blur-md border-l-4 border-purple-500 px-6 py-4 italic text-purple-700 shadow-lg rounded-lg">
            “Healing is not just fixing what is broken, but nurturing what makes us whole.”
          </blockquote>
        </motion.div>
      </div>

      {/* Vision Section */}
      <div className="px-6 py-20 bg-white flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">
        {/* Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://www.shutterstock.com/image-illustration/our-mission-symbol-concept-word-260nw-2573825691.jpg"
            alt="Vision"
            className="rounded-2xl shadow-xl w-full max-w-md"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl font-bold mb-4 text-purple-700">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            The vision of <strong>Jevan Chakra: Cycle of Life</strong> is to become a beacon of spiritual healing and growth, fostering a global community where people are connected with their higher selves and the universal energy that binds all of existence.
          </p>
          <p className="text-lg mt-4 leading-relaxed">
            By offering a wide range of healing modalities, Jevan Chakra aims to meet the unique needs of each individual, helping them to unlock their full potential and embrace the cyclical nature of life with peace and purpose.
          </p>
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="px-6 py-20 bg-purple-50 flex flex-col md:flex-row-reverse items-center justify-center gap-10 max-w-7xl mx-auto">
        {/* Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_VxcW_8UvUgs7Meat6Lsh7UqwezI9vDMgbg&s"
            alt="Mission"
            className="rounded-2xl shadow-xl w-full max-w-md"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl font-bold mb-4 text-purple-700">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            The mission of <strong>Jevan Chakra: Cycle of Life</strong> is to empower individuals by providing them with the tools and insights needed to navigate the cycles of life with grace, wisdom, and spiritual awareness.
          </p>
          <p className="text-lg mt-4 leading-relaxed">
            Through personalized and transformative healing practices, we help clients achieve emotional balance, mental clarity, and spiritual enlightenment—enabling them to live fulfilling, purpose-driven lives.
          </p>
        </motion.div>
      </div>

      {/* Social Handles */}
      <div className="py-10 flex flex-col items-center gap-4">
        <h3 className="text-2xl font-semibold text-purple-700">Connect with Sushmita</h3>
        <motion.div
          className="flex gap-6 text-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition-transform hover:scale-125"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-600 transition-transform hover:scale-125"
          >
            <FaYoutube />
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-600 transition-transform hover:scale-125"
          >
            <FaWhatsapp />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SushmitaAbbi;

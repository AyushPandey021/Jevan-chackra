// src/pages/ContactPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate("/services"), 2000);
  };

  return (
    <div className="bg-white text-[#5C4033] min-h-screen p-6 flex flex-col items-center">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-[#5C4033] text-white rounded-full hover:bg-[#402d20] transition"
      >
        ⬅ Back
      </button>

      {/* Heading */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-center"
      >
        Get in Touch
      </motion.h1>

      <p className="text-center max-w-2xl mb-10 text-[#7B5E57] text-sm sm:text-base">
        We’d love to hear from you! Whether it’s a query, feedback, or just saying
        hi, drop us a message and we’ll respond promptly.
      </p>

      {/* Why Choose Us Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#f9f5f0] p-6 rounded-2xl shadow-lg max-w-3xl mb-10"
      >
        <h2 className="text-2xl font-bold mb-3">Why Choose Us?</h2>
        <p>
          We deliver experiences tailored just for you — blending creativity,
          quality, and passion. From start to finish, we ensure a smooth and
          delightful journey for every client.
        </p>
      </motion.div>

      {/* Contact Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl w-full"
      >
        {[{
          icon: <FaPhoneAlt />,
          title: "Call Us",
          text: "+91 98765 43210"
        },
        {
          icon: <FaEnvelope />,
          title: "Email",
          text: "info@example.com"
        },
        {
          icon: <FaMapMarkerAlt />,
          title: "Visit Us",
          text: "Bhopal, India"
        }].map((item, idx) => (
          <div key={idx} className="bg-white border p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <div className="text-[#8B4513] text-3xl mb-2 mx-auto">{item.icon}</div>
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm">{item.text}</p>
          </div>
        ))}
      </motion.div>

      {/* Contact Form */}
      {!submitted ? (
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-[#fdfcfb] p-8 rounded-2xl shadow-xl max-w-xl w-full space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#8B4513] outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#8B4513] outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-[#8B4513] outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-[#8B4513] text-white font-semibold rounded-lg hover:bg-[#5C4033] transition"
          >
            Send Message
          </button>
        </motion.form>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-green-100 p-6 rounded-xl shadow-md text-center"
        >
          <h2 className="text-green-700 font-bold text-xl">✅ Thank you for contacting us!</h2>
          <p>Redirecting to Services...</p>
        </motion.div>
      )}

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex gap-6 mt-12 text-2xl"
      >
        <a href="#" className="text-[#8B4513] hover:scale-125 transition"><FaFacebook /></a>
        <a href="#" className="text-[#8B4513] hover:scale-125 transition"><FaInstagram /></a>
        <a href="#" className="text-[#8B4513] hover:scale-125 transition"><FaTwitter /></a>
      </motion.div>
    </div>
  );
};

export default ContactPage;

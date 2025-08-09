// src/pages/ContactPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate("/services");
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen p-6 flex flex-col items-center">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition"
      >
        ⬅ Back
      </button>

      {/* Animated Heading */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-purple-700 mb-4"
      >
        Get in Touch
      </motion.h1>

      <p className="text-center max-w-2xl mb-10 text-gray-600">
        We’d love to hear from you! Whether it’s a query, feedback, or just saying hi,  
        drop us a message and we’ll respond as soon as possible.
      </p>

      {/* Why Choose Us */}
      <div className="bg-purple-100 p-6 rounded-2xl shadow-lg max-w-3xl mb-10">
        <h2 className="text-2xl font-bold text-purple-800 mb-3">Why Choose Us?</h2>
        <p className="text-gray-700">
          We deliver unique experiences tailored just for you — blending creativity, quality, and passion.  
          From start to finish, we ensure a smooth and delightful journey for every client.
        </p>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl">
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <FaPhoneAlt className="text-purple-600 text-3xl mb-2 mx-auto" />
          <p className="font-semibold">Call Us</p>
          <p>+91 98765 43210</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <FaEnvelope className="text-purple-600 text-3xl mb-2 mx-auto" />
          <p className="font-semibold">Email</p>
          <p>info@example.com</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <FaMapMarkerAlt className="text-purple-600 text-3xl mb-2 mx-auto" />
          <p className="font-semibold">Visit Us</p>
          <p>Bhopal, India</p>
        </div>
      </div>

      {/* Contact Form */}
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl max-w-xl w-full space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-purple-400"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 transition"
          >
            Send Message
          </button>
        </form>
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
      <div className="flex gap-6 mt-12">
        <a href="#" className="text-purple-700 text-2xl hover:scale-125 transition"><FaFacebook /></a>
        <a href="#" className="text-purple-700 text-2xl hover:scale-125 transition"><FaInstagram /></a>
        <a href="#" className="text-purple-700 text-2xl hover:scale-125 transition"><FaTwitter /></a>
      </div>

    </div>
  );
};

export default ContactPage;

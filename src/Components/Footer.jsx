import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#eeb6c8] text-white py-12 px-6 md:px-16 lg:px-24">
      {/* Floating Star Chakra Symbol */}
      <div className="absolute top-0 right-0 opacity-10 text-white text-[16rem] pointer-events-none">
        <MdOutlineStarPurple500 className="animate-spin-slow" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-10 relative z-10"
      >
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Jevan Chakra</h2>
          <p className="text-lg font-semibold mb-3">Cycle Of Life</p>
          <p className="text-sm leading-6 max-w-xs">
            Spreading the nectar of spiritual tranquility — align your body,
            mind & soul through ancient energy healing.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="#"
              className="transition hover:scale-110 bg-white text-red-700 p-2 rounded-full shadow"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="transition hover:scale-110 bg-white text-red-700 p-2 rounded-full shadow"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="transition hover:scale-110 bg-white text-red-700 p-2 rounded-full shadow"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="transition hover:scale-110 bg-white text-red-700 p-2 rounded-full shadow"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Greater Noida West Sector 1
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> contactus@jevanchakra.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +91-9311422467
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +91-8130695345
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-yellow-300 transition">
                Products (Free Shipping)
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-300 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-yellow-300 transition">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Motivational Mantra */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10 py-6 px-4 border-t border-white/10"
      >
        <p className="text-yellow-100 italic animate-pulse text-sm">
          “Om Mani Padme Hum” — May all beings be happy & free.
        </p>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        viewport={{ once: true }}
        className="text-center mt-4 text-xs text-white/70"
      >
        © {new Date().getFullYear()} Jevan Chakra. All Rights Reserved.
      </motion.div>
    </footer>
  );
}

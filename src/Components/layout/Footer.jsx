import React from "react";
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
    <footer className="relative overflow-hidden bg-[#eeb6c8] text-white pt-12 pb-6 px-4 sm:px-8 lg:px-16">
      {/* Floating Star Chakra Symbol */}
      <div className="absolute top-0 right-0 opacity-10 text-white text-[12rem] md:text-[16rem] pointer-events-none">
        <MdOutlineStarPurple500 className="animate-spin-slow" />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10"
      >
        {/* Brand */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Jevan Chakra</h2>
          <p className="text-base sm:text-lg font-semibold mb-3">
            Cycle Of Life
          </p>
          <p className="text-sm leading-6 max-w-xs mx-auto lg:mx-0">
            Spreading the nectar of spiritual tranquility — align your body,
            mind & soul through ancient energy healing.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            {[
              { icon: FaFacebookF, href: "#" },
              { icon: FaXTwitter, href: "#" },
              { icon: FaInstagram, href: "#" },
              { icon: FaYoutube, href: "#" },
            ].map(({ icon: Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="transition hover:scale-110 bg-white text-red-700 p-2 rounded-full shadow text-lg"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm sm:text-base">
            <li className="flex justify-center sm:justify-start items-center gap-2">
              <FaMapMarkerAlt /> Greater Noida West Sector 1
            </li>
            <li className="flex justify-center sm:justify-start items-center gap-2">
              <FaEnvelope /> contactus@jevanchakra.com
            </li>
            <li className="flex justify-center sm:justify-start items-center gap-2">
              <FaPhoneAlt /> +91-9311422467
            </li>
            <li className="flex justify-center sm:justify-start items-center gap-2">
              <FaPhoneAlt /> +91-8130695345
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm sm:text-base">
            {[
              { name: "Home", href: "#" },
              { name: "Products (Free Shipping)", href: "#products" },
              { name: "Services", href: "#services" },
              { name: "Blog", href: "#blog" },
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-yellow-300 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Motivational Mantra */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10 py-4 px-4 border-t border-white/20"
      >
        <p className="text-yellow-100 italic animate-pulse text-xs sm:text-sm">
          “Om Mani Padme Hum” — May all beings be happy & free.
        </p>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        viewport={{ once: true }}
        className="text-center mt-2 text-[11px] sm:text-xs text-white/70"
      >
        © {new Date().getFullYear()} Jevan Chakra. All Rights Reserved.
      </motion.div>
    </footer>
  );
}

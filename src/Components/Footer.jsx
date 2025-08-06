import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { MdOutlineStarPurple500 } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-red-800 via-red-700 to-red-900 text-white py-12 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Floating Spiritual Symbol */}
      <div className="absolute top-0 right-0 opacity-10 text-white text-[16rem] pointer-events-none">
        <MdOutlineStarPurple500 className="animate-spin-slow" />
      </div>

      <div className="grid md:grid-cols-3 gap-10 z-10 relative">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Jevan Chakra</h2>
          <p className="text-lg font-semibold mb-3">Cycle Of Life</p>
          <p className="text-sm leading-6 max-w-xs">
            Spreading The Nectar Of Spiritual Tranquility —
            Align your body, mind & soul through ancient energy healing.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" className="transition-all hover:scale-110 bg-white text-red-700 p-2 rounded-full"><FaFacebookF /></a>
            <a href="#" className="transition-all hover:scale-110 bg-white text-red-700 p-2 rounded-full"><FaXTwitter /></a>
            <a href="#" className="transition-all hover:scale-110 bg-white text-red-700 p-2 rounded-full"><FaInstagram /></a>
            <a href="#" className="transition-all hover:scale-110 bg-white text-red-700 p-2 rounded-full"><FaYoutube /></a>
          </div>
        </div>

        {/* Contact Us */}
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

        {/* Navigation */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-yellow-300 transition-all">Home</a></li>
            <li><a href="#products" className="hover:text-yellow-300 transition-all">Products (Free Shipping)</a></li>
            <li><a href="#services" className="hover:text-yellow-300 transition-all">Services</a></li>
            <li><a href="#blog" className="hover:text-yellow-300 transition-all">Blog</a></li>
          </ul>
        </div>
      </div>

      {/* Mantra Quote */}
      <div className="text-center mt-10 py-6 px-4 border-t border-white/10">
        <p className="text-yellow-100 italic animate-pulse text-sm">
          “Om Mani Padme Hum” — May all beings be happy & free.
        </p>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-4 text-xs text-white/70">
        © {new Date().getFullYear()} Jevan Chakra. All Rights Reserved.
      </div>
    </footer>
  );
}

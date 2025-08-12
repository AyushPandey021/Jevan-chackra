import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Pages/context/CartContext";
import { FaShoppingCart, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logomeain.png";

export default function Navbar() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f6f0f0]  p-4 shadow-lg font-sans fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-cover rounded-full border-2 border-white shadow-md"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5 text-base lg:text-lg font-medium">
          <Link to="/" className="hover:scale-110 hover:text-yellow-300 transition-all duration-300">Home</Link>
          <Link to="/productsList" className="hover:scale-110 hover:text-yellow-300 transition-all duration-300">Products</Link>
          <Link to="/services" className="hover:scale-110 hover:text-yellow-300 transition-all duration-300">Services</Link>
          <Link to="/about" className="hover:scale-110 hover:text-yellow-300 transition-all duration-300">About</Link>
          <Link to="/blog" className="hover:scale-110 hover:text-yellow-300 transition-all duration-300">Blog</Link>
        </div>

        {/* Right Icons - Cart + Contact (Always Visible) */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hover:scale-110 transition-transform duration-300">
            <FaPhoneAlt size={20} />
          </Link>
          <Link to="/cart" className="relative hover:scale-110 transition-transform duration-300">
            <FaShoppingCart size={22} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-xl p-2 focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 text-base font-medium">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/productsList" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
        </div>
      )}
    </nav>
  );
}

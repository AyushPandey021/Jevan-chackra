import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/logomeain.png'; // Replace with your actual logo path

const Navbar = () => {
  return (
    <nav className="border-t-4 border-red-600 bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1300px] mx-auto px-4 py-3 flex items-center justify-between flex-wrap">

        {/* Left: Logo */}
        <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full overflow-hidden">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </Link>
        </div>

        {/* Center: Links */}
        <ul className="flex flex-wrap items-center justify-center gap-6 text-sm sm:text-base">
          <li>
            <NavLink to="/" className={({ isActive }) =>
              isActive ? "text-red-600 border-b-2 border-red-600 pb-1" : "hover:text-red-600"
            }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="hover:text-red-600">
              Products
              <span className="block text-xs text-gray-500">

              </span>
            </NavLink>
          </li>
          <NavLink to="/services" className="cursor-pointer hover:text-red-600">
            Services
          </NavLink>


          <li>
            <NavLink to="/blog" className="hover:text-red-600">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-red-600">About</NavLink>
          </li>
        </ul>

        {/* Right: Cart */}
        <div className="flex items-center gap-2 relative">
          <span className="text-red-600 font-semibold text-sm sm:text-base">₹159.00</span>
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              1
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

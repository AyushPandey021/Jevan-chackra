import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logomeain.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="border-t-4 border-[#8200DB] bg-[#f0d8e0] shadow-md sticky top-0 z-50 font-[Montserrat]">
      <div className="max-w-[1300px] mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link to="/" className="flex items-center w-[50px] h-[50px] rounded-full overflow-hidden">
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </Link>

        {/* Hamburger (mobile only) */}
        <button className="md:hidden text-xl text-gray-700" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Center: Nav Links (Desktop) */}
        <ul className="hidden md:flex gap-6 font-medium text-sm sm:text-base text-gray-800">
          {[
            { path: "/", label: "Home" },
            { path: "/products", label: "Products" },
            { path: "/services", label: "Services" },
            { path: "/blog", label: "Blog" },
            { path: "/about", label: "About" },
          ].map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#8200DB] border-b-2 border-[#8200DB] pb-1"
                    : "hover:text-[#8200DB] transition"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: Icons */}
        <div className="flex items-center gap-4 text-lg text-gray-700">
          <Link to="/contact" className="hover:text-[#8200DB] transition">
            <FaPhoneAlt />
          </Link>
          <Link to="/cart" className="relative hover:text-[#8200DB] transition">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-[#8200DB] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              1
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <ul className="md:hidden px-6 pb-4 pt-2 flex flex-col gap-4 font-medium text-gray-800 bg-[#EAC3D0] shadow-inner">
          {[
            { path: "/", label: "Home" },
            { path: "/products", label: "Products" },
            { path: "/services", label: "Services" },
            { path: "/blog", label: "Blog" },
            { path: "/about", label: "About" },
          ].map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#8200DB] border-b-2 border-[#8200DB] pb-1 block"
                    : "hover:text-[#8200DB] block transition"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

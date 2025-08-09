import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logomeain.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleServiceClick = (serviceType) => {
    navigate(`/services/${serviceType}`);
    setServicesOpen(false);
    closeMenu();
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="border-t-4 border-[#8200DB] bg-[#f0d8e0] shadow-md sticky top-0 z-50 font-[Montserrat]">
      <div className="max-w-[1300px] mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link to="/" className="flex items-center w-[50px] h-[50px] rounded-full overflow-hidden">
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </Link>

        {/* Hamburger Menu (mobile) */}
        <button className="md:hidden text-xl text-gray-700" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Center Links (desktop) */}
        <ul className="hidden md:flex gap-6 font-medium text-sm sm:text-base text-gray-800">
          {navLinks.map(({ path, label }) => (
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

          {/* Services Dropdown */}
          <li className="relative">
            <button
              onClick={() => setServicesOpen(!isServicesOpen)}
              className="hover:text-[#8200DB] transition flex items-center"
            >
              Services ▾
            </button>
            {isServicesOpen && (
              <div className="absolute bg-white shadow-md border mt-2 w-48 z-10">
                <button
                  onClick={() => handleServiceClick("tarot")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                >
                  Tarot Reading
                </button>
                <button
                  onClick={() => handleServiceClick("reiki")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                >
                  Reiki Healing
                </button>
                <button
                  onClick={() => handleServiceClick("astrology")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                >
                  Astrology
                </button>
                <button
                  onClick={() => handleServiceClick("chakra")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                >
                  Chakra Balancing
                </button>
              </div>
            )}
          </li>
        </ul>

        {/* Right Icons */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-6 pb-4 pt-2 flex flex-col gap-4 font-medium text-gray-800 bg-[#EAC3D0] shadow-inner">
          {navLinks.map(({ path, label }) => (
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

          {/* Services in mobile menu */}
          <li>
            <button
              onClick={() => setServicesOpen(!isServicesOpen)}
              className="hover:text-[#8200DB] flex justify-between w-full"
            >
              Services ▾
            </button>
            {isServicesOpen && (
              <div className="mt-2 flex flex-col bg-white shadow-md border rounded">
                <button
                  onClick={() => handleServiceClick("tarot")}
                  className="px-4 py-2 text-left hover:bg-gray-100"
                >
                  Tarot Reading
                </button>
                <button
                  onClick={() => handleServiceClick("reiki")}
                  className="px-4 py-2 text-left hover:bg-gray-100"
                >
                  Reiki Healing
                </button>
                <button
                  onClick={() => handleServiceClick("astrology")}
                  className="px-4 py-2 text-left hover:bg-gray-100"
                >
                  Astrology
                </button>
                <button
                  onClick={() => handleServiceClick("chakra")}
                  className="px-4 py-2 text-left hover:bg-gray-100"
                >
                  Chakra Balancing
                </button>
              </div>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

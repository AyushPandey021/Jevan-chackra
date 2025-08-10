import { Link } from "react-router-dom";
import { useCart } from "../../Pages/context/CartContext";
import { FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/logomeain.png"; // replace with your logo path

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-pink-300  p-4 flex items-center justify-between shadow-lg">
      
      {/* Left: Logo + Name */}
     <div className="flex items-center gap-2">
  <Link
    to="/"
    className="hover:scale-110 transition-transform duration-300"
  >
    <img
  src={logo}
  alt="Logo"
  className="w-12 h-12 object-cover rounded-full border-2 border-white shadow-md"
/>
  </Link>
</div>


      {/* Center: Nav Links */}
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:scale-110 hover:text-yellow-300 transition-all duration-300">Home</Link>
        <Link to="/productsList" className="hover:scale-110 hover:text-yellow-300 transition-all duration-300">Products</Link>
        <Link to="/services" className="hover:scale-110 hover:text-yellow-300 transition-all duration-300">Services</Link>
        <Link to="/about" className="hover:scale-110 hover:text-yellow-300 transition-all duration-300">About</Link>
        <Link to="/blog" className="hover:scale-110 hover:text-yellow-300 transition-all duration-300">Blog</Link>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-5">
        <Link to="/cart" className="relative hover:scale-110 transition-transform duration-300">
          <FaShoppingCart size={22} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
        <Link to="/contact" className="hover:scale-110 transition-transform duration-300">
          <FaPhoneAlt size={20} />
        </Link>
      </div>
    </nav>
  );
}

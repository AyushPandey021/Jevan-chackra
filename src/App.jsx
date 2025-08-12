import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import ProductCard from './Components/ui/ProductsCard';
import Home from "./Pages/Home";
import ScrollTop from "./Components/layout/ScrollTop";
import Navbar from "./Components/layout/Navbar";
import ProductDetails from './Pages/products/ProductDetails';
import CartPage from "./Components/CartPage";
// import CheckoutPage from "./Pages/CheckoutPage"; 
import CheckoutPage from "./Pages/products/CheckoutPage.jsx";


import TarotConsultancy from "./Components/services/TarotConsultancy";
import NumerologyServices from "./Components/services/NumerologyPage";
import LamaFeraHealing from "./Components/services/LamaFaraPage";
import HumkaraHeleem from "./Components/services/HumkaraWithHaleem";
import TherapyAngelHealing from "./Components/services/TherapyAngelhHealing";
import AngelAndOracleCardReading from "./Components/services/AngelAndOracleCardReading";
import SpecialSpiritualAndEnergyHealing from "./Components/services/SpecialSpiritual&EnergyHealing";
import EmotionalFreedomTechniques from "./Components/services/EmotionalFreedomTechniques";
import About from "./Components/About";
import Services from "./Pages/Services";
import BlogList from "./Pages/blog/BlogList";
import BlogDetail from "./Pages/blog/BlogDetail";
import Contact from "./Pages/Contact";
import Booking from "./Components/booking/Booking";
import Footer from "./Components/layout/Footer";
import ProductList from './Components/ui/ProductList';
import ConfirmOrder from './Pages/order/ConfirmOrder';
import OrdersPage from './Pages/OrdersPage';

// Import Preloader
import Preloader from "./Components/ui/Preloader"; // create this file

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can replace with real data fetching)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="bg-[#fffff] text-[#973C00] overflow-hidden ">
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productsList" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkoutpage" element={<CheckoutPage />} />

        <Route path="//confirm-order" element={<ConfirmOrder />} />
        <Route path="/tarotconsultancy" element={<TarotConsultancy />} />
        <Route path="/numerology-service" element={<NumerologyServices />} />
        <Route path="/lamaFera-healing" element={<LamaFeraHealing />} />
        <Route path="/humkara-heleem" element={<HumkaraHeleem />} />
        <Route path="/therapyangel-healing" element={<TherapyAngelHealing />} />
        <Route path="/angelandoracle-cardreading" element={<AngelAndOracleCardReading />} />
        <Route path="/specialspiritual-energy-healing" element={<SpecialSpiritualAndEnergyHealing />} />
        <Route path="/emotionalfreedom-techniques" element={<EmotionalFreedomTechniques />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/booking-appointment" element={<Booking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

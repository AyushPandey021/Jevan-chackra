import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductPage from './Pages/products/ProductPage.jsx';
import Navbar from './Components/layout/Navbar.jsx';
import ScrollTop from "./Components/layout/ScrollTop.jsx";
import TarotConsultancy from './Components/TarotConsultancy';
import NumerologyServices from './Components/Numerology';
import LamaFeraHealing from './Components/LamaFara';
import CartPage from './Components/CartPage';
import CheckoutPage from './Components/CheckOutPage';
import About from "./Components/About";
import BlogList from "./Pages/BlogList";
import Services from './Pages/Services';
import BlogDetail from './Pages/blog/BlogDetail.jsx';
import Contact from './Pages/Contact';
import ProductDetails from './Pages/products/ProductDetails.jsx';
import HumkaraHeleem from './Components/services/HumkaraHeleem.jsx';
import TherapyAngelHealing from './Components/services/TherapyAngelhHealing.jsx';
import SpecialSpiritualAndEnergyHealing from './Components/services/SpecialSpiritual&EnergyHealing.jsx';
import AngelAndOracleCardReading from './Components/services/AngelAndOracleCardReading.jsx';
import EmotionalFreedomTechniques from './Components/services/EmotionalFreedomTechniques.jsx';
import Booking from './Components/booking/Booking.jsx';
import Footer from './Components/layout/Footer.jsx';

function App() {
  return (
    <div className="bg-[#EAC3D0] text-[#973C00]">
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
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
        <Route path="/booking-appointment" element={<Booking />} />
      </Routes>
      <Footer />

    </div>
  )
}
export default App;

// import EmotionalFreedomTechniques from'./Components/EmotionalFreedomTechniques';
// function App() {
//   return (
//     <>


//       <Router>
//         <ScrollTop />
//
//         <Navbar />
//         <EmotionalFreedomTechniques/>
//         <Routes>

//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<ProductPage />} />
//           <Route path="/ServiceGalleryPage" element={<ServiceGalleryPage />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/checkout" element={<CheckoutPage />} />
//           <Route path="/ToratConsultancy" element={<TarotConsultancy />} />
//           <Route path="/NumerologyServices" element={<NumerologyServices />} />
//           <Route path="/LamaFeraHealing" element={<LamaFeraHealing />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/blog" element={<BlogList />} />
//           <Route path="/blog/:id" element={<BlogDetail />} />
//           {/* <Route path="/LamaFeraHealing" element={<LamaFeraHealing />} /> */}
//         </Routes>
//       </Router>
//     </>

//   );
// }

// export default App;

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import Navbar from './Pages/Navbar';
import ScrollTop from "./Components/ScrollTop";
import TarotConsultancy from './Components/TarotConsultancy';
import NumerologyServices from './Components/Numerology';
import LamaFeraHealing from './Components/LamaFara';
import CartPage from './Components/CartPage';
import CheckoutPage from './Components/CheckOutPage';
import About from "./Components/About";
import BlogList from "./Pages/BlogList";
import Services from './Pages/Services';
import BlogDetail from './Pages/BlogDetail';
import Contact from './Pages/Contact';
import ProductDetails from './Pages/ProductDetails';
import HumkaraHeleem from './Pages/HumkaraHeleem';
import TherapyAngelHealing from './Components/TherapyAngelhHealing';
import SpecialSpiritualAndEnergyHealing from './Components/SpecialSpiritual&EnergyHealing.jsx';
import AngelAndOracleCardReading from './Components/AngelAndOracleCardReading';
import EmotionalFreedomTechniques from './Pages/EmotionalFreedomTechniques';
import Booking from './Components/Booking';
import Footer from './Components/Footer';

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
  );
}

export default App;

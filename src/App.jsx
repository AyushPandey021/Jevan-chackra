import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import ServiceGalleryPage from './Pages/ServiceGalleryPage';
import Navbar from './Pages/Navbar';
import ScrollTop from "./Components/ScrollTop"
import TarotConsultancy from './Components/TarotConsultancy';
import NumerologyServices from './Components/Numerology';
import LamaFeraHealing from './Components/LamaFara';
import CartPage from './Components/CartPage';
import CheckoutPage from './Components/CheckOutPage';
import About from "./Components/About"
import BlogList from "./Pages/BlogList"
import BlogDetail from './Pages/BlogDetail';

function App() {
  return (
    <>

      <Router>
        <ScrollTop />
        {/* <Navbar /> */}
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/ServiceGalleryPage" element={<ServiceGalleryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/ToratConsultancy" element={<TarotConsultancy />} />
          <Route path="/NumerologyServices" element={<NumerologyServices />} />
          <Route path="/LamaFeraHealing" element={<LamaFeraHealing />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          {/* <Route path="/LamaFeraHealing" element={<LamaFeraHealing />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

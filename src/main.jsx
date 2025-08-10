import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CartProvider } from './Pages/context/CartContext.jsx';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(

    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>

);

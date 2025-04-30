import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './components/ProductListingPage';
import FullCartPage from './components/FullCartPage';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/cart" element={<FullCartPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

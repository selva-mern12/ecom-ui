import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MiniCart from './MiniCart';
import { useCart } from '../context/CartContext';
import cartIcon from '../cart-icon.png';
import './Header.css';

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useCart();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">ÉLÉGANCE</Link>
        
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Collections</Link>
        </nav>

        <div className="cart-icon-container">
          <button 
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="cart-button"
            aria-label="Shopping Cart"
          >
            <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
            {state.items.length > 0 && (
              <span className="cart-count">
                {state.items.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </button>
          {isCartOpen && <MiniCart onClose={() => setIsCartOpen(false)} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
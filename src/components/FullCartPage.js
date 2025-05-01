import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Footer from './Footer';
import './FullCartPage.css';
import { Link } from 'react-router-dom';

function FullCartPage() {
  const { state, dispatch } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 500 ? 0 : 25;
  const total = subtotal + shipping;

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleCheckout = () => {
    setIsProcessing(true);
    
    // Simulate API call/processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  return (
    <>
      {/* Success Message Overlay */}
      {showSuccess && (
        <div className="message-overlay">
          <div className="message-container">
            <div className="message-icon">✓</div>
            <h3>Your Order Is Confirmed</h3>
            <p>Thank you for your purchase. Your luxury items will be delivered with white glove service.</p>
            <p>A confirmation has been sent to your email.</p>
            <button 
              className="message-close"
              onClick={() => setShowSuccess(false)}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      <section className="cart-section">
        <div className="cart-container">
          <h2 className="cart-title">Your Luxury Selection</h2>
          {state.items.length === 0 ? (
            <div className="empty-cart">
              <p>Your curated collection is empty</p>
              <button className="browse-btn" >
                <Link to='/products' className='link' >Discover Exclusive Items</Link>
              </button>
            </div>
          ) : (
            <div className="cart-wrapper">
              <div className="cart-items">
                {state.items.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="image-container">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="cart-image"
                      />
                      <div className="badge">Premium</div>
                    </div>
                    <div className="cart-details">
                      <h3 className="cart-item-title">{item.title}</h3>
                      <p className="cart-description">{item.description || 'Premium quality item'}</p>
                      <p className="cart-price">${item.price.toFixed(2)}</p>
                      <div className="quantity-controls">
                        <button 
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          className="quantity-btn"
                        >
                          −
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button 
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          className="quantity-btn"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => handleRemoveItem(item.id)} 
                        className="remove-btn"
                      >
                        <span className="icon-trash">🗑</span> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-summary">
                <h3 className="summary-title">Order Summary</h3>
                <div className="summary-line">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-line">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                {subtotal < 500 && (
                  <div className="free-shipping-note">
                    Spend ${(500 - subtotal).toFixed(2)} more for free shipping
                  </div>
                )}
                <div className="summary-total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button 
                  className={`checkout-btn ${isProcessing ? 'processing' : ''}`}
                  onClick={handleCheckout}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <span className="spinner"></span> Processing...
                    </>
                  ) : (
                    'Proceed to Exclusive Checkout'
                  )}
                </button>
                <div className="secure-checkout">
                  <span className="icon-lock" role="img" aria-label='lock icon'>&#128274;</span> Secure Checkout
                </div>
                <div className="benefits">
                  <h4>Your Luxury Benefits:</h4>
                  <ul>
                    <li>White-glove delivery service</li>
                    <li>24/7 personal concierge</li>
                    <li>Extended 3-year warranty</li>
                    <li>Complimentary gift wrapping</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default FullCartPage;
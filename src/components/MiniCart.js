import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './MiniCart.css';

function MiniCart({ onClose }) {
  const { state, dispatch } = useCart();
  const [checkoutStatus, setCheckoutStatus] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setIsProcessing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const orderNumber = Math.floor(Math.random() * 1000000);
      setCheckoutStatus({
        success: true,
        orderNumber,
        total: subtotal.toFixed(2),
        itemsCount: state.items.reduce((acc, item) => acc + item.quantity, 0)
      });
      
      // Clear cart after successful checkout
      dispatch({ type: 'CLEAR_CART' });
      setIsProcessing(false);
    }, 1500);
  };

  const closeCheckoutMessage = () => {
    setCheckoutStatus(null);
    onClose();
  };

  return (
    <div className="minicart">
      {/* Checkout Success Message */}
      {checkoutStatus?.success && (
        <div className="checkout-success">
          <div className="checkout-success-content">
            <svg viewBox="0 0 24 24" className="checkout-success-icon">
              <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
            </svg>
            <h3>Order Confirmed!</h3>
            <p>Your order #{checkoutStatus.orderNumber} has been placed successfully.</p>
            <p>Total: ${checkoutStatus.total} ({checkoutStatus.itemsCount} items)</p>
            <button 
              onClick={closeCheckoutMessage}
              className="checkout-success-button"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      {/* Regular MiniCart Content */}
      {!checkoutStatus && (
        <>
          <div className="minicart-header">
            <h3 className="minicart-title">Your Selection</h3>
            <button onClick={onClose} className="minicart-close">
              &times;
            </button>
          </div>
          
          {state.items.length === 0 ? (
            <div className="minicart-empty">
              <p>Your cart is currently empty</p>
              <Link to="/products" className="minicart-continue" onClick={onClose}>
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="minicart-items">
                {state.items.map((item) => (
                  <div key={item.id} className="minicart-item">
                    <div className="minicart-item-image-container">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="minicart-item-image"
                      />
                    </div>
                    <div className="minicart-item-details">
                      <h4 className="minicart-item-title">{item.title}</h4>
                      <div className="minicart-item-meta">
                        <span className="minicart-item-price">${item.price.toFixed(2)}</span>
                        <span className="minicart-item-quantity">× {item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="minicart-summary">
                <div className="minicart-subtotal">
                  <span>Subtotal:</span>
                  <span className="minicart-subtotal-amount">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="minicart-actions">
                  <Link
                    to="/cart"
                    onClick={onClose}
                    className="minicart-viewcart"
                  >
                    View Full Cart
                  </Link>
                  <button
                    disabled={state.items.length === 0 || isProcessing}
                    className="minicart-checkout"
                    onClick={handleCheckout}
                  >
                    {isProcessing ? (
                      <>
                        <span className="minicart-spinner"></span>
                        Processing...
                      </>
                    ) : (
                      'Secure Checkout'
                    )}
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default MiniCart;
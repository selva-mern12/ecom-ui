import React, { useState } from 'react';
import { PrivacyPolicy, TermsOfService } from './LegelPage.js';
import './Footer.css';

function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-links">
            <button 
              onClick={() => setShowPrivacy(true)} 
              className="footer-link"
            >
              Privacy Policy
            </button>
            <span className="footer-divider">|</span>
            <button 
              onClick={() => setShowTerms(true)} 
              className="footer-link"
            >
              Terms of Service
            </button>
          </div>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} ÉLÉGANCE. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="legal-modal">
          <div className="legal-modal-content">
            <button 
              className="legal-modal-close"
              onClick={() => setShowPrivacy(false)}
            >
              &times;
            </button>
            <PrivacyPolicy />
          </div>
          <div 
            className="legal-modal-overlay"
            onClick={() => setShowPrivacy(false)}
          ></div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTerms && (
        <div className="legal-modal">
          <div className="legal-modal-content">
            <button 
              className="legal-modal-close"
              onClick={() => setShowTerms(false)}
            >
              &times;
            </button>
            <TermsOfService />
          </div>
          <div 
            className="legal-modal-overlay"
            onClick={() => setShowTerms(false)}
          ></div>
        </div>
      )}
    </>
  );
}

export default Footer;
import React from 'react';
import './LegalPages.css';

export function PrivacyPolicy() {
  return (
    <div className="legal-container">
      <div className="legal-header">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-updated">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>
      
      <div className="legal-content">
        <section className="legal-section">
          <h2 className="legal-section-title">1. Information We Collect</h2>
          <p className="legal-text">
            At ÉLÉGANCE, we collect personal information when you register, make purchases, 
            or interact with our services. This may include your name, email address, 
            shipping details, and payment information.
          </p>
        </section>

        <section className="legal-section">
          <h2 className="legal-section-title">2. How We Use Your Information</h2>
          <p className="legal-text">
            We use your information to process orders, improve our services, and 
            communicate with you about products and promotions. We never sell your 
            personal data to third parties.
          </p>
        </section>

        <section className="legal-section">
          <h2 className="legal-section-title">3. Data Security</h2>
          <p className="legal-text">
            We implement industry-standard security measures including encryption 
            and secure servers to protect your personal information.
          </p>
        </section>

        <section className="legal-section">
          <h2 className="legal-section-title">4. Your Rights</h2>
          <p className="legal-text">
            You may request access to, correction of, or deletion of your personal data 
            at any time by contacting our customer service team.
          </p>
        </section>
      </div>
    </div>
  );
}

export function TermsOfService() {
  return (
    <div className="legal-container">
      <div className="legal-header">
        <h1 className="legal-title">Terms of Service</h1>
        <p className="legal-updated">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>
      
      <div className="legal-content">
        <section className="legal-section">
          <h2 className="legal-section-title">1. Acceptance of Terms</h2>
          <p className="legal-text">
            By accessing and using ÉLÉGANCE's website and services, you agree to be bound 
            by these Terms of Service and our Privacy Policy.
          </p>
        </section>

        <section className="legal-section">
          <h2 className="legal-section-title">2. Product Information</h2>
          <p className="legal-text">
            We strive for accuracy in product descriptions and pricing, but errors may occur. 
            We reserve the right to correct any errors and cancel orders arising from such mistakes.
          </p>
        </section>

        <section className="legal-section">
          <h2 className="legal-section-title">3. Order Acceptance</h2>
          <p className="legal-text">
            Your order constitutes an offer to purchase. Order acceptance occurs when we send 
            the shipping confirmation. We reserve the right to refuse any order.
          </p>
        </section>

        <section className="legal-section">
          <h2 className="legal-section-title">4. Returns & Exchanges</h2>
          <p className="legal-text">
            Please review our Return Policy for details on returning or exchanging items. 
            All returns must be in original condition with tags attached.
          </p>
        </section>
      </div>
    </div>
  );
}


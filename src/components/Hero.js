import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Timeless Elegance, <br />Curated for You
          </h1>
          <p className="hero-subtitle">
            Discover exclusive collections that redefine luxury
          </p>
          <a href="/products" className="hero-button">
            Explore Collections
            <span className="button-icon">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default HomePage;
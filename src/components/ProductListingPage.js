import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Footer from './Footer';
import './ProductListingPage.css';

function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('default');

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch products');
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(product => 
    filter === 'all' ? true : product.category === filter
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    if (sort === 'name-asc') return a.title.localeCompare(b.title);
    if (sort === 'name-desc') return b.title.localeCompare(a.title);
    return 0;
  });

  if (loading) return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Loading our premium collection...</p>
    </div>
  );

  if (error) return (
    <div className="error">
      <svg viewBox="0 0 24 24" className="error-icon">
        <path fill="currentColor" d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
      </svg>
      <p>{error}</p>
      <button 
        onClick={() => window.location.reload()}
        className="retry-btn"
      >
        Retry
      </button>
    </div>
  );

  return (
    <div className="layout">
      

      {/* Main Content */}
      <main className="main-content">
        {/* Filters Section */}
        <div className="filters">
          <h2 className="collection-title">Premium Collection</h2>
          <div className="filter-controls">
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="select"
            >
              <option value="all">All Categories</option>
              <option value="men's clothing">Men's</option>
              <option value="women's clothing">Women's</option>
              <option value="jewelery">Jewelry</option>
              <option value="electronics">Electronics</option>
            </select>
            
            <select 
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="select"
            >
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A-Z</option>
              <option value="name-desc">Name: Z-A</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="product-grid">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {sortedProducts.length === 0 && (
          <div className="no-products">
            <svg viewBox="0 0 24 24" className="empty-icon">
              <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M16,10V12H8V10H16Z" />
            </svg>
            <p>No products found</p>
            <button 
              onClick={() => setFilter('all')}
              className="retry-btn"
            >
              View All Products
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default ProductListingPage;
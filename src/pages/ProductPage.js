import React from 'react';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="ecommerce-banner">
        <div className="ecommerce-banner-overlay">
          <div className="ecommerce-banner-content">
            <h2>Shop the Best Deals</h2>
            <p>Discover exclusive offers on top products! Start shopping now and enjoy unbeatable prices.</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="main-content">
        {/* Advertisement Section */}
        <div className="advertisement-section">
          <img src="ad-placeholder.jpg" alt="Advertisement" className="ad-image" />
        </div>

        {/* Product Section */}
        <div className="product-section">
          {/* Filter and Sort */}
          <div className="filter-sort-container">
            <select id="category">
              <option value="">All Categories</option>
              <option value="Handicrafts">Handicrafts</option>
              <option value="Clothing">Clothing</option>
              <option value="Toys">Toys</option>
              <option value="Artifacts">Artifacts</option>
            </select>
            <select id="price-filter">
              <option value="">All Prices</option>
              <option value="0-500">0 - 500 INR</option>
              <option value="501-1000">501 - 1000 INR</option>
              <option value="1001-2000">1001 - 2000 INR</option>
              <option value="2001-5000">2001 - 5000 INR</option>
              <option value="5001-10000">5001 - 10000 INR</option>
            </select>
            <select id="price-sort">
              <option value="">Sort by</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div id="products-grid" className="products-grid">
            <div className="product-card">
              <img src="saree.jpg" alt="Traditional Saree" />
              <h3>Traditional Saree</h3>
              <p>Elegant handwoven sarees from Banaras.</p>
              <p className="price">$50</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="toys.jpg" alt="Wooden Toys" />
              <h3>Wooden Toys</h3>
              <p>Handcrafted toys from Channapatna.</p>
              <p className="price">$20</p>
              <button>Add to Cart</button>
            </div>
          </div>

          {/* Load More Button */}
          <div className="load-more-container">
            <button id="load-more" className="load-more-btn">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

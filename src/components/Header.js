import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>The Cultural Circuit</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/festivals">Festivals</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
      <div className="header-right">
        <Link to="/admin-login" className="btn">Admin Login</Link>
        <div id="cart-icon" data-count="0">
          <Link to="/cart" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

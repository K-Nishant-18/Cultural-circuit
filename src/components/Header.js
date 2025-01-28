import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './Header.css';

const Header = () => {

  const [viewCart, setViewCart] = useState(false);

  const handleCartClick = () => {
    setViewCart(true);
    // Additional logic to show the cart or redirect to the cart page can be added here.
  };



  return (
    <header className="header">
       <div className="logo">
      <Link to="/" className="logo-link">
        <h1 className="rubik-glitch-pop-regular">TheCulturalCircuit</h1>
      </Link>
    </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/festivals">Festivals</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/destinations">Tourism</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
      <div className="header-right">
        <Link to="/login" className="btn">Login</Link>
        <div id="cart-icon" data-count="0">
      <Link to="" className="cart-icon" onClick={handleCartClick}>
        <i className="fas fa-shopping-cart"></i>
      </Link>
    </div>
      </div>
    </header>
  );
};

export default Header;

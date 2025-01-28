import React from 'react';
import { Link } from 'react-router-dom';
import { FaStore, FaMagic, FaChalkboardTeacher, FaCalendarAlt, FaShoppingCart } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Explore, Celebrate, Connect</h1>
          <p>Your journey into the vibrant world of cultural heritage starts here.</p>
          <div className="hero-buttons">
            <Link to="/festivals" className="btn primary">Explore Festivals</Link>
            <Link to="/products" className="btn secondary">Cultural Products</Link>
          </div>
        </div>

        {/* SVG Wave */}
<div id="page-break6" className="wave">
  <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#767575", width: "153%", height: "84px", transform: "rotate(180deg)" }}>
    <path
      d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
      opacity=".25" className="animated-path6" />
    <path
      d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
      opacity=".5" className="animated-path6" />
    <path
      d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z"
      className="animated-path6" />
  </svg>
</div>
      </section>

      

      {/* What We Offer */}
      <section className="offers">
  <h2>Our Offerings</h2>
  <div className="offer-cards">
    <div className="offer-card">
      <FaStore size={60} color="#ff5722" />
      <h3>Local Vendors</h3>
      <p>Explore handmade treasures and support artisans globally.</p>
    </div>
    <div className="offer-card">
      <FaMagic size={60} color="#ff5722" />
      <h3>Cultural Experiences</h3>
      <p>Immerse yourself in the magic of local traditions and festivals.</p>
    </div>
    <div className="offer-card">
      <FaCalendarAlt size={60} color="#ff5722" />
      <h3>Cultural Calendar</h3>
      <p>Stay updated with the latest cultural events around the world.</p>
    </div>
    <div className="offer-card">
      <FaShoppingCart size={60} color="#ff5722" />
      <h3>E-commerce</h3>
      <p>Shop authentic artifacts and cultural products.</p>
    </div>
  </div>
</section>


      {/* Wavy Page Break */}
      <div className="wave"></div>

      {/* Most Visited Places */}
      <section className="visited-places">
      <h2>Most Visited Places</h2>
<div className="places-carousel">
  <div className="place-card">
    <img src="https://images.unsplash.com/photo-1671512226229-e05294dd1970?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Place" />
    <h3>Varanasi Ghats</h3>
    <p>The soul of India’s ancient culture and spirituality.</p>
  </div>
  <div className="place-card">
    <img src="https://images.unsplash.com/photo-1719161450230-71211ca7b3bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Place" />
    <h3>Gulmarg Mountains</h3>
    <p>An adventure hub in the Pir Panjal Mountain Range.</p>
  </div>
  <div className="place-card">
    <img src="https://images.unsplash.com/photo-1695395550316-8995ae9d35ff?q=80&w=2656&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Place" />
    <h3>Jaipur City</h3>
    <p>A city with unique attractions like forts and palaces.</p>
  </div>
</div>
<div style={{ textAlign: 'center', marginTop: '50px' }}>
  <button 
    style={{
      padding: '10px 20px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#FF5722',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    }}
    onMouseOver={(e) => e.target.style.backgroundColor = '#E64A19'}
    onMouseOut={(e) => e.target.style.backgroundColor = '#FF5722'}
  >
   <Link to="/destinations"> Explore More</Link>
  </button>
</div>


{/* SVG Wave */}
<div id="page-break" className="wave2">
  <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#767575", width: "153%", height: "84px", transform: "rotate(180deg)" }}>
    <path
      d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
      opacity=".25" className="animated-path7" />
    <path
      d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
      opacity=".5" className="animated-path7" />
    <path
      d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z"
      className="animated-path7" />
  </svg>
</div>

      </section>

      {/* Wavy Page Break */}
      <div className="wave"></div>

      {/* Our Features */}
      <section className="features">
  <h2>Our Key Features</h2> {/* New Heading Added */}
  <div className="features-grid">
    <div className="feature">
      <h3>Global Reach</h3>
      <p>Discover culture from every corner of the world.</p>
    </div>
    <div className="feature">
      <h3>Tailored Insights</h3>
      <p>Personalized suggestions based on your interests.</p>
    </div>
    <div className="feature">
      <h3>Trusted Vendors</h3>
      <p>Every vendor and product is verified for authenticity.</p>
    </div>
    <div className="feature">
      <h3>Seamless Experience</h3>
      <p>Enjoy intuitive navigation and interactive features.</p>
    </div>
  </div>
</section>


      {/* Wavy Page Break */}
      <div className="wave"></div>

      {/* Testimonials */}
      <section className="testimonials">
  <h2>What People Are Saying</h2>
  <div className="testimonial-slider">
    <div className="testimonial">
      <p>"An absolute delight! This website is my go-to for cultural exploration."</p>
      <span>- Aarav Sharma</span> {/* Updated Name */}
    </div>
    <div className="testimonial">
      <p>"A one-stop destination for festivals and authentic products."</p>
      <span>- Priya Gupta</span> {/* Updated Name */}
    </div>
    <div className="testimonial">
      <p>"A wonderful platform that truly brings together diverse cultures."</p>
      <span>- Rohan Patel</span> {/* New Testimonial */}
    </div>
  </div>



{/* SVG Wave */}
<div id="page-break" className="wave3">
  <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#767575", width: "153%", height: "84px", transform: "scaleX(-1) rotate(180deg)" }}>
    <path
      d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
      opacity=".25" className="animated-path8" />
    <path
      d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
      opacity=".5" className="animated-path8" />
    <path
      d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z"
      className="animated-path8" />
  </svg>
</div>

</section>


      {/* Wavy Page Break */}
      <div className="wave"></div>

      {/* Vision Section */}
      <section className="vision">
        <h2>Our Vision</h2>
        <p>"Our vision at The Cultural Circuit is to celebrate cultural diversity, connect communities, and preserve traditions. We aim to inspire global appreciation of heritage through immersive experiences, authentic stories, and meaningful interactions, bridging the past with the future."</p>
      </section>
    </div>
  );
};

export default HomePage;

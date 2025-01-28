import React from 'react';
import VendorCard from '../components/VendorCard';
import './VendorsPage.css';

const VendorsPage = () => {
  return (
    <div className="vendors-page">
      <h2>Vendor Listings</h2>
      <div className="vendors-grid">
        <VendorCard 
          name="Rajasthan Handicrafts" 
          description="Authentic handmade crafts from Rajasthan." 
          location="Jaipur" 
        />
        <VendorCard 
          name="Kerala Spices" 
          description="Fresh and organic spices from Kerala." 
          location="Kochi" 
        />
      </div>
    </div>
  );
};

export default VendorsPage;

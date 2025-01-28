import React from 'react';
import './VendorCard.css';

const VendorCard = ({ name, description, location }) => {
  return (
    <div className="vendor-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

export default VendorCard;

import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, description, price }) => {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>Price:</strong> {price}</p>
    </div>
  );
};

export default ProductCard;

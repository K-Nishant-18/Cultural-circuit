import React from 'react';
// import './GuidesPage.css';

const GuideCard = ({ name, description, image }) => {
  return (
    <div className="guide-card">
      <img src={image} alt={name} className="guide-image" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

const GuidesPage = () => {
  return (
    <div className="guides-page">
      <h2>Certified Guides</h2>
      <div className="guides-grid">
        <GuideCard 
          name="Ankit Sharma" 
          description="Expert in North Indian heritage and culture." 
          image="/assets/guide1.jpg" 
        />
        <GuideCard 
          name="Meera Singh" 
          description="Specializes in Southern cultural landmarks." 
          image="/assets/guide2.jpg" 
        />
      </div>
    </div>
  );
};

export default GuidesPage;

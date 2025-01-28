import React from 'react';
import './FestivalHighlights.css';

const EventCard = ({ title, date, description }) => {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p><strong>Date:</strong> {date}</p>
      <p>{description}</p>
    </div>
  );
};

const FestivalHighlights = () => {
  return (
    <div className="festival-highlights">
      <h2>Festival Highlights</h2>
      <div className="events-grid">
        <EventCard 
          title="Diwali Celebration" 
          date="10th November" 
          description="A vibrant festival of lights and joy." 
        />
        <EventCard 
          title="Holi Fest" 
          date="18th March" 
          description="Celebrate colors and togetherness." 
        />
      </div>
    </div>
  );
};

export default FestivalHighlights;

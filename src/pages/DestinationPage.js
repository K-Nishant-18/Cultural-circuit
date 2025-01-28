import React, { useState } from 'react';
import './DestinationPage.css';

const DestinationPage = () => {
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedSort, setSelectedSort] = useState('Popularity');
  const [visibleCount, setVisibleCount] = useState(5); // State for controlling number of visible cards

  const states = ['All States', 'Rajasthan', 'Kerala', 'Goa', 'Karnataka', 'Jammu & Kashmir'];
  const types = ['All Types', 'Historical', 'Adventure', 'Nature', 'Cultural', 'Romantic'];

  const destinations = [
    { id: 1, name: 'Taj Mahal', state: 'Uttar Pradesh', type: 'Historical', image: 'https://via.placeholder.com/400x250' },
    { id: 2, name: 'Goa Beaches', state: 'Goa', type: 'Adventure', image: 'https://via.placeholder.com/400x250' },
    { id: 3, name: 'Jaipur City', state: 'Rajasthan', type: 'Cultural', image: 'https://via.placeholder.com/400x250' },
    { id: 4, name: 'Kerala Backwaters', state: 'Kerala', type: 'Nature', image: 'https://via.placeholder.com/400x250' },
    { id: 5, name: 'Gulmarg', state: 'Jammu & Kashmir', type: 'Romantic', image: 'https://via.placeholder.com/400x250' },
    { id: 6, name: 'Hampi Ruins', state: 'Karnataka', type: 'Historical', image: 'https://via.placeholder.com/400x250' },
    { id: 7, name: 'Leh Ladakh', state: 'Jammu & Kashmir', type: 'Adventure', image: 'https://via.placeholder.com/400x250' },
    { id: 8, name: 'Munnar', state: 'Kerala', type: 'Nature', image: 'https://via.placeholder.com/400x250' },
    { id: 9, name: 'Udaipur', state: 'Rajasthan', type: 'Cultural', image: 'https://via.placeholder.com/400x250' },
    { id: 10, name: 'Shimla', state: 'Himachal Pradesh', type: 'Romantic', image: 'https://via.placeholder.com/400x250' },
    { id: 11, name: 'Red Fort', state: 'Delhi', type: 'Historical', image: 'https://via.placeholder.com/400x250' },
    { id: 12, name: 'Rishikesh', state: 'Uttarakhand', type: 'Adventure', image: 'https://via.placeholder.com/400x250' },
    // Add more destinations here...
  ];

  const filteredDestinations = destinations.filter(
    (destination) =>
      (selectedState === 'All States' || destination.state === selectedState) &&
      (selectedType === 'All Types' || destination.type === selectedType)
  );

  // Function to handle "Show More" button click
  const handleShowMore = () => {
    setVisibleCount(visibleCount + 5); // Increase the number of visible cards by 5
  };

  return (
    <div className="destination-page">
      {/* Banner Section */}
      <div className="banner">
        <div className="banner-content">
          <h1>Explore India Like Never Before</h1>
          <p>Discover the hidden treasures, top attractions, and cultural marvels.</p>
          <button className="cta-button">Plan Your Trip</button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="filters">
        <select onChange={(e) => setSelectedState(e.target.value)} value={selectedState}>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <select onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select onChange={(e) => setSelectedSort(e.target.value)} value={selectedSort}>
          <option value="Popularity">Sort by Popularity</option>
          <option value="Rating">Sort by Rating</option>
          <option value="Name">Sort by Name</option>
        </select>
      </div>

      {/* Destinations Grid */}
      <div className="destination-grid">
        {filteredDestinations.slice(0, visibleCount).map((destination) => (
          <div key={destination.id} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.state} - {destination.type}</p>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {filteredDestinations.length > visibleCount && (
        <button className="show-more-button" onClick={handleShowMore} style={{
            
            padding: '10px 20px',
            marginLeft: '46%',
            textAlign: 'center',
            fontSize: '16px',
            color: '#fff',
            backgroundColor: '#FF5722',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}>Show More</button>
      )}

      {/* Most Visited Places */}
      <div className="featured-section">
        <h2>Most Visited Places</h2>
        <div className="featured-grid">
          {destinations.slice(0, 5).map((place) => (
            <div key={place.id} className="featured-card">
              <img src={place.image} alt={place.name} />
              <h3>{place.name}</h3>
              <p>{place.state}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Unique Destinations */}
      <div className="featured-section">
        <h2>Hidden Gems</h2>
        <div className="featured-grid">
          {destinations.reverse().slice(0, 5).map((place) => (
            <div key={place.id} className="featured-card">
              <img src={place.image} alt={place.name} />
              <h3>{place.name}</h3>
              <p>{place.state}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;

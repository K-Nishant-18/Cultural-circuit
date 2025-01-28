import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Styled Components
const PageContainer = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fafafa;
  padding-bottom:100px;
`;

const Banner = styled.div`
  position: relative;
  height: 300px;
  background-image: url('https://images.unsplash.com/photo-1611988615248-5d4f0b9ac31e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-bottom: 40px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 8px;
  }

  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 36px;
    text-align: center;
    z-index: 1;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
  h1 {
    font-size: 40px;
    color: #333;
  }
  p {
    font-size: 18px;
    color: #777;
    margin-top: 10px;
  }
`;

const Filters = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  select {
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;
    outline: none;
  }
`;

const SearchBar = styled.input`
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-left: 20px;
  outline: none;
`;

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  .react-calendar {
    width: 100%;
    max-width: 1000px; /* Make the calendar width larger */
    height: auto; /* Adjust the height */
    font-size: 18px; /* Increase font size for better readability */
  }
`;

const EventListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

const EventCard = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #777;
    margin-bottom: 15px;
  }

  .event-location {
    font-size: 14px;
    color: #555;
  }

  .event-date {
    font-size: 12px;
    color: #999;
  }

  .add-to-calendar {
    display: inline-block;
    background-color: #4285F4;
    color: white;
    padding: 8px 16px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 14px;
    margin-top: 10px;
  }

  .add-to-calendar:hover {
    background-color: #357ae8;
  }
`;

const EventModal = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: ${props => (props.show ? 'block' : 'none')};
  animation: fadeIn 0.4s ease-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #777;
    margin-bottom: 20px;
  }

  .event-location,
  .event-date {
    color: #555;
  }

  .add-to-calendar {
    display: inline-block;
    background-color: #4285F4;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 16px;
  }

  .add-to-calendar:hover {
    background-color: #357ae8;
  }

  button {
    background-color: #f44336;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
  }

  button:hover {
    background-color: #e53935;
  }
`;

// Event List
const eventList = [
  {
    date: '2024-12-25',
    name: 'Christmas Celebration',
    description: 'A festival of joy and togetherness, with family gatherings and community events.',
    location: 'Nationwide',
    category: 'Festival',
    link: 'https://www.google.com/calendar/render?action=TEMPLATE&text=Christmas+Celebration&dates=20241225T000000Z/20241225T235900Z&details=A+festival+of+joy+and+togetherness,+with+family+gatherings+and+community+events.&location=Nationwide&sf=true&output=xml',
  },
  {
    date: '2024-12-31',
    name: 'New Year Eve Party',
    description: 'Celebrate the arrival of the new year with music, dance, and fireworks.',
    location: 'Major Cities',
    category: 'Party',
    link: 'https://www.google.com/calendar/render?action=TEMPLATE&text=New+Year+Eve+Party&dates=20241231T180000Z/20241231T235900Z&details=Celebrate+the+arrival+of+the+new+year+with+music,+dance,+and+fireworks.&location=Major+Cities&sf=true&output=xml',
  },
  {
    date: '2024-12-15',
    name: 'Traditional Indian Dance Workshop',
    description: 'Learn traditional Indian dance forms with expert instructors.',
    location: 'Cultural Center, Mumbai',
    category: 'Workshop',
    link: 'https://www.google.com/calendar/render?action=TEMPLATE&text=Traditional+Indian+Dance+Workshop&dates=20241215T100000Z/20241215T120000Z&details=Learn+traditional+Indian+dance+forms+with+expert+instructors.&location=Cultural+Center,+Mumbai&sf=true&output=xml',
  },
];

// Main Component
const CulturalCalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [eventDetails, setEventDetails] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const handleDateChange = (date) => {
    const selected = date.toISOString().split('T')[0];
    const event = eventList.find(event => event.date === selected);
    if (event) {
      setEventDetails(event);
      setShowModal(true);
    } else {
      setShowModal(false);
    }
    setSelectedDate(date);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const filteredEvents = eventList
    .filter(event => event.name.toLowerCase().includes(searchQuery.toLowerCase()) && (categoryFilter === 'All' || event.category === categoryFilter));

  return (
    <PageContainer>
      <Banner>
        <h2>Cultural Events Calendar</h2>
      </Banner>
      <Header>
        <h1>Upcoming Events</h1>
        <p>Explore the latest cultural events and activities happening across the world.</p>
      </Header>

      <Filters>
        <select onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
          <option value="All">All Categories</option>
          <option value="Festival">Festival</option>
          <option value="Workshop">Workshop</option>
          <option value="Party">Party</option>
        </select>

        <SearchBar
          type="text"
          placeholder="Search for events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Filters>

      <CalendarWrapper>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="react-calendar"
        />
      </CalendarWrapper>

      <EventListContainer>
        {filteredEvents.map((event, index) => (
          <EventCard key={index}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <div className="event-location">Location: {event.location}</div>
            <div className="event-date">Date: {event.date}</div>
            <a href={event.link} className="add-to-calendar" target="_blank" rel="noopener noreferrer">
              Add to Google Calendar
            </a>
          </EventCard>
        ))}
      </EventListContainer>

      <EventModal show={showModal}>
        {eventDetails && (
          <>
            <h2>{eventDetails.name}</h2>
            <p>{eventDetails.description}</p>
            <div className="event-location">Location: {eventDetails.location}</div>
            <div className="event-date">Date: {eventDetails.date}</div>
            <a href={eventDetails.link} className="add-to-calendar" target="_blank" rel="noopener noreferrer">
              Add to Google Calendar
            </a>
            <button onClick={handleCloseModal}>Close</button>
          </>
        )}
      </EventModal>
    </PageContainer>
  );
};

export default CulturalCalendarPage;

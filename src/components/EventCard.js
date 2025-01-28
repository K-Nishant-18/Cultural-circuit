// EventCard.js
const EventCard = ({ title, date, description, image }) => {
    return (
      <div className="event-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <small>{date}</small>
      </div>
    );
  };
  
  export default EventCard;  // Default export
  
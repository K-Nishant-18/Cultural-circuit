import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./BlogPage.css";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Discover the Wonders of the Himalayas",
      author: "Amit Sharma",
      image: "https://images.unsplash.com/photo-1699972551268-05491ecac3fc?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Explore the breathtaking beauty and adventures that the majestic Himalayas offer. From trekking through lush forests to immersing yourself in the local cultures, the Himalayas provide a perfect blend of natural beauty and adventure. Whether you're a seasoned mountaineer or a first-time trekker, the range offers experiences for all levels, including challenging hikes and peaceful retreats. The Himalayas are not just about the peaks; they’re about the stories, the people, and the timeless traditions of the land that will captivate your soul.",
    },
    {
      id: 2,
      title: "Kerala: God’s Own Country",
      author: "Neha Reddy",
      image: "https://images.unsplash.com/photo-1647502586545-940ff9ac45c1?q=80&w=2677&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Immerse yourself in the lush greenery and serene backwaters of Kerala, widely known as ‘God’s Own Country’. This tropical paradise is perfect for nature lovers and adventure seekers alike. Explore the tranquil backwaters of Alappuzha, witness the stunning tea gardens of Munnar, or unwind on the beautiful beaches of Varkala. Kerala’s rich cultural heritage, coupled with its Ayurvedic wellness centers and delectable cuisine, make it a destination that rejuvenates both the mind and body.",
    },
    {
      id: 3,
      title: "Goa: Sun, Sand, and Sea",
      author: "Vikas Patil",
      image: "https://images.unsplash.com/photo-1607577070449-531c2296916c?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Unwind and enjoy the vibrant beach life and nightlife of Goa. From the best beaches like Palolem and Anjuna to the hidden gems tucked away along its coastline, Goa offers the perfect escape for both beach lovers and party enthusiasts. The state’s rich colonial history can be explored through its beautiful churches and forts. Goa’s seafood is famous, and the fusion of Portuguese and Indian cultures makes the food scene something truly special. Whether you're into adventure sports or just soaking up the sun, Goa has it all.",
    },
    {
      id: 4,
      title: "Rajasthan: A Royal Journey",
      author: "Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1652172328131-cba66c7c18c4?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Discover the rich cultural heritage and architectural wonders of Rajasthan. Known for its grand palaces, intricate temples, and majestic forts, Rajasthan is a state steeped in royal history. A visit to cities like Jaipur, Udaipur, and Jodhpur reveals a glimpse into the regal past of India, with stunning landmarks like the Amber Fort, Udaipur’s City Palace, and the Blue City of Jodhpur. Rajasthan also offers a unique cultural experience with its festivals, folk music, and traditional dance forms.",
    },
    {
      id: 5,
      title: "Adventure in Ladakh",
      author: "Sushant Mehta",
      image: "https://images.unsplash.com/photo-1635255506105-b74adbd94026?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Embark on thrilling adventures in the rugged landscapes of Ladakh. Known for its breathtaking landscapes, Ladakh is a paradise for adventure enthusiasts. Whether it’s mountain biking along the rugged terrain, trekking through high-altitude passes, or exploring the ancient Buddhist monasteries, Ladakh offers countless adventures. The region’s stark beauty, with its barren mountains and crystal-clear lakes, is unmatched, and the warm hospitality of its people makes it even more special. Don’t miss the famous Pangong Lake or the magnetic hill near Leh!",
    },
    {
      id: 6,
      title: "Monsoon Magic in the Western Ghats",
      author: "Priya Iyer",
      image: "https://images.unsplash.com/photo-1606050716461-78add0ad1785?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Experience the mesmerizing beauty of the Western Ghats during the monsoon season. The lush green hills, mist-covered mountains, and pristine waterfalls make this range a nature lover’s paradise. From the misty hill stations of Matheran and Mahabaleshwar to the beautiful trekking trails in Coorg and Chikmagalur, the Western Ghats come alive during monsoons. The region is also rich in biodiversity, making it a haven for wildlife enthusiasts. The monsoon rains bring out the most vibrant shades of nature, creating a picturesque landscape.",
    },
    {
      id: 7,
      title: "Cultural Heritage of Tamil Nadu",
      author: "Sundar Rajan",
      image: "https://images.unsplash.com/photo-1645617936809-dd8f99e37ce1?q=80&w=2537&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Dive deep into the cultural and historical richness of Tamil Nadu, a state with a vibrant heritage. From ancient temples like the Meenakshi Temple in Madurai to the coastal beauty of Rameswaram, Tamil Nadu offers an intricate blend of history, culture, and spirituality. The state's classical music, Bharatanatyam dance, and local festivals like Pongal are famous worldwide. The cuisine, dominated by rice-based dishes and spicy chutneys, is as rich and diverse as its culture. A journey through Tamil Nadu offers an unforgettable experience of India’s soul.",
    },
    {
      id: 8,
      title: "Romantic Getaways in Andaman",
      author: "Ravina Singh",
      image: "https://images.unsplash.com/photo-1630925137757-69d55c45897a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Find the perfect romantic retreat in the pristine islands of Andaman. Known for its untouched beauty, the Andaman Islands offer couples a perfect blend of relaxation and adventure. With white sandy beaches, crystal-clear waters, and vibrant coral reefs, it’s an idyllic destination for honeymooners. Explore the underwater world with scuba diving, enjoy a sunset cruise, or simply relax on secluded beaches. Andaman offers a unique mix of adventure and tranquility, making it the perfect romantic escape.",
    },
    {
      id: 9,
      title: "Exploring the Spiritual Heart of Varanasi",
      author: "Anjali Sharma",
      image: "https://via.placeholder.com/400x250",
      description:
        "Experience the spiritual heartbeat of India by exploring the city of Varanasi. Known as the oldest living city in the world, Varanasi is a hub of culture, spirituality, and history. The ghats along the Ganges are a sight to behold at sunrise and sunset. Visitors can witness the centuries-old rituals, take a boat ride on the holy river, and explore the narrow lanes filled with temples and ashrams. Varanasi’s vibrant culture and spiritual energy make it an unforgettable destination.",
    },
    {
      id: 10,
      title: "The Beauty of Kashmir: Heaven on Earth",
      author: "Sahil Khan",
      image: "https://via.placeholder.com/400x250",
      description:
        "Known as ‘Heaven on Earth’, Kashmir is a destination that offers unparalleled beauty. With its snow-capped mountains, lush meadows, and pristine lakes, Kashmir is a paradise for nature lovers. Whether you’re enjoying a shikara ride on Dal Lake, trekking in Pahalgam, or savoring the local cuisine, Kashmir offers a peaceful escape. The beauty of the Valley, its historical sites, and its unique culture make it one of the most sought-after destinations in India.",
    },
    {
      id: 11,
      title: "Exploring the Heritage of Delhi",
      author: "Vikas Gupta",
      image: "https://via.placeholder.com/400x250",
      description:
        "Delhi is a city that blends ancient history with modern living. From the majestic Red Fort to the bustling markets of Chandni Chowk, Delhi offers a rich cultural experience. The city’s Mughal architecture, colonial landmarks, and historical sites like Humayun’s Tomb and Qutub Minar showcase its deep-rooted history. Delhi’s vibrant food scene, rich traditions, and cosmopolitan lifestyle make it an exciting destination for travelers of all kinds.",
    },
    {
      id: 12,
      title: "The Serene Beauty of Rishikesh",
      author: "Shruti Kapoor",
      image: "https://via.placeholder.com/400x250",
      description:
        "Rishikesh, known as the Yoga Capital of the World, is a spiritual retreat located on the banks of the holy Ganges. Whether you are looking to meditate, explore adventure sports, or simply take in the serene beauty of the Himalayas, Rishikesh offers it all. The city is famous for its ashrams, yoga centers, and spiritual significance. A visit to the iconic Lakshman Jhula or participating in the evening Ganga Aarti is a must-do experience for those seeking peace and rejuvenation.",
    },
  ];
  

  const [visibleBlogs, setVisibleBlogs] = useState(4);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMoreBlogs = () => {
    setVisibleBlogs((prev) => prev + 4);
  };

  // Function to truncate the description to 20 words
  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return description;
  };

  return (
    <div className="blog-page">
      {/* Banner */}
      <div className="blog-banner">
        <img
          src="https://images.unsplash.com/photo-1551619700-ff19673408a9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your banner image URL
          alt="Blog Banner"
        />
        <div className="banner-text">
          <h1>Welcome to Our Blog</h1>
          <p>Your destination for the latest travel stories, tips, and guides.</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Blog Grid */}
      <div className="blog-grid">
        {filteredBlogs.slice(0, visibleBlogs).map((blog) => (
          <div key={blog.id} className="blog-card">
            <Link to={`/blog/${blog.id}`}>
              <img src={blog.image} alt={blog.title} />
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{truncateDescription(blog.description)}</p>
                <span className="blog-author">By {blog.author}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleBlogs < filteredBlogs.length && (
        <div className="load-more">
          <button onClick={loadMoreBlogs}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default BlogPage;

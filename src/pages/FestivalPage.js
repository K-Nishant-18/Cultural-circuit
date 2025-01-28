import React, { useState } from 'react';
import styled from 'styled-components';

const FestivalsContainer = styled.div`
  background: #f4f4f4;
  padding-bottom: 120px;
`;

const Banner = styled.div`
  position: relative;
  background: url('https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg') center/cover no-repeat;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  border-radius: 30px;

  h1 {
    font-size: 4rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  }

  p {
    font-size: 1.5rem;
    margin-top: 10px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #f75c7e;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const FestivalsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 0 20px;
`;

const FestivalCard = styled.div`
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .festival-info {
    padding: 15px;
    text-align: center;

    h3 {
      font-size: 1.8rem;
      color: #333;
    }

    p {
      font-size: 1rem;
      color: #666;
      margin: 10px 0;
      height: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    a {
      display: inline-block;
      margin-top: 10px;
      padding: 10px 20px;
      background: #f75c7e;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      transition: background 0.3s;

      &:hover {
        background: #c94c69;
      }
    }
  }
`;

const ShowMoreButton = styled.button`
  display: block;
  margin: 40px auto;
  padding: 15px 30px;
  background-color: #f75c7e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #c94c69;
  }
`;

const festivals = [
  {
    name: 'Diwali',
    image: 'https://images.unsplash.com/photo-1577083753695-e010191bacb5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shortDescription: 'Festival of Lights, symbolizing the triumph of good over evil.',
    details: 'Diwali, the Festival of Lights, is one of the most widely celebrated festivals in India. It marks the victory of light over darkness and good over evil, symbolized by the return of Lord Rama to Ayodhya after 14 years of exile. Families decorate their homes with diyas and rangoli, burst firecrackers, and exchange gifts and sweets. The festival spans five days, with each day having unique traditions, such as Dhanteras, Naraka Chaturdashi, and Bhai Dooj. Communities come together to celebrate, emphasizing unity and joy.',
    link: 'https://youtu.be/kY_POHDI7tw?si=9w4_OG1s7rukaPFk',
  },
  {
    name: 'Holi',
    image: 'https://images.unsplash.com/photo-1551757891-24a8dabd2708?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shortDescription: 'Festival of Colors, celebrating love and harmony.',
    details: 'Holi, known as the Festival of Colors, celebrates the arrival of spring and the triumph of good over evil. People gather to play with vibrant colored powders, sing, dance, and enjoy festive foods like gujiya and bhang. The festival begins with Holika Dahan, a ritual of lighting a bonfire symbolizing the burning of evil. The following day, people drench each other in colors, symbolizing the joy and unity that transcends boundaries. It’s a time to forgive, renew relationships, and spread happiness.',
    link: 'https://youtu.be/kY_POHDI7tw?si=9w4_OG1s7rukaPFk',
  },
  {
    name: 'Navratri',
    image: 'https://images.unsplash.com/photo-1622279488885-d831e8e76cef?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shortDescription: 'Nine nights of devotion and celebration.',
    details: 'Navratri is a nine-night festival dedicated to worshipping the divine feminine energy, represented by Goddess Durga. Each day is associated with a different form of the goddess, symbolizing various virtues like power, courage, and wisdom. Devotees observe fasts, perform rituals, and engage in traditional dances like Garba and Dandiya. The festival culminates in Dussehra, celebrating the victory of Lord Rama over Ravana. Navratri signifies spiritual cleansing and the triumph of good over evil, celebrated with devotion and joy.',
    link: 'https://youtu.be/kY_POHDI7tw?si=9w4_OG1s7rukaPFk',
  },
  {
    name: 'Eid-ul-Fitr',
    image: 'https://images.unsplash.com/photo-1652946619064-a12aec2d8456?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shortDescription: 'The festival of breaking the fast.',
    details: 'Eid-ul-Fitr marks the end of the holy month of Ramadan, during which Muslims fast from dawn to dusk. The festival begins with special prayers at mosques, followed by feasts shared with family and friends. Acts of charity, known as Zakat-ul-Fitr, are performed to support the less fortunate. Traditional dishes like biryani, kebabs, and sweet delicacies like seviyan are prepared. Eid-ul-Fitr promotes unity, gratitude, and forgiveness, bringing communities together to celebrate and spread joy.',
    link: 'https://youtu.be/kY_POHDI7tw?si=9w4_OG1s7rukaPFk',
  },
  {
    name: 'Ganesh Chaturthi',
    image: 'https://images.unsplash.com/photo-1610210144267-2194e9768fe8?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shortDescription: 'Celebrating Lord Ganesha.',
    details: 'Ganesh Chaturthi is a vibrant festival celebrating the birth of Lord Ganesha, the remover of obstacles. Devotees bring home beautifully crafted idols of Ganesha, which are worshipped with rituals, prayers, and offerings like modaks, his favorite sweet. The celebration lasts for 10 days, during which cultural events and processions are organized. On the final day, the idols are immersed in water bodies, symbolizing Lord Ganesha’s return to his celestial abode. It is a time of devotion, community bonding, and festivity.',
    link: 'https://youtu.be/kY_POHDI7tw?si=9w4_OG1s7rukaPFk',
  },
  {
    name: 'Onam',
    image: 'https://images.unsplash.com/photo-1696250530895-a6170657eff6?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shortDescription: 'The harvest festival of Kerala.',
    details: 'Onam is the grand harvest festival of Kerala, celebrating the mythical return of King Mahabali. The festival spans ten days, featuring traditional floral designs called pookalam, grand feasts known as Onasadya, and boat races called Vallamkali. Cultural performances, traditional dances like Kathakali, and games add to the festive spirit. Onam signifies the prosperity, unity, and cultural heritage of Kerala. Families come together to celebrate with joy and gratitude for a bountiful harvest.',
    link: 'https://youtu.be/kY_POHDI7tw?si=9w4_OG1s7rukaPFk',
  },
  {
    name: 'Pongal',
    image: 'https://images.unsplash.com/photo-1576394435759-02a2674ff6e0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shortDescription: 'Tamil Nadu’s harvest festival.',
    details: 'Pongal is a four-day harvest festival celebrated in Tamil Nadu, marking the beginning of the sun’s journey into the northern hemisphere. The festival is dedicated to the Sun God, with rituals performed to express gratitude for a good harvest. People prepare traditional dishes like sweet Pongal and decorate their homes with kolam (rangoli) designs. On the second day, people honor the farm animals that help in agriculture. Pongal is a time to celebrate nature’s abundance, unity, and the community spirit.',
    link: 'https://youtu.be/kY_POHDI7tw?si=9w4_OG1s7rukaPFk',
  },
  {
    name: 'Karva Chauth',
    image: 'https://images.unsplash.com/photo-1515766024017-689e434ef22b?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shortDescription: 'A fasting ritual for married women.',
    details: 'Karva Chauth is a fasting ritual observed by married women for the well-being and longevity of their husbands. Women fast from sunrise to moonrise, refraining from food and water, and break their fast after sighting the moon. The day is marked with prayers, rituals, and gathering with other women. Karva Chauth symbolizes love, devotion, and the bond of marriage, with women coming together to celebrate their marital bliss and pray for the long life of their husbands.',
    link: 'https://youtu.be/kY_POHDI7tw?si=9w4_OG1s7rukaPFk',
  },
];

const FestivalsPage = () => {
  const [visibleFestivals, setVisibleFestivals] = useState(4);

  const showMoreFestivals = () => {
    setVisibleFestivals(festivals.length);
  };

  return (
    <FestivalsContainer>
      <Banner>
        <div>
          <h1>Festivals of India</h1>
          <p>Experience the vibrant culture and rich traditions of India's festivals.</p>
        </div>
      </Banner>

      <Title>Popular Festivals</Title>

      <FestivalsGrid>
        {festivals.slice(0, visibleFestivals).map((festival, index) => (
          <FestivalCard key={index}>
            <img src={festival.image} alt={festival.name} />
            <div className="festival-info">
              <h3>{festival.name}</h3>
              <p>{festival.shortDescription}</p>
              <a href={festival.link} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          </FestivalCard>
        ))}
      </FestivalsGrid>

      {visibleFestivals < festivals.length && (
        <ShowMoreButton onClick={showMoreFestivals}>Show More</ShowMoreButton>
      )}
    </FestivalsContainer>
  );
};

export default FestivalsPage;

import React from 'react';
import './Home.css'; // We'll create this CSS file for styling
import HeroSection from './components/Home/HeroSection';
import AboutSection from './components/Home/AboutSection';
import ServicesSection from './components/Home/ServicesSection';
import TestimonialSlider from './components/Home/TestimonialSlider';
import CreativeStatsSection from './components/Home/CreativeStatsSection';
import LatestNewsSection from './components/Home/LatestNewsSection';
import AISection from './components/Home/AISection';
import OurPartners from './components/Home/OurPartners';
import TimelineSection from './components/Home/TimelineSection';




const Home = () => {
  return (
    <div className="homepage">
         
         <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CreativeStatsSection />
      <LatestNewsSection />
      <OurPartners />
      <AISection />
      <TimelineSection />
      <TestimonialSlider />

      
    </div>
  );
};

export default Home;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import AboutUsPage from './pages/AboutUsPage';
import FestivalPage from './pages/FestivalPage';
import CulturalCalendarPage from './pages/CulturalCalendarPage';
import EducationalResources from './pages/EducationalResources';
import FestivalHighlights from './pages/FestivalHighlights';
import GuidesPage from './pages/GuidesPage';
import VendorsPage from './pages/VendorsPage';
import BlogPage from './pages/BlogPage';
import ProductPage from './pages/ProductPage';
import BlogPost from './components/Blog/BlogPost';
import './styles/main.css';

function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/festivals" element={<FestivalPage />} />
        <Route path="/resources" element={<EducationalResources />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/calendar" element={<CulturalCalendarPage />} />
        <Route path="/festival-highlights" element={<FestivalHighlights />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/vendors" element={<VendorsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

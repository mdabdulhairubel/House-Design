
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const { pathname } = useLocation();

  // Dynamic SEO Metadata management
  useEffect(() => {
    const metaDescriptions: Record<string, string> = {
      '/': 'Professional house design in Bangladesh. Expert modern home plans, duplex designs, and 3D floor plan services tailored for Dhaka, Chattogram and Sylhet.',
      '/services': 'Our architectural services in Bangladesh include residential house plans, luxury duplex designs, and high-end 3D interior/exterior visualizations.',
      '/portfolio': 'Browse our 3D exterior visualizations and architectural renderings of modern house designs in Bangladesh. High-quality duplex and residential project portfolio for Bangladeshi landowners.',
      '/about': 'House Design BD is a leading architectural firm in Bangladesh. Learn about our expert team dedicated to modern and sustainable home design.',
      '/contact': 'Get a free house design quote today. Contact the best architects in Bangladesh for residential plans, duplexes, and site consultations.'
    };

    const titles: Record<string, string> = {
      '/': 'House Design Services in Bangladesh | Modern Home Plans & Duplex',
      '/services': 'Residential House Design Services in Bangladesh - Duplex & 3D Plans',
      '/portfolio': '3D Exterior Visualizations & Modern House Portfolio | House Design BD',
      '/about': 'About House Design BD - Leading Architects in Bangladesh',
      '/contact': 'Get a House Design Quote in Bangladesh - Contact Us'
    };

    // Update Title
    document.title = titles[pathname] || 'House Design BD | Professional Architecture in Bangladesh';

    // Update Meta Description
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', metaDescriptions[pathname] || metaDescriptions['/']);
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;

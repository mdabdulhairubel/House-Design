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
      '/': 'Professional house design in Bangladesh. Expert modern home plans, duplex designs, and low cost house design in BD. Expert architects for Dhaka, Chattogram and Sylhet.',
      '/services': 'Modern house design services in Bangladesh: 3 bedroom house plans, luxury duplex designs, 1200 sq ft house plans, and 3D architectural rendering.',
      '/portfolio': 'সেরা বাড়ির ডিজাইন পোর্টফোলিও। Explore modern duplex house designs, low cost 1200 sq ft house plans, 3 bedroom designs, and village house design in Bangladesh. অল্প খরচে সুন্দর বাড়ির ডিজাইন ও নকশা।',
      '/about': 'House Design BD is a leading architectural firm in Bangladesh. Specializing in low cost house design and modern residential planning for over 10 years.',
      '/contact': 'Get a free house design quote in Bangladesh. Contact us for 3 bedroom plans, duplex designs, and home blueprints today.'
    };

    const titles: Record<string, string> = {
      '/': 'House Design Services in Bangladesh | Modern & Low Cost Home Plans',
      '/services': '3 Bedroom House Plans & Duplex House Design BD | Services',
      '/portfolio': 'আধুনিক বাড়ির ডিজাইন | Portfolio: Duplex, Low Cost & Small House Design BD',
      '/about': 'About Us | Best Architects for House Design in Bangladesh',
      '/contact': 'Get a Quote | Best House Plan Design in Bangladesh'
    };

    const currentTitle = titles[pathname] || 'House Design BD | Professional Architecture in Bangladesh';
    const currentDescription = metaDescriptions[pathname] || metaDescriptions['/'];

    // Update Title
    document.title = currentTitle;

    // Update Meta Description
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', currentDescription);
    }

    // Update Open Graph tags
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute('content', currentTitle);
    }

    const ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) {
      ogDescTag.setAttribute('content', currentDescription);
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
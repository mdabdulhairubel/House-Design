import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { BLOG_POSTS } from './constants';

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metaDescriptions: Record<string, string> = {
      '/': 'House Design BD - Professional house design in Bangladesh. Expert modern home plans, duplex designs, and low cost house design in BD.',
      '/services': 'Services by House Design BD: 3 bedroom house plans, luxury duplex designs, 1200 sq ft plans, and 3D architectural renderings.',
      '/portfolio': 'House Design BD Portfolio: আধুনিক বাড়ির ডিজাইন। Explore modern duplex house designs in Bangladesh.',
      '/blog': 'House Design BD Blog: Expert guides on house design in Bangladesh, costs, and architectural trends.',
      '/about': 'About House Design BD - The leading architectural firm in Bangladesh for residential planning.',
      '/contact': 'Contact House Design BD for a free quote. Best architects for house design in Dhaka.'
    };

    const titles: Record<string, string> = {
      '/': 'House Design BD | #1 House Design in Bangladesh | Modern & Low Cost',
      '/services': 'House Design BD Services | Duplex & 3 Bedroom House Plans',
      '/portfolio': 'House Design BD Portfolio | আধুনিক বাড়ির ডিজাইন ও নকশা',
      '/blog': 'Blog | House Design BD - Tips & Guides for Building in Bangladesh',
      '/about': 'About House Design BD | Expert Architects in Bangladesh',
      '/contact': 'Contact House Design BD | Get Your Free Design Quote'
    };

    // Strip trailing slashes for matching
    const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, "");
    
    let currentTitle = titles[normalizedPath] || 'House Design BD';
    let currentDescription = metaDescriptions[normalizedPath] || metaDescriptions['/'];

    // Handle dynamic blog titles
    if (normalizedPath.startsWith('/blog/')) {
      const slug = normalizedPath.split('/').pop();
      const post = BLOG_POSTS.find(p => p.slug === slug);
      if (post) {
        currentTitle = `${post.title} | House Design BD`;
        currentDescription = post.excerpt;
      }
    }

    document.title = currentTitle;

    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', currentDescription);
    }

    // Open Graph
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) ogTitleTag.setAttribute('content', currentTitle);

    const ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) ogDescTag.setAttribute('content', currentDescription);

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all route to handle unexpected paths by rendering Home directly */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_NAME, WHATSAPP_NUMBER } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerActive = isScrolled || !isHomePage;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        headerActive 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-4 border-b border-gray-100' 
          : 'bg-transparent py-8'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className={`group flex items-center gap-2 text-2xl md:text-3xl font-black tracking-tighter transition-all duration-300 ${
                headerActive ? 'text-slate-900' : 'text-white'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:rotate-12 ${headerActive ? 'bg-blue-600' : 'bg-blue-500'}`}>
                H
              </div>
              <span>
                HOUSE<span className="text-blue-500">DESIGN</span>
                <span className={`text-xs ml-1 font-bold tracking-widest ${headerActive ? 'text-slate-400' : 'text-white/50'}`}>.BD</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden lg:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-full group overflow-hidden ${
                  headerActive 
                    ? (isActive(link.path) ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600')
                    : (isActive(link.path) ? 'text-white bg-white/10' : 'text-white/80 hover:text-white')
                }`}
              >
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
            
            <div className="ml-6 flex items-center gap-4">
              <a
                href={`https://wa.me/88${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 transform active:scale-95 shadow-lg ${
                  headerActive 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white text-blue-900 hover:bg-blue-50'
                }`}
              >
                <span>Get Quote</span>
              </a>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 ${headerActive ? 'text-slate-900' : 'text-white'}`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-[40] p-8">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`p-4 rounded-2xl text-lg font-bold uppercase tracking-widest ${isActive(link.path) ? 'bg-blue-600 text-white' : 'text-slate-900'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;


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

  // Force scrolled state on subpages for visibility against light backgrounds
  const headerActive = isScrolled || !isHomePage;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
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
          {/* Logo */}
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
                HOUSE<span className="text-blue-500 group-hover:text-blue-400 transition-colors">DESIGN</span>
                <span className={`text-xs ml-1 font-bold tracking-widest ${headerActive ? 'text-slate-400' : 'text-white/50'}`}>.BD</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
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
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full mb-1"></span>
                )}
                {!isActive(link.path) && (
                  <span className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-0 rounded-full ${headerActive ? 'bg-slate-50' : 'bg-white/5'}`}></span>
                )}
              </Link>
            ))}
            
            <div className="ml-6 flex items-center gap-4">
              <a
                href={`https://wa.me/88${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 transform active:scale-95 shadow-lg ${
                  headerActive 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-200' 
                    : 'bg-white text-blue-900 hover:bg-blue-50 hover:shadow-white/10'
                }`}
              >
                <span>Get Quote</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors focus:outline-none ${
                headerActive ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 top-[72px] bg-white z-[40] transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
          }`}
        >
          <div className="flex flex-col h-full p-8 bg-gradient-to-b from-white to-slate-50">
            <div className="space-y-2">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-lg font-bold transition-all duration-300 ${
                    isActive(link.path) 
                      ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 translate-x-2' 
                      : 'text-slate-900 hover:bg-slate-100'
                  }`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <span className="uppercase tracking-widest">{link.name}</span>
                  {isActive(link.path) && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto space-y-4">
              <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Quick Connect</p>
              <a
                href={`https://wa.me/88${WHATSAPP_NUMBER}`}
                className="flex items-center justify-center gap-3 w-full bg-green-500 text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-green-100 hover:bg-green-600 active:scale-[0.98] transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.555 4.197 1.61 6.041L0 24l6.135-1.61a11.782 11.782 0 005.914 1.57h.005c6.637 0 12.05-5.414 12.05-12.05 0-3.217-1.252-6.242-3.525-8.514z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

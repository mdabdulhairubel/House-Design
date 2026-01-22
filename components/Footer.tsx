
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_NAME, WHATSAPP_NUMBER, EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-24 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <Link to="/" className="text-white text-3xl font-black mb-8 block tracking-tighter">
            HOUSE<span className="text-blue-500">DESIGN</span> BD
          </Link>
          <p className="text-base leading-relaxed mb-10 opacity-60">
            The most trusted name for modern house design in Bangladesh. We provide safe, elegant, and innovative architectural blueprints for thousands of landowners nationwide.
          </p>
          <div className="flex space-x-5">
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">f</a>
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">i</a>
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all">t</a>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm font-semibold">
            <li><Link to="/" className="hover:text-blue-500 transition-colors">Home Page</Link></li>
            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Our Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-blue-500 transition-colors">Design Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Firm</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Get Free Quote</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Service Areas</h4>
          <ul className="space-y-4 text-sm font-semibold">
            <li>Dhaka Metropolitan</li>
            <li>Chattogram City</li>
            <li>Sylhet Division</li>
            <li>Rajshahi Metropolitan</li>
            <li>Khulna & Barishal</li>
            <li>Mymensingh & Rangpur</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Inquiries</h4>
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest font-black text-blue-500 mb-1">WhatsApp</p>
              <a href={`tel:${WHATSAPP_NUMBER}`} className="text-xl font-bold text-white hover:text-blue-400 transition-colors">{WHATSAPP_NUMBER}</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-black text-blue-500 mb-1">Email Support</p>
              <a href={`mailto:${EMAIL}`} className="text-lg font-bold text-white hover:text-blue-400 transition-colors">{EMAIL}</a>
            </div>
            <p className="text-xs leading-relaxed opacity-40">
              Uttara Model Town, Sector 7,<br />
              Dhaka 1230, Bangladesh
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 mt-20 pt-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-30">
          &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All Projects Authenticated.
        </p>
        <p className="mt-4 text-[10px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Keywords: house design in Bangladesh, home design BD, duplex house plan, architect in dhaka, modern house architecture bangladesh.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

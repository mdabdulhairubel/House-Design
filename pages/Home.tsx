
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, PORTFOLIO, TESTIMONIALS, WHATSAPP_NUMBER, BUSINESS_NAME } from '../constants';

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80" 
            alt="Modern House Design Render in Bangladesh" 
            className="w-full h-full object-cover brightness-[0.5]"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-[1.1]">
            Expert <span className="text-blue-400">House Design</span> Services in Bangladesh
          </h1>
          <p className="text-lg md:text-2xl mb-12 opacity-95 max-w-3xl mx-auto font-light">
            Bringing your dream home to life with world-class architectural precision. Specializing in Duplexes, Modern Villas, and Residential House Plans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl hover:scale-105 active:scale-95">
              Get Free Design Quote
            </Link>
            <a href={`https://wa.me/88${WHATSAPP_NUMBER}`} className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95">
              WhatsApp Consult
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm opacity-80 uppercase tracking-[0.2em]">
            <span>Dhaka</span>
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            <span>Chattogram</span>
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            <span>Sylhet</span>
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            <span>Rajshahi</span>
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            <span>Khulna</span>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-10 border-b">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-8 text-gray-400 font-semibold grayscale opacity-70">
           <span className="text-xl">RAJUK APPROVED</span>
           <span className="text-xl">CDA COMPLIANT</span>
           <span className="text-xl">KDA CERTIFIED</span>
           <span className="text-xl">MODERN ARCHITECTURE</span>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Specialized Services</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Professional Design for Every Budget</h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Whether it's a small urban home or a sprawling luxury estate, we provide the best house plan design services in Bangladesh.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-2 bg-white rounded-3xl transition-all border border-gray-100 hover:shadow-2xl">
                <div className="mb-6 overflow-hidden rounded-2xl h-56">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="px-4 pb-6">
                  <h4 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h4>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-3">{service.description}</p>
                  <Link to="/services" className="text-blue-600 font-bold text-sm inline-flex items-center gap-2 hover:translate-x-1 transition-transform">
                    View Details <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80" alt="Architecture Pattern" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-5xl font-extrabold mb-3 text-blue-400">850+</div>
            <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Designs Delivered</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold mb-3 text-blue-400">12+</div>
            <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Years in Industry</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold mb-3 text-blue-400">100%</div>
            <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Vastu Compliant</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold mb-3 text-blue-400">24/7</div>
            <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Support Line</div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Masterpieces</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Recent Architectural Projects in Bangladesh</h3>
            </div>
            <Link to="/portfolio" className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all">
              See Full Gallery
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PORTFOLIO.slice(0, 3).map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-3xl h-[500px] shadow-xl">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="mb-2 inline-block self-start bg-blue-600/80 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-[0.2em]">
                    {item.location}
                  </div>
                  <h4 className="text-white text-2xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-3xl md:text-4xl font-bold mb-20 text-gray-900">Success Stories from Homeowners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-gray-50 p-10 rounded-[40px] border border-gray-100 relative group hover:bg-white hover:shadow-2xl transition-all">
                <div className="text-blue-600 opacity-10 absolute top-8 right-10">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V11C5.017 11.5523 4.56929 12 4.017 12H2.017V21H5.017Z"/></svg>
                </div>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed font-light">"{t.comment}"</p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                    <p className="text-sm text-blue-600 font-semibold">{t.location}, Bangladesh</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Conversion CTA */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto rounded-[60px] bg-blue-600 p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full -ml-40 -mb-40 blur-3xl"></div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight relative z-10">Start Your Dream Home Project Today</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto font-light relative z-10">
            Join the elite circle of homeowners who prioritized design before building. Your legacy begins with a perfect blueprint from {BUSINESS_NAME}.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link to="/contact" className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1">
              Request Your Quote
            </Link>
            <a href={`https://wa.me/88${WHATSAPP_NUMBER}`} className="bg-transparent border-2 border-white/40 backdrop-blur-sm text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-blue-600 transition-all shadow-xl hover:-translate-y-1">
              Talk to Architect
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

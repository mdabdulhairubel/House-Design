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
            alt="Modern Duplex House Design in Bangladesh - High Resolution Render" 
            className="w-full h-full object-cover brightness-[0.5]"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-[1.1]">
            Expert <span className="text-blue-400">House Design</span> in Bangladesh
          </h1>
          <p className="text-lg md:text-2xl mb-12 opacity-95 max-w-3xl mx-auto font-light">
            Premium home plans, luxury duplex designs, and low cost house design in Bangladesh. Specializing in 1200 sq ft house plans and modern 3 bedroom house designs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl hover:scale-105 active:scale-95">
              Get Free Design Quote
            </Link>
            <a href={`https://wa.me/88${WHATSAPP_NUMBER}`} className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95">
              WhatsApp Consult
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Leading Architects in Bangladesh</h2>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Best House Plan Design in Bangladesh</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">From modern 3 bedroom house designs to luxury duplexes, we provide architectural excellence for every budget.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <article key={service.id} className="group p-2 bg-white rounded-3xl transition-all border border-gray-100 hover:shadow-2xl">
                <div className="mb-6 overflow-hidden rounded-2xl h-56">
                  <img src={service.image} alt={`${service.title} - Best Architecture in BD`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="px-4 pb-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-3">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO KEYWORD SECTION: Popular Search Categories & Paragraph */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Semantic Keyword Paragraph */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">Expert Design Resource</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Complete Architectural Guide for Bangladesh</h3>
              </div>
              <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-gray-100">
                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                  Welcome to <strong>House Design BD</strong>, your premier partner for <strong>Home Design Bangladesh</strong>. We specialize in <strong>Modern House Design Bangladesh</strong> and <strong>Residential House Design BD</strong>, offering expert <strong>House Plan Design Bangladesh</strong> services tailored to local needs. Whether you are looking for a <strong>Low Cost House Design</strong>, a compact <strong>Small House Design</strong>, or a specific <strong>1200 sq ft House Plan</strong>, our team delivers excellence for every family. We are renowned for our <strong>Village House Design in Bangladesh</strong>, focusing on beautiful <strong>একতলা বাড়ির ডিজাইন</strong> (Single-story house design) and functional <strong>৩ বেডরুমের বাড়ির নকশা</strong> (3 Bedroom house plan). If you dream of luxury, explore our <strong>ডুপ্লেক্স বাড়ির ডিজাইন</strong> (Duplex house design), including cost-optimized solutions like <strong>১০ লাখ টাকায় ডুপ্লেক্স বাড়ির ডিজাইন</strong>. Our mission is to provide the best <strong>বাড়ির ডিজাইন</strong> (House Design) and <strong>অল্প খরচে সুন্দর বাড়ির ডিজাইন</strong> (Beautiful house design at low cost) across Dhaka, Chattogram, and every village in Bangladesh.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/portfolio" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                    View Portfolio Projects <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Popular Search Categories Box */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-[40px] p-8 md:p-12 text-white shadow-2xl h-full relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                  <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </span>
                  Popular Search Categories
                </h3>

                <div className="space-y-4 relative z-10">
                  {[
                    { label: "বাড়ির ডিজাইন (House Design)", volume: "High" },
                    { label: "অল্প খরচে সুন্দর বাড়ির ডিজাইন", volume: "High" },
                    { label: "ডুপ্লেক্স বাড়ির ডিজাইন", volume: "Trending" },
                    { label: "৩ বেডরুমের বাড়ির নকশা", volume: "Popular" },
                    { label: "একতলা বাড়ির ডিজাইন", volume: "Common" },
                    { label: "Modern House Design Bangladesh", volume: "New" },
                    { label: "Village House Design BD", volume: "Regional" },
                    { label: "1200 sq ft House Plan", volume: "Standard" },
                    { label: "১০ লাখ টাকায় ডুপ্লেক্স ডিজাইন", volume: "Budget" }
                  ].map((category, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/5 cursor-default group/item">
                      <span className="text-sm font-semibold text-gray-200 group-hover/item:text-blue-400 transition-colors">{category.label}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-800 px-3 py-1 rounded-full">{category.volume}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10 text-center relative z-10">
                  <p className="text-sm text-gray-400 italic mb-6">"Start your construction with the perfect plan."</p>
                  <a 
                    href={`https://wa.me/88${WHATSAPP_NUMBER}?text=I%20saw%20your%20popular%20search%20categories%20and%20want%20to%20consult%20for%20a%20new%20design.`}
                    className="inline-block w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-bold transition-all shadow-lg active:scale-95"
                  >
                    Free Consultation
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Counter Section (Trust Signals) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
           <div>
              <p className="text-4xl md:text-5xl font-black text-blue-600 mb-2">10+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Years Experience</p>
           </div>
           <div>
              <p className="text-4xl md:text-5xl font-black text-blue-600 mb-2">2500+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Designs Delivered</p>
           </div>
           <div>
              <p className="text-4xl md:text-5xl font-black text-blue-600 mb-2">64</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Districts Served</p>
           </div>
           <div>
              <p className="text-4xl md:text-5xl font-black text-blue-600 mb-2">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Legal Compliance</p>
           </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto rounded-[60px] bg-slate-950 p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full -mr-40 -mt-40 blur-3xl"></div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight relative z-10">Start Your Dream Home Today</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-80 max-w-2xl mx-auto font-light relative z-10">
            Expert architects for your modern house design in Bangladesh. Affordable, structural, and stunning.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link to="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-xl">
              Request Free Quote
            </Link>
            <a href={`https://wa.me/88${WHATSAPP_NUMBER}`} className="bg-green-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-green-700 transition-all shadow-xl">
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
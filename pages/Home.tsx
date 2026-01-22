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

      {/* SEO Content: Detailed Search Intent Mapping */}
      <section className="py-24 bg-gray-50 border-y">
        <div className="max-w-5xl mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl font-bold mb-8 text-slate-900 leading-tight">অল্প খরচে সুন্দর বাড়ির ডিজাইন ও ডুপ্লেক্স প্ল্যান</h2>
                 <p className="text-gray-600 text-lg leading-relaxed mb-6">
                   আমরা দিচ্ছি বাংলাদেশের প্রেক্ষাপটে সবচেয়ে আধুনিক ও <strong>অল্প খরচে সুন্দর বাড়ির ডিজাইন</strong>। আপনি যদি গ্রামে বা শহরে আপনার স্বপ্নর বাড়িটি তৈরি করতে চান, তবে আমাদের <strong>৩ বেডরুমের বাড়ির নকশা</strong> এবং ১২০০ স্কয়ার ফিট হাউজ প্ল্যানগুলো আপনার পছন্দ হবেই।
                 </p>
                 <ul className="space-y-4 text-slate-700">
                    <li className="flex items-center gap-3">
                       <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                       <span>ডুপ্লেক্স বাড়ির ডিজাইন (Duplex House Design BD)</span>
                    </li>
                    <li className="flex items-center gap-3">
                       <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                       <span>একতলা বাড়ির ডিজাইন (Single Story House Plan)</span>
                    </li>
                    <li className="flex items-center gap-3">
                       <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                       <span>আধুনিক ৩ বেডরুমের বাড়ির নকশা</span>
                    </li>
                 </ul>
              </div>
              <div className="bg-white p-8 rounded-[40px] shadow-xl border border-blue-50">
                 <h3 className="text-xl font-bold mb-6 text-blue-900">Popular Search Categories</h3>
                 <div className="flex flex-wrap gap-3">
                    {["বাড়ির ডিজাইন", "House Design in Bangladesh", "Duplex House Design", "Low Cost House BD", "Village House Design", "3 Bedroom Plan", "1200 Sqft House", "Architect in Dhaka", "Modern Villa BD", "একতলা বাড়ির নকশা", "১০ লাখ টাকায় বাড়ি"].map((tag) => (
                       <span key={tag} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-gray-500 hover:text-blue-600 transition-colors">
                          {tag}
                       </span>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto rounded-[60px] bg-slate-950 p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full -mr-40 -mt-40 blur-3xl"></div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight relative z-10">Start Your Dream Home Today</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-80 max-w-2xl mx-auto font-light relative z-10">
            Expert architects for your modern house design in Bangladesh. Affordable, structural, and stunning.
          </p>
          <Link to="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-xl relative z-10">
            Request Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
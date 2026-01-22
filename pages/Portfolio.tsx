
import React from 'react';
import { PORTFOLIO, EXTERIOR_VISUALIZATIONS, WHATSAPP_NUMBER, BUSINESS_NAME } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header with SEO Title */}
      <div className="bg-gray-900 text-white pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1920&q=80" 
            alt="Best Modern House Design Bangladesh - Master Portfolio of Duplex and Residential Projects" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Master Portfolio: আধুনিক বাড়ির ডিজাইন</h1>
          <p className="text-blue-300 text-xl max-w-2xl mx-auto font-light">
            Top-rated architectural renderings and <strong>modern house design in Bangladesh</strong>. Specialist in <strong>duplex house design BD</strong> and <strong>low cost home plans</strong>.
          </p>
        </div>
      </div>

      {/* SEO Stats Counter */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white shadow-2xl rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border border-gray-100">
           <div>
              <p className="text-4xl font-extrabold text-blue-600">450+</p>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-1">Duplex Designs (ডুপ্লেক্স ডিজাইন)</p>
           </div>
           <div className="border-x border-gray-100">
              <p className="text-4xl font-extrabold text-blue-600">280+</p>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-1">Village Houses (গ্রামের বাড়ি)</p>
           </div>
           <div>
              <p className="text-4xl font-extrabold text-blue-600">1.2k+</p>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-1">3D Renderings (৩ডি ডিজাইন)</p>
           </div>
        </div>
      </div>

      {/* Primary Portfolio Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-blue-600 font-black uppercase tracking-widest text-xs mb-4">Architectural Excellence</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">Modern House Designs in Bangladesh</h3>
          <div className="w-20 h-1.5 bg-blue-600 mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PORTFOLIO.map((item) => (
            <article key={item.id} className="group bg-white rounded-[40px] overflow-hidden shadow-lg border border-gray-50 flex flex-col transition-all hover:shadow-2xl">
              <div className="relative overflow-hidden h-72 bg-gray-100">
                <img 
                  src={item.image} 
                  alt={`${item.title} - Modern House Design in ${item.location}, Bangladesh | ৩ডি বাড়ির ডিজাইন`} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-blue-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-bold uppercase tracking-[0.1em]">{item.location}</span>
                  </div>
                  <span className="text-[10px] bg-gray-100 text-gray-500 px-3 py-1 rounded-full font-bold uppercase">{item.type}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed flex-grow">{item.description}</p>
                <a 
                  href={`https://wa.me/88${WHATSAPP_NUMBER}?text=I%20want%20to%20know%20more%20about%20the%20${item.title}%20design.`}
                  className="w-full text-center bg-gray-50 text-blue-600 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all text-sm border border-blue-50"
                >
                  Get Quote for this Design
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3D Visualizations with Keyword Rich Badges */}
      <section className="py-32 px-4 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-6">৩ডি এক্সটেরিয়র ভিজ্যুয়ালাইজেশন</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">3D Architectural Renderings</h3>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              Experience the best <strong>3D exterior visualization</strong> in Bangladesh. We provide hyper-realistic <strong>modern house designs</strong> for <strong>duplexes</strong>, <strong>single-storey homes</strong>, and <strong>low-cost housing projects</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {EXTERIOR_VISUALIZATIONS.map((viz) => (
              <div key={viz.id} className="group bg-white/5 rounded-[32px] overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 flex flex-col lg:flex-row">
                <div className="relative w-full lg:w-1/2 h-72 lg:h-auto overflow-hidden">
                  <img 
                    src={viz.image} 
                    alt={`${viz.title} - Best 3D Rendering & Architectural Design Bangladesh`} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-400 border border-white/10">
                    {viz.timeOfDay} Rendering
                  </div>
                </div>
                <div className="p-8 lg:w-1/2 flex flex-col justify-center">
                  <h4 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{viz.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {viz.details}
                  </p>
                  <a 
                    href={`https://wa.me/88${WHATSAPP_NUMBER}?text=Requesting%203D%20visualization%20details%20for%20${viz.title}`}
                    className="text-blue-500 hover:text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all mt-auto"
                  >
                    View HD Model <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep SEO Content Block for Portfolio Page */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-12 rounded-[50px] shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">বাংলাদেশি বাড়ির ডিজাইন ও পরিকল্পনা নির্দেশিকা</h2>
            <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">
              <p>
                আপনি কি আপনার জমিতে <strong>অল্প খরচে সুন্দর বাড়ির ডিজাইন</strong> করতে চাইছেন? {BUSINESS_NAME} বাংলাদেশের অন্যতম সেরা আর্কিটেকচারাল ফার্ম যা <strong>ডুপ্লেক্স বাড়ির ডিজাইন</strong> (Duplex House Design BD) এবং <strong>একতলা বাড়ির নকশা</strong> তৈরিতে বিশেষজ্ঞ। 
              </p>
              <p>
                আমাদের পোর্টফোলিওতে রয়েছে <strong>৩ বেডরুমের বাড়ির নকশা</strong> এবং <strong>১২০০ স্কয়ার ফিট হাউজ প্ল্যান</strong> (1200 sq ft house plan) যা মধ্যবিত্ত পরিবারের বাজেট অনুযায়ী তৈরি। আমরা ঢাকা, চট্টগ্রাম, সিলেট সহ সারা বাংলাদেশে <strong>আধুনিক বাড়ির ডিজাইন</strong> (Modern House Design Bangladesh) প্রদান করছি।
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 not-prose">
                <div className="p-6 bg-blue-50 rounded-2xl">
                  <h4 className="font-bold text-blue-900 mb-2">Budget House Plans</h4>
                  <p className="text-sm">১০ লাখ টাকায় বাড়ি বা ১৫ লাখ টাকায় ডুপ্লেক্স বাড়ির জন্য আমাদের সাশ্রয়ী প্ল্যানগুলো দেখুন।</p>
                </div>
                <div className="p-6 bg-blue-50 rounded-2xl">
                  <h4 className="font-bold text-blue-900 mb-2">Village House Design</h4>
                  <p className="text-sm">গ্রামের বাড়ির ডিজাইন - সুন্দর ও টেকসই বাড়ির প্ল্যান যা গ্রামের পরিবেশের সাথে সামঞ্জস্যপূর্ণ।</p>
                </div>
              </div>
            </div>
            
            {/* Keyword Cluster Cloud */}
            <div className="mt-12 pt-12 border-t border-gray-100">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 text-center">Search Keywords Index</p>
              <div className="flex flex-wrap justify-center gap-3">
                {["বাড়ির ডিজাইন", "অল্প খরচে সুন্দর বাড়ির ডিজাইন", "ডুপ্লেক্স বাড়ির ডিজাইন", "৩ বেডরুমের বাড়ির নকশা", "একতলা বাড়ির ডিজাইন", "Modern House Design Bangladesh", "House Plan Bangladesh", "Low Cost House BD", "Village House Design BD", "1200 sq ft House Plan", "Small House Design"].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-gray-100 text-[10px] font-bold text-gray-500 rounded-full border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Design Your Dream Home?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a href={`https://wa.me/88${WHATSAPP_NUMBER}`} className="bg-green-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-700 transition-all shadow-xl hover:scale-105">
            Contact on WhatsApp
          </a>
          <a href="#/contact" className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:scale-105">
            Request Free Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

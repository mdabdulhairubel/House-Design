
import React from 'react';
import { PORTFOLIO, EXTERIOR_VISUALIZATIONS, WHATSAPP_NUMBER, BUSINESS_NAME } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-900 text-white pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1920&q=80" 
            alt="Modern Architectural Projects and House Design in Bangladesh - Master Portfolio" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Our Master Portfolio</h1>
          <p className="text-blue-300 text-xl max-w-2xl mx-auto font-light">
            Showcasing architectural excellence across Dhaka, Chattogram, Sylhet and every corner of Bangladesh.
          </p>
        </div>
      </div>

      {/* Stats Counter */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white shadow-2xl rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border border-gray-100">
           <div>
              <p className="text-4xl font-extrabold text-blue-600">450+</p>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-1">Duplex Designs</p>
           </div>
           <div className="border-x border-gray-100">
              <p className="text-4xl font-extrabold text-blue-600">280+</p>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-1">Commercial Units</p>
           </div>
           <div>
              <p className="text-4xl font-extrabold text-blue-600">1.2k+</p>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-1">Renderings Made</p>
           </div>
        </div>
      </div>

      {/* Completed Projects Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-blue-600 font-black uppercase tracking-widest text-xs mb-4">Real Estate Development</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">Completed Masterpieces</h3>
          <div className="w-20 h-1.5 bg-blue-600 mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PORTFOLIO.map((item) => (
            <div key={item.id} className="group bg-white rounded-[40px] overflow-hidden shadow-lg border border-gray-50 flex flex-col transition-all hover:shadow-2xl">
              <div className="relative overflow-hidden h-72 bg-gray-100">
                <img 
                  src={item.image} 
                  alt={`${item.title} - Modern House Design in ${item.location}, Bangladesh`} 
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
                  Consult on this Design
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3D EXTERIOR VISUALIZATION SECTION - GRID RE-IMPLEMENTATION */}
      <section className="py-32 px-4 bg-slate-950 text-white relative overflow-hidden">
        {/* Decorative elements for distinction */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full translate-x-1/2 translate-y-1/2 blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-6">Photorealistic Experience</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Cinematic 3D Visualizations</h3>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              Experience the future of Bangladeshi architecture with hyper-realistic 4K renderings. 
              We utilize advanced ray-tracing, PBR materials, and photometric lighting to showcase your 
              home under various atmospheric conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {EXTERIOR_VISUALIZATIONS.map((viz) => (
              <div key={viz.id} className="group bg-white/5 rounded-[32px] overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 flex flex-col">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={viz.image} 
                    alt={`${viz.title} - 3D Exterior Visualization of Modern House Design Bangladesh`} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  {/* Time of Day Badge */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-400 border border-white/10">
                    {viz.timeOfDay || 'Architectural View'}
                  </div>
                  {/* Overlay for realism details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h4 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{viz.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                    {viz.details}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">4K Rendering</span>
                    <a 
                      href={`https://wa.me/88${WHATSAPP_NUMBER}?text=I%20want%20to%20see%20more%203D%20renders%20like%20${viz.title}`}
                      className="text-blue-500 hover:text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all"
                    >
                      Enlarge <span className="text-lg">⊕</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <div className="inline-block p-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full">
              <a 
                href={`https://wa.me/88${WHATSAPP_NUMBER}?text=I%20want%20to%20order%20a%20full%203D%20visualization%20package.`}
                className="block bg-slate-950 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-transparent transition-all"
              >
                Request Custom 3D Package
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO/Architectural Awareness */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Why Architecture Matters in Bangladesh</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Our portfolio isn't just a collection of pictures; it's a testament to the safety, durability, and aesthetics of homes across Bangladesh. At {BUSINESS_NAME}, we take pride in being one of the top-rated <strong>house design services in Bangladesh</strong>. We ensure every line drawn translates into a secure, beautiful legacy for your family.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            <span className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">Modern Architecture</span>
            <span className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">Duplex Specialist</span>
            <span className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">Structural Safety</span>
            <span className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">3D Visualization</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

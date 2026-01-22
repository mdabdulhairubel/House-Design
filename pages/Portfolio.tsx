
import React from 'react';
import { PORTFOLIO, EXTERIOR_VISUALIZATIONS, WHATSAPP_NUMBER, BUSINESS_NAME } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-900 text-white pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1920&q=80" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Our Master Portfolio</h1>
          <p className="text-blue-300 text-xl max-w-2xl mx-auto font-light">
            Showcasing architectural excellence across Dhaka, Chattogram, Sylhet and every corner of Bangladesh.
          </p>
        </div>
      </div>

      {/* Stats Counter (Realistic feel) */}
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

      {/* Main Portfolio Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Completed Projects</h2>
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PORTFOLIO.map((item) => (
            <div key={item.id} className="group bg-white rounded-[40px] overflow-hidden shadow-lg border border-gray-50 flex flex-col transition-all hover:shadow-2xl">
              <div className="relative overflow-hidden h-72">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <div className="text-white text-xs font-bold uppercase tracking-widest">
                     Click for details
                   </div>
                </div>
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

      {/* NEW SECTION: 3D Exterior Visualizations */}
      <section className="py-24 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">3D Exterior Visualizations</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-light">
              Experience the future of Bangladeshi architecture with our hyper-realistic 3D renderings. 
              We utilize advanced lighting, global illumination, and high-fidelity material mapping to show you 
              every detail of your home under realistic day and night conditions.
            </p>
          </div>

          <div className="space-y-16">
            {EXTERIOR_VISUALIZATIONS.map((viz, idx) => (
              <div key={viz.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-2/3 relative group">
                  <div className="overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src={viz.image} 
                      alt={viz.title} 
                      className="w-full h-[500px] object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-6 right-6 bg-blue-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                    4K Realistic Rendering
                  </div>
                </div>
                <div className="lg:w-1/3 text-left">
                  <h3 className="text-3xl font-bold mb-6 text-blue-400">{viz.title}</h3>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed italic">
                    {viz.details}
                  </p>
                  <ul className="space-y-4 mb-10 text-gray-300">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Photometric Lighting Analysis
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      High-Definition Texture Mapping
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Environment & Landscape Integration
                    </li>
                  </ul>
                  <a 
                    href={`https://wa.me/88${WHATSAPP_NUMBER}?text=I%20am%20interested%20in%203D%20Exterior%20Visualizations.`}
                    className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all shadow-xl"
                  >
                    Request 3D Sample
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Professional Architects in Bangladesh</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Our portfolio isn't just a collection of pictures; it's a testament to the safety, durability, and aesthetics of homes across Bangladesh. At {BUSINESS_NAME}, we take pride in being one of the top-rated <strong>house design services in Bangladesh</strong>.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span>Modern Homes</span>
            <span>Duplex Specialist</span>
            <span>Structural Experts</span>
            <span>3D Visualization</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;


import React from 'react';
import { BUSINESS_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 pt-32">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Designing Homes for the Future of Bangladesh</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Welcome to <span className="font-bold text-blue-600">{BUSINESS_NAME}</span>, where we believe every Bangladeshi family deserves a home that is both beautiful and structurally sound.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Based in the heart of our vibrant nation, we specialize in modern architecture that respects traditional needs. From the busy streets of Dhaka to the serene landscapes of Sylhet, we have left our mark through quality house plan designs.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
              <div>
                <h4 className="font-bold text-2xl text-blue-900">Affordability</h4>
                <p className="text-sm text-gray-500">Premium designs that fit local budgets.</p>
              </div>
              <div>
                <h4 className="font-bold text-2xl text-blue-900">Quality</h4>
                <p className="text-sm text-gray-500">Rigorous structural standards for safety.</p>
              </div>
            </div>
          </div>
          <div className="relative">
             <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80" alt="Architectural Excellence in Bangladesh" className="rounded-3xl shadow-2xl relative z-10" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-100 rounded-full -z-0 opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We Are Different</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Our approach is built on trust, transparency, and technical excellence.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
               <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Local Knowledge</h3>
            <p className="text-gray-600">We understand Bangladeshi plot constraints and municipal approval processes (RAJUK/CDA).</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
               <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Modern 3D Tech</h3>
            <p className="text-gray-600">We use the latest rendering tools to ensure you can see every detail of your future home clearly.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
               <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
            <p className="text-gray-600">No hidden fees. We provide clear design packages for both budget and premium homeowners.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

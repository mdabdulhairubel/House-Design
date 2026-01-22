
import React from 'react';
import { SERVICES, WHATSAPP_NUMBER } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gray-50 py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Expert House Design Services in Bangladesh</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Professional architectural solutions specifically designed for Bangladeshi environments, plot sizes, and building regulations.
          </p>
        </div>
      </div>

      {/* Detailed Services Loop */}
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">
        {SERVICES.map((service, index) => (
          <section key={service.id} id={service.slug} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
            <div className="lg:w-1/2">
              <div className="relative">
                <img src={service.image} alt={service.title} className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 -z-10 rounded-2xl hidden lg:block"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">{service.title}</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-4 mb-10">
                {service.benefits.map((benefit, bIndex) => (
                  <div key={bIndex} className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <a 
                href={`https://wa.me/88${WHATSAPP_NUMBER}?text=I%20am%20interested%20in%20${service.title}`}
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg"
              >
                Inquire about {service.title}
              </a>
            </div>
          </section>
        ))}
      </div>

      {/* SEO Content Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-blue prose-lg">
          <h2 className="text-center font-bold text-gray-900">Why Choose Local House Design Experts in Bangladesh?</h2>
          <p className="text-gray-700">
            Designing a home in Bangladesh requires more than just aesthetics. Our architectural team understands the local soil conditions, weather patterns (monsoon rain and humidity), and municipal regulations of major cities like <strong>Dhaka, Chattogram, and Rajshahi</strong>.
          </p>
          <p className="text-gray-700">
            We specialize in <strong>modern house design in Bangladesh</strong> that optimizes small plot sizes like 2-katha or 3-katha without compromising on comfort or ventilation. Whether you need a <strong>duplex house design BD</strong> or a simple single-storey plan, we deliver detailed blueprints that any contractor can follow easily.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-blue-800 mb-2">Cost Optimization</h4>
                <p className="text-sm text-gray-600">We design based on local material availability, helping you save on construction costs.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-blue-800 mb-2">Local Approval Ready</h4>
                <p className="text-sm text-gray-600">All our plans meet the standards for RAJUK, CDA, KDA, and other city corporation approvals.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

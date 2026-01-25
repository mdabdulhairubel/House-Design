
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, PORTFOLIO, BLOG_POSTS, WHATSAPP_NUMBER, BUSINESS_NAME } from '../constants';

const Home: React.FC = () => {
  const faqs = [
    {
      q: "What is the cost of a house design in Bangladesh?",
      a: "House design costs in Bangladesh vary based on the floor area and design type. At House Design BD, we offer low-cost house designs starting from 10,000 BDT for basic plans, while luxury duplex designs range higher based on architectural complexity."
    },
    {
      q: "How much does a 3 bedroom house plan cost?",
      a: "A standard 3 bedroom house plan (approx 1200 sq ft) in Bangladesh typically costs between 15,000 to 40,000 BDT for a complete architectural and structural drawing set."
    },
    {
      q: "Do you provide duplex house designs in villages?",
      a: "Yes! House Design BD specializes in 'Village House Design in Bangladesh'. we create beautiful and functional duplex designs that are suitable for rural environments and local soil conditions."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80" 
            alt="House Design BD - Best Modern Duplex Design in Bangladesh" 
            className="w-full h-full object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[1] tracking-tighter">
            House Design <span className="text-blue-500">BD</span>
          </h1>
          <p className="text-xl md:text-3xl mb-12 opacity-95 max-w-4xl mx-auto font-medium leading-relaxed">
            #1 Architectural Firm for <span className="underline decoration-blue-500 underline-offset-8">House Design in Bangladesh</span>. Specializing in Modern Duplexes, 3 Bedroom Plans, and Low Cost Home Designs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl hover:scale-105">
              Get Free Design Quote
            </Link>
            <a href={`https://wa.me/88${WHATSAPP_NUMBER}`} className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl flex items-center justify-center gap-3 hover:scale-105">
              WhatsApp Consult
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Top Architects in BD</h2>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">House Design Services in Bangladesh</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <article key={service.id} className="group p-2 bg-white rounded-3xl transition-all border border-gray-100 hover:shadow-2xl">
                <div className="mb-6 overflow-hidden rounded-2xl h-60">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="px-4 pb-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-3">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Content Paragraph for Crawlers */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-4">Why We Are #1</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Mastering House Design in Bangladesh</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              When searching for <strong>House Design BD</strong>, landowners look for reliability and precision. Our architectural firm provides the most comprehensive <strong>House Design in Bangladesh</strong>. We ensure every <strong>house plan</strong> follows RAJUK guidelines and modern safety standards.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                <p className="text-4xl font-black text-blue-500">2500+</p>
                <p className="text-xs uppercase font-bold tracking-widest mt-2">Projects Delivered</p>
             </div>
             <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                <p className="text-4xl font-black text-blue-500">100%</p>
                <p className="text-xs uppercase font-bold tracking-widest mt-2">Approval Rate</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW: Blog Preview Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Insights & Guides</h2>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Latest on House Design BD</h3>
            </div>
            <Link to="/blog" className="text-blue-600 font-black uppercase tracking-widest text-xs border-b-2 border-blue-600 pb-2 hover:text-blue-700 hover:border-blue-700 transition-all">
              View All Posts
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 6).map((post) => (
              <article key={post.id} className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-4 line-clamp-2 hover:text-blue-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h4>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em]">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve - Local SEO Enhancement */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Nationwide Service</h2>
            <h3 className="text-3xl md:text-5xl font-black text-gray-900">House Design Service in Major Cities</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["Dhaka", "Chattogram", "Sylhet", "Rajshahi", "Khulna", "Barishal", "Mymensingh", "Rangpur", "Cumilla", "Gazipur", "Narayanganj", "Bogura"].map(city => (
              <div key={city} className="p-4 rounded-2xl bg-gray-50 text-center border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all cursor-default">
                <span className="font-bold text-gray-700">{city}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-gray-500 text-sm font-medium">
            Providing the best <strong>architectural designs</strong> and <strong>structural drawings</strong> across all 64 districts of Bangladesh.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-5xl font-black text-gray-900 mb-16">House Design BD: Common Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4">{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic SEO Keyword Cloud */}
      <section className="py-12 bg-white text-center border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-6">Search Relevance Tags</p>
          <div className="flex flex-wrap justify-center gap-2 opacity-40">
            {["house design bd", "house plan in bangladesh", "duplex home design", "village house design", "3 bedroom house plan", "architect dhaka", "low cost house design", "structural design bangladesh", "modern home design bd", "rajuk approved design"].map(tag => (
              <span key={tag} className="text-xs font-semibold px-3 py-1 bg-gray-100 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto bg-blue-600 rounded-[50px] p-12 md:p-24 text-center text-white shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to start?</h2>
          <p className="text-xl mb-12 opacity-80 max-w-2xl mx-auto">Get your professional house plan today from the leading <strong>House Design in Bangladesh</strong> company.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all">Request Quote</Link>
            <a href={`https://wa.me/88${WHATSAPP_NUMBER}`} className="bg-green-500 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-green-600 transition-all">WhatsApp Now</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

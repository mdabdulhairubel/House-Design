
import React, { useState } from 'react';
import { WHATSAPP_NUMBER, EMAIL, BUSINESS_NAME } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    plotSize: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Get Your House Design Quote</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Have questions about your project? Whether you're in <strong>Dhaka, Chattogram, Sylhet, or any other city in Bangladesh</strong>, our experts are ready to assist you.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <div className="bg-green-100 p-3 rounded-full text-green-600">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.555 4.197 1.61 6.041L0 24l6.135-1.61a11.782 11.782 0 005.914 1.57h.005c6.637 0 12.05-5.414 12.05-12.05 0-3.217-1.252-6.242-3.525-8.514z"/></svg>
               </div>
               <div>
                 <h4 className="font-bold text-gray-900">WhatsApp Us</h4>
                 <p className="text-gray-600 mb-2">Fastest way to get a response.</p>
                 <a href={`https://wa.me/88${WHATSAPP_NUMBER}`} className="text-green-600 font-bold text-lg hover:underline">{WHATSAPP_NUMBER}</a>
               </div>
            </div>

            <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
               </div>
               <div>
                 <h4 className="font-bold text-gray-900">Email Us</h4>
                 <p className="text-gray-600 mb-2">For detailed project documents.</p>
                 <a href={`mailto:${EMAIL}`} className="text-blue-600 font-bold hover:underline">{EMAIL}</a>
               </div>
            </div>
          </div>

          <div className="pt-8 opacity-60">
             <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-4">Bangladesh HQ</h4>
             <p className="text-sm">Uttara Model Town, Dhaka, Bangladesh</p>
             <p className="text-sm">Open: Saturday - Thursday, 9:00 AM - 7:00 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Send an Inquiry</h2>
          {submitted ? (
            <div className="bg-green-50 text-green-700 p-8 rounded-2xl text-center">
               <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               <h3 className="text-xl font-bold mb-2">Message Received!</h3>
               <p>Our lead architect will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                  <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="01XXX-XXXXXX" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Project Location (City)</label>
                  <input name="location" value={formData.location} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="e.g. Dhaka, Sylhet" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Plot Size (Katha/Sqft)</label>
                  <input name="plotSize" value={formData.plotSize} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="e.g. 3 Katha" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Project Details</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none" placeholder="Tell us about your dream home..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 transform hover:-translate-y-1 active:scale-95">
                Send Quote Request
              </button>
              <p className="text-center text-xs text-gray-400 mt-4 italic">
                By submitting this form, you agree to our privacy policy. We will only use your data to provide a design quote.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

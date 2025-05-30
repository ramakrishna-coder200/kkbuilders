
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Excellence in Every Detail
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At KK Building Solutions & Services, we combine traditional craftsmanship with modern innovation. 
              Our certified team delivers precision-engineered solutions that stand the test of time.
            </p>
            <p className="text-sm text-gray-500 italic">
              "Our values are built into every beam, tile, and drop of sealant we use."
            </p>
          </div>
          
               {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl font-bold text-red-600 mb-3 group-hover:scale-110 transition-transform">35+</div>
              <div className="text-slate-700 font-semibold uppercase tracking-wide text-sm">Completed Projects</div>
              <div className="text-xs text-gray-500 mt-2">Successfully delivered on time and budget</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl font-bold text-red-600 mb-3 group-hover:scale-110 transition-transform">30+</div>
              <div className="text-slate-700 font-semibold uppercase tracking-wide text-sm">Skilled Professionals</div>
              <div className="text-xs text-gray-500 mt-2">Certified experts across all specializations</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl font-bold text-red-600 mb-3 group-hover:scale-110 transition-transform">3+</div>
              <div className="text-slate-700 font-semibold uppercase tracking-wide text-sm">Years Excellence</div>
              <div className="text-xs text-gray-500 mt-2">Proven track record of quality delivery</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl font-bold text-red-600 mb-3 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-slate-700 font-semibold uppercase tracking-wide text-sm">Client Satisfaction</div>
              <div className="text-xs text-gray-500 mt-2">Commitment to exceeding expectations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


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
          
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-red-600 mb-2">30+</div>
              <div className="text-sm text-gray-600">Skilled Professionals</div>
            </div>
            <div className="text-center p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-red-600 mb-2">35+</div>
              <div className="text-sm text-gray-600">Completed Projects</div>
            </div>
            <div className="text-center p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-red-600 mb-2">3+</div>
              <div className="text-sm text-gray-600">Years Excellence</div>
            </div>
            <div className="text-center p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

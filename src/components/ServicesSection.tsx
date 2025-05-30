
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: 'Waterproofing',
      description: 'Advanced waterproofing solutions using certified materials and proven techniques.',
      icon: '🛡️'
    },
    {
      title: 'Structural Repairs',
      description: 'Expert structural rehabilitation and strengthening for lasting durability.',
      icon: '🏗️'
    },
    {
      title: 'Flooring',
      description: 'Premium flooring solutions from industrial to decorative applications.',
      icon: '📐'
    },
    {
      title: 'Coatings & Sealants',
      description: 'High-performance protective coatings for all environmental conditions.',
      icon: '🎨'
    },
    {
      title: 'Crack Injection',
      description: 'Precision crack repair using advanced injection technologies.',
      icon: '🔧'
    },
    {
      title: 'Consulting',
      description: 'Professional construction consulting and project management services.',
      icon: '💼'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction solutions delivered with precision and expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

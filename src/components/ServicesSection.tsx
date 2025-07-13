import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Waterproofing',
      description: 'Advanced waterproofing solutions using certified materials and proven techniques.',
      icon: '🛡️',
      route: '/waterproofing'
    },
    {
      title: 'Structural Repairs',
      description: 'Expert structural rehabilitation and strengthening for lasting durability.',
      icon: '🏗️',
      route: '/structural-repairs'
    },
    {
      title: 'Flooring',
      description: 'Premium flooring solutions from industrial to decorative applications.',
      icon: '📐',
      route: '/flooring-solutions'
    },
    {
      title: 'Coatings & Sealants',
      description: 'High-performance protective coatings for all environmental conditions.',
      icon: '🎨',
      route: '/coatings-sealants'
    },
    {
      title: 'Crack Injection',
      description: 'Precision crack repair using advanced injection technologies.',
      icon: '🔧',
      route: '/crack-injection'
    },
    {
      title: 'Consulting',
      description: 'Professional construction consulting and project management services.',
      icon: '💼',
      route: '/' // Redirect to home page since no dedicated consulting page exists
    }
  ];

  const handleServiceClick = (route: string) => {
    navigate(route);
  };

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
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
              className="border border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group bg-white/80 cursor-pointer"
              onClick={() => handleServiceClick(service.route)}
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

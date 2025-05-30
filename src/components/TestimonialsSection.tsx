
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "KK Building Solutions delivered exceptional waterproofing for our commercial complex. Their attention to detail and professional approach exceeded our expectations.",
      client: "Rajesh Kumar",
      designation: "Project Manager, Visakha Constructions"
    },
    {
      quote: "The structural repair work was completed on time and within budget. The team's expertise in crack injection saved our building from major renovations.",
      client: "Priya Sharma",
      designation: "Facility Manager, Tech Park Ltd"
    },
    {
      quote: "Outstanding flooring solutions with perfect finish. Their certified materials and skilled workforce make them the best choice for industrial projects.",
      client: "Anil Reddy",
      designation: "Operations Head, Steel Industries"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h2>
          <p className="text-lg text-gray-600">What our clients say about our work</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="text-4xl text-red-600 mb-4">"</div>
                <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.client}</p>
                  <p className="text-sm text-gray-500">{testimonial.designation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

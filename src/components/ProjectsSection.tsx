
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Commercial Complex Waterproofing',
      location: 'Visakhapatnam',
      description: 'Complete waterproofing solution for 5-story commercial building',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Industrial Flooring Project',
      location: 'Gajuwaka',
      description: 'Heavy-duty industrial flooring with anti-slip coating',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Structural Repair & Restoration',
      location: 'Andhra Pradesh',
      description: 'Comprehensive structural rehabilitation of heritage building',
      image: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Project Highlights</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing our commitment to quality and precision in every project
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-red-600 text-sm mb-3">{project.location}</p>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-2 border-black hover:bg-black hover:text-white">
            Explore All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

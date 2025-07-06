import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import RamkyKrystal from '../assets/projects/RamkyOneKrystal.jpg'
import medicalCollege from '../assets/projects/medicalCollege.jpg'
import Rishnia from '../assets/projects/RisniaSkylon.jpg'
import Pharmacity from '../assets/projects/Pharmacity.jpg'
import brandix from '../assets/projects/brandix.jpg'
import mondetez from '../assets/projects/mondetez.jpg'
import navy from '../assets/projects/navy.jpg'
import navalpark from '../assets/projects/navalpark.jpg'

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'Residential Project',
      location: 'Sheela Nagar,Visakhapatnam',
      description: 'Complete waterproofing solution for 5 story buildings and 100 Villas.',
      image: RamkyKrystal
    },
    {
      title: 'Commercial Project ',
      location: 'Vizianagaram, Paderu',
      description: 'Complete waterproofing Solution for Hospital and Colleges ',
      image: medicalCollege
    },
    {
      title: 'Residential Project',
      location: 'Bachupally, Hyderabad ',
      description: 'Complete waterproofing solution for 12 story Buildings - 400 Flats.',
      image: Rishnia
    },
    {
      title: ' Commercial Project ',
      location: ' Lankalapalem,Visakhapatnam',
      description: ' PU Coatings for terrace and Paintings for entire Buildings.',
      image: Pharmacity
    },
    {
      title: 'Heavy Duty Industrial Project',
      location: 'Atchuthapuram,Andhra Pradesh.',
      description: '  Heavy duty Epoxy and PU Flooring system.',
      image: brandix
    },
    {
      title: ' Industrial Project',
      location: 'Tada , Tirupati district',
      description: 'Complete waterproofing solution for Terraces and Treated tanks.',
      image: mondetez
    },
    {
      title: ' Industrial Project',
      location: 'Navi Mumbai',
      description: 'Complete waterproofing solution for Officers Buildings and Substations.',
      image: navy
    },
    {
      title: ' Structural Repairs and Restoration',
      location: 'Naval Park,Visakhapatnam ',
      description: 'Structural Repairs and shotcreating for 20+ years old Buildings.',
      image: navalpark
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

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
          {visibleProjects.map((project, index) => (
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
          {!showAll && (
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-black hover:bg-black hover:text-white"
              onClick={() => setShowAll(true)}
            >
              Explore All Projects
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

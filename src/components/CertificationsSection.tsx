import React from 'react';
import FOSROC from '../assets/certifications/forroc.jpg';
import DrFixit from '../assets/certifications/DrFixit.jpg' 
import MYKArment from '../assets/certifications/mykArment.jpg';
import sunanda from '../assets/certifications/sunanda.jpg';
const CertificationsSection = () => {
  const certifications = [
    { name: 'FOSROC', description: 'Certified Applicator', image: FOSROC },
    { name: 'Dr. Fixit', description: 'Authorized Partner', image: DrFixit },
    { name: 'MYK Arment', description: 'Certified Installer', image: MYKArment },
     { name: 'Sunanda', description: 'Certified Applicator', image: sunanda }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Authorised Applicator and Distributor for</h3>
          <p className="text-gray-600">Our certifications ensure the highest standards of quality and reliability</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 mx-auto">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="max-h-20 max-w-20 object-contain"
                />
              </div>
              <span className="font-bold text-lg text-gray-700">
                {/* Authorised Applicator and Distributor for {cert.name} */}
              </span>
              {/* <p className="text-sm text-gray-600">{cert.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

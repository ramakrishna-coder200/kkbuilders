
import React from 'react';

const CertificationsSection = () => {
  const certifications = [
    { name: 'FOSROC', description: 'Certified Applicator' },
    { name: 'Dr. Fixit', description: 'Authorized Partner' },
    { name: 'MYK Arment', description: 'Certified Installer' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Certified Applicator. Trusted by Industry Leaders.</h3>
          <p className="text-gray-600">Our certifications ensure the highest standards of quality and reliability</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 mx-auto">
                <span className="font-bold text-lg text-gray-700">{cert.name}</span>
              </div>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

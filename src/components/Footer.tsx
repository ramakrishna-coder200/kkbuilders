import React from 'react';
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KK Building Solutions & Services</h3>
            <p className="text-gray-400 mb-4">
              Delivering certified construction solutions with precision and excellence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/kkbuildingsolutionsandservices" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.facebook.com/share/18PKTLeEkb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-2xl"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/917416759126"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-2xl"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="/waterproofing"
                  className="hover:text-white transition-colors"
                >
                  Waterproofing
                </a>
              </li>
              <li><a  href="/stuctural-repairs"
                  className="hover:text-white transition-colors">Structural Repairs</a></li>
              <li>
                <a
                  href="/flooring-solutions"
                  className="hover:text-white transition-colors"
                >
                  Flooring Solutions
                </a>
              </li>
              <li>
                <a
                  href="/coatings-sealants"
                  className="hover:text-white transition-colors"
                >
                  Coatings & Sealants
                </a>
              </li>
              <li>
                <a
                  href="/crack-injection"
                  className="hover:text-white transition-colors"
                >
                  Crack Injection
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2"><FaMapMarkerAlt /> Gajuwaka, Visakhapatnam</p>
              <p className="flex items-center gap-2"><FaMapMarkerAlt /> Andhra Pradesh</p>
              <a
                href="mailto:Kkbsaservices@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <FaEnvelope /> Kkbsaservices@gmail.com
              </a>
              <a
                href="tel:+918297759126"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <FaPhone /> +91 82977 59126
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 KK Building Solutions & Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a
                href="https://maps.app.goo.gl/r92d7nzZQP18e959A"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

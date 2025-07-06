import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import logo from '../assets/Logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all bg-white shadow-lg duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center font-bold text-xl">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="KK Building Solutions Logo"
                className="h-8 w-auto mr-2 rounded-full"
                style={{ borderRadius: '50%' }}
              />
              <span>Building Solutions & Services</span>
            </a>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link =>
              link.label === 'Contact' ? (
                <a
                  key={link.label}
                  href="tel:+918297759126"
                  className="text-sm hover:text-red-600 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm hover:text-red-600 transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
            <Button
              asChild
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <a
                href="https://wa.me/917416759126"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Quote
              </a>
            </Button>
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-2xl text-gray-800 focus:outline-none"
              aria-label="Open menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-[999] transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          {/* Show logo and title in mobile sidebar */}
          <div className="flex items-center font-bold text-lg">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="KK Building Solutions Logo"
                className="h-8 w-auto mr-2 rounded-full"
                style={{ borderRadius: '50%' }}
              />
              <span>Building Solutions & Services</span>
            </a>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-800 focus:outline-none"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col space-y-6 px-6 py-8">
          {navLinks.map(link =>
            link.label === 'Contact' ? (
              <a
                key={link.label}
                href="tel:+918297759126"
                className="text-base text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-base text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 text-white w-full"
          >
            <a
              href="https://wa.me/917416759126"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Get Quote
            </a>
          </Button>
        </div>
      </div>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[998] md:hidden transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;

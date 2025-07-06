import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const StickyContact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/917416759126', '_blank');
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 shadow-lg z-40"
      aria-label="Contact Us on WhatsApp"
    >
      💬
    </Button>
  );
};

export default StickyContact;

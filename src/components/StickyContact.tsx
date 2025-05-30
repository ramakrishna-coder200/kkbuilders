
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 shadow-lg z-40"
      aria-label="Contact Us"
    >
      💬
    </Button>
  );
};

export default StickyContact;

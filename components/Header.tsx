import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../constants';
import { Button } from './ui/Button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 shadow-lg border-b border-zinc-800' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-white tracking-tighter">
          Master<span className="text-yellow-500">Barber</span>
        </div>
        
        <Button 
            variant="outline" 
            className={`!py-2 !px-6 text-sm hidden sm:inline-flex ${!isScrolled && 'bg-zinc-950/50 border-zinc-700'}`} 
            onClick={scrollToPricing}
        >
          GARANTIR VAGA
        </Button>
      </div>
    </header>
  );
};
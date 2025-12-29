import React from 'react';
import { Section } from './ui/Section';
import { CUTS_SHOWCASE } from '../constants';

export const CoursePreview = () => {
  return (
    <Section id="conteudo">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-2 uppercase leading-tight">
          VEJA ALGUNS CORTES QUE VOCÊ VAI <span className="text-yellow-500">APRENDER</span> DENTRO DO CURSO:
        </h2>
        <div className="w-24 h-1 bg-yellow-600 rounded-full mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
        {CUTS_SHOWCASE.map((item, index) => (
          <div key={index} className="group relative bg-zinc-900 rounded-xl overflow-hidden shadow-lg border border-zinc-800 transition-all duration-300 hover:border-yellow-600/50 hover:shadow-yellow-600/10">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 pt-12">
              <p className="text-white text-sm md:text-base font-bold text-center leading-tight">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center space-y-6">
        <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 uppercase">
          E MUITO MAIS...
        </h3>
      </div>
    </Section>
  );
};
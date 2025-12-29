import React from 'react';
import { Section } from './ui/Section';
import { IMAGES, COMPANY_INFO } from '../constants';

export const Instructor = () => {
  return (
    <Section id="instrutor" darker>
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <div className="inline-block px-3 py-1 bg-yellow-900/20 border border-yellow-700/30 rounded text-yellow-500 text-sm font-semibold tracking-wider uppercase mb-2">
            Seu Mentor
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            {COMPANY_INFO.instructor}
          </h2>
          <h3 className="text-xl text-zinc-400 font-medium">Master Barber & Educador com +10 anos de experiência</h3>
          
          <div className="w-20 h-1 bg-yellow-600 rounded-full my-6"></div>
          
          <p className="text-zinc-300 leading-relaxed text-lg">
            Ricardo começou cortando cabelo na garagem de casa e hoje é dono de uma das maiores redes de barbearia da cidade. Já formou mais de 2.000 alunos presencialmente e online.
          </p>
          <p className="text-zinc-300 leading-relaxed text-lg">
            Seu objetivo é elevar o nível da barbearia no Brasil, ensinando não apenas a técnica perfeita, mas como transformar essa habilidade em um negócio lucrativo.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 relative">
            <div className="absolute inset-0 bg-yellow-500 rounded-2xl transform rotate-3 translate-x-2 translate-y-2 opacity-20"></div>
            <img 
              src={IMAGES.instructor} 
              alt={COMPANY_INFO.instructor} 
              className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-500 border border-zinc-700"
            />
        </div>

      </div>
    </Section>
  );
};
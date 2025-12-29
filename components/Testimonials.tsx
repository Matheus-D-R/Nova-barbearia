import React from 'react';
import { Section } from './ui/Section';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <Section id="depoimentos">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
          O Que Nossos <span className="text-yellow-500">Alunos Dizem</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          Não acredite apenas na minha palavra. Veja os resultados de quem já aplicou o método.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl relative hover:-translate-y-2 transition-transform duration-300">
            <Quote className="absolute top-6 right-6 text-zinc-800 w-12 h-12 fill-zinc-800" />
            
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, starI) => (
                <Star key={starI} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>

            <p className="text-zinc-300 mb-8 leading-relaxed italic">"{t.text}"</p>

            <div className="flex items-center gap-4 mt-auto">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-yellow-600/50" />
              <div>
                <h4 className="text-white font-bold">{t.name}</h4>
                <p className="text-yellow-600 text-xs font-semibold uppercase">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
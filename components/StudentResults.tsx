import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { RESULTS_CONTENT, COMPANY_INFO } from '../constants';
import { motion } from 'framer-motion';

export const StudentResults = () => {
  return (
    <Section darker className="bg-zinc-950 border-t border-zinc-900">
      <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
        
        {/* Icon */}
        <div className="mb-6">
            <img 
                src={RESULTS_CONTENT.icon} 
                alt="Ícone de Certificado" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain mx-auto"
            />
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6 uppercase leading-tight">
          {RESULTS_CONTENT.headlinePrefix} <br className="md:hidden" />
          <span className="text-yellow-500 text-5xl md:text-7xl block my-2">{RESULTS_CONTENT.headlineNumber}</span>
          <span className="text-xl md:text-3xl block">{RESULTS_CONTENT.headlineSuffix}</span>
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-3xl leading-relaxed">
            {RESULTS_CONTENT.description}
        </p>

        {/* Highlight Grid (4 Images) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-8">
            {RESULTS_CONTENT.highlightImages.map((img, index) => (
                <div key={index} className="aspect-[9/16] rounded-xl overflow-hidden shadow-lg border border-zinc-800 group">
                    <img 
                        src={img} 
                        alt={`Resultado de aluno ${index + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                </div>
            ))}
        </div>

        {/* Horizontal Scroll / Carousel */}
        <div className="w-full relative group mb-12">
            <div className="flex gap-4 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scrollbar-hide -mx-4 md:mx-0">
                {RESULTS_CONTENT.carouselImages.map((img, index) => (
                    <div key={index} className="snap-center shrink-0 w-[200px] md:w-[240px] aspect-[9/16] rounded-lg overflow-hidden border border-zinc-800/50 shadow-md">
                        <img 
                            src={img} 
                            alt={`Galeria de alunos ${index + 1}`} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
            {/* Visual fade indicators for scroll */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none md:hidden" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none md:hidden" />
        </div>

        {/* CTA Button */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <Button 
                onClick={() => window.open(COMPANY_INFO.checkoutUrl, '_blank')}
                className="px-8 py-5 text-lg md:text-xl shadow-[0_0_20px_rgba(234,179,8,0.3)]"
            >
                SIM, QUERO ME TORNAR ALUNO TAMBÉM!
            </Button>
        </motion.div>

      </div>
    </Section>
  );
};
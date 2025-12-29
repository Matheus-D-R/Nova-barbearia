import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';
import { HERO_CONTENT, HERO_FEATURES, IMAGES } from '../constants';
import { motion } from 'framer-motion';

export const Hero = () => {
  const handleCtaClick = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-zinc-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.heroBg} 
          alt="Barber Background" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Urgency Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-900/30 border border-yellow-600/30 text-yellow-500 text-sm font-semibold uppercase tracking-wider"
        >
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
          Vagas Limitadas para Nova Turma
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight uppercase"
        >
          VEJA COMO SE TORNAR UM <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">BARBEIRO PROFISSIONAL</span> COMEÇANDO DO <span className="text-yellow-500">ABSOLUTO ZERO</span>
        </motion.h1>

        {/* Subheadlines & Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mb-12 space-y-4"
        >
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-medium">
            {HERO_CONTENT.subheadline}
          </p>
          <div className="inline-block bg-zinc-900/80 border border-zinc-800 rounded-lg p-3 md:p-4 mt-2 backdrop-blur-sm">
             <p className="text-lg md:text-xl text-yellow-500 font-bold">
              {HERO_CONTENT.callout}
            </p>
          </div>
        </motion.div>

        {/* REPLACED VIDEO WITH LIST */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-5xl bg-zinc-950/50 backdrop-blur-sm border border-zinc-800/60 rounded-2xl p-6 md:p-10 mb-12 shadow-2xl"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">
            ACESSO IMEDIATO A <span className="text-yellow-500">+70 DE AULAS</span> QUE VÃO MUDAR A SUA VIDA!
          </h2>
          <p className="text-zinc-400 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Você vai aprender muito mais do que apenas cortar cabelo, você vai <strong className="text-white">DOMINAR TODAS AS TÉCNICAS PARA SE TORNAR UM BARBEIRO PROFISSIONAL COMPLETO</strong>, veja abaixo o que você vai aprender:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 text-left">
            {HERO_FEATURES.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 bg-zinc-900/80 p-3 rounded-lg border border-zinc-800 hover:border-yellow-600/30 transition-all duration-300 group">
                <div className="w-5 h-5 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-yellow-500/20 transition-colors">
                    <Check className="text-yellow-500 w-3 h-3" />
                </div>
                <span className="text-zinc-300 text-sm font-medium leading-tight group-hover:text-white transition-colors">
                    {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center w-full"
        >
          <Button onClick={handleCtaClick} className="text-xl px-12 py-5 shadow-yellow-900/20">
            QUERO GARANTIR MINHA VAGA
          </Button>
          <div className="mt-4 flex items-center gap-4 text-sm text-zinc-400">
            <span className="flex items-center gap-1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-3 opacity-50 grayscale" alt="" /> Cartão</span>
            <span className="flex items-center gap-1">PIX</span>
            <span className="flex items-center gap-1">Boleto</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
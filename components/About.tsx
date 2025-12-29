import React from 'react';
import { Section } from './ui/Section';
import { BENEFITS, MODULES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <Section id="sobre" className="border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Benefits Grid */}
        <div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            O Que Você Vai <span className="text-yellow-500">Aprender</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
            Nosso método foi desenhado para eliminar a teoria inútil e focar 100% no que traz resultado dentro da barbearia.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BENEFITS.map((benefit, index) => (
              <div key={index} className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700/50 hover:border-yellow-500/30 transition-colors">
                <benefit.icon className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Modules List */}
        <div className="bg-zinc-950 p-8 md:p-10 rounded-2xl border border-zinc-800 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="w-1 h-8 bg-yellow-500 rounded-full"></span>
            Cronograma do Curso
          </h3>
          <ul className="space-y-4">
            {MODULES.map((module, index) => (
              <li key={index} className="flex items-start gap-4 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all">
                <CheckCircle2 className="w-6 h-6 text-yellow-600 shrink-0 mt-0.5" />
                <span className="text-zinc-300 font-medium">{module}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </Section>
  );
};
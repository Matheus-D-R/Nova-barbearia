import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { DETAILED_BONUSES, BONUS_SUMMARY, PRICING, COMPANY_INFO, LIFE_CHANGING_IMAGES } from '../constants';
import { ShieldCheck, Check, ArrowRight } from 'lucide-react';

export const Guarantee = () => {
  return (
    <Section id="pricing" className="bg-zinc-900 border-t border-zinc-800">
      
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
          BÔNUS EXCLUSIVOS
        </h2>
        <p className="text-zinc-400 text-lg">
          Além de tudo isso, nós também preparamos <strong className="text-yellow-500">+7 BÔNUS INCRÍVEIS</strong> para você <strong className="text-green-500">TOTALMENTE GRÁTIS</strong>
        </p>
      </div>

      {/* DETAILED BONUS LIST */}
      <div className="flex flex-col gap-8 max-w-4xl mx-auto mb-16">
        {DETAILED_BONUSES.map((bonus, i) => (
          <div key={i} className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden hover:border-yellow-600/30 transition-colors">
            <div className="flex flex-col md:flex-row items-center">
              {/* Image Side */}
              <div className="w-full md:w-2/5 h-64 md:h-full relative shrink-0">
                <img 
                  src={bonus.image} 
                  alt={bonus.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Content Side */}
              <div className="p-6 md:p-8 flex-1 text-center md:text-left">
                {bonus.badge && (
                  <span className="inline-block bg-yellow-900/30 text-yellow-500 text-xs font-bold px-2 py-1 rounded mb-2 uppercase tracking-wide border border-yellow-600/20">
                    {bonus.badge}
                  </span>
                )}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                  {bonus.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base mb-6 leading-relaxed">
                  {bonus.description}
                </p>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <span className="text-zinc-500 line-through text-lg font-bold">{bonus.price}</span>
                  <span className="bg-green-600/20 text-green-500 px-3 py-1 rounded font-bold border border-green-600/30">
                    GRÁTIS
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BONUS SUMMARY BOX */}
      <div className="max-w-3xl mx-auto bg-zinc-950 border-2 border-dashed border-zinc-800 rounded-2xl p-6 md:p-10 mb-20">
        <div className="space-y-4 mb-8">
          {BONUS_SUMMARY.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-center text-sm gap-1 border-b border-zinc-900 pb-2 last:border-0">
              <span className="text-zinc-300 font-medium">{item.name}</span>
              <span className="text-zinc-500">{item.price}</span>
            </div>
          ))}
        </div>
        
        <div className="bg-zinc-900 p-6 rounded-xl space-y-3">
          <div className="flex justify-between items-center text-red-500 font-bold">
            <span>VALOR TOTAL DOS BÔNUS:</span>
            <span className="line-through decoration-red-500">R$ 882,00</span>
          </div>
          <div className="flex justify-between items-center text-green-500 font-black text-xl md:text-2xl">
            <span>VOCÊ VAI PAGAR:</span>
            <span>R$ 0</span>
          </div>
        </div>
      </div>

      {/* REASSURANCE TEXT & CTA (Video Removed) */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <p className="text-zinc-400 mt-8 text-lg">
          Basicamente estaremos pegando em sua mão na sua jornada de se tornar um <strong className="text-white">BARBEIRO PROFISSIONAL DE SUCESSO</strong>.
        </p>

        <div className="mt-10">
            <Button 
                onClick={() => window.open(COMPANY_INFO.checkoutUrl, '_blank')}
                className="px-8 py-5 text-lg md:text-xl shadow-[0_0_30px_rgba(234,179,8,0.3)]"
            >
                SIM, QUERO TER ACESSO COMPLETO AO CURSO!
            </Button>
        </div>
      </div>

      {/* LIFE CHANGING RESULTS SECTION */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-10">
           <h2 className="text-2xl md:text-4xl font-serif font-bold text-white uppercase leading-tight">
             O CURSO QUE ESTÁ MUDANDO A VIDA DE MILHARES DE ALUNOS!
           </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {LIFE_CHANGING_IMAGES.map((img, idx) => (
             <div key={idx} className="aspect-[9/16] rounded-xl overflow-hidden border border-zinc-800 shadow-lg group">
               <img 
                 src={img} 
                 alt={`Resultado aluno ${idx+1}`}
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 loading="lazy"
               />
             </div>
           ))}
        </div>
      </div>

      {/* PRICE & GUARANTEE CARD (Kept at bottom as closer) */}
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-3xl p-1 p-px relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400"></div>
        
        <div className="bg-zinc-950 rounded-[22px] p-8 md:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

          <div className="relative z-10">
            <h3 className="text-2xl text-zinc-300 font-medium mb-2">Oferta por tempo limitado</h3>
            <div className="flex justify-center items-end gap-2 mb-6">
              <span className="text-zinc-500 text-2xl line-through decoration-red-500 mb-2">{PRICING.fullPrice}</span>
            </div>
            <div className="mb-8">
              <span className="text-6xl md:text-8xl font-bold text-white tracking-tighter">{PRICING.discountPrice.split(' ')[1]}</span>
              <p className="text-yellow-500 font-bold text-xl mt-2">ou {PRICING.installments}</p>
            </div>

            <Button onClick={() => window.open(COMPANY_INFO.checkoutUrl, '_blank')} fullWidth className="max-w-md text-xl py-6 mb-6 shadow-[0_0_40px_rgba(234,179,8,0.4)] animate-pulse hover:animate-none">
              QUERO ME INSCREVER AGORA <ArrowRight className="ml-2 w-6 h-6" />
            </Button>

            <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm mb-8">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Pagamento 100% Seguro</span>
              <span className="mx-2">•</span>
              <Check className="w-4 h-4 text-green-500" />
              <span>Acesso Imediato</span>
            </div>

            {/* Guarantee Badge */}
            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 max-w-lg mx-auto flex items-center gap-4 text-left">
              <ShieldCheck className="w-16 h-16 text-yellow-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white text-lg">Garantia Incondicional de 7 Dias</h4>
                <p className="text-zinc-400 text-sm">Se você não gostar do conteúdo, devolvemos 100% do seu dinheiro sem perguntas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Section>
  );
};
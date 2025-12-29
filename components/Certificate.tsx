import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { IMAGES, PRICING, COMPANY_INFO } from '../constants';
import { Plus } from 'lucide-react';

export const Certificate = () => {
  return (
    <Section darker className="text-center relative bg-gradient-to-b from-zinc-950 to-zinc-900 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Plus Icon Decoration */}
        <div className="mb-6 animate-bounce">
            <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                <Plus className="w-8 h-8 text-yellow-500" />
            </div>
        </div>

        {/* Certificate Headline */}
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 uppercase">
          2 Certificados de Conclusão
        </h2>
        
        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Você também irá ganhar estes <strong className="text-green-400">2 MARAVILHOSOS CERTIFICADOS</strong>, para colocar na parede da sua barbearia e passar ainda mais credibilidade e confiança para seus clientes.
        </p>
        
        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-10">
            <div className="relative group">
                 <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-yellow-900 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                 <img 
                    src={IMAGES.certificate1} 
                    alt="Certificado Básico" 
                    className="relative rounded-lg shadow-2xl w-full hover:scale-[1.02] transition-transform duration-300"
                />
            </div>
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-yellow-900 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <img 
                    src={IMAGES.certificate2} 
                    alt="Certificado Profissional" 
                    className="relative rounded-lg shadow-2xl w-full hover:scale-[1.02] transition-transform duration-300"
                />
            </div>
        </div>

        {/* Validity Text */}
        <div className="space-y-2 mb-16">
            <p className="text-zinc-300 font-medium flex items-center justify-center gap-2">
                Válidos em todo o território nacional <span className="text-xl">🇧🇷</span>
            </p>
            <p className="text-zinc-400 text-sm">
                Disponível para imprimir já com 7 dias de curso
            </p>
        </div>

        {/* PRICE / OFFER BOX */}
        <div className="w-full bg-zinc-950 rounded-2xl border-2 border-yellow-600/20 p-8 md:p-12 shadow-[0_0_50px_rgba(234,179,8,0.1)] relative overflow-hidden" id="offer-box">
             {/* Background Pattern */}
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
            
            <div className="relative z-10">
                <h2 className="text-lg md:text-xl font-bold text-white mb-4 leading-tight uppercase">
                    COMPRANDO HOJE, VOCÊ ADQUIRE NOSSO CURSO <span className="text-yellow-500 underline decoration-yellow-500/50">PAGANDO MENOS DE R$ 0,50 POR DIA</span>, MAS CORRE POR QUE ESTÁ ACABANDO.
                </h2>
                
                <div className="mb-6">
                    <h2 className="text-4xl md:text-5xl font-black text-green-500 animate-pulse tracking-tight mb-4">
                        84% DE DESCONTO
                    </h2>
                    
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-zinc-500 text-xl line-through font-bold">De {PRICING.fullPrice}</span>
                        <span className="text-zinc-300 text-2xl font-bold">Por Apenas</span>
                        <span className="text-yellow-500 text-4xl md:text-5xl font-black">{PRICING.installments}</span>
                        <span className="text-white text-xl font-medium mt-1">ou <strong>{PRICING.discountPrice}</strong> à vista</span>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <Button 
                        onClick={() => window.open(COMPANY_INFO.checkoutUrl, '_blank')} 
                        className="w-full max-w-md py-6 text-lg md:text-xl shadow-[0_0_30px_rgba(234,179,8,0.4)] animate-pulse hover:animate-none"
                    >
                        SIM, QUERO REALIZAR MINHA INSCRIÇÃO AGORA!
                    </Button>
                    
                    <img 
                        src={IMAGES.securityBadges} 
                        alt="Compra Segura" 
                        className="h-8 md:h-10 opacity-80"
                    />
                </div>
            </div>
        </div>

      </div>
    </Section>
  );
};
import React, { useState } from 'react';
import { Section } from './ui/Section';
import { FAQ_ITEMS } from '../constants';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section darker>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12 text-center uppercase">
          Dúvidas Frequentes
        </h2>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="border border-zinc-800 rounded-lg bg-zinc-900 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-zinc-800 transition-colors"
              >
                <span className="font-bold text-white text-lg">{item.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                        className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-zinc-800/50 [&_strong]:text-zinc-200 [&_strong]:font-bold [&_ul]:list-none [&_ul]:mt-3 [&_ul]:space-y-2 [&_li]:block [&_small]:text-zinc-500 [&_small]:block [&_small]:mt-2 [&_a]:text-yellow-500 [&_a]:underline"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
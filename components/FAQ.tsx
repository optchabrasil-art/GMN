'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqItems = [
  {
    question: "O que é o Google Meu Negócio?",
    answer: "É uma ferramenta gratuita que permite gerenciar como sua empresa aparece na Pesquisa Google e no Maps, ajudando você a atrair e interagir com clientes locais."
  },
  {
    question: "Como faço para minha empresa aparecer no Google?",
    answer: "Basta criar ou reivindicar seu perfil, preencher todas as informações corretamente e mantê-lo atualizado com fotos, horários e postagens regulares."
  },
  {
    question: "Preciso pagar para ter um perfil?",
    answer: "Não, o perfil básico é totalmente gratuito. Nossa equipe oferece o serviço de otimização e gestão profissional para maximizar seus resultados e poupar seu tempo."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 2xl:py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 max-w-4xl 2xl:max-w-5xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-[#3c4043] text-center mb-10 sm:mb-16 2xl:mb-20">
          Respostas para suas perguntas
        </h2>

        <div className="space-y-2 sm:space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-4 sm:py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors px-2 sm:px-4 rounded-lg"
              >
                <span className="text-base sm:text-lg 2xl:text-xl font-medium text-[#3c4043] pr-4 sm:pr-8">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#5f6368] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#5f6368] flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 sm:pb-6 px-2 sm:px-4 text-sm sm:text-base 2xl:text-lg text-[#5f6368] leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#3c4043] text-center mb-16">
          Respostas para suas perguntas
        </h2>

        <div className="flex justify-end mb-4">
          <button className="text-[#1a73e8] text-sm font-medium flex items-center gap-1 hover:underline">
            Abrir tudo <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors px-4 rounded-lg"
              >
                <span className="text-lg font-medium text-[#3c4043] pr-8">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-[#5f6368] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#5f6368] flex-shrink-0" />
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
                    <div className="pb-6 px-4 text-[#5f6368] leading-relaxed">
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

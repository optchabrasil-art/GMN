'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

const steps = [
  {
    number: "1",
    title: "Reivindicar",
    description: "Assuma o controle da sua empresa no Google. É rápido e garante que suas informações estejam seguras."
  },
  {
    number: "2",
    title: "Personalizar",
    description: "Adicione o horário de funcionamento, fotos e outros detalhes para que clientes próximos vejam sua empresa."
  },
  {
    number: "3",
    title: "Gerenciar",
    description: "Compartilhe novidades, responda a avaliações e interaja com os clientes no Google."
  }
];

export function Steps() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 2xl:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-[#3c4043] mb-4 sm:mb-6">
          Mostre o melhor da sua empresa
        </h2>
        <p className="text-base sm:text-lg 2xl:text-xl text-[#5f6368] mb-8 sm:mb-10 max-w-2xl 2xl:max-w-4xl mx-auto">
          Alcance mais clientes em três etapas simples com o Google Meu Negócio.
        </p>
        
        <Link 
          href="#" 
          className="inline-block bg-[#1a73e8] text-white font-medium px-8 sm:px-10 py-3 rounded-md shadow-sm hover:bg-[#1557b0] transition-colors mb-16 sm:mb-20"
        >
          Fale com uma especialista
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 2xl:gap-24 max-w-6xl 2xl:max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center px-4 sm:px-0"
            >
              <span className="text-6xl sm:text-7xl 2xl:text-8xl font-bold text-[#1a73e8] mb-4 sm:mb-6 opacity-80">{step.number}</span>
              <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-bold text-[#3c4043] mb-3 sm:mb-4">{step.title}</h3>
              <p className="text-base sm:text-lg 2xl:text-xl text-[#5f6368] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

const steps = [
  {
    number: "1",
    title: "Reivindicar",
    description: "Crie um Perfil da Empresa ou gerencie um que já esteja na Busca e no Maps"
  },
  {
    number: "2",
    title: "Personalizar",
    description: "Adicione o horário de funcionamento, fotos e outros detalhes para que clientes próximos vejam sua empresa"
  },
  {
    number: "3",
    title: "Gerenciar",
    description: "Compartilhe novidades, responda a avaliações e interaja com os clientes no Google"
  }
];

export function Steps() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#3c4043] mb-6">
          Mostre o melhor da sua empresa
        </h2>
        <p className="text-lg text-[#5f6368] mb-10 max-w-2xl mx-auto">
          Alcance mais clientes em três etapas simples com o Perfil da Empresa gratuito.
        </p>
        
        <Link 
          href="#" 
          className="inline-block bg-[#1a73e8] text-white font-medium px-10 py-3 rounded-md shadow-sm hover:bg-[#1557b0] transition-colors mb-20"
        >
          Começar agora
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <span className="text-7xl font-bold text-[#1a73e8] mb-6 opacity-80">{step.number}</span>
              <h3 className="text-2xl font-bold text-[#3c4043] mb-4">{step.title}</h3>
              <p className="text-[#5f6368] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

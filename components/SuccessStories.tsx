'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Depois que otimizamos nosso perfil no Google Meu Negócio, o número de ligações e agendamentos dobrou. Os clientes nos encontram muito mais fácil agora.",
    author: "Centro Automotivo Confiança",
    location: "São Paulo, SP"
  },
  {
    quote: "Nossas reservas aumentaram em 40% depois que atualizamos nosso cardápio e fotos no perfil. O movimento no almoço nunca esteve tão bom!",
    author: "Restaurante Sabor da Casa",
    location: "Rio de Janeiro, RJ"
  },
  {
    quote: "Recebemos pedidos de orçamento todos os dias diretamente pelo Google. A visibilidade que ganhamos transformou nosso negócio completamente.",
    author: "Espaço Celebrar Salão de Festas",
    location: "Belo Horizonte, MG"
  }
];

export function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 sm:py-20 lg:py-24 2xl:py-32 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-[#3c4043] text-center mb-10 sm:mb-16 2xl:mb-20">
          Histórias de sucesso que adoramos
        </h2>
        
        <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-lg overflow-hidden max-w-4xl 2xl:max-w-5xl mx-auto text-center relative min-h-[350px] sm:min-h-[400px] flex items-center justify-center">
          <div className="p-8 sm:p-12 lg:p-20 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="text-xl sm:text-2xl lg:text-4xl 2xl:text-5xl font-medium text-[#3c4043] mb-6 sm:mb-8 leading-tight">
                  “{testimonials[currentIndex].quote}”
                </blockquote>
                <div className="text-sm sm:text-base 2xl:text-lg text-[#5f6368]">
                  <p className="font-bold">{testimonials[currentIndex].author}</p>
                  <p>{testimonials[currentIndex].location}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
          <button onClick={prev} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#5f6368]" />
          </button>
          <span className="text-sm sm:text-base text-[#5f6368] font-medium">{currentIndex + 1} / {testimonials.length}</span>
          <button onClick={next} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#5f6368]" />
          </button>
        </div>
      </div>
    </section>
  );
}

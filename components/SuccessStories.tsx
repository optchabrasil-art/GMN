'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function SuccessStories() {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#3c4043] text-center mb-16">
          Histórias de sucesso que adoramos
        </h2>
        
        <div className="bg-white rounded-[2rem] shadow-lg overflow-hidden max-w-4xl mx-auto text-center">
          <div className="p-12 lg:p-20 flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="text-2xl lg:text-4xl font-medium text-[#3c4043] mb-8 leading-tight">
                “Depois que otimizamos nosso perfil no Google Meu Negócio, o número de ligações e agendamentos dobrou. Os clientes nos encontram muito mais fácil agora.”
              </blockquote>
              <div className="text-[#5f6368]">
                <p className="font-bold">Centro Automotivo Confiança</p>
                <p>São Paulo, SP</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-6 h-6 text-[#5f6368]" />
          </button>
          <span className="text-[#5f6368] font-medium">1 / 3</span>
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
            <ChevronRight className="w-6 h-6 text-[#5f6368]" />
          </button>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqItems = [
  {
    question: "Como faço para adicionar e editar os atributos da minha empresa? Quero exibir os serviços oferecidos, como entrega e retirada.",
    answer: "Você pode gerenciar os atributos da sua empresa diretamente no seu Perfil da Empresa no Google. Acesse seu perfil, clique em 'Editar perfil' e procure pela seção de informações comerciais ou atributos. Lá você poderá marcar opções como 'Retirada na porta', 'Entrega sem contato', 'Consumo no local' e muito mais."
  },
  {
    question: "Como faço para atualizar meu cardápio?",
    answer: "Para atualizar seu cardápio, faça login no Perfil da Empresa, selecione seu restaurante e procure pela opção 'Cardápio'. Você pode adicionar itens, descrições, preços e até fotos de cada prato para atrair mais clientes."
  },
  {
    question: "Como faço para aceitar pedidos de comida no meu perfil?",
    answer: "O Google permite que você aceite pedidos diretamente pelo seu perfil através de parceiros integrados. Você pode configurar isso na seção 'Pedidos de comida' do seu painel de gerenciamento, escolhendo os parceiros de entrega com os quais você já trabalha."
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

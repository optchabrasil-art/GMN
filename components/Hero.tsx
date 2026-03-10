'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-6xl font-bold text-[#3c4043] leading-tight mb-6"
          >
            Mostre o que torna <br />
            <span className="text-[#1a73e8]">seu restaurante especial</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#5f6368] leading-relaxed mb-8"
          >
            Ajude os clientes a encontrar e escolher seu restaurante ou seu comércio de alimentos no Google com base no seu cardápio, nas suas fotos e muito mais. Você também pode aceitar pedidos e reservas on-line no seu perfil, simplificando o processo para que os clientes escolham entre refeições para viagem ou consumo no local.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="#" 
              className="inline-block bg-[#1a73e8] text-white font-medium px-8 py-3 rounded-full shadow-md hover:bg-[#1557b0] transition-all transform hover:scale-105"
            >
              Começar agora
            </Link>
          </motion.div>
        </div>
        <div className="flex-1 relative">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Background Image (Coffee Machine) */}
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl translate-x-4 lg:translate-x-12">
              <Image 
                src="https://picsum.photos/seed/espresso-machine-pro/800/600" 
                alt="Espresso Machine" 
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Mobile Mockup (Café Local Profile) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute left-0 lg:-left-8 top-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-[6px] border-white overflow-hidden z-20"
            >
              {/* Profile Header Images */}
              <div className="flex h-32 gap-1 p-1">
                <div className="flex-1 relative rounded-tl-[1.8rem] overflow-hidden">
                  <Image src="https://picsum.photos/seed/latte-art/300/300" alt="Latte Art" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 relative rounded-tr-[1.8rem] overflow-hidden">
                  <Image src="https://picsum.photos/seed/croissants-top/300/300" alt="Croissants" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#3c4043]">Café Local</h3>
                  <div className="flex items-center gap-1 text-sm mt-1">
                    <span className="font-medium">4.6</span>
                    <div className="flex text-yellow-400">
                      {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                    </div>
                    <span className="text-[#1a73e8] ml-1">80 avaliações</span>
                  </div>
                  <p className="text-sm text-[#5f6368]">Cafeteria</p>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-100 text-sm font-medium">
                  <span className="text-[#1a73e8] border-b-2 border-[#1a73e8] pb-2 px-2">Visão geral</span>
                  <span className="text-[#5f6368] pb-2 px-2 opacity-40">Cardápio</span>
                  <span className="text-[#5f6368] pb-2 px-2 opacity-40">Avaliações</span>
                </div>

                {/* Action Icons */}
                <div className="flex justify-between px-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <div className="w-5 h-5 bg-[#1a73e8] rounded-sm opacity-80" />
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 py-2 px-1 border border-[#dadce0] rounded-full text-[10px] font-bold text-[#1a73e8] uppercase tracking-wider">
                    Peça e retire
                  </button>
                  <button className="flex-1 py-2 px-1 border border-[#dadce0] rounded-full text-[10px] font-bold text-[#1a73e8] uppercase tracking-wider">
                    Peça para entrega
                  </button>
                </div>

                {/* Status */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs text-[#3c4043]">
                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="w-2 h-2 text-green-600">✓</div>
                    </div>
                    <span>Refeição no local</span>
                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="w-2 h-2 text-green-600">✓</div>
                    </div>
                    <span>Para viagem</span>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div className="flex items-center gap-3 text-xs">
                    <div className="w-4 h-4 bg-blue-100 rounded-sm" />
                    <span className="text-green-700 font-medium">Aberto</span>
                    <span className="text-[#5f6368]">• Fecha às 20h</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Mockup image container */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="bg-white rounded-[2.5rem] shadow-2xl p-4 border-8 border-gray-100">
                <div className="rounded-[1.5rem] overflow-hidden bg-gray-50 aspect-[9/19.5] relative">
                  <Image 
                    src="https://picsum.photos/seed/restaurant-profile/400/800" 
                    alt="Google Business Profile Mockup" 
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay for profile details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-48 h-48 bg-white rounded-2xl shadow-xl p-2 hidden lg:block"
              >
                <Image 
                  src="https://picsum.photos/seed/coffee/200/200" 
                  alt="Coffee" 
                  width={200} 
                  height={200}
                  className="rounded-xl object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 w-56 h-40 bg-white rounded-2xl shadow-xl p-2 hidden lg:block"
              >
                <Image 
                  src="https://picsum.photos/seed/croissant/300/200" 
                  alt="Croissants" 
                  width={300} 
                  height={200}
                  className="rounded-xl object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

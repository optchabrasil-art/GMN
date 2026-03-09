'use client';

import React from 'react';
import { Navbar, SubNavbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeatureSection } from '@/components/FeatureSection';
import { SuccessStories } from '@/components/SuccessStories';
import { Steps } from '@/components/Steps';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SubNavbar />
      
      <Hero />

      <FeatureSection 
        title="Destaque informações essenciais"
        description="Apresente informações essenciais sobre sua empresa, como horário de funcionamento, opções de consumo local e entrega, dados para contato e muito mais."
        imageSrc="https://picsum.photos/seed/info/600/600"
        bgColor="bg-[#e8f0fe]"
      />

      <FeatureSection 
        title="Compartilhe seus melhores pratos e o cardápio"
        description="Mostre aos clientes o que você oferece adicionando fotos do seu cardápio e dos melhores pratos. Além disso, publique ofertas especiais ou promoções."
        imageSrc="https://picsum.photos/seed/menu/600/600"
        reverse
        bgColor="bg-[#fff8e1]"
      />

      <FeatureSection 
        title="Aceite pedidos de comida on-line com o Google"
        description="Facilite o processo de pedidos para retirada ou entrega no seu perfil. Você pode gerenciar as preferências dos pedidos indicando um parceiro certificado, desativando o recurso de pedidos, entre outras opções."
        imageSrc="https://picsum.photos/seed/order/600/600"
        bgColor="bg-[#fce8e6]"
      />

      <FeatureSection 
        title="Permita que os clientes façam reservas"
        description="Use o Reservar com o Google para ajudar os clientes a reservar uma mesa pelo seu perfil."
        imageSrc="https://picsum.photos/seed/reserve/600/600"
        reverse
        bgColor="bg-[#e6f4ea]"
      />

      <SuccessStories />
      
      <Steps />

      <FAQ />

      <Footer />
    </main>
  );
}

'use client';

import React from 'react';
import { SubNavbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeatureSection } from '@/components/FeatureSection';
import { SuccessStories } from '@/components/SuccessStories';
import { Steps } from '@/components/Steps';
import { FAQ } from '@/components/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <SubNavbar />
      
      <Hero />

      <FeatureSection 
        title="Seja encontrado por quem procura o que você vende"
        description="Apareça no topo das buscas locais e no Google Maps. Mostre endereço, horário de funcionamento e telefone para facilitar o contato dos clientes."
        imageSrc="https://storage.googleapis.com/aistudio-build-attachments/1741805408611-image.png"
        bgColor="bg-[#e8f0fe]"
      />

      <FeatureSection 
        title="Construa confiança com avaliações"
        description="Incentive seus clientes a deixarem avaliações positivas e responda a comentários para mostrar que você se importa com o atendimento."
        imageSrc="https://storage.googleapis.com/aistudio-build-attachments/1741805411709-image.png"
        reverse
        bgColor="bg-[#fff8e1]"
      />

      <FeatureSection 
        title="Mostre seus produtos e serviços"
        description="Crie um catálogo digital gratuito. Adicione fotos de alta qualidade dos seus produtos, serviços ou do seu espaço para atrair mais visitantes."
        imageSrc="https://storage.googleapis.com/aistudio-build-attachments/1741805410188-image.png"
        bgColor="bg-[#fce8e6]"
      />

      <FeatureSection 
        title="Acompanhe seus resultados"
        description="Entenda como os clientes encontram sua empresa. Veja quantas pessoas ligaram, acessaram seu site ou pediram rotas para o seu endereço."
        imageSrc="https://picsum.photos/seed/analytics-chart/600/600"
        reverse
        bgColor="bg-[#e6f4ea]"
      />

      <SuccessStories />
      
      <Steps />

      <FAQ />
    </main>
  );
}

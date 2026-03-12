'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Youtube, Facebook, Instagram, HelpCircle, Globe } from 'lucide-react';

const footerLinks = [
  {
    title: "Produtos",
    links: ["Google Ads", "Anúncios do YouTube", "Merchant Center", "Perfil da Empresa", "Google Analytics", "Manufacturer Center"]
  },
  {
    title: "Aprendizado e suporte",
    links: ["Think with Google", "Central de Ajuda do Google Ads", "Seu guia do Merchant Center", "Seu guia do Google Ads", "Comunidade Google Advertiser"]
  },
  {
    title: "Parceiros e desenvolvedores",
    links: ["Google Partners", "Site do Google Developers", "Scripts do Google Ads", "Tags de remarketing do Google Ads", "API Google Ads"]
  },
  {
    title: "Mais soluções",
    links: ["Workspace", "Chrome", "Google Cloud", "AdSense", "AdMob"]
  }
];

export function Footer() {
  return (
    <footer className="bg-[#f8f9fa] pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Social Links */}
        <div className="flex items-center gap-6 mb-12 pb-8 border-b border-gray-200">
          <span className="text-sm font-medium text-[#5f6368]">Siga nossas páginas</span>
          <div className="flex items-center gap-4">
            <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
              <span className="sr-only">Blogger</span>
              <div className="w-5 h-5 bg-[#5f6368] rounded-sm" />
            </Link>
            <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
              <Twitter className="w-5 h-5 text-[#5f6368]" />
            </Link>
            <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
              <Youtube className="w-5 h-5 text-[#5f6368]" />
            </Link>
            <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
              <Facebook className="w-5 h-5 text-[#5f6368]" />
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-[#3c4043] mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link href="#" className="text-sm text-[#5f6368] hover:text-[#1a73e8] transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-xs text-[#5f6368] mb-8">
          Os resultados reais variam de acordo com o anunciante.
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t border-gray-200 gap-6">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
            <Link href="/" className="text-lg font-bold text-[#5f6368] tracking-tight mr-2">
              Logo
            </Link>
            <Link href="#" className="text-xs text-[#5f6368] hover:underline">Sobre a Plataforma</Link>
            <Link href="#" className="text-xs text-[#5f6368] hover:underline">Produtos</Link>
            <Link href="#" className="text-xs text-[#5f6368] hover:underline">Privacidade</Link>
            <Link href="#" className="text-xs text-[#5f6368] hover:underline">Termos</Link>
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="#" className="flex items-center gap-2 text-xs text-[#5f6368] hover:underline">
              <HelpCircle className="w-4 h-4" /> Ajuda
            </Link>
            <div className="flex items-center gap-2 text-xs text-[#5f6368] cursor-pointer hover:underline">
              <Globe className="w-4 h-4" /> Brasil - Português (Brasil) <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}

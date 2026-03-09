'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white sticky top-0 z-50 h-14">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center">
          <Image 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
            alt="Google" 
            width={74} 
            height={24}
            className="object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-[#5f6368]">
          <Link href="#" className="hover:text-black transition-colors">Por onde começar?</Link>
          <Link href="#" className="hover:text-black transition-colors">Soluções</Link>
          <Link href="#" className="hover:text-black transition-colors">Aprendizado e insights</Link>
          <Link href="#" className="hover:text-black transition-colors">Receber suporte</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <Image 
              src="https://picsum.photos/seed/user/32/32" 
              alt="User" 
              width={32} 
              height={32}
              referrerPolicy="no-referrer"
            />
          </div>
        </button>
      </div>
    </nav>
  );
}

export function SubNavbar() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-lg font-medium text-[#3c4043]">
          Google Perfil da Empresa
        </Link>
        <div className="hidden lg:flex items-center gap-6 text-sm text-[#5f6368]">
          <Link href="#" className="hover:text-black transition-colors">Varejo</Link>
          <Link href="#" className="hover:text-black transition-colors">Serviços</Link>
          <Link href="#" className="hover:text-black transition-colors font-medium text-[#1a73e8] border-b-2 border-[#1a73e8] pb-4 -mb-4">Restaurantes</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link href="#" className="text-sm font-medium text-[#1a73e8] px-4 py-2 rounded hover:bg-blue-50 transition-colors">
          Fazer login
        </Link>
        <Link href="#" className="text-sm font-medium text-white bg-[#1a73e8] px-6 py-2 rounded shadow-sm hover:bg-[#1557b0] transition-colors">
          Começar agora
        </Link>
      </div>
    </div>
  );
}

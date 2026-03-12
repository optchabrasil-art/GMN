'use client';

import React from 'react';
import Link from 'next/link';

export function SubNavbar() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-lg font-medium text-[#3c4043]">
          Google Meu Negócio
        </Link>
        <div className="hidden lg:flex items-center gap-6 text-sm text-[#5f6368]">
          <Link href="#" className="hover:text-black transition-colors">Lojas Físicas</Link>
          <Link href="#" className="hover:text-black transition-colors">Serviços</Link>
          <Link href="#" className="hover:text-black transition-colors font-medium text-[#1a73e8] border-b-2 border-[#1a73e8] pb-4 -mb-4">Profissionais Liberais</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link href="#" className="text-sm font-medium text-white bg-[#1a73e8] px-6 py-2 rounded shadow-sm hover:bg-[#1557b0] transition-colors">
          Fale com uma especialista
        </Link>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';

export function SubNavbar() {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 2xl:px-12 py-3 sm:py-4 bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center gap-4 sm:gap-8">
        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm sm:text-base 2xl:text-lg text-[#5f6368]">
          <Link href="#" className="hover:text-black transition-colors">Lojas Físicas</Link>
          <Link href="#" className="hover:text-black transition-colors">Serviços</Link>
          <Link href="#" className="hover:text-black transition-colors font-medium text-[#1a73e8] border-b-2 border-[#1a73e8] pb-4 -mb-4">Profissionais Liberais</Link>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <Link href="#" className="text-xs sm:text-sm 2xl:text-base font-medium text-white bg-[#1a73e8] px-4 sm:px-6 py-2 rounded shadow-sm hover:bg-[#1557b0] transition-colors">
          Fale com uma especialista
        </Link>
      </div>
    </div>
  );
}

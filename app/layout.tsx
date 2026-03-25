import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Google Meu Negócio - Optcha Assessoria',
  description: 'Destaque sua empresa no Google com a Optcha Assessoria.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-[#3c4043]">
        {children}
      </body>
    </html>
  );
}

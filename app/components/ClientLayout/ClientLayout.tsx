"use client";

import { useTheme } from '@/app/hooks/useTheme';
const inter = Inter({ subsets: ["latin"] });

import Header from '../Header/Header';
import { Inter } from 'next/font/google';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  
  return <html lang="en" className={`h-full `}>
  <body className={`shiki ${inter.className} flex flex-col h-full`}>
    <Header />
    <main className="grow h-0 p-4">
      {children}
    </main>
  </body>
</html>
}

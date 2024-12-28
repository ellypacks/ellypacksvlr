// elly-site/src/app/[locale]/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import Header from '@/components/ui/Header';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elly Pack',
  description: 'Professional video editing pack',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt-BR' }];
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  if (locale !== 'en' && locale !== 'pt-BR') {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-white dark:bg-[#2D3748]">
          {children}
        </main>
      </body>
    </html>
  );
}

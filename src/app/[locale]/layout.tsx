// elly-site/src/app/[locale]/layout.tsx

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google'
import Footer from '@/components/ui/Footer'
import LanguageSelector from '@/components/ui/LanguageSelector'
import Navigation from '@/components/ui/Navigation'
import { ThemeProvider } from '@/components/theme-provider'
import ThemeToggle from '@/components/ui/ThemeToggle'
import Link from 'next/link'
import { locales } from '@/i18n/settings';
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

// 1. Definir a função para gerar rotas estáticas com base em `locales`.
export function generateStaticParams() {
  // O Next irá criar as rotas /pt-BR, /en, etc., em build time.
  return locales.map((locale) => ({
    locale,
  }));
}

// 2. Continuar com o layout assíncrono como antes
export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  // Validar se `locale` existe na sua lista de locales
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Carregar mensagens de tradução
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-gradient-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
              {/* Header */}
              <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-4">
                  <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                      href="/"
                      className="text-2xl font-bold text-gray-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-500 transition-colors"
                    >
                      Elly
                    </Link>

                    {/* Navigation */}
                    <Navigation />

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      <ThemeToggle />
                      <LanguageSelector />
                    </div>
                  </div>
                </div>
              </header>

              {/* Main Content */}
              <main className="flex-grow">{children}</main>

              {/* Footer */}
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

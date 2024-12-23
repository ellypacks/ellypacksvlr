'use client';

import React, { useEffect, useState } from 'react';
import { Globe2 } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { locales } from '@/i18n/settings';
import type { Locale } from '@/i18n/settings';

interface Language {
  code: Locale;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

const LanguageSelector: React.FC = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages.find(lang => lang.code === locale) || languages[0]
  );

  useEffect(() => {
    // Update selected language when locale changes
    const currentLang = languages.find(lang => lang.code === locale);
    if (currentLang) {
      setSelectedLanguage(currentLang);
    }
  }, [locale]);

  const handleLanguageChange = (language: Language) => {
    // Store current scroll position
    const scrollPosition = window.scrollY;
    
    // Store the position in sessionStorage
    sessionStorage.setItem('scrollPosition', scrollPosition.toString());
    
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  // Effect to restore scroll position after navigation
  useEffect(() => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition !== null) {
      window.scrollTo(0, parseInt(savedPosition));
      sessionStorage.removeItem('scrollPosition');
    }
  }, [locale]); // Run when locale changes

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors"
      >
        <Globe2 className="w-4 h-4" />
        <span className="text-sm">{selectedLanguage.flag} {selectedLanguage.name}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg overflow-hidden z-50">
          {languages.map((language) => (
            <Link
              key={language.code}
              href={pathname.replace(/^\/[^\/]+/, `/${language.code}`)}
              onClick={() => handleLanguageChange(language)}
              className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                selectedLanguage.code === language.code
                  ? 'bg-gray-100 dark:bg-gray-700 text-pink-500'
                  : 'text-gray-900 dark:text-white'
              }`}
            >
              <span className="mr-2">{language.flag}</span>
              {language.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 
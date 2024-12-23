'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Navigation: React.FC = () => {
  const t = useTranslations('navigation');

  return (
    <nav className="hidden md:flex items-center gap-6">
      <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
        {t('home')}
      </Link>
      <Link href="/courses" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
        {t('courses')}
      </Link>
      <Link href="/packs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
        {t('packs')}
      </Link>
      <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
        {t('contact')}
      </Link>
    </nav>
  );
};

export default Navigation; 
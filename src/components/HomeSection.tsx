'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import HeroSection from './HeroSection';
import CustomerCarousel from './CustomerCarousel';
import PomodoroSection from './PomodoroSection';

const HomeSection: React.FC = () => {
  const t = useTranslations('hero');

  return (
    <main className="min-h-screen bg-white dark:bg-[#2D3748]">
      <div className="container mx-auto">
        <HeroSection
          title={t('title')}
          highlightedText={t('subtitle')}
          description={t('description')}
          buttonText={t('cta')}
          titleColor="text-[#6B46C1]"
        />
      </div>
      <div className="bg-white dark:bg-[#2D3748]">
        <CustomerCarousel />
      </div>
      <div className="container mx-auto px-4 py-16">
        <PomodoroSection />
      </div>
    </main>
  );
};

export default HomeSection; 
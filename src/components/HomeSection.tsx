'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import HeroSection from './HeroSection';
import CustomerCarousel from './CustomerCarousel';

const HomeSection: React.FC = () => {
  const t = useTranslations('hero');

  return (
    <div className="w-full">
      <HeroSection
        title={t('title')}
        highlightedText={t('subtitle')}
        description={t('description')}
        buttonText={t('cta')}
        titleColor="text-[#6B46C1]"
      />
      <CustomerCarousel />
    </div>
  );
};

export default HomeSection; 
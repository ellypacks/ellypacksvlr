'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import VideoPlayer from '@/components/VideoPlayer';

const PackIncludes: React.FC = () => {
  const t = useTranslations('pack.includes');

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span className="text-[#6B46C1]">{t('title.part1')}</span>{' '}
        <span className="text-[#F56565]">{t('title.part2')}</span>
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#F56565]/25 via-[#6B46C1]/25 to-[#F56565]/25 rounded-3xl blur-xl"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-[#F56565]/15 via-[#6B46C1]/15 to-[#F56565]/15 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white dark:bg-[#1A202C] rounded-3xl overflow-hidden shadow-xl border border-[#6B46C1]/10 dark:border-transparent transform hover:scale-[1.01] transition-all duration-300 hover:shadow-[#F56565]/20">
            <VideoPlayer videoId="85yju1va4J8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackIncludes; 
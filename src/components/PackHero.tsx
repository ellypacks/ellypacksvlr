'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import VideoPlayer from '@/components/VideoPlayer';

const PackHero: React.FC = () => {
  const t = useTranslations('pack.hero');

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#6B46C1]">{t('title')}</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#2D3748] dark:text-white">
            {t('subtitle')}
          </h2>
          
          <div className="relative group mt-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F56565] via-[#E53E3E] to-[#F56565] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <a
              href="https://pay.kiwify.com.br/7r2BTsF"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#F56565] to-[#E53E3E] hover:from-[#E53E3E] hover:to-[#F56565] text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#F56565]/20 group"
            >
              <span>{t('cta')}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* Right content - Video */}
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

export default PackHero; 
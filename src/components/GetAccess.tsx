'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

const GetAccess: React.FC = () => {
  const t = useTranslations('pack.access');

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span className="text-[#6B46C1]">{t('title.part1')}</span>{' '}
        <span className="text-[#F56565]">{t('title.part2')}</span>
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#F56565] via-[#E53E3E] to-[#F56565] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
          <a
            href="https://pay.kiwify.com.br/7r2BTsF"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#F56565] to-[#E53E3E] hover:from-[#E53E3E] hover:to-[#F56565] text-white font-bold py-6 px-8 rounded-full text-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#F56565]/20 group"
          >
            <span>{t('cta')}</span>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetAccess; 
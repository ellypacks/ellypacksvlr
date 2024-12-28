'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const AboutPack: React.FC = () => {
  const t = useTranslations('pack.about');

  return (
    <div className="w-full bg-[#6B46C1]/[0.02] dark:bg-[#1A202C] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="relative w-full aspect-square">
            <Image
              src="/images/mockups/MOCKUP.png"
              alt="Notebook Mockup"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-[#6B46C1]">{t('title.part1')}</span>{' '}
              <span className="text-[#F56565]">{t('title.part2')}</span>
            </h2>
            <p className="text-lg text-[#2D3748] dark:text-gray-300">
              {t('description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPack; 
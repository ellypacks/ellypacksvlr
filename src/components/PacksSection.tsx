'use client';

import React from 'react';
import { Star, CheckCircle, ArrowRight, Users } from 'lucide-react';
import VideoPlayer from './ui/VideoPlayer';
import { useTranslations } from 'next-intl';

const PacksSection: React.FC = () => {
  const t = useTranslations('packs');
  const commonT = useTranslations('common');
  const features = t.raw('features.list') as string[];

  return (
    <div className="min-h-screen bg-white dark:bg-[#2D3748] py-16 text-[#2D3748] dark:text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[#F56565]">{t('hero.title.part1')}</span>{' '}
            <span className="text-[#6B46C1]">{t('hero.title.part2')}</span>
          </h1>
          <p className="text-xl text-[#2D3748] dark:text-gray-300 mb-8">
            {t('hero.description')}
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#F56565]" fill="currentColor" />
              <span className="text-[#2D3748] dark:text-white">{t('hero.stats.rating')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#F56565]" />
              <span className="text-[#2D3748] dark:text-white">{t('hero.stats.students')}</span>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="relative pt-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F56565] via-[#6B46C1] to-[#F56565] rounded-3xl blur opacity-25"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#F56565] to-[#6B46C1] text-white px-8 py-2.5 rounded-full text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[#F56565]/20 z-10 whitespace-nowrap">
              {commonT('preview')}
            </div>
            <div className="relative bg-white dark:bg-[#1A202C] rounded-3xl overflow-hidden shadow-2xl border border-[#6B46C1]/20 dark:border-transparent transform hover:scale-[1.01] transition-all duration-300 hover:shadow-[#F56565]/20">
              <VideoPlayer videoId="85yju1va4J8" />
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4 mt-8 animate-fade-in-up">
            <div className="flex items-center gap-2 bg-white/10 dark:bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-[#6B46C1]/20">
              <Star className="w-5 h-5 text-[#F56565]" fill="currentColor" />
              <span className="text-[#2D3748] dark:text-white font-medium">{t('hero.stats.rating')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 dark:bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-[#6B46C1]/20">
              <Users className="w-5 h-5 text-[#F56565]" />
              <span className="text-[#2D3748] dark:text-white font-medium">{t('hero.stats.students')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-[#F56565]">{t('features.title.part1')}</span>{' '}
            <span className="text-[#6B46C1]">{t('features.title.part2')}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-white dark:bg-[#1A202C] p-4 rounded-3xl shadow-lg border border-[#6B46C1]/20 dark:border-transparent"
              >
                <CheckCircle className="w-6 h-6 text-[#6B46C1] flex-shrink-0" />
                <span className="text-lg text-[#2D3748] dark:text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-[#6B46C1] dark:bg-[#1A202C] rounded-3xl p-8 md:p-12 shadow-lg border border-[#6B46C1]/20 dark:border-transparent">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-fade-in-up">
              {t('pricing.title')}
            </h2>
            <p className="text-xl text-white/90 animate-fade-in-up animation-delay-200">
              {t('pricing.subtitle')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-8 text-center mb-8 border border-white/20 shadow-2xl hover:shadow-[#F56565]/10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#F56565] text-white px-6 py-1 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                Oferta Especial
              </div>
              <div className="text-2xl text-white mt-4 mb-2">{t('pricing.special')}</div>
              <div className="text-6xl font-bold text-[#F56565] mb-4 animate-pulse">
                {t('pricing.price')}
              </div>
              <div className="text-white/90 mb-8 text-lg">{t('pricing.access')}</div>
            </div>
            
            <ul className="text-left space-y-4 mb-8">
              {(t.raw('pricing.benefits') as string[]).map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 text-white p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
                >
                  <CheckCircle className="w-6 h-6 text-[#F56565] animate-fade-in animation-delay-300" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F56565] via-[#E53E3E] to-[#F56565] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
              <a
                href="https://pay.kiwify.com.br/7r2BTsF"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#F56565] to-[#E53E3E] hover:from-[#E53E3E] hover:to-[#F56565] text-white font-bold py-5 px-8 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#F56565]/20 group"
              >
                <span>{t('pricing.cta')}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>

          <div className="text-center text-sm text-white/80 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            {t('pricing.security')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacksSection; 
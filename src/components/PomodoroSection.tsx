'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

const PomodoroSection: React.FC = () => {
  const t = useTranslations();
  const valueT = useTranslations('value');
  const trainingT = useTranslations('training');
  const benefitsT = useTranslations('benefits');

  return (
    <div className="w-full">
      {/* First Section - Acceleration Message */}
      <div className="w-full bg-white dark:bg-[#1A202C] rounded-3xl p-12 text-center shadow-lg border border-gray-100 dark:border-transparent">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-[#F56565]">{valueT('title.part1')}</span>{' '}
          <span className="text-[#6B46C1]">{valueT('title.part2')} {valueT('title.part3')} {valueT('title.part4')}</span>{' '}
          <span className="text-[#F56565]">{valueT('title.part5')}</span>
        </h2>
        <p className="text-[#2D3748] dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          {valueT('description')}
        </p>
        <button className="bg-[#F56565] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#E53E3E] transition-colors duration-300">
          {valueT('cta')}
        </button>
      </div>

      {/* Second Section - "Is it for you?" */}
      <div className="mt-20 mb-16 text-center">
        <h2 className="text-4xl font-bold">
          <span className="text-[#F56565]">{trainingT('title.part1')}</span>{' '}
          <span className="text-[#F56565]">{trainingT('title.part2')}</span>{' '}
          <span className="text-[#6B46C1]">{trainingT('title.part3')}</span>
        </h2>
      </div>

      {/* Third Section - Three Steps */}
      <div className="space-y-16">
        {/* Step 1 */}
        <div className="bg-white dark:bg-[#1A202C] rounded-3xl p-8 flex items-center justify-between shadow-lg border border-gray-100 dark:border-transparent">
          <div className="flex-1 pr-8">
            <h3 className="text-2xl mb-4">
              <span className="text-[#F56565]">{trainingT('levels.beginner.condition')}</span>{' '}
              <span className="text-[#F56565]">{trainingT('levels.beginner.highlight')}</span>{' '}
              <span className="text-[#6B46C1]">{trainingT('levels.beginner.emphasis')}</span>.
            </h3>
            <p className="text-[#2D3748] dark:text-gray-300">
              {trainingT('levels.beginner.description')}
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-[#6B46C1]/5 dark:bg-black/40 rounded-lg p-6 text-8xl font-bold text-[#F56565] text-center shadow-inner border border-[#6B46C1]/10">01</div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white dark:bg-[#1A202C] rounded-3xl p-8 flex items-center justify-between shadow-lg border border-gray-100 dark:border-transparent">
          <div className="flex-1">
            <div className="bg-[#6B46C1]/5 dark:bg-black/40 rounded-lg p-6 text-8xl font-bold text-[#F56565] text-center shadow-inner border border-[#6B46C1]/10">02</div>
          </div>
          <div className="flex-1 pl-8">
            <h3 className="text-2xl mb-4">
              <span className="text-[#F56565]">{trainingT('levels.intermediate.condition')}</span>{' '}
              <span className="text-[#F56565]">{trainingT('levels.intermediate.highlight')}</span>{' '}
              <span className="text-[#6B46C1]">{trainingT('levels.intermediate.emphasis')}</span>.
            </h3>
            <p className="text-[#2D3748] dark:text-gray-300">
              {trainingT('levels.intermediate.description')}
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white dark:bg-[#1A202C] rounded-3xl p-8 flex items-center justify-between shadow-lg border border-gray-100 dark:border-transparent">
          <div className="flex-1 pr-8">
            <h3 className="text-2xl mb-4">
              <span className="text-[#F56565]">{trainingT('levels.advanced.condition')}</span>{' '}
              <span className="text-[#F56565]">{trainingT('levels.advanced.highlight')}</span>{' '}
              <span className="text-[#6B46C1]">{trainingT('levels.advanced.emphasis')}</span>.
            </h3>
            <p className="text-[#2D3748] dark:text-gray-300">
              {trainingT('levels.advanced.description')}
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-[#6B46C1]/5 dark:bg-black/40 rounded-lg p-6 text-8xl font-bold text-[#F56565] text-center shadow-inner border border-[#6B46C1]/10">03</div>
          </div>
        </div>
      </div>

      {/* Fourth Section - Benefits Comparison */}
      <div className="mt-20 mb-16 text-center">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-[#F56565]">{benefitsT('title.part1')}</span>{' '}
          <span className="text-[#F56565]">{benefitsT('title.part2')}</span>{' '}
          <span className="text-[#6B46C1]">{benefitsT('title.part3')}</span>
        </h2>
        
        <div className="flex gap-8 max-w-6xl mx-auto">
          {/* With Method */}
          <div className="flex-1 bg-[#6B46C1]/[0.02] dark:bg-[#1A202C] rounded-3xl p-8 text-left shadow-lg border border-[#6B46C1]/20 dark:border-transparent">
            <h3 className="text-2xl mb-6">
              <span className="text-[#6B46C1]">{benefitsT('withMethod.title.part1')}</span>{' '}
              <span className="text-[#6B46C1]">{benefitsT('withMethod.title.part2')}</span>
              <span className="text-[#2D3748] dark:text-white">{benefitsT('withMethod.title.part3')}</span>
            </h3>
            <ul className="space-y-6">
              {/* Time Management */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#6B46C1] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="text-[#6B46C1] font-medium">{benefitsT('withMethod.items.time.title')}</span>
                  <span className="text-[#6B46C1]/60"> {benefitsT('withMethod.items.time.description')}</span>
                </div>
              </li>
              {/* Focus */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#6B46C1] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="text-[#6B46C1] font-medium">{benefitsT('withMethod.items.focus.title')}</span>
                  <span className="text-[#6B46C1]/60"> {benefitsT('withMethod.items.focus.description')}</span>
                </div>
              </li>
              {/* Mental Fatigue */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#6B46C1] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="text-[#6B46C1] font-medium">{benefitsT('withMethod.items.mentalFatigue.title')}</span>
                  <span className="text-[#6B46C1]/60"> {benefitsT('withMethod.items.mentalFatigue.description')}</span>
                </div>
              </li>
              {/* Quality */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#6B46C1] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="text-[#6B46C1] font-medium">{benefitsT('withMethod.items.quality.title')}</span>
                  <span className="text-[#6B46C1]/60"> {benefitsT('withMethod.items.quality.description')}</span>
                </div>
              </li>
              {/* Discipline */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#6B46C1] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="text-[#6B46C1] font-medium">{benefitsT('withMethod.items.discipline.title')}</span>
                  <span className="text-[#6B46C1]/60"> {benefitsT('withMethod.items.discipline.description')}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Without Method */}
          <div className="flex-1 bg-[#6B46C1]/[0.02] dark:bg-[#1A202C] rounded-3xl p-8 text-left shadow-lg border border-[#6B46C1]/20 dark:border-transparent">
            <h3 className="text-2xl mb-6">
              <span className="text-[#F56565]">{benefitsT('withoutMethod.title.part1')}</span>{' '}
              <span className="text-[#F56565]">{benefitsT('withoutMethod.title.part2')}</span>
              <span className="text-[#2D3748] dark:text-white">{benefitsT('withoutMethod.title.part3')}</span>
            </h3>
            <ul className="space-y-6">
              {/* Time Waste */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#F56565] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <span className="text-[#F56565] font-medium">{benefitsT('withoutMethod.items.time.title')}</span>
                  <span className="text-[#6B46C1]/60"> {benefitsT('withoutMethod.items.time.description')}</span>
                </div>
              </li>
              {/* Distractions */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#F56565] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <span className="text-[#F56565] font-medium">{benefitsT('withoutMethod.items.distractions.title')}</span>
                  <span className="text-[#6B46C1]/60"> {benefitsT('withoutMethod.items.distractions.description')}</span>
                </div>
              </li>
              {/* Exhaustion */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#F56565] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <span className="text-[#F56565] font-medium">{benefitsT('withoutMethod.items.exhaustion.title')}</span>
                  <span className="text-[#6B46C1]/60"> {benefitsT('withoutMethod.items.exhaustion.description')}</span>
                </div>
              </li>
              {/* Quality */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#F56565] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <span className="text-[#F56565] font-medium">{benefitsT('withoutMethod.items.quality.title')}</span>
                  <span className="text-[#6B46C1]/60"> {benefitsT('withoutMethod.items.quality.description')}</span>
                </div>
              </li>
              {/* Procrastination */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#F56565] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <span className="text-[#F56565] font-medium">{benefitsT('withoutMethod.items.procrastination.title')}</span>
                  <span className="text-[#6B46C1]/60"> {benefitsT('withoutMethod.items.procrastination.description')}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <button className="mt-12 bg-[#F56565] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#E53E3E] transition-colors duration-300">
          {valueT('cta')}
        </button>
      </div>
    </div>
  );
};

export default PomodoroSection; 
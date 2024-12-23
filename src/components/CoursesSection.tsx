'use client';

import React from 'react';
import { Play, Clock, Award, Users, CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface Course {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
  level: string;
  duration: string;
  students: string;
}

interface FAQ {
  q: string;
  a: string;
}

const CoursesSection: React.FC = () => {
  const t = useTranslations('courses');
  const courses = t.raw('courseList') as Course[];
  const faqs = t.raw('faq.items') as FAQ[];

  return (
    <div className="min-h-screen bg-white dark:bg-[#2D3748] py-16">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-[#F56565]">{t('hero.title.part1')}</span>{' '}
          <span className="text-[#6B46C1]">{t('hero.title.part2')}</span>
        </h1>
        <p className="text-[#2D3748] dark:text-gray-300 text-center max-w-3xl mx-auto text-lg">
          {t('hero.description')}
        </p>
      </div>

      {/* Course Cards */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {courses.map((course: Course) => (
          <div 
            key={course.id}
            className={`bg-white dark:bg-[#1A202C] rounded-3xl overflow-hidden shadow-lg transition-transform hover:scale-105 border border-[#6B46C1]/20 dark:border-transparent ${
              course.id === 2 ? 'ring-2 ring-[#F56565]' : ''
            }`}
          >
            {/* Course Thumbnail Placeholder */}
            <div className="aspect-video bg-[#6B46C1]/5 dark:bg-black/40 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="w-16 h-16 text-[#6B46C1]" />
              </div>
            </div>

            {/* Course Info */}
            <div className="p-6">
              {course.id === 2 && (
                <div className="bg-[#F56565] text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                  {t('popular')}
                </div>
              )}
              <h3 className="text-xl font-bold mb-2 text-[#2D3748] dark:text-white">{course.title}</h3>
              <p className="text-[#2D3748] dark:text-gray-300 mb-4">{course.description}</p>

              {/* Course Stats */}
              <div className="flex items-center gap-4 mb-4 text-sm text-[#2D3748] dark:text-gray-300">
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {course.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-2 text-[#2D3748] dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#6B46C1]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price and CTA */}
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F56565] mb-4">{course.price}</div>
                <button className="w-full bg-[#F56565] text-white px-6 py-3 rounded-full font-medium hover:bg-[#E53E3E] transition-colors">
                  {t('startNow')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-[#F56565]">{t('testimonials.title.part1')}</span>{' '}
          <span className="text-[#6B46C1]">{t('testimonials.title.part2')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Cards */}
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white dark:bg-[#1A202C] p-6 rounded-3xl shadow-lg border border-[#6B46C1]/20 dark:border-transparent">
              <div className="flex items-center gap-4 mb-4">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 bg-[#6B46C1]/5 dark:bg-black/40 rounded-full" />
                <div>
                  <div className="h-4 w-24 bg-[#6B46C1]/5 dark:bg-black/40 rounded mb-2" />
                  <div className="h-3 w-16 bg-[#6B46C1]/5 dark:bg-black/40 rounded" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-[#6B46C1]/5 dark:bg-black/40 rounded" />
                <div className="h-4 w-full bg-[#6B46C1]/5 dark:bg-black/40 rounded" />
                <div className="h-4 w-3/4 bg-[#6B46C1]/5 dark:bg-black/40 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-[#F56565]">{t('faq.title.part1')}</span>{' '}
          <span className="text-[#6B46C1]">{t('faq.title.part2')}</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq: FAQ, index: number) => (
            <div key={index} className="bg-white dark:bg-[#1A202C] p-6 rounded-3xl shadow-lg border border-[#6B46C1]/20 dark:border-transparent">
              <h3 className="font-bold text-lg mb-2 text-[#2D3748] dark:text-white">{faq.q}</h3>
              <p className="text-[#2D3748] dark:text-gray-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection; 
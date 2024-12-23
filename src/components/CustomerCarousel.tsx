'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useTranslations } from 'next-intl';

import 'swiper/css';
import 'swiper/css/autoplay';

const placeholderImages = Array(10).fill(null).map((_, index) => ({
  id: index + 1,
  src: `/assets/placeholder-${index + 1}.jpg`,
  alt: `Customer ${index + 1}`,
}));

const CustomerCarousel: React.FC = () => {
  const t = useTranslations('clients');

  return (
    <div className="w-full bg-[#6B46C1]/5 dark:bg-[#1A202C] py-16 border-t border-[#6B46C1]/20 dark:border-[#F56565]/20">
      <h2 className="text-center text-[#6B46C1] dark:text-[#F56565] text-2xl font-bold mb-12">
        {t('title')}
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1.5}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 4.5,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        className="customer-carousel px-4"
      >
        {placeholderImages.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="aspect-square bg-white dark:bg-black/40 rounded-lg overflow-hidden max-w-[150px] mx-auto border border-[#6B46C1]/20 dark:border-[#F56565]/20">
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#6B46C1] dark:text-[#F56565]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container mx-auto px-4">
        <div className="text-center text-[#2D3748] dark:text-[#F56565] text-lg mt-12 max-w-3xl mx-auto opacity-90">
          {t('subtitle')}
        </div>
      </div>
    </div>
  );
};

export default CustomerCarousel; 
'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

const clients = [
  { name: 'Otsuka', image: '/images/clients/otsuka_prrofile_photo.jpg' },
  { name: 'F0rsaken', image: '/images/clients/f0rsaken_profile_photo.jpg' },
  { name: 'Nuuhfps', image: '/images/clients/Nuuhfps_profile_photo.jpg' },
  { name: 'AABW', image: '/images/clients/aaabw_profile_photo.jpg' },
  { name: 'Brunowski', image: '/images/clients/iBrunowski.jpg' }
];

const CustomerCarousel: React.FC = () => {
  const t = useTranslations('clients');

  return (
    <div className="w-full bg-[#6B46C1]/[0.02] dark:bg-[#1A202C] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#F56565]">
          {t('title')}
        </h2>
        <p className="text-lg text-center mb-12 text-[#2D3748] dark:text-gray-300 max-w-3xl mx-auto">
          {t('subtitle')}
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            }
          }}
          className="px-4"
        >
          {[...clients, ...clients, ...clients].map((client, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 md:w-28 md:h-28 mb-4 transform transition-transform duration-300 hover:scale-105">
                  <Image
                    src={client.image}
                    alt={`${client.name}'s photo`}
                    fill
                    className="object-cover rounded-full border-2 border-[#6B46C1]/20"
                  />
                </div>
                <span className="text-sm md:text-base font-medium text-[#2D3748] dark:text-white">
                  {client.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerCarousel; 
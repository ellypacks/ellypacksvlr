'use client';

import React from 'react';
import { Star, Users } from 'lucide-react';
import HeroVideoPlayer from './ui/HeroVideoPlayer';
import { useTranslations } from 'next-intl';

interface HeroSectionProps {
    title: string;
    highlightedText: string;
    description: string;
    buttonText: string;
    titleColor?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    highlightedText,
    description,
    buttonText,
    titleColor = 'text-[#2D3748]'
}) => {
    const t = useTranslations('packs.hero.stats');
    
    const handleClick = () => {
        console.log("Button clicked");
        // Add your button click logic here
    };

    return (
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 py-12">
            {/* Left content */}
            <div className="flex-1 pr-8">
                <h1 className="text-4xl font-bold mb-4">
                    <span className={titleColor}>{title}</span> <br />
                    <span className="text-[#6B46C1]">{highlightedText}</span>
                </h1>
                <p className="text-[#2D3748] dark:text-gray-300 mb-8 text-lg">
                    {description}
                </p>
                <button
                    onClick={handleClick}
                    className="bg-[#F56565] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#E53E3E] transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                    {buttonText}
                </button>
            </div>

            {/* Right content - Character placeholder */}
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="relative pt-8">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#F56565]/25 via-[#6B46C1]/25 to-[#F56565]/25 rounded-3xl blur-xl"></div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#F56565]/15 via-[#6B46C1]/15 to-[#F56565]/15 rounded-3xl blur-2xl"></div>
                        <div className="relative bg-white dark:bg-[#1A202C] rounded-3xl overflow-hidden shadow-xl border border-[#6B46C1]/10 dark:border-transparent transform hover:scale-[1.01] transition-all duration-300 hover:shadow-[#F56565]/20">
                            <HeroVideoPlayer videoId="85yju1va4J8" />
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 mt-8 animate-fade-in-up">
                        <div className="flex items-center gap-2 bg-white/10 dark:bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-[#6B46C1]/20">
                            <Star className="w-5 h-5 text-[#F56565]" fill="currentColor" />
                            <span className="text-[#2D3748] dark:text-white font-medium">{t('rating')}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 dark:bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-[#6B46C1]/20">
                            <Users className="w-5 h-5 text-[#F56565]" />
                            <span className="text-[#2D3748] dark:text-white font-medium">{t('students')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection; 
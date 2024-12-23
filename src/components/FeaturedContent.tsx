import React from 'react';
import { useTranslations } from 'next-intl';

interface FeaturedItem {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const FeaturedContent: React.FC = () => {
    const t = useTranslations('featured');

    const featuredItems: FeaturedItem[] = [
        {
            title: 'Feature 1',
            description: 'Description for feature 1',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            title: 'Feature 2',
            description: 'Description for feature 2',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: 'Feature 3',
            description: 'Description for feature 3',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-12 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Featured Content
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredItems.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center text-white mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedContent; 
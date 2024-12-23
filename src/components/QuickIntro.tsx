import React from 'react';
import { useTranslations } from 'next-intl';

const QuickIntro: React.FC = () => {
    const t = useTranslations('intro');

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image/Avatar section */}
                    <div className="w-full md:w-1/3">
                        <div className="aspect-square rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center">
                            <svg
                                className="w-1/2 h-1/2 text-pink-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            About Elly
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            Welcome to Elly, where learning meets efficiency. We specialize in creating
                            personalized learning experiences that help you achieve your goals faster
                            and more effectively.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    Our Mission
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    To empower learners with innovative tools and methods that make
                                    education more accessible and enjoyable.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    Our Approach
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Combining proven learning techniques with modern technology to
                                    create an engaging and effective learning experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuickIntro; 
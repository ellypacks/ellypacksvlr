import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface Project {
    title: string;
    description: string;
    imageUrl: string;
    category: string;
}

const FeaturedProjects: React.FC = () => {
    const t = useTranslations('projects');

    const projects: Project[] = [
        {
            title: 'Project 1',
            description: 'Description for project 1',
            imageUrl: '/placeholder-1.jpg',
            category: 'Learning',
        },
        {
            title: 'Project 2',
            description: 'Description for project 2',
            imageUrl: '/placeholder-2.jpg',
            category: 'Education',
        },
        {
            title: 'Project 3',
            description: 'Description for project 3',
            imageUrl: '/placeholder-3.jpg',
            category: 'Technology',
        },
    ];

    return (
        <section className="py-16 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Discover our latest projects and innovations in education technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <div className="relative h-48 bg-gray-200 dark:bg-gray-600">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                                    <svg
                                        className="w-12 h-12"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-pink-500 font-medium mb-2">
                                    {project.category}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <button className="text-pink-500 font-medium hover:text-pink-600 transition-colors">
                                    Learn More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects; 
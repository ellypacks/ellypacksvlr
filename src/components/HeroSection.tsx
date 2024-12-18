'use client';

import React from 'react';

interface HeroSectionProps {
    title: string;
    highlightedText: string;
    description: string;
    buttonText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    highlightedText,
    description,
    buttonText
}) => {
    const handleClick = () => {
        console.log("Button clicked");
        // Add your button click logic here
    };

    return (
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 py-12">
            {/* Left content */}
            <div className="flex-1 pr-8">
                <h1 className="text-4xl font-bold mb-4">
                    {title} <br />
                    <span className="text-pink-500">{highlightedText}</span>
                </h1>
                <p className="text-gray-700 mb-8 text-lg">
                    {description}
                </p>
                <button
                    onClick={handleClick}
                    className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-pink-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                    {buttonText}
                </button>
            </div>

            {/* Right content - Character placeholder */}
            <div className="flex-1 relative">
                <div className="w-full h-[400px] bg-gray-200 rounded-lg relative overflow-hidden">
                    {/* Placeholder design */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-gray-400 text-center">
                            <svg
                                className="w-24 h-24 mx-auto mb-4"
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
                            <p className="text-lg font-medium">Character Illustration</p>
                            <p className="text-sm">Place your character artwork here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection; 
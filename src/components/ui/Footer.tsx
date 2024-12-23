'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 text-center bg-white/80 dark:bg-[#1A202C] border-t border-[#6B46C1]/20 backdrop-blur-sm">
      <p className="text-[#2D3748] dark:text-gray-300 flex items-center justify-center gap-2">
        made with
        <svg width="20" height="20" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="0" width="10" height="10" fill="#F56565"/>
          <rect x="20" y="0" width="10" height="10" fill="#F56565"/>
          <rect x="50" y="0" width="10" height="10" fill="#F56565"/>
          <rect x="60" y="0" width="10" height="10" fill="#F56565"/>

          <rect x="0" y="10" width="10" height="10" fill="#F56565"/>
          <rect x="10" y="10" width="10" height="10" fill="#F56565"/>
          <rect x="20" y="10" width="10" height="10" fill="#F56565"/>
          <rect x="30" y="10" width="10" height="10" fill="#F56565"/>
          <rect x="40" y="10" width="10" height="10" fill="#F56565"/>
          <rect x="50" y="10" width="10" height="10" fill="#F56565"/>
          <rect x="60" y="10" width="10" height="10" fill="#F56565"/>
          <rect x="70" y="10" width="10" height="10" fill="#F56565"/>

          <rect x="0" y="20" width="10" height="10" fill="#F56565"/>
          <rect x="10" y="20" width="10" height="10" fill="#F56565"/>
          <rect x="20" y="20" width="10" height="10" fill="#F56565"/>
          <rect x="30" y="20" width="10" height="10" fill="#F56565"/>
          <rect x="40" y="20" width="10" height="10" fill="#F56565"/>
          <rect x="50" y="20" width="10" height="10" fill="#F56565"/>
          <rect x="60" y="20" width="10" height="10" fill="#F56565"/>
          <rect x="70" y="20" width="10" height="10" fill="#F56565"/>

          <rect x="0" y="30" width="10" height="10" fill="#F56565"/>
          <rect x="10" y="30" width="10" height="10" fill="#F56565"/>
          <rect x="20" y="30" width="10" height="10" fill="#F56565"/>
          <rect x="30" y="30" width="10" height="10" fill="#F56565"/>
          <rect x="40" y="30" width="10" height="10" fill="#F56565"/>
          <rect x="50" y="30" width="10" height="10" fill="#F56565"/>
          <rect x="60" y="30" width="10" height="10" fill="#F56565"/>
          <rect x="70" y="30" width="10" height="10" fill="#F56565"/>

          <rect x="10" y="40" width="10" height="10" fill="#F56565"/>
          <rect x="20" y="40" width="10" height="10" fill="#F56565"/>
          <rect x="30" y="40" width="10" height="10" fill="#F56565"/>
          <rect x="40" y="40" width="10" height="10" fill="#F56565"/>
          <rect x="50" y="40" width="10" height="10" fill="#F56565"/>
          <rect x="60" y="40" width="10" height="10" fill="#F56565"/>

          <rect x="20" y="50" width="10" height="10" fill="#F56565"/>
          <rect x="30" y="50" width="10" height="10" fill="#F56565"/>
          <rect x="40" y="50" width="10" height="10" fill="#F56565"/>
          <rect x="50" y="50" width="10" height="10" fill="#F56565"/>

          <rect x="30" y="60" width="10" height="10" fill="#F56565"/>
          <rect x="40" y="60" width="10" height="10" fill="#F56565"/>

          <path d="M 10 0 L 10 10 L 0 10 L 0 20 L 0 30 L 0 40 L 10 40 L 10 50 L 20 50 L 20 60 L 30 60 L 30 70 L 40 70 L 50 70 L 50 60 L 60 60 L 60 50 L 70 50 L 70 40 L 80 40 L 80 30 L 80 20 L 80 10 L 70 10 L 70 0 L 60 0 L 50 0 L 50 10 L 40 10 L 30 10 L 30 0 L 20 0 L 10 0 z" 
               fill="none" 
               stroke="currentColor" 
               strokeWidth="6"/>
        </svg>
        by{' '}
        <Link 
          href="https://github.com/MiraiDevv" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#6B46C1] hover:text-[#F56565] dark:text-[#F56565] dark:hover:text-[#ECC94B] transition-colors duration-300 font-medium"
        >
          mirai
        </Link>
      </p>
    </footer>
  );
};

export default Footer; 
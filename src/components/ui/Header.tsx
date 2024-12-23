'use client';

import { FC } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn('w-full border-b border-[#6B46C1]/20 bg-white dark:bg-[#2D3748]', className)}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-[#6B46C1] text-xl font-bold hover:opacity-80">
          Elly
        </Link>
        
        <nav className="flex items-center gap-8">
          <div className="relative group">
            <button className="flex items-center gap-1 py-2 text-[#2D3748] dark:text-white hover:opacity-80">
              Products
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform transition-transform duration-200 group-hover:rotate-180"
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-transparent" />
            
            <div className="absolute right-0 top-[calc(100%-2px)] z-50 min-w-[150px] rounded-md border border-[#6B46C1]/20 bg-white dark:bg-[#2D3748] py-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="/courses"
                className="block px-4 py-2 text-sm text-[#2D3748] dark:text-white hover:bg-[#6B46C1]/10 hover:opacity-80"
              >
                Courses
              </Link>
              <Link
                href="/packs"
                className="block px-4 py-2 text-sm text-[#2D3748] dark:text-white hover:bg-[#6B46C1]/10 hover:opacity-80"
              >
                Packs
              </Link>
            </div>
          </div>
          
          <Link href="/contact" className="text-[#2D3748] dark:text-white hover:text-[#6B46C1] dark:hover:text-[#F56565] hover:opacity-80">
            Contact
          </Link>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header; 
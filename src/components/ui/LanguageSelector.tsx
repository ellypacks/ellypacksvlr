'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const LanguageSelector: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2">
      <Link
        href={pathname.replace(/^\/[^\/]+/, '/en')}
        className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        EN
      </Link>
      <span className="text-gray-300 dark:text-gray-700">|</span>
      <Link
        href={pathname.replace(/^\/[^\/]+/, '/pt-BR')}
        className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        PT
      </Link>
    </div>
  );
};

export default LanguageSelector; 
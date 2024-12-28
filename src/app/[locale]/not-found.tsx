import Link from 'next/link';

export default function LocaleNotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#2D3748] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-[#6B46C1]">404</span>{' '}
          <span className="text-[#F56565]">Page Not Found</span>
        </h1>
        <p className="text-lg text-[#2D3748] dark:text-gray-300 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/en"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F56565] to-[#E53E3E] hover:from-[#E53E3E] hover:to-[#F56565] text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#F56565]/20"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
} 
import PackHero from '@/components/PackHero';
import CustomerCarousel from '@/components/CustomerCarousel';
import AboutPack from '@/components/AboutPack';
import PackIncludes from '@/components/PackIncludes';
import GetAccess from '@/components/GetAccess';

export default function PacksPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#2D3748]">
      <PackHero />
      <CustomerCarousel />
      <AboutPack />
      <PackIncludes />
      <GetAccess />
    </div>
  );
} 
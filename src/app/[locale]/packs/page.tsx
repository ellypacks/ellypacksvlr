export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt-BR' }];
}

export default function PacksPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#2D3748]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-[#6B46C1]">ELLY</span>{' '}
          <span className="text-[#F56565]">PACK</span>
        </h1>
        <p className="text-lg text-center mb-12 text-[#2D3748] dark:text-gray-300 max-w-3xl mx-auto">
          Save time editing your videos!
        </p>
        <div className="flex justify-center">
          <a
            href="https://pay.kiwify.com.br/7r2BTsF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F56565] to-[#E53E3E] hover:from-[#E53E3E] hover:to-[#F56565] text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#F56565]/20"
          >
            Purchase Now
          </a>
        </div>
      </div>
    </div>
  );
} 
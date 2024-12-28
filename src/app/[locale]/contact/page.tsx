export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt-BR' }];
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        <span className="text-[#6B46C1]">Let&apos;s</span>{' '}
        <span className="text-[#F56565]">Connect</span>
      </h1>
      <p className="text-lg text-center mb-12 text-[#2D3748] dark:text-gray-300 max-w-3xl mx-auto">
        Choose the best channel to get in touch and transform your ideas into reality.
      </p>
    </div>
  );
} 
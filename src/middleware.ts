import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'pt-BR'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(pt-BR|en)/:path*']
}; 
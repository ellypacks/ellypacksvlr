import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/settings';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Detect locale from browser settings
  localeDetection: true,
});

export const config = {
  // Match all pathnames except for
  // - ... (static files)
  // - /_next/... (Next.js internals)
  // - /api/... (API routes)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 
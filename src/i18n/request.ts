// request.ts
import { getRequestConfig } from 'next-intl/server';
import { AbstractIntlMessages } from 'next-intl';
import { headers } from 'next/headers';

export default getRequestConfig(async () => {
  const headersList = await headers();
  const locale = headersList.get('X-NEXT-INTL-LOCALE') || 'en';
  const messages = (await import(`../messages/${locale}.json`)).default as AbstractIntlMessages;
  
  return { messages, timeZone: 'America/Sao_Paulo', now: new Date() };
});

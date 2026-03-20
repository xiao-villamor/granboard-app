import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from './config';

// This is only used at build time for static export (SSG).
// Runtime locale switching is handled client-side by LocaleProvider.
export default getRequestConfig(async () => {
  return {
    locale: defaultLocale,
    messages: (await import(`../messages/${defaultLocale}.json`)).default,
  };
});

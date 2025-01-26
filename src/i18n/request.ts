import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { Locale } from '@/locales';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale: Locale | undefined = await requestLocale as Locale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale; // Establece un locale por defecto si no es válido
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
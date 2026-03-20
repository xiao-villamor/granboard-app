"use client";

import { ReactNode, useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

// Static imports of all message files so they're bundled
import frMessages from "@/messages/fr.json";
import enMessages from "@/messages/en.json";
import esMessages from "@/messages/es.json";

const allMessages: Record<Locale, typeof frMessages> = {
  fr: frMessages,
  en: enMessages,
  es: esMessages,
};

function getCookieLocale(): Locale {
  if (typeof document === "undefined") return defaultLocale;
  const match = document.cookie.match(/(?:^|;\s*)NEXT_LOCALE=([^;]*)/);
  const value = match?.[1];
  if (value && locales.includes(value as Locale)) {
    return value as Locale;
  }
  return defaultLocale;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocale(getCookieLocale());
    setMounted(true);
  }, []);

  // Before mount, use the default locale (matches SSG output to avoid hydration mismatch)
  const activeLocale = mounted ? locale : defaultLocale;
  const messages = allMessages[activeLocale];

  return (
    <NextIntlClientProvider locale={activeLocale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

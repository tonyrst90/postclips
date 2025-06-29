"use client";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import React, { useMemo } from "react";
import { I18nextProvider as Provider, initReactI18next } from "react-i18next";
import { getOptions } from "./settings";

interface InitOptions {
  supportedLngs: string[];
  fallbackLng: string;
  lng: string;
  fallbackNS: string;
  defaultNS: string;
  ns: string;
  detection: {
    caches: string[];
  };
}

interface I18nProviderProps {
  children: React.ReactNode;
  language: string;
}

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language: string, namespace: string) =>
      import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    detection: {
      caches: ["cookie"],
    },
  } as InitOptions);

export function I18nProvider({ children, language }: I18nProviderProps) {
  useMemo(() => {
    i18next.changeLanguage(language);
  }, [language]);
  return <Provider i18n={i18next}>{children}</Provider>;
}
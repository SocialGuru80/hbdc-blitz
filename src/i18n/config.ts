import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import deTranslation from './locales/de/translation.json';
import trTranslation from './locales/tr/translation.json';
import esTranslation from './locales/es/translation.json';
import frTranslation from './locales/fr/translation.json';
import itTranslation from './locales/it/translation.json';
import nlTranslation from './locales/nl/translation.json';
import ruTranslation from './locales/ru/translation.json';
import jaTranslation from './locales/ja/translation.json';
import hiTranslation from './locales/hi/translation.json';
import zhTranslation from './locales/zh/translation.json';
import koTranslation from './locales/ko/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      de: { translation: deTranslation },
      tr: { translation: trTranslation },
      es: { translation: esTranslation },
      fr: { translation: frTranslation },
      it: { translation: itTranslation },
      nl: { translation: nlTranslation },
      ru: { translation: ruTranslation },
      ja: { translation: jaTranslation },
      hi: { translation: hiTranslation },
      zh: { translation: zhTranslation },
      ko: { translation: koTranslation }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
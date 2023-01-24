import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backebd from 'i18next-http-backend';

i18n
  .use(Backebd)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'am',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

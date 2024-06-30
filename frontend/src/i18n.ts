// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import bg from './locales/bg/translation.json';
import gr from './locales/gr/translation.json';
import it from './locales/it/translation.json';
import ro from './locales/ro/translation.json';
import al from './locales/al/translation.json';
import tr from './locales/tr/translation.json';
import de from './locales/de/translation.json';
import ru from './locales/ru/translation.json';
import hu from './locales/hu/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    bg: {
      translation: bg,
    },
    gr: {
      translation: gr,
    },
    it: {
      translation: it,
    },
    ro: {
      translation: ro,
    },
    al: {
      translation: al,
    },
    tr: {
      translation: tr,
    },
    de: {
      translation: de,
    },
    ru: {
      translation: ru,
    },
    hu: {
      translation: hu,
    },
  },
  lng: 'de', // start language
  fallbackLng: 'de', // Default language if translation is not found
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

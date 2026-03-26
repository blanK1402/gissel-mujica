import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esJSON from './es.json';
import enJSON from './en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: esJSON },
      en: { translation: enJSON },
    },
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

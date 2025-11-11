import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import zh from './locales/zh.json';
import ru from './locales/ru.json';
import pt from './locales/pt.json';
import ja from './locales/ja.json';

const resources = {
  en,
  es,
  fr,
  de,
  zh,
  ru,
  pt,
  ja,
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Pasa i18n a react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Idioma por defecto
    debug: false,
    
    interpolation: {
      escapeValue: false, // No necesario para React (ya escapa por defecto)
    },
    
    detection: {
      // Orden de detección: localStorage -> navegador -> fallback
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

export default i18n;

// Importaciones estáticas
import esTranslations from './es.json';
import enTranslations from './en.json';
import eoTranslations from './eo.json';

export const languages = {
  es: 'Español',
  en: 'English',
  eo: 'Esperanto'
};

export const defaultLang = 'es';

// Objeto con todas las traducciones
const translations = {
  es: esTranslations,
  en: enTranslations,
  eo: eoTranslations
};

export function getTranslations(lang) {
  return translations[lang] || translations[defaultLang];
}

// Función auxiliar para obtener el idioma desde una URL
export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang;
  return defaultLang;
}

// Función auxiliar para limpiar rutas
export function getPathWithoutLang(pathname) {
  const [, lang, ...rest] = pathname.split('/');
  if (lang in languages) {
    return `/${rest.join('/')}`;
  }
  return pathname;
}
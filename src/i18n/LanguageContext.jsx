import i18next from 'i18next';
import { createContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

const detectDefaultLanguage = () => {
  const stored = localStorage.getItem('jumbatec_lang');
  if (stored === 'pt' || stored === 'en') return stored;

  const browserLangs = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || 'en'];

  const isPortuguese = browserLangs.some((l) => l.toLowerCase().startsWith('pt'));
  return isPortuguese ? 'pt' : 'en';
};

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(detectDefaultLanguage);

  useEffect(() => {
    localStorage.setItem('jumbatec_lang', lang);
    i18next.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const changeLanguage = (newLang) => setLang(newLang);

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };

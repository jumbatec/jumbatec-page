// LanguageContext.js
import i18next from 'i18next';
import React, { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'Português');

  useEffect(() => {
    localStorage.setItem('lang', lang);
    i18next.changeLanguage(lang === "Português" ? "pt" : "en");
  }, [lang]);
 
  const changeLanguage = (newLang) => {
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };

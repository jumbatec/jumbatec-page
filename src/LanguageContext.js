// LanguageContext.js
import i18next from 'i18next';
import React, { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'Português');
  const [changed, setChanged] = useState(false);

  useEffect(() => {

    if(!changed){
         // Get the user's time zone
     const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

     console.log(userTimeZone);
     // List of time zones where Portuguese is spoken
     const portugueseSpeakingTimeZones = [
       "America/Sao_Paulo", // Brazil
       "Atlantic/Cape_Verde", // Cape Verde
       "Africa/Maputo", // Mozambique
       "Europe/Lisbon", // Portugal
       "Atlantic/Azores", // Portugal (Azores)
       "Africa/Luanda", // Angola
       "Africa/Bissau", // Guinea-Bissau
       "Africa/Sao_Tome", // São Tomé and Príncipe
       "Asia/Dili" // East Timor
     ];
 
     // Check if the user's time zone is in the list of Portuguese-speaking time zones
     if (portugueseSpeakingTimeZones.includes(userTimeZone)) {
       setLang("Português");
     } else {
      setLang("English");
     }

     localStorage.setItem('lang', lang);
     i18next.changeLanguage(lang === "Português" ? "pt" : "en");
    }else{
      localStorage.setItem('lang', lang);
      i18next.changeLanguage(lang === "Português" ? "pt" : "en");
    }
  }, [lang]);
 
  const changeLanguage = (newLang) => {
    setLang(newLang);
    setChanged(true);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };

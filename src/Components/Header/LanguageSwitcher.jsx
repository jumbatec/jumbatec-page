import { useContext } from 'react';
import { LanguageContext } from '../../i18n/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, changeLanguage } = useContext(LanguageContext);

  return (
    <div className="lang-switcher">
      <button
        type="button"
        className={lang === 'pt' ? 'active' : ''}
        onClick={() => changeLanguage('pt')}
      >
        PT
      </button>
      <span>/</span>
      <button
        type="button"
        className={lang === 'en' ? 'active' : ''}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
}

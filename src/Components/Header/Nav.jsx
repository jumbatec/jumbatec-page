import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Nav({ setMobileToggle }) {
  const { t } = useTranslation();
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link to="/" onClick={() => setMobileToggle(false)}>
          {t('nav.home')}
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>
          {t('nav.about')}
        </Link>
      </li>
      <li>
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          {t('nav.services')}
        </Link>
      </li>
      <li>
        <Link to="/project" onClick={() => setMobileToggle(false)}>
          {t('nav.platforms')}
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          {t('nav.contact')}
        </Link>
      </li>
    </ul>
  );
}

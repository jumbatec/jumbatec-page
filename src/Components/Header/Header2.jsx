import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Nav from './Nav';
import LanguageSwitcher from './LanguageSwitcher';
export default function Header2({ variant }) {
  const { t } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  // White/solid header on every inner page, and once scrolled past the hero on home.
  const whiteHeader = isScrolled || !isHome;

  return (
    <div>
    <header
      className={`cs_site_header header_style_2 header_style_3 cs_style_1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${whiteHeader ? 'cs_header_white' : ''}`}
    >
      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
            <Link className="cs_site_branding" to="/">
                <img
                  src={
                    whiteHeader
                      ? '/assets/images/logo/jumbatec-logo-blue.png'
                      : '/assets/images/logo/jumbatec-logo-white.png'
                  }
                  alt="JUMBATEC"
                />
              </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
            </div>
            <div className="cs_main_header_right">
              <div className="header-btn d-flex align-items-center">

              <LanguageSwitcher />
                <div className="header-button ms-4">
                    <Link to="/contact#contact-form-section" className="theme-btn">
                        <span>
                            {t('nav.cta')}
                            <i className="bi bi-arrow-right"></i>
                        </span>
                    </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>

  );
}

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer-section position-relative">
            <div className="footer-widgets-wrapper style1 fix">
                <div className="shape1"><img src="/assets/images/shape/footerShape1_1.png" alt="shape" /></div>
                <div className="shape2"><img src="/assets/images/shape/footerShape1_2.png" alt="shape" /></div>
                <div className="shape3"><img src="/assets/images/shape/footerShape1_3.png" alt="shape" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link to="/">
                                        <img src="/assets/images/logo/jumbatec-logo-blue.png" alt="JUMBATEC" style={{maxWidth: '180px'}} />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        {t('footer.text')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3> {t('footer.pagesTitle')} </h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <Link to="/">
                                            {t('nav.home')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about">
                                            {t('nav.about')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/service">
                                            {t('nav.services')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/project">
                                            {t('nav.platforms')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">
                                            {t('nav.contact')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3> {t('services.subtitle')} </h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link to="/service">{t('services.items.software.title')}</Link></li>
                                    <li><Link to="/service">{t('services.items.fineract.title')}</Link></li>
                                    <li><Link to="/service">{t('services.items.systems.title')}</Link></li>
                                    <li><Link to="/service">{t('services.items.web.title')}</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <div className="contact-box">
                                    <div className="subtitle">{t('footer.addressLabel')}</div>
                                    <div className="widget-head">{t('contact.formTitle')}</div>
                                    <div className="text">{t('footer.address')}</div>
                                    <div className="info">
                                        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23"
                                                viewBox="0 0 22 23" fill="none">
                                                <path
                                                    d="M3.66671 4.16699H18.3334C19.3417 4.16699 20.1667 4.99199 20.1667 6.00033V17.0003C20.1667 18.0087 19.3417 18.8337 18.3334 18.8337H3.66671C2.65837 18.8337 1.83337 18.0087 1.83337 17.0003V6.00033C1.83337 4.99199 2.65837 4.16699 3.66671 4.16699Z"
                                                    stroke="#146eb4" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path d="M20.1667 6L11 12.4167L1.83337 6" stroke="#146eb4" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="link">
                                            <a href="mailto:info@jumbatec.com">info@jumbatec.com</a>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="icon">
                                            <i className="bi bi-whatsapp" style={{ fontSize: '22px', color: '#146eb4' }}></i>
                                        </div>
                                        <div className="link">
                                            <a href="https://wa.me/258855898000" target="_blank" rel="noopener noreferrer">+258 85 5898 000</a> <br/>
                                            <a href="tel:+258861805550">+258 86 180 5550</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom style1">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow fadeInLeft" data-wow-delay=".3s">
                            {t('footer.copyright')}
                        </p>
                        <ul className="social-links" data-wow-delay=".5s">
                            <li> <a href="https://wa.me/258855898000" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a> </li>
                            <li> <a href="mailto:info@jumbatec.com"><i className="bi bi-envelope"></i></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

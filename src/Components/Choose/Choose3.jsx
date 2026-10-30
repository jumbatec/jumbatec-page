import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Choose3 = () => {
    const { t } = useTranslation();
    return (
<section className="wcu-section section-padding fix">
        <div className="wcu-container-wrapper style3">
            <div className="container">
                <div className="wcu-wrapper style3">
                    <div className="row gy-5 gx-60">
                        <div className="col-xl-6">
                            <div className="wcu-content">
                                <div className="section-title">
                                    <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                        {t('whyUs.subtitle')} <img src="/assets/images/icon/fireIcon.svg" alt="icon" />
                                    </div>
                                    <h2 className="title wow fadeInUp" data-wow-delay=".4s">{t('whyUs.title')}</h2>
                                    <p className="text1 wow fadeInUp" data-wow-delay=".6s">{t('whyUs.text1')}</p>
                                    <p className="text2 wow fadeInUp" data-wow-delay=".8s">{t('whyUs.text2')}</p>
                                </div>
                                <Link className="theme-btn rounded-5 wow fadeInUp" data-wow-delay=".4s" to="/project">{t('whyUs.cta')}
                                    <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_190_64)">
                                            <path
                                                d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_190_64">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                                <div className="counter-box-wrapper style3">
                                    <div className="counter-box style3 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="counter">
                                            <span className="counter-nubmer">{t('whyUs.stat1Number')}</span>
                                        </div>
                                        <p className="text">{t('whyUs.stat1Label')}</p>
                                    </div>
                                    <div className="counter-box style3 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="counter">
                                            <span className="counter-nubmer">{t('whyUs.stat2Number')}</span>
                                        </div>
                                        <p className="text">{t('whyUs.stat2Label')}</p>
                                    </div>
                                    <div className="counter-box style3 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="counter">
                                            <span className="counter-nubmer">100</span> <span>%</span>
                                        </div>
                                        <p className="text">{t('whyUs.stat3Label')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="wcu-thumb">
                                <div className="main-thumb img-custom-anim-left wow fadeInUp" data-wow-delay=".4s">
                                    <img src="/assets/images/platforms/dokodela/hero-main.png" alt="Dokodela" />
                                </div>
                                <div className="thumb-box float-bob-y wow fadeInUp" data-wow-delay=".4s">
                                    <h5>{t('whyUs.stat3Title')}</h5>
                                    <p className="text">{t('whyUs.stat3Text')}</p>
                                    <div className="shape-box">
                                        <img src="/assets/images/shape/wcuThumbShape3_1.png" alt="shape" />
                                        <div className="shape-content">
                                            <h6>{t('whyUs.stat1Label')}</h6>
                                            <h3>{t('whyUs.stat1Number')}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Choose3;

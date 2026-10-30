import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clients from '../../Data/clients.json';

const platforms = [
    {
        key: 'dokodela',
        img: '/assets/images/platforms/dokodela/hero-main.png',
    },
    {
        key: 'sgePro',
        img: '/assets/images/platforms/sge-pro/main-resized.png',
    },
    {
        key: 'admissaoGarantida',
        img: '/assets/images/platforms/admissao-garantida/web-dashboard.png',
    },
];

const morePlatformIcons = {
    bakery: 'bi-shop',
    hr: 'bi-people',
    accounting: 'bi-calculator',
    assets: 'bi-building',
    banking: 'bi-bank',
    stock: 'bi-box-seam',
    documents: 'bi-folder2-open',
    projects: 'bi-kanban',
    crm: 'bi-person-lines-fill',
    hospitality: 'bi-door-open',
};

const FeatureList = ({ features }) => (
    <ul className="platform-feature-list wow fadeInUp" data-wow-delay=".2s">
        {features.map((feature, idx) => (
            <li key={idx}>
                <span className="feature-icon"><i className="bi bi-check-lg"></i></span>
                <span>{feature}</span>
            </li>
        ))}
    </ul>
);

const Project1 = () => {
    const { t } = useTranslation();
    return (
    <section className="project-section section-padding fix">
        <div className="container">
            <div className="section-title text-center mxw-685 mx-auto mb-60">
                <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                    {t('platformsPage.subtitle')} <img src="/assets/images/icon/fireIcon.svg" alt="icon" />
                </div>
                <h2 className="title wow fadeInUp" data-wow-delay=".4s">{t('platformsPage.heading')}</h2>
                <p className="text wow fadeInUp" data-wow-delay=".6s">{t('platformsPage.description')}</p>
            </div>

            {platforms.map((p, i) => (
                <div className={`row gy-5 gx-60 d-flex align-items-center mb-120 ${p.key === 'admissaoGarantida' ? 'admissao-theme' : ''}`} key={p.key}>
                    <div className={`col-xl-6 ${i % 2 === 0 ? 'order-2 order-xl-1' : 'order-2'}`}>
                        <div className="wcu-thumb" style={{ marginRight: 0 }}>
                            <div className="main-thumb">
                                <img src={p.img} alt={t(`platformsPage.${p.key}.title`)} />
                            </div>
                        </div>
                    </div>
                    <div className={`col-xl-6 ${i % 2 === 0 ? 'order-1 order-xl-2' : 'order-1'}`}>
                        <div className="section-title">
                            <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                {t(`platformsPage.${p.key}.tag`)} <img src="/assets/images/icon/fireIcon.svg" alt="icon" />
                            </div>
                            <h2 className="title wow fadeInUp" data-wow-delay=".4s">{t(`platformsPage.${p.key}.title`)}</h2>
                            <p className="text1 mxw-640 wow fadeInUp" data-wow-delay=".5s">{t(`platformsPage.${p.key}.intro`)}</p>
                            <p className="text1 mxw-640 wow fadeInUp" data-wow-delay=".6s"><strong>{t('platformsPage.objectiveLabel')}:</strong> {t(`platformsPage.${p.key}.objective`)}</p>
                        </div>
                        <FeatureList features={t(`platformsPage.${p.key}.features`, { returnObjects: true })} />
                        {p.key === 'admissaoGarantida' ? (
                            <a
                                className="theme-btn rounded-5 wow fadeInUp mt-4"
                                data-wow-delay=".4s"
                                href="https://admissaogarantida.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ backgroundColor: '#F2695D' }}
                            >
                                {t('howWork.cta')}
                                <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z" fill="white" />
                                </svg>
                            </a>
                        ) : (
                            <Link className="theme-btn rounded-5 wow fadeInUp mt-4" data-wow-delay=".4s" to="/contact">
                                {t('nav.cta')}
                                <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z" fill="white" />
                                </svg>
                            </Link>
                        )}
                    </div>
                </div>
            ))}

            <div className="row gy-5 gx-60 d-flex align-items-center mb-120">
                <div className="col-xl-6">
                    <div className="wcu-thumb" style={{ marginRight: 0 }}>
                        <div className="main-thumb">
                            <img src="/assets/images/platforms/fineract/mifos.png" alt={t('platformsPage.fineractTitle')} />
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="section-title">
                        <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                            {t('platformsPage.fineractTag')} <img src="/assets/images/icon/fireIcon.svg" alt="icon" />
                        </div>
                        <h2 className="title wow fadeInUp" data-wow-delay=".4s">{t('platformsPage.fineractTitle')}</h2>
                        <p className="text1 mxw-640 wow fadeInUp" data-wow-delay=".5s">{t('platformsPage.fineractIntro')}</p>
                        <p className="text1 mxw-640 wow fadeInUp" data-wow-delay=".6s"><strong>{t('platformsPage.objectiveLabel')}:</strong> {t('platformsPage.fineractObjective')}</p>
                    </div>
                    <FeatureList features={t('platformsPage.fineractFeatures', { returnObjects: true })} />
                    <Link className="theme-btn rounded-5 wow fadeInUp mt-4" data-wow-delay=".4s" to="/contact">
                        {t('nav.cta')}
                        <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z" fill="white" />
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="more-platforms-wrapper mb-120">
                <div className="section-title text-center mxw-685 mx-auto mb-60">
                    <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                        {t('platformsPage.more.subtitle')} <img src="/assets/images/icon/fireIcon.svg" alt="icon" />
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay=".4s">{t('platformsPage.more.title')}</h2>
                    <p className="text wow fadeInUp" data-wow-delay=".6s">{t('platformsPage.more.description')}</p>
                </div>
                <div className="row gy-4">
                    {Object.keys(morePlatformIcons).map((key) => (
                        <div key={key} className="col-lg-3 col-md-4 col-6">
                            <div className="module-tag-card">
                                <div className="module-tag-icon"><i className={`bi ${morePlatformIcons[key]}`}></i></div>
                                <p>{t(`platformsPage.more.items.${key}`)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section-title text-center mxw-685 mx-auto mb-60">
                <h2 className="title wow fadeInUp" data-wow-delay=".4s">{t('clients.title')}</h2>
                <p className="text wow fadeInUp" data-wow-delay=".6s">{t('clients.description')}</p>
            </div>
            <div className="row gy-4">
                {clients.map((c, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-6">
                        <div className="client-logo-card">
                            <img src={c.img} alt={c.name} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>

    );
};

export default Project1;

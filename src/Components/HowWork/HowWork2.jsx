import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import data from '../../Data/faq2.json';

const steps = [
    { key: 'step1', icon: 'bi-clipboard-check', color: '#0E6BEF' },
    { key: 'step2', icon: 'bi-cpu', color: '#8C5EE8' },
    { key: 'step3', icon: 'bi-book', color: '#63CE94' },
];

const HowWork2 = () => {
        const { t } = useTranslation();
        const accordionContentRef = useRef(null);
        const [openItemIndex, setOpenItemIndex] = useState(-1);
        const [firstItemOpen, setFirstItemOpen] = useState(true);

        const handleItemClick = index => {
          if (index === openItemIndex) {
            setOpenItemIndex(-1);
          } else {
            setOpenItemIndex(index);
          }
        };
        useEffect(() => {
          if (firstItemOpen) {
            setOpenItemIndex(0);
            setFirstItemOpen(false);
          }
        }, [firstItemOpen]);

    return (
        <section className="wp-section section-padding fix admissao-theme">
        <div className="container">
            <div className="wp-wrapper style2">
                <div className="shape"> <img src="/assets/images/shape/wpShape2_1.png" alt="shape" /> </div>
                <div className="row gy-5 gy-md-0 gx-60 d-flex align-items-center">
                    <div className="col-xl-4 order-2 order-xl-1">
                        <div className="wp-content style2">
                            <div className="section-title">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                    {t('howWork.subtitle')} <img src="/assets/images/icon/fireIcon.svg" alt="icon" />
                                </div>
                                <h2 className="title wow fadeInUp" data-wow-delay=".4s">{t('howWork.title')}</h2>
                            </div>
                            <div className="wp-accordion">
                                <div className="accordion accordion-area2" id="accordion">
                                {data.map((item, index)=>(
                                    <div key={index} className={`accordion-item mb-3 wow fadeInUp ${index === openItemIndex ? "active" : "" }`} data-wow-delay=".3s">
                                        <h5 onClick={() => handleItemClick(index)} className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                               {t(`howWork.items.${item.key}.title`)}
                                            </button>
                                        </h5>
                                        <div ref={accordionContentRef} id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                            {t(`howWork.items.${item.key}.desc`)}
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                            <a
                                className="theme-btn rounded-5 wow fadeInUp mt-4"
                                data-wow-delay=".4s"
                                href="https://admissaogarantida.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ backgroundColor: '#F2695D', display: 'inline-flex' }}
                            >
                                {t('howWork.cta')}
                                <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-8 order-1 order-xl-2">
                        <div className="wp-thumb wow fadeInUp" data-wow-delay=".4s">
                            <div className="main-thumb img-custom-anim-right wow">
                                <img src="/assets/images/platforms/admissao-garantida/web-dashboard.png" alt="Admissão Garantida" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-120">
                    <div className="section-title text-center mx-auto mb-60" style={{ maxWidth: '920px' }}>
                        <h2 className="title ag-steps-heading wow fadeInUp" data-wow-delay=".2s">{t('howWork.stepsHeading')}</h2>
                        <p className="text wow fadeInUp" data-wow-delay=".4s">{t('howWork.stepsSubheading')}</p>
                    </div>
                    {steps.map((step, index) => (
                        <div className="col-lg-4" key={step.key}>
                            <div className="ag-step-card wow fadeInUp" data-wow-delay={`.${index + 2}s`}>
                                <div className="ag-step-icon" style={{ backgroundColor: step.color }}>
                                    <i className={`bi ${step.icon}`}></i>
                                </div>
                                <span className="ag-step-number">0{index + 1}</span>
                                <h5>{t(`howWork.steps.${step.key}.title`)}</h5>
                                <p>{t(`howWork.steps.${step.key}.desc`)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
};

export default HowWork2;

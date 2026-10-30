import { useTranslation } from 'react-i18next';
import data from '../../Data/services1.json';

const Services1 = () => {
    const { t } = useTranslation();
    return (
<section className="service-section section-padding fix">
        <div className="service-container-wrapper style1">
            <div className="container">
                <div className="service-wrapper style1">
                    <div className="row gy-5">
                    {data.map((item, index)=>(
                        <div key={index} className="col-xl-4 col-md-6">
                            <div className="service-box style3 wow fadeInLeft" data-wow-delay=".3s">
                                <div className="icon-box style3">
                                    <img src={item.icon} alt="icon" />
                                </div>
                                <div className="content">
                                    <h3>{t(`services.items.${item.key}.title`)}</h3>
                                    <p className="text">{t(`services.items.${item.key}.desc`)}</p>
                                </div>
                            </div>
                        </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Services1;

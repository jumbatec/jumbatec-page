import { useTranslation } from "react-i18next";
import data from '../../Data/teamJumbatec.json';

const Team2 = () => {
    const { t } = useTranslation();
    return (
        <section className="team-section-3 section-padding pt-0 fix">
        <div className="container">
            <div className="section-title text-center mxw-685 mx-auto">
                <h2 className="title wow fadeInUp" data-wow-delay=".4s">{t('team.title')}</h2>
            </div>
            <div className="row justify-content-center">
            {data.map((item, index)=>(
                <div key={index} className="col-xl-4 col-md-6">
                    <div className="team-card style1 wow fadeInLeft" data-wow-delay=".3s">
                        <div className="team-thumb">
                        <img src={item.img} alt={t(item.titleKey)} style={{objectFit: 'contain', background: 'var(--theme3)'}} />
                        </div>
                        <div className="team-card-content">
                            <h3>{t(item.titleKey)}</h3>
                            <p className="designation">{t(item.descKey)}</p>
                        </div>
                    </div>
                </div>
))}

            </div>
        </div>
    </section>
    );
};

export default Team2;

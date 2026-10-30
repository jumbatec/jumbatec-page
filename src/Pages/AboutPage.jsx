import { useTranslation } from "react-i18next";
import About4 from "../Components/About/About4";
import BreadCumb from "../Components/Common/BreadCumb";
import Team2 from "../Components/Team/Team2";

const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title={t('breadcrumb.about')}
            ></BreadCumb>
            <About4
                img1="/assets/images/platforms/sge-pro/main-resized.png"
                img2="/assets/images/logo/jumbatec-sign-badge-card.png"
                subtitle={t('about.subtitle')}
                title={t('about.title')}
                content={t('about.text')}
                FeatureList={[
                    t('about.box1Title'),
                    t('about.box2Title'),
                    t('services.items.fineract.title'),
                ]}
                btnname={t('nav.cta')}
                btnurl="/contact"
            ></About4>
            <Team2></Team2>
        </div>
    );
};

export default AboutPage;

import { useTranslation } from "react-i18next";
import About2 from "../Components/About/About2";
import BreadCumb from "../Components/Common/BreadCumb";

const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title={t('breadcrumb.about')}
            ></BreadCumb>
            <About2
                subtitle={t('about.subtitle')}
                title={t('about.title')}
                content={t('about.text')}
                boximg1="/assets/images/icon/wcuIcon2_1.svg"
                boxtitle1={t('about.box1Title')}
                boxcontent1={t('about.box1Text')}
                boximg2="/assets/images/icon/wcuIcon2_2.svg"
                boxtitle2={t('about.box2Title')}
                boxcontent2={t('about.box2Text')}
                img1="/assets/images/about/aboutThumb2_1.png"
                img2="/assets/images/logo/jumbatec-sign-badge-card.png"
            ></About2>
        </div>
    );
};

export default AboutPage;

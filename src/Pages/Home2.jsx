import { useTranslation } from "react-i18next";
import About2 from "../Components/About/About2";
import Brand2 from "../Components/Brand/Brand2";
import Choose2 from "../Components/Choose/Choose2";
import Choose3 from "../Components/Choose/Choose3";
import Cta2 from "../Components/Cta/Cta2";
import Feature3 from "../Components/Feature/Feature3";
import HeroBanner2 from "../Components/HeroBanner/HeroBanner2";
import HowWork2 from "../Components/HowWork/HowWork2";
import VideoTestimonials from "../Components/Testimonial/VideoTestimonials";

const Home2 = () => {
    const { t } = useTranslation();
    return (
        <div>
            <HeroBanner2
                subtitle={`<span>${t('hero.tag')}</span>`}
                title={t('hero.title')}
                btnname={t('hero.cta1')}
                btnurl="/contact"
                btnname2={t('hero.cta2')}
                btnurl2="/project"
                img1="/assets/images/platforms/dokodela/hero-main.png"
                img2="/assets/images/platforms/dokodela/hero-badge-patients.png"
                img3="/assets/images/platforms/dokodela/hero-badge-revenue.png"
            ></HeroBanner2>
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
            <Feature3></Feature3>
            <HowWork2></HowWork2>
            <Choose2
               img1="/assets/images/platforms/sge-pro/main-resized.png"
               img2="/assets/images/platforms/sge-pro/badge-propinas.png"
               img3="/assets/images/platforms/sge-pro/badge-inscricoes.png"
               subtitle={t('sgePro.subtitle')}
               title={t('sgePro.title')}
               content={t('sgePro.text')}
               boximg1="/assets/images/icon/wcuIcon2_1.svg"
               boxtitle1={t('sgePro.box1Title')}
               boxcontent1={t('sgePro.box1Text')}
               boximg2="/assets/images/icon/wcuIcon2_2.svg"
               boxtitle2={t('sgePro.box2Title')}
               boxcontent2={t('sgePro.box2Text')}
            ></Choose2>
            <Choose3></Choose3>
            <Brand2></Brand2>
            <VideoTestimonials></VideoTestimonials>
            <Cta2
                img="/assets/images/platforms/sge-pro/main-resized.png"
                titleKey="closingCtaSge.title"
                textKey="closingCtaSge.text"
                ctaKey="closingCtaSge.cta"
            ></Cta2>
        </div>
    );
};

export default Home2;

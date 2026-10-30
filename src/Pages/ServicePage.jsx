import { useTranslation } from "react-i18next";
import Brand3 from "../Components/Brand/Brand3";
import BreadCumb from "../Components/Common/BreadCumb";
import Cta2 from "../Components/Cta/Cta2";
import Services1 from "../Components/Services/Services1";
import Team2 from "../Components/Team/Team2";

const ServicePage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title={t('breadcrumb.services')}
            ></BreadCumb>
            <Cta2></Cta2>
            <Services1></Services1>
            <Team2></Team2>
            <Brand3></Brand3>
        </div>
    );
};

export default ServicePage;

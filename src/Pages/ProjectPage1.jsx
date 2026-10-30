import { useTranslation } from "react-i18next";
import BreadCumb from "../Components/Common/BreadCumb";
import Project1 from "../Components/Project/Project1";

const ProjectPage1 = () => {
    const { t } = useTranslation();
    return (
        <div>
            <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title={t('breadcrumb.platforms')}
            ></BreadCumb>
            <Project1></Project1>
        </div>
    );
};

export default ProjectPage1;

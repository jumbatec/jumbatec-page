import { useTranslation } from "react-i18next";
import BreadCumb from "../Components/Common/BreadCumb";
import ContactInfo from "../Components/ContactInfo/ContactInfo";

const ContactPage = () => {
    const { t } = useTranslation();
    return (
        <div>
             <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title={t('breadcrumb.contact')}
            ></BreadCumb>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default ContactPage;

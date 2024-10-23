import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";
import { withTranslation } from "react-i18next";

class Services extends Component {
  state = {
   
  };

  render() {
    const { t } = this.props;
    const services = [
      {
        title: t("customSoftwareDevelopment"),
        icon: "pe-7s-tools",
        description: t("customSoftwareDescription"),
      },
      {
        title: t("fintechSolutions"),
        icon: "pe-7s-piggy",
        description: t("fintechDescription"),
      },
      {
        title: t("websiteCreation"),
        icon: "pe-7s-display2",
        description: t("websiteDescription"),
      },
      {
        title: t("digitalMarketing"),
        icon: "pe-7s-science",
        description: t("digitalMarketingDescription"),
      },
      {
        title: t("itConsulting"),
        icon: "pe-7s-albums",
        description: t("itConsultingDescription"),
      },
      {
        title: t("aiSolutions"),
        icon: "pe-7s-smile",
        description: t("aiSolutionsDescription"),
      },
    ];
  
    return (
      <React.Fragment>
        <section className="section bg-light" id="services">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title={this.props.t("ourServices")} // Translate section title
              description={this.props.t("servicesDescription")} // Translate section description
            />

            <Row className="mt-5">
              {/* render service box */}
              {services.map((service, key) => (
                <ServiceBox
                  key={key}
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default withTranslation()(Services);

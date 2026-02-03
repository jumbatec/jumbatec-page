import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import { withTranslation } from "react-i18next";
import "./services-modern.css";

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
        <section className="section services-section" id="services">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title={this.props.t("ourServices")} // Translate section title
              description={this.props.t("servicesDescription")} // Translate section description
            />

            <Row className="mt-5">
              {/* render service box */}
              {services.map((service, key) => (
                <Col lg={4} md={6} className="mb-4" key={key}>
                  <div className="service-box-modern">
                    <div className="service-icon-wrapper">
                      <i className={`${service.icon} service-icon`}></i>
                    </div>
                    <h4 className="service-title">{service.title}</h4>
                    <p className="service-description">{service.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default withTranslation()(Services);

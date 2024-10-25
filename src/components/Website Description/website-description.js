import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class WebsiteDescription extends Component {
  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <section className="section bg-web-desc">
          <div className="bg-overlay"></div>
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="text-white">{t("createYourDreamWebsite")}</h2>
                <p className="pt-3 home-desc mx-auto">
                  {t("responsiveWebsitesDescription")}
                </p>
                <a
                  href="#contact"
                  className="btn btn-light mt-5 waves-effect waves-light"
                >
                  {t("viewPlansAndPricing")}
                </a>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default withTranslation()(WebsiteDescription);

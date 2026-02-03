import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Container, Row, Col } from "reactstrap";
import "../common/modern-sections.css";

class WebsiteDescription extends Component {
  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <section className="section website-description-modern">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2>{t("createYourDreamWebsite")}</h2>
                <p className="pt-3">
                  {t("responsiveWebsitesDescription")}
                </p>
                <a
                  href="https://wa.me/258855898000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light mt-5 waves-effect waves-light"
                >
                  {t("viewPlansAndPricing")} <i className="mdi mdi-arrow-right ms-2"></i>
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

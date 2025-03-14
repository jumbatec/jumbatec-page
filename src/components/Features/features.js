import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Container, Row, Col } from "reactstrap";

class Features extends Component {
  render() {
    const { t } = this.props;

    return (
      <React.Fragment>
        <section className="section" id="features">
          <Container>
            <Row className="align-items-center">
              <Col lg="5" className="order-2 order-lg-1">
                <div className="features-box mt-5 mt-lg-0">
                  <h3>{t("ourSchoolManagementPlatform")}</h3>
                  <p className="text-muted web-desc">
                    {t("platformDescription")}
                  </p>
                  <p className=" text-mutedfeatures-box mt-5 mt-lg-0">
                    {t('functions')}
                  </p>
                  <ul className="text-muted list-unstyled mt-4 features-item-list">
                    <li>{t("academicProgressMonitoring")}</li>
                    <li>{t("paymentReminderMessages")}</li>
                    <li>{t("efficientManagement")}</li>
                    <li>{t("mpesaIntegration")}</li>
                    <li>{ t('notifications')}</li>
                    <li>{t('presence')}</li>
                  </ul>
                  <p className="text-mutedfeatures-box mt-5 mt-lg-0 ">
                    {t("benefits")}
                    </p>
                    <p style={{
                      marginLeft: 5
                    }} className=" text-mutedfeatures-box mt-5 mt-lg-0 text-muted">
                   {t('benefitsDesc')}
                   </p>
                   <p className="text-mutedfeatures-box mt-5 mt-lg-0 ">
                    {t("target")}
                    </p>
                    <p style={{
                      marginLeft: 5
                    }} className=" text-mutedfeatures-box mt-5 mt-lg-0 text-muted">
                   {t('targetDesc')}
                   </p>
                   
                  <a
                    href="#contact"
                    className="btn btn-primary mt-4 waves-effect waves-light"
                  >
                    {t("requestDemo")} <i className="mdi mdi-arrow-right"></i>
                  </a>
                </div>
              </Col>
              <Col lg={{ size: 7, order: 2 }} xs={{ order: 1 }}>
                <div className="features-img mx-auto me-lg-0">
                  <img
                    src="assets/images/growth-analytics.svg"
                    alt="macbook"
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default withTranslation()(Features);

import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Container, Row, Col } from "reactstrap";

class Features2 extends Component {
  render() {
    const { t } = this.props;

    return (
      <React.Fragment>
        <section className="section" id="features">
          <Container>
            <Row className="align-items-center">
              <Col lg="5" className="order-2 order-lg-1">
                <div className="features-box mt-5 mt-lg-0">
                  <h3>{t("title")}</h3>
                  <p className="text-muted web-desc">
                    {t("description")}
                  </p>
                  <ul className="text-muted list-unstyled mt-4 features-item-list">
                    <li>{t("features2.0")}</li>
                    <li>{t("features2.1")}</li>
                    <li>{t("features2.2")}</li>
                    <li>{t("features2.3")}</li>
                  </ul>
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
                    src="assets/images/undraw_finance_re_gnv2.svg"
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

export default withTranslation()(Features2);

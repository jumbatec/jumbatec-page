import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { withTranslation } from "react-i18next";

class AboutUs extends Component {
  render() {
    const { t } = this.props;

    return (
      <React.Fragment>
        <section className="section bg-light" id="about">
          <Container>
            <Row>
              <Col lg={{ size: 8, offset: 2 }}>
                <div className="about-title mx-auto text-center">
                  <h2 className="font-weight-bold mb-4">
                    {t("aboutUsTitle")}
                  </h2>
                  <p className="text-muted pt-2" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                    {t("aboutUsDescription")}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default withTranslation()(AboutUs);

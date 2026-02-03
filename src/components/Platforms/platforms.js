import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { withTranslation } from "react-i18next";
import "./platforms.css";

class Platforms extends Component {
  render() {
    const { t } = this.props;

    const platforms = [
      {
        id: 1,
        name: "DOKODELA",
        tagline: t("platforms.dokodela.tagline"),
        description: t("platforms.dokodela.description"),
        image: "assets/images/dokodela.png",
        features: [
          t("platforms.dokodela.feature1"),
          t("platforms.dokodela.feature2"),
          t("platforms.dokodela.feature3"),
          t("platforms.dokodela.feature4"),
          t("platforms.dokodela.feature5"),
          t("platforms.dokodela.feature6"),
          t("platforms.dokodela.feature7"),
          t("platforms.dokodela.feature8"),
        ],
        color: "primary",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
      {
        id: 2,
        name: "SGE-PRO",
        tagline: t("platforms.sge.tagline"),
        description: t("platforms.sge.description"),
        image: "assets/images/sge.png",
        features: [
          t("platforms.sge.feature1"),
          t("platforms.sge.feature2"),
          t("platforms.sge.feature3"),
          t("platforms.sge.feature4"),
          t("platforms.sge.feature5"),
          t("platforms.sge.feature6"),
        ],
        color: "success",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      },
      {
        id: 3,
        name: "Controlo 360",
        tagline: t("platforms.controlo360.tagline"),
        description: t("platforms.controlo360.description"),
        image: "assets/images/controlo360.png",
        features: [
          t("platforms.controlo360.feature1"),
          t("platforms.controlo360.feature2"),
          t("platforms.controlo360.feature3"),
          t("platforms.controlo360.feature4"),
          t("platforms.controlo360.feature5"),
          t("platforms.controlo360.feature6"),
          t("platforms.controlo360.feature7"),
        ],
        color: "info",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      },
    ];

    return (
      <React.Fragment>
        <section className="section bg-light platforms-section" id="platforms">
          <Container>
            {/* Section Title */}
            <Row>
              <Col lg={{ size: 8, offset: 2 }}>
                <div className="platforms-title text-center mb-5">
                  <h2 className="font-weight-bold mb-3">
                    {t("platforms.title")}
                  </h2>
                  <p className="text-muted">
                    {t("platforms.description")}
                  </p>
                  <div className="title-border mx-auto mt-4"></div>
                </div>
              </Col>
            </Row>

            {/* Platforms Cards */}
            {platforms.map((platform, index) => (
              <Row
                key={platform.id}
                className={`platform-row align-items-center mb-5 pb-5 ${
                  index % 2 !== 0 ? "flex-row-reverse" : ""
                }`}
              >
                {/* Platform Image */}
                <Col lg={6} className="platform-image-col">
                  <div className="platform-image-wrapper">
                    <div
                      className="platform-gradient-bg"
                      style={{ background: platform.gradient }}
                    ></div>
                    <img
                      src={platform.image}
                      alt={platform.name}
                      className="img-fluid platform-image"
                    />
                  </div>
                </Col>

                {/* Platform Content */}
                <Col lg={6} className="platform-content-col">
                  <div className="platform-content">
                    <div className="platform-badge mb-3">
                      <span className={`badge bg-${platform.color}`}>
                        {platform.name}
                      </span>
                    </div>
                    <h3 className="platform-tagline mb-3">
                      {platform.tagline}
                    </h3>
                    <p className="text-muted mb-4">{platform.description}</p>

                    <div className="platform-features">
                      <h5 className="mb-3 features-title">
                        {t("platforms.keyFeatures")}
                      </h5>
                      <ul className="features-list">
                        {platform.features.map((feature, idx) => (
                          <li key={idx} className="feature-item">
                            <i className="mdi mdi-check-circle text-success me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <a
                        href="https://wa.me/258855898000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-platform"
                      >
                        {t("platforms.learnMore")}
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            ))}
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default withTranslation()(Platforms);

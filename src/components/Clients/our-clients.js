import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { withTranslation } from "react-i18next";
import "./our-clients.css";

class OurClients extends Component {
  render() {
    const { t } = this.props;

    const clients = [
      {
        id: 1,
        name: "ISCET",
        image: "assets/images/clients/iscet.png",
        category: t("ourClients.education"),
      },
      {
        id: 2,
        name: "ISPOTEC",
        image: "assets/images/clients/ispotec.png",
        category: t("ourClients.education"),
      },
      {
        id: 3,
        name: "Colégio Bom Futuro",
        image: "assets/images/clients/colegiobomfuturo.png",
        category: t("ourClients.education"),
      },
      {
        id: 4,
        name: "EV Zambeze",
        image: "assets/images/clients/evzambeze.png",
        category: t("ourClients.education"),
      },
      {
        id: 5,
        name: "Sonhadores Possulane",
        image: "assets/images/clients/sonhadores_possulane.png",
        category: t("ourClients.education"),
      },
      {
        id: 6,
        name: "Colégio Wisdom",
        image: "assets/images/clients/colegio_wisdom.png",
        category: t("ourClients.education"),
      },
      {
        id: 7,
        name: "Externato Luz do Dia",
        image: "assets/images/clients/externato_luz_do_dia.png",
        category: t("ourClients.education"),
      },
      {
        id: 8,
        name: "COLUS",
        image: "assets/images/clients/COLUS.png",
        category: t("ourClients.education"),
      },
      {
        id: 9,
        name: "Dental Care",
        image: "assets/images/clients/dental_care.png",
        category: t("ourClients.health"),
      },
      {
        id: 10,
        name: "Restaurante Hassimina",
        image: "assets/images/clients/restaurante hassimina.png",
        category: t("ourClients.restaurant"),
      },
    ];

    return (
      <React.Fragment>
        <section className="section bg-light our-clients-section" id="clients">
          <Container>
            {/* Section Title */}
            <Row>
              <Col lg={{ size: 8, offset: 2 }}>
                <div className="clients-title text-center mb-5">
                  <h2 className="font-weight-bold mb-3">
                    {t("ourClients.title")}
                  </h2>
                  <p className="text-muted">
                    {t("ourClients.description")}
                  </p>
                  <div className="title-border mx-auto mt-4"></div>
                </div>
              </Col>
            </Row>

            {/* Clients Grid */}
            <Row className="mt-5 justify-content-center">
              {clients.map((client) => (
                <Col lg={4} md={6} sm={6} key={client.id} className="mb-4">
                  <div className="client-card">
                    <div className="client-image-wrapper">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="client-image"
                      />
                    </div>
                    <div className="client-info">
                      <h5 className="client-name">{client.name}</h5>
                      <span className="client-category badge bg-primary">
                        {client.category}
                      </span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* Stats Section */}
            <Row className="mt-5 pt-5">
              <Col lg={12}>
                <div className="clients-stats">
                  <Row className="text-center">
                    <Col md={4} className="mb-4 mb-md-0">
                      <div className="stat-item">
                        <div className="stat-icon">
                          <i className="mdi mdi-account-group"></i>
                        </div>
                        <h3 className="stat-number">50+</h3>
                        <p className="stat-label">{t("ourClients.stat1")}</p>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4 mb-md-0">
                      <div className="stat-item">
                        <div className="stat-icon">
                          <i className="mdi mdi-trophy"></i>
                        </div>
                        <h3 className="stat-number">100%</h3>
                        <p className="stat-label">{t("ourClients.stat2")}</p>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="stat-item">
                        <div className="stat-icon">
                          <i className="mdi mdi-calendar-check"></i>
                        </div>
                        <h3 className="stat-number">5+</h3>
                        <p className="stat-label">{t("ourClients.stat3")}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>

            {/* CTA */}
            <Row className="mt-5">
              <Col lg={12} className="text-center">
                <div className="clients-cta">
                  <h4 className="mb-3">{t("ourClients.ctaTitle")}</h4>
                  <p className="text-muted mb-4">
                    {t("ourClients.ctaDescription")}
                  </p>
                  <a href="https://wa.me/258855898000" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                    {t("ourClients.ctaButton")}
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default withTranslation()(OurClients);

import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="features">
          <Container>
            <Row className="align-items-center">
              <Col lg="5" className="order-2 order-lg-1">
                <div className="features-box mt-5 mt-lg-0">
                  <h3>
                    A  Nossa plataforma de Gestão Escolar
                  </h3>
                  <p className="text-muted web-desc">
                    Acompanha todo o ciclo do estudante, desde o registo inicial até ao controle detalhado de propinas e integração com serviços de pagamento móveis como o Mpesa.
                  </p>
                  <ul className="text-muted list-unstyled mt-4 features-item-list">
                    <li className="">Monitorização contínua do progresso académico.</li>
                    <li className="">Envio de mensagens de pré-aviso de pagamento.</li>
                    <li className="">Gestão simplificada e eficiente para instituições de ensino.</li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-primary mt-4 waves-effect waves-light"
                  >
                    Solicitar Demonstração <i className="mdi mdi-arrow-right"></i>
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

export default Features;


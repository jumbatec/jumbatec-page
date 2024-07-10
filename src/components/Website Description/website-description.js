import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class WebsiteDescription extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-web-desc">
          <div className="bg-overlay"></div>
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="text-white">Crie o seu Website dos sonhos hoje</h2>
                <p className="pt-3 home-desc mx-auto">
                  Desenvolvemos websites responsivos e profissionais para o seu negócio, além de configurar emails empresariais para comunicação eficiente.
                </p>
                <Link
                  to="#"
                  className="btn btn-light mt-5 waves-effect waves-light"
                >
                  Ver Planos e Preços
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default WebsiteDescription;

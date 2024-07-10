import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class GetStarted extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section section-lg bg-get-start">
                    <div className="bg-overlay"></div>
                    <Container>
                        <Row>
                            <Col lg={{ size: 8, offset: 2 }} className="text-center">
                                <h1 className="get-started-title text-white">Comece Agora</h1>
                                <div className="section-title-border mt-4 bg-white"></div>
                                <p className="section-subtitle font-secondary text-white text-center pt-4">
                                    Descubra a nossa plataforma FINTECH inovadora, baseada em tecnologias open source, que oferece soluções financeiras de ponta.
                                </p>
                                <Link to="#" className="btn btn-light waves-effect mt-4">
                                    Comece Agora <i className="mdi mdi-arrow-right"></i>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default GetStarted;

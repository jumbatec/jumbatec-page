import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class GetStarted extends Component {
    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <section className="section section-lg bg-get-start">
                <div className="bg-overlay"></div>
                <Container>
                    <Row>
                        <Col lg={{ size: 8, offset: 2 }} className="text-center">
                            <h1 className="get-started-title text-white">{t('get_started_title')}</h1>
                            <div className="section-title-border mt-4 bg-white"></div>
                            <p className="section-subtitle font-secondary text-white text-center pt-4">
                                {t('get_started_description')}
                            </p>
                            <a href="#contact" className="btn btn-light waves-effect mt-4">
                                {t('get_started_button')} <i className="mdi mdi-arrow-right"></i>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
            </React.Fragment>
        );
    }
}

export default withTranslation()(GetStarted);

import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Container, Row, Col } from "reactstrap";
import "../common/modern-sections.css";

class GetStarted extends Component {
    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <section className="section section-lg get-started-modern">
                <Container>
                    <Row>
                        <Col lg={{ size: 8, offset: 2 }} className="text-center">
                            <h1 className="get-started-title">{t('get_started_title')}</h1>
                            <div className="section-title-border mt-4 mx-auto" style={{ background: "#ffffff", width: "80px", height: "4px", borderRadius: "2px" }}></div>
                            <p className="section-subtitle font-secondary text-center pt-4">
                                {t('get_started_description')}
                            </p>
                            <a href="https://wa.me/258855898000" target="_blank" rel="noopener noreferrer" className="btn btn-light waves-effect mt-4">
                                {t('get_started_button')} <i className="mdi mdi-arrow-right ms-2"></i>
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

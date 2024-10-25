import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

// Importing Modal
import ModalSection from "../../components/common/ModalSection";
import { withTranslation } from "react-i18next";

class Section2 extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.callModal.bind(this);
  }

  callModal = () => {
    this.refs.child.openModal();
  };

  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <section
          className="section bg-home home-half"
          id="home"
          data-image-src="images/bg-home.jpg"
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row>
              <Col
                lg={{ size: 8, offset: 2 }}
                className="text-white text-center"
              >
                <h4 className="home-small-title">{t("innovativeSolutions")}</h4>
                <h1 className="home-title">{t("transformIdeas")}</h1>
                <p className="pt-3 home-desc mx-auto">
                  {t("jumbatecSolutions")}
                </p>
                <p className="play-shadow mt-4">
                  <Link
                    onClick={this.callModal}
                    to="/#"
                    className="play-btn video-play-icon"
                  >
                    <i className="mdi mdi-play text-center"></i>
                  </Link>
                </p>
              </Col>
              {/* Render ModalSection Component for Modal */}
              <ModalSection
                ref="child"
                channel="youtube"
                videoId="iyLGHiHTgdU"
              />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default withTranslation()(Section2);

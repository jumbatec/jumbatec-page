import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

// Import Team Box
import TeamBox from "./team-box";
import { withTranslation } from "react-i18next";

class AboutUs extends Component {
  state = {
   
  };
  render() {

    const { t } = this.props;

    const members = [
      {
        id: 1,
        name: t("teamMembers.judiaoMbaua"), // Use translation key for name
        image: "assets/images/team/judiao.jpg",
        post: t("teamMembers.executiveDirector"), // Use translation key for post
      },
      {
        id: 2,
        name: t("teamMembers.enethVanessa"), // Use translation key for name
        image: "assets/images/team/eneth.jpg",
        post: t("teamMembers.marketingAndSalesDirector"), // Use translation key for post
      },
      {
        id: 4,
        name: t("teamMembers.hassiminaMbaua"), // Use translation key for name
        image: "assets/images/team/hassimina.jpg",
        post: t("teamMembers.financialDirector"), // Use translation key for post
      },
      {
        id: 3,
        name: t("teamMembers.braimo"), // Use translation key for name
        image: "assets/images/team/braimo.jpg",
        post: t("teamMembers.softwareDeveloper"), // Use translation key for post
      },
    ];
    return (
      <React.Fragment>
        <section className="section" id="about">
        <Container>
          <Row>
            <Col lg={{ size: 8, offset: 2 }}>
              <div className="about-title mx-auto text-center">
                <h2 className="font-weight-light">
                  {t("aboutUsTitle")}
                </h2>
                <p className="text-muted pt-4">
                  {t("aboutUsDescription")}
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            {/* Render Team members */}
            {members.map((member) => (
              <TeamBox
                key={member.id}
                name={member.name}
                image={member.image}
                post={member.post}
              />
            ))}
          </Row>
        </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default withTranslation()(AboutUs);

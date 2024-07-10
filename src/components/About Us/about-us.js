import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

// Import Team Box
import TeamBox from "./team-box";

class AboutUs extends Component {
  state = {
    members: [
      {
        id: 1,
        name: "Judiao Mbaua",
        image: "assets/images/team/judiao.jpg",
        post: "Diretor Executivo",
      },
      {
        id: 2,
        name: "Eneth Vanessa",
        image: "assets/images/team/eneth.jpg",
        post: "Diretora de Marketing e Vendas",
      },
      {
        id: 3,
        name: "Edmilson",
        image: "assets/images/team/edmilson.jpg",
        post: "Desenvolvedor de Software",
      },
      {
        id: 4,
        name: "Hassimina Mbaua",
        image: "assets/images/team/hassimina.jpg",
        post: "Diretora Financeira",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section" id="about">
          <Container>
            <Row>
              <Col lg={{ size: 8, offset: 2 }}>
                <div className="about-title mx-auto text-center">
                  <h2 className="font-weight-light">
                    Conheça a Equipe JUMBATEC
                  </h2>
                  <p className="text-muted pt-4">
                    A JUMBATEC orgulha-se de contar com uma equipe qualificada e dedicada, liderada por profissionais experientes como Judiao Mbaua, Eneth Vanessa, Edmilson e Hassimina Mbaua.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
              {/* Render Team members */}
              {this.state.members.map((member, key) => (
                <TeamBox
                  key={key}
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

export default AboutUs;

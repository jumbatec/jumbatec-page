import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input } from "reactstrap";

// Importar links do rodapé
import FooterLinks from "./footer-links";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerItems: [
        {
          title: "HIRIC",
          icon: "mdi mdi-alien",
          links: [
            { linkTitle: "Página Inicial", link: "#" },
            { linkTitle: "Sobre nós", link: "#" },
            { linkTitle: "Carreiras", link: "#" },
            { linkTitle: "Contacte-nos", link: "#" },
          ],
        },
        {
          title: "Informação",
          links: [
            { linkTitle: "Termos e Condições", link: "#" },
            { linkTitle: "Sobre nós", link: "#" },
            { linkTitle: "Vagas", link: "#" },
            { linkTitle: "Marcadores", link: "#" },
          ],
        },
        {
          title: "Suporte",
          links: [
            { linkTitle: "FAQ", link: "#" },
            { linkTitle: "Contacto", link: "#" },
            { linkTitle: "Discussão", link: "#" },
          ],
        },
      ],
      isSwitchToggle: false,
    };
    this.toggleSwitcher = this.toggleSwitcher.bind(this);
    this.setTheme = this.setTheme.bind(this);
  }

  setTheme = (color) => {
    document.getElementById("colorTheme").href =
      "assets/colors/" + color + ".css";
  };

  toggleThem = () => {
    if (document.body.getAttribute("data-bs-theme") === "light") {
      document.body.setAttribute("data-bs-theme", "dark");
    } else {
      document.body.setAttribute("data-bs-theme", "light");
    }
  };

  toggleSwitcher = () => {
    this.setState({ isSwitchToggle: !this.state.isSwitchToggle });
  };

  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <Container>
            <Row>
              {this.state.footerItems.map((item, key) => (
                <Col lg="3" className="mt-4" key={key}>
                  {item.icon ? (
                    <Link className="footer-logo text-uppercase" to="#">
                      <i className={item.icon}></i>
                      <span>{item.title}</span>
                    </Link>
                  ) : (
                    <h4>{item.title}</h4>
                  )}
                  <div className="text-muted mt-4">
                    <ul className="list-unstyled footer-list">
                      {item.links.map((link, key) => (
                        <li key={key}>
                          <Link to={link.link}>{link.linkTitle}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}

              <Col lg="3" className="mt-4">
                <h4>Subscreva</h4>
                <div className="text-muted mt-4">
                  <p>
                    Num mundo ideal, este texto não existiria, um cliente
                    reconheceria a importância de ter texto na web antes do
                    design começar.
                  </p>
                </div>
                <Form className="form subscribe">
                  <Input
                    placeholder="Email"
                    className="form-control"
                    required
                  />
                  <Link to="#" className="submit">
                    <i className="pe-7s-paper-plane"></i>
                  </Link>
                </Form>
              </Col>
            </Row>
          </Container>
        </footer>

        <FooterLinks />

      
      </React.Fragment>
    );
  }
}

export default Footer;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input } from "reactstrap";
import { withTranslation } from "react-i18next"; // Import withTranslation for i18next

// Importar links do rodapé
import FooterLinks from "./footer-links";
import "./footer-modern.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerItems: [
        {
          title: "footer.jumbatec", // Use translation keys
          links: [
            { linkTitle: "footer.home", link: "#" },
            { linkTitle: "footer.aboutUs", link: "#" },
            { linkTitle: "footer.careers", link: "#" },
            { linkTitle: "footer.contactUs", link: "#" },
          ],
        },
        {
          title: "footer.information",
          links: [
            { linkTitle: "footer.termsAndConditions", link: "#" },
            { linkTitle: "footer.aboutUs", link: "#" },
            { linkTitle: "footer.vacancies", link: "#" },
            { linkTitle: "footer.tags", link: "#" },
          ],
        },
        {
          title: "footer.support",
          links: [
            { linkTitle: "footer.faq", link: "#" },
            { linkTitle: "footer.contact", link: "#" },
            { linkTitle: "footer.discussion", link: "#" },
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
    const { t } = this.props; // Destructure translation function

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
                      <span>{t(item.title)}</span> {/* Translate title */}
                    </Link>
                  ) : (
                    <h4>{t(item.title)}</h4> 
                  )}
                  <div className="text-muted mt-4">
                    <ul className="list-unstyled footer-list">
                      {item.links.map((link, key) => (
                        <li key={key}>
                          <Link to={link.link}>{t(link.linkTitle)}</Link> {/* Translate link title */}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}

              <Col lg="3" className="mt-4">
                <h4>{t("footer.subscribe")}</h4> {/* Translate subscribe */}
                <div className="text-muted mt-4">
                  <p>{t("footer.idealWorldText")}</p> {/* Translate ideal world text */}
                </div>
                <Form className="form subscribe">
                  <Input
                    placeholder={t("footer.emailPlaceholder")} // Translate placeholder
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

export default withTranslation()(Footer); // Wrap component with withTranslation

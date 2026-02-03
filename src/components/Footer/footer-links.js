import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class FooterLinks extends Component {
  state = {
    socials: [
      { icon: "mdi mdi-facebook", link: "https://www.facebook.com/profile.php?id=61563079029492", className: "facebook" },
      { icon: "mdi mdi-linkedin", link: "https://www.linkedin.com/company/jumbateclda/", className: "linkedin" },
      { icon: "mdi mdi-instagram", link: "https://www.instagram.com/jumbatec", className: "instagram" },
      { icon: "mdi mdi-whatsapp", link: "https://wa.me/258855898000", className: "whatsapp" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="footer-alt">
          <Container>
            <Row>
              <Col lg="12">
                <div className="float-sm-start pull-none">
                  <p className="copy-rights  mb-3 mb-sm-0">
                    2024 © JUMBATEC LDA
                  </p>
                </div>
                <div className="float-sm-end pull-none copyright ">
                  <ul className="list-inline d-flex flex-wrap social m-0">
                    {this.state.socials.map((social, key) => (
                      <li className="list-inline-item" key={key}>
                        <a href={social.link} target="_blank" rel="noopener noreferrer" className={`social-icon ${social.className}`}>
                          <i className={social.icon}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="clearfix"></div> */}
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default FooterLinks;

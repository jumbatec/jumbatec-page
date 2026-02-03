import React, { Component, useContext, useEffect, useState } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ScrollspyNav from "./scrollSpy";
import { FaLanguage } from "react-icons/fa"; // Using react-icons for the language icon

//Import Stickey Header
import StickyHeader from "react-sticky-header";
import "./navbar-modern.css";
import "../../../node_modules/react-sticky-header/styles.css";
import { useTranslation, withTranslation } from "react-i18next";
import { LanguageContext } from "../../LanguageContext";
import i18next from "i18next";

const LanguageDropdown = () => {
  const { lang, changeLanguage } = useContext(LanguageContext); // Get lang and changeLanguage from context
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleChangeLanguage = (newLang) => {
    changeLanguage(newLang); // Call changeLanguage from context
  };
  

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="me-3">
      <DropdownToggle
        caret
        color="primary"
        className="navbar-btn btn-rounded waves-effect waves-light"
      >
        <FaLanguage className="me-2" /> {lang}
      </DropdownToggle>
      <DropdownMenu
        style={{
          borderRadius: "10px",
          marginTop: "2px",
        }}
      >
        <DropdownItem onClick={() => handleChangeLanguage('English')}>English</DropdownItem>
        <DropdownItem onClick={() => handleChangeLanguage('Português')}>Português</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

class Navbar_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2, idnm: "platforms", navheading: "Plataformas" },
        { id: 3, idnm: "services", navheading: "Serviços" },
        { id: 4, idnm: "about", navheading: "Sobre Nós" },
        { id: 5, idnm: "pricing", navheading: "Preços" },
        { id: 6, idnm: "blog", navheading: "Blog" },
        { id: 7, idnm: "contact", navheading: "Contacte-nos" },
      ],
      isOpenMenu: false,
    };
  }

  toggle = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };



  render() {
    const { t } = this.props; 
    const navItems = [
      { id: 1, idnm: "home", navheading: t("home") },
      { id: 2, idnm: "platforms", navheading: t("features") },
      { id: 3, idnm: "services", navheading: t("services") },
      { id: 4, idnm: "about", navheading: t("about") },
      // { id: 5, idnm: "pricing", navheading: t("pricing") },
      { id: 6, idnm: "blog", navheading: t("blog") },
      { id: 7, idnm: "contact", navheading: t("contact") },
    ];



    return (
      <LanguageContext.Consumer>
        {({ lang }) => (
          <React.Fragment>
            <StickyHeader
              header={
                <div
                  className={
                    this.props.navClass +
                    " navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark"
                  }
                  id="navbar"
                >
                  <Container>
                    <img
                      src="assets/images/logo-horizontal-light.svg"
                      alt="JUMBATEC Logo"
                      style={{ height: "auto", maxHeight: "50px" }}
                    />

                    <NavbarToggler
                      className=""
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarCollapse"
                      aria-controls="navbarCollapse"
                      aria-expanded="false"
                      onClick={this.toggle}
                    >
                      <i className="mdi mdi-menu"></i>
                    </NavbarToggler>

                    <Collapse
                      id="navbarCollapse"
                      isOpen={this.state.isOpenMenu}
                      navbar
                    >
                      <ScrollspyNav
                        scrollTargetIds={navItems.map((item) => item.idnm)}
                        activeNavClass="active"
                        scrollDuration="800"
                        headerBackground="true"
                      >
                        <Nav className="navbar-nav navbar-center" id="mySidenav">
                          {navItems.map((item) => (
                            <NavItem key={item.id}>
                              <NavLink href={`#${item.idnm}`}>
                                {item.navheading}
                              </NavLink>
                            </NavItem>
                          ))}
                        </Nav>
                      </ScrollspyNav>
                      <div className="nav-button ms-auto d-flex align-items-center">
                        <LanguageDropdown /> 
                      </div>
                    </Collapse>
                  </Container>
                </div>
              }
              stickyOffset={-100}
            />
          </React.Fragment>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default withTranslation()(Navbar_Page);

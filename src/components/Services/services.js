import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";

class Services extends Component {
  state = {
    services: [
      {
        title: "Desenvolvimento de Software à Medida",
        icon: "pe-7s-tools",
        description:
          "Desenvolvemos software personalizado para atender às necessidades específicas de cada cliente, utilizando as mais recentes tecnologias.",
      },
      {
        title: "Soluções de FINTECH",
        icon: "pe-7s-piggy",
        description:
          "Oferecemos soluções financeiras tecnológicas que ajudam empresas a inovar e melhorar seus serviços, incluindo gestão para microcréditos e integração com serviços móveis.",
      },
      {
        title: "Criação de Websites e Emails Empresariais",
        icon: "pe-7s-display2",
        description:
          "Criamos websites responsivos e profissionais, além de configurar emails empresariais para comunicação eficiente.",
      },
      {
        title: "Marketing Digital",
        icon: "pe-7s-science",
        description:
          "Desenvolvemos estratégias de marketing digital integradas com inteligência artificial para aumentar a visibilidade online e atrair mais clientes.",
      },
      {
        title: "Consultoria em TI",
        icon: "pe-7s-albums",
        description:
          "Oferecemos consultoria especializada em tecnologia da informação para melhorar processos e implementar novas soluções tecnológicas.",
      },
      {
        title: "Desenvolvimento de Soluções em Inteligência Artificial",
        icon: "pe-7s-smile",
        description:
          "Desenvolvemos soluções baseadas em inteligência artificial que automatizam processos e melhoram a eficiência operacional.",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="services">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="Nossos Serviços"
              description="Na JUMBATEC, oferecemos soluções tecnológicas inovadoras e personalizadas para impulsionar o seu negócio."
            />

            <Row className="mt-5">
              {/* render service box */}
              {this.state.services.map((service, key) => (
                <ServiceBox
                  key={key}
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Services;

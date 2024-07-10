import React, { Component } from "react";
import { Container, Row } from "reactstrap";

// Importar Título da Seção
import SectionTitle from "../common/section-title";

// Importar Caixa de Preços
import PricingBox from "./pricing-box";

class Pricing extends Component {
  state = {
    precarios: [
      {
        id: 1,
        title: "Plano Básico",
        price: "15,000 MZN",
        duration: "POR PROJETO",
        features: {
          descricao: "Criação de Website e Email Empresarial",
          paginas: "Até 5 Páginas",
          design: "Design Responsivo",
          dominio: "1 Domínio Gratuito",
          suporte: "Suporte Básico",
        },
      },
      {
        id: 2,
        title: "Plano Intermediário",
        price: "20,000 MZN",
        duration: "POR PROJETO",
        isRibbon: true,
        features: {
          descricao: "Tudo no Plano Básico, mais:",
          paginas: "Até 10 Páginas",
          design: "Design Personalizado",
          seo: "Otimização de Motores de Pesquisa (SEO)",
          suporte: "Suporte Prioritário",
        },
      },
      {
        id: 3,
        title: "Plano Avançado",
        price: "30,000 MZN",
        duration: "POR PROJETO",
        features: {
          descricao: "Tudo no Plano Intermediário, mais:",
          paginas: "Páginas Ilimitadas",
          redesSociais: "Integração com Redes Sociais",
          ecommerce: "Funcionalidade de E-commerce",
          suporte: "Suporte Premium",
        },
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="pricing">
          <Container>
            {/* Renderizar título da seção */}
            <SectionTitle
              title="Nossos Preços"
              description="A tabela de preços é realmente crucial para o seu site de negócios. Faça suas ofertas se destacarem com opções incríveis."
            />

            <Row className="mt-5">
              {/* Renderizar Caixa de Preços */}
              {this.state.precarios.map((precario, key) => (
                <PricingBox key={key} pricing={precario} />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Pricing;

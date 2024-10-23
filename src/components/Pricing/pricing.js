import React, { Component } from "react";
import { Container, Row } from "reactstrap";

// Importar Título da Seção
import SectionTitle from "../common/section-title";

// Importar Caixa de Preços
import PricingBox from "./pricing-box";
import { withTranslation } from "react-i18next";

class Pricing extends Component {
  state = {};

  render() {
    const { t } = this.props;

    const precarios = [
      {
        id: 1,
        title: t("pricings.basicPlan"), // Use translation key for title
        price: "15,000 MZN",
        duration: t("pricings.perProject"), // Use translation key for duration
        features: {
          descricao: t("pricings.features.basic.description"), // Use translation key for feature
          paginas: t("pricings.features.basic.pages"), // Use translation key for feature
          design: t("pricings.features.basic.design"), // Use translation key for feature
          dominio: t("pricings.features.basic.domain"), // Use translation key for feature
          suporte: t("pricings.features.basic.support"), // Use translation key for feature
        },
      },
      {
        id: 2,
        title: t("pricings.intermediatePlan"), // Use translation key for title
        price: "20,000 MZN",
        duration: t("pricings.perProject"), // Use translation key for duration
        isRibbon: true,
        features: {
          descricao: t("pricings.features.intermediate.description"), // Use translation key for feature
          paginas: t("pricings.features.intermediate.pages"), // Use translation key for feature
          design: t("pricings.features.intermediate.design"), // Use translation key for feature
          seo: t("pricings.features.intermediate.seo"), // Use translation key for feature
          suporte: t("pricings.features.intermediate.support"), // Use translation key for feature
        },
      },
      {
        id: 3,
        title: t("pricings.advancedPlan"), // Use translation key for title
        price: "30,000 MZN",
        duration: t("pricings.perProject"), // Use translation key for duration
        features: {
          descricao: t("pricings.features.advanced.description"), // Use translation key for feature
          paginas: t("pricings.features.advanced.pages"), // Use translation key for feature
          redesSociais: t("pricings.features.advanced.socialMedia"), // Use translation key for feature
          ecommerce: t("pricings.features.advanced.ecommerce"), // Use translation key for feature
          suporte: t("pricings.features.advanced.support"), // Use translation key for feature
        },
      },
    ];
    return (
      <React.Fragment>
        <section className="section bg-light" id="pricing">
          <Container>
            {/* Renderizar título da seção */}
            <SectionTitle
              title={t("pricings.sectionTitle")} // Use translation key for title
              description={t("pricings.sectionDescription")} // Use translation key for description
            />

            <Row className="mt-5">
              {/* Renderizar Caixa de Preços */}
              {precarios.map((precario) => (
                <PricingBox key={precario.id} pricing={precario} />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default withTranslation()(Pricing);

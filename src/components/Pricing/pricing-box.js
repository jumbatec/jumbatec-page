import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

class PricingBox extends Component {
  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <Col lg="4">
          <div className="text-center pricing-box ">
            {this.props.pricing.isRibbon ? (
              <div className="ribbon-box">
                <span>Popular</span>
              </div>
            ) : null}
            <h4 className="text-uppercase">{this.props.pricing.title}</h4>
            <h1>{this.props.pricing.price}</h1>
            <h6 className="text-uppercase text-muted">
              {this.props.pricing.duration}
            </h6>
            <div className="plan-features mt-5">
              <p>
                Descrição:{" "}
                <b className="text-primary">
                  {this.props.pricing.features.descricao}
                </b>
              </p>
              <p>
                Páginas:{" "}
                <b className="text-primary">
                  {this.props.pricing.features.paginas}
                </b>
              </p>
              <p>
                Design:{" "}
                <b className="text-primary">
                  {this.props.pricing.features.design}
                </b>
              </p>
              {this.props.pricing.features.seo && (
                <p>
                  SEO:{" "}
                  <b className="text-primary">
                    {this.props.pricing.features.seo}
                  </b>
                </p>
              )}
              {this.props.pricing.features.redesSociais && (
                <p>
                  Redes Sociais:{" "}
                  <b className="text-primary">
                    {this.props.pricing.features.redesSociais}
                  </b>
                </p>
              )}
              {this.props.pricing.features.ecommerce && (
                <p>
                  E-commerce:{" "}
                  <b className="text-primary">
                    {this.props.pricing.features.ecommerce}
                  </b>
                </p>
              )}
              <p>
                Suporte:{" "}
                <b className="text-primary">
                  {this.props.pricing.features.suporte}
                </b>
              </p>
            </div>
            <Link
              to="#"
              className="btn btn-primary waves-effect waves-light mt-5"
            >
             {t("joinNow.title")}
            </Link>
          </div>
        </Col>
      </React.Fragment>
    );
  }
}

export default withTranslation()(PricingBox);

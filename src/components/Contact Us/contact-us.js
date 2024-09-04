import React from "react";
import { Container, Row, Col, Button, FormFeedback, Form, Input } from "reactstrap";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Section Title
import SectionTitle from "../common/section-title";

const ContactUs = () => {
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      name: '',
      email: '',
      subject: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Por favor, digite o seu nome"),
      email: Yup.string().email("Endereço de email inválido").required("Por favor, digite o seu email"),
      subject: Yup.string().required("Por favor, digite o assunto"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    }
  });

  return (
    <React.Fragment>
      <section className="section " id="contact">
        <Container>
          {/* Render section title */}
          <SectionTitle
            title="Entre em Contato"
            description="Prosperamos ao criar ideias inovadoras, mas também entendemos que um conceito inteligente deve ser apoiado por resultados mensuráveis."
          />

          <Row>
            <Col lg="4">
              <div className="mt-4 pt-4">
                <p className="mt-4">
                  <span className="h5">Endereço do Escritório:</span>
                  <br />{" "}
                  <span className="text-muted d-block mt-2">
                    Avenida Zedequias Mangalhela, Nr 520 9º Andar, Maputo
                  </span>
                </p>
                <p className="mt-4">
                  <span className="h5">Horário de Funcionamento:</span>
                  <br />{" "}
                  <span className="text-muted d-block mt-2">
                    Segunda a Sexta-feira, das 8h às 17h
                  </span>
                </p>
                <p className="mt-4">
                  <span className="h5">Contacto:</span>
                  <br />{" "}
                  <span className="text-muted d-block mt-2">
                  +258 87 237 3747 / 84 450 8227 / 87 391 1401
                  </span>
                </p>

                <p className="mt-4">
                  <span className="h5">email:</span>
                  <br />{" "}
                  <span className="text-muted d-block mt-2">
                  info@jumbatec.com
                  </span>
                </p>
              </div>
            </Col>
            <Col lg="8">
              <div className="custom-form mt-4 pt-4">
                <p id="error-msg"></p>
                <div id="message"></div>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return false;
                  }}
                >
                  <Row>
                    <Col lg="6 mt-2">
                      <Input
                        name="name"
                        className=""
                        placeholder="Seu nome*"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.name || ""}
                        invalid={
                          validation.touched.name && validation.errors.name
                            ? true
                            : false
                        }
                      />
                      {validation.touched.name && validation.errors.name ? (
                        <FormFeedback type="invalid">
                          {validation.errors.name}
                        </FormFeedback>
                      ) : null}
                    </Col>
                    <Col lg="6 mt-2">
                      <Input
                        name="email"
                        className=""
                        placeholder="Seu email*"
                        type="email"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.email || ""}
                        invalid={
                          validation.touched.email && validation.errors.email
                            ? true
                            : false
                        }
                      />
                      {validation.touched.email && validation.errors.email ? (
                        <FormFeedback type="invalid">
                          {validation.errors.email}
                        </FormFeedback>
                      ) : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12 mt-2">
                      <Input
                        name="subject"
                        className=""
                        placeholder="Assunto.."
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.subject || ""}
                        invalid={
                          validation.touched.subject &&
                          validation.errors.subject
                            ? true
                            : false
                        }
                      />
                      {validation.touched.subject &&
                      validation.errors.subject ? (
                        <FormFeedback type="invalid">
                          {validation.errors.subject}
                        </FormFeedback>
                      ) : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12 mt-2">
                      <div className="form-group">
                        <textarea
                          name="comments"
                          id="comments"
                          rows="4"
                          className="form-control"
                          placeholder="Sua mensagem..."
                        ></textarea>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12" className="text-end">
                      <Button className="submitBnt btn btn-primary">
                        Enviar Mensagem
                      </Button>
                      <div id="simple-msg"></div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ContactUs;

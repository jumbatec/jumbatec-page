import React from "react";
import { Container, Row, Col, Button, FormFeedback, Form, Input } from "reactstrap";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import * as Yup from "yup";
import { useFormik } from "formik";
import SectionTitle from "../common/section-title";

const ContactUs = () => {
  const { t } = useTranslation(); // Initialize translation

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      email: '',
      subject: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t("contacts.errors.nameRequired")),
      email: Yup.string().email(t("contacts.errors.emailInvalid")).required(t("contacts.errors.emailRequired")),
      subject: Yup.string().required(t("contacts.errors.subjectRequired")),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    }
  });

  return (
    <React.Fragment>
      <section className="section" id="contact">
        <Container>
          <SectionTitle
            title={t("contacts.title")}
            description={t("contacts.description")}
          />

          <Row>
            <Col lg="4">
              <div className="mt-4 pt-4">
                <p className="mt-4">
                  <span className="h5">{t("contacts.officeAddress")}</span>
                  <br />
                  <span className="text-muted d-block mt-2">
                    Avenida Zedequias Mangalhela, Nr 520 9º Andar, Maputo
                  </span>
                </p>
                <p className="mt-4">
                  <span className="h5">{t("contacts.workingHours")}</span>
                  <br />
                  <span className="text-muted d-block mt-2">
                    Segunda a Sexta-feira, das 8h às 17h
                  </span>
                </p>
                <p className="mt-4">
                  <span className="h5">{t("contacts.contact")}</span>
                  <br />
                  <span className="text-muted d-block mt-2">
                    +258 87 237 3747 / 84 450 8227 / 87 391 1401
                  </span>
                </p>
                <p className="mt-4">
                  <span className="h5">{t("contacts.email")}</span>
                  <br />
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
                        placeholder={t("contacts.namePlaceholder")}
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.name || ""}
                        invalid={validation.touched.name && validation.errors.name}
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
                        placeholder={t("contacts.emailPlaceholder")}
                        type="email"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.email || ""}
                        invalid={validation.touched.email && validation.errors.email}
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
                        placeholder={t("contacts.subjectPlaceholder")}
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.subject || ""}
                        invalid={validation.touched.subject && validation.errors.subject}
                      />
                      {validation.touched.subject && validation.errors.subject ? (
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
                          placeholder={t("contacts.messagePlaceholder")}
                        ></textarea>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12" className="text-end">
                      <Button className="submitBnt btn btn-primary">
                        {t("contacts.submit")}
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

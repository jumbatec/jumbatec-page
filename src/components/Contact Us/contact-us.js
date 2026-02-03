import React, { useContext } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  FormFeedback,
  Form,
  Input,
  InputGroup,
} from "reactstrap";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { baseUrl } from "../../constants/api";
import { LanguageContext } from "../../LanguageContext";
import "../Services/services-modern.css";

const ContactUs = () => {
  const { t } = useTranslation(); // Initialize translation
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);
  const { lang } = useContext(LanguageContext);
  const [loading, setLoading] = React.useState(false);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      contact: "",
      comments: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t("contacts.errors.nameRequired")),
      email: Yup.string()
        .email(t("contacts.errors.emailInvalid"))
        .required(t("contacts.errors.emailRequired")),
      contact: Yup.string().required(t("contacts.errors.contactRequired")),
    }),
    onSubmit: (values) => {
      setLoading(true);
      axios
        .post(baseUrl + "/lead", {
          description: values.comments,
          email: values.email,
          name: values.name,
          contact: values.contact,
          app:'Jumbatec Website',
        })
        .then((response) => {
          console.log(response);
          setError(null);
          setSuccess(t("contacts.success.message"));
          validation.resetForm();
        })
        .catch((error) => {
          console.log(error);
          setError(t("contacts.errors.message"));
          setSuccess(null);
        }).finally(()=>{
          setLoading(false);
        })
    },
  });

  return (
    <React.Fragment>
      <section className="section contact-section-modern" id="contact">
        <Container>
          <Row>
            <Col lg={{ size: 8, offset: 2 }}>
              <div className="text-center mb-5">
                <h2 className="font-weight-bold mb-3 text-white">
                  {t("contacts.title")}
                </h2>
                <p className="text-white" style={{ fontSize: "1.1rem" }}>
                  {t("contacts.description")}
                </p>
                <div className="title-border mx-auto mt-4" style={{ background: "#ffffff", width: "80px", height: "4px", borderRadius: "2px" }}></div>
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col lg="4">
              <div className="contact-info-card">
                <div className="contact-info-item">
                  <h5>{t("contacts.officeAddress")}</h5>
                  <span className="text-muted d-block">
                    Avenida Zedequias Mangalhela, Nr 520 9º Andar, Maputo
                  </span>
                </div>
                <div className="contact-info-item">
                  <h5>{t("contacts.workingHours")}</h5>
                  <span className="text-muted d-block">
                    Segunda a Sexta-feira, das 8h às 17h
                  </span>
                </div>
                <div className="contact-info-item">
                  <h5>{t("contacts.contact")}</h5>
                  <span className="text-muted d-block">
                    +258 85 5898 000 / 87 237 3747
                  </span>
                </div>
                <div className="contact-info-item">
                  <h5>{t("contacts.whatsapp")}</h5>
                  <a 
                    href="https://wa.me/258855898000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whatsapp-btn d-inline-flex align-items-center"
                  >
                    <i className="mdi mdi-whatsapp" style={{ fontSize: "20px" }}></i>
                    {t("contacts.whatsappButton")}
                  </a>
                </div>
                <div className="contact-info-item">
                  <h5>{t("contacts.email")}</h5>
                  <span className="text-muted d-block">
                    info@jumbatec.com
                  </span>
                </div>
              </div>
            </Col>
            <Col lg="8">
              <div className="contact-form-card">
                <p id="error-msg" className="text-danger">
                  {error}
                </p>
                <div id="message" className="text-success">
                  {success}
                </div>
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
                        invalid={
                          validation.touched.name && validation.errors.name
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
                        placeholder={t("contacts.emailPlaceholder")}
                        type="email"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.email || ""}
                        invalid={
                          validation.touched.email && validation.errors.email
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
                    <Col lg="12" className="mt-2">
                      <InputGroup>
                        <div
                          style={{
                            padding: "0.375rem 0.75rem",
                            border: "1px solid #ced4da",
                            backgroundColor: "#e9ecef",
                            height: 50,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {
                            lang === "English" ? "+27" : "+258"
                          }
                        </div>
                        <Input
                          name="contact"
                          placeholder={t("contacts.contactPlaceHolder")}
                          type="number"
                          maxLength={10}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.contact || ""}
                          invalid={
                            validation.touched.contact &&
                            validation.errors.contact
                          }
                        />
                      </InputGroup>
                      {validation.touched.contact &&
                      validation.errors.contact ? (
                        <FormFeedback type="invalid">
                          {validation.errors.contact}
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
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          placeholder={t("contacts.messagePlaceholder")}
                        ></textarea>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12" className="text-end">
                      {
                        loading ? (
                          <Button className="submitBnt btn btn-primary" disabled>
                        {t("contacts.submitting")}
                      </Button>
                        ):(
                          <Button className="submitBnt btn btn-primary">
                        {t("contacts.submit")}
                      </Button>
                        )
                      }
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

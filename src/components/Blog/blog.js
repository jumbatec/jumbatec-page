import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import { withTranslation } from "react-i18next";
import "../common/modern-sections.css";

class Blog extends Component {
  state = {
  };
  render() {

    const { t } = this.props;

    const blogs = [
      {
        id: 1,
        image: "assets/images/blog/img-1.jpg",
        topic: t('blog_software_development'),
        title: t('blog_software_development'),
        description: t('blog_software_development_desc'),
        link: "",
      },
      {
        id: 2,
        image: "assets/images/blog/img-2.jpg",
        topic: t('blog_digital_marketing'),
        title: t('blog_digital_marketing'),
        description: t('blog_digital_marketing_desc'),
        link: "",
      },
      {
        id: 3,
        image: "assets/images/blog/img-3.jpg",
        topic: t('blog_ai_impact'),
        title: t('blog_ai_impact'),
        description: t('blog_ai_impact_desc'),
        link: "",
      },
    ];
  
    return (
      <React.Fragment>
        <section className="section blog-section-modern" id="blog">
        <Container>
          {/* Render section title */}
          <SectionTitle
            title={t('blog_title')}
            description={t('blog_description')}
          />

          <Row className="mt-5">
            {/* Render blog boxes */}
            {blogs.map((blog, key) => (
              <Col lg={4} md={6} className="mb-4" key={key}>
                <div className="blog-card-modern">
                  <div className="blog-image-wrapper">
                    <img src={blog.image} alt={blog.title} />
                    <div className="blog-badge">{blog.topic}</div>
                  </div>
                  <div className="blog-content-wrapper">
                    <h4 className="blog-title-modern">{blog.title}</h4>
                    <p className="blog-description-modern">{blog.description}</p>
                    {blog.link && (
                      <a href={blog.link} className="blog-read-more">
                        Ler mais <i className="mdi mdi-arrow-right"></i>
                      </a>
                    )}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      </React.Fragment>
    );
  }
}

export default withTranslation()(Blog);
